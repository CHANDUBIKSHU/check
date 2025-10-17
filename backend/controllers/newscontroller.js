
const NewsAchievements = require("../models/NewsAchievementsSchema");
const cloudinary = require("../config/cloundnary");

const dotenv=require('dotenv')
dotenv.config()
// PUT - Update or Create Flashnews
exports.updateFlashNews = async (req, res) => {
  try {
    const { flashnews } = req.body;

    if (!flashnews || flashnews.trim() === "") {
      return res.status(400).json({ message: "flashnews is required" });
    }

    // Find the first flashnews document
    let existing = await NewsAchievements.findOne();

    if (existing) {
      // Update existing
      existing.flashnews = flashnews;
      await existing.save();

      return res.status(200).json({
        message: "Flashnews updated successfully",
        data: existing,
      });
    } else {
      // Create new document
      const newsAchievement = new NewsAchievements({ flashnews });
      await newsAchievement.save();

      return res.status(201).json({
        message: "Flashnews created successfully",
        data: newsAchievement,
      });
    }
  } catch (error) {
    console.error("Error in updateFlashNews:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET - Fetch flashnews
exports.getFlashNews = async (req, res) => {
  try {
    const existing = await NewsAchievements.findOne();

    if (existing) {
      return res.status(200).json({ flashnews: existing.flashnews });
    } else {
      return res.status(404).json({ message: "No flashnews found" });
    }
  } catch (error) {
    console.error("Error in getFlashNews:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.addAchievement = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    let image = "";

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    // Upload image if provided
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      image = result.secure_url;
    }

    const existing = await NewsAchievements.findOne();
    if (!existing) {
      return res.status(404).json({ message: "Flashnews document not found" });
    }

    existing.achievements.push({
      title,
      description,
      image,
      date: date || Date.now()
    });

    await existing.save();
    res.status(201).json({ message: "Achievement added", achievements: existing.achievements });

  } catch (error) {
    console.error("Add achievement error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.updateAchievement = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date } = req.body;
    let image;

    const existing = await NewsAchievements.findOne();
    if (!existing) return res.status(404).json({ message: "Flashnews document not found" });

    const achievement = existing.achievements.id(id);
    if (!achievement) return res.status(404).json({ message: "Achievement not found" });

    if (title) achievement.title = title;
    if (description) achievement.description = description;
    if (date) achievement.date = date;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      achievement.image = result.secure_url;
    }

    await existing.save();
    res.status(200).json({ message: "Achievement updated", achievement });
  } catch (error) {
    console.error("Update achievement error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteAchievement = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await NewsAchievements.findOne();
    if (!existing) return res.status(404).json({ message: "Document not found" });

    const originalLength = existing.achievements.length;
    existing.achievements = existing.achievements.filter(a => a._id.toString() !== id);

    if (existing.achievements.length === originalLength) {
      return res.status(404).json({ message: "Achievement not found" });
    }

    await existing.save();
    res.status(200).json({ message: "Achievement deleted", achievements: existing.achievements });
  } catch (error) {
    console.error("Delete achievement error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAchievements = async (req, res) => {
  try {
    const existing = await NewsAchievements.findOne();
    if (!existing) return res.status(404).json({ message: "Flashnews document not found" });

    res.status(200).json({ achievements: existing.achievements });
  } catch (error) {
    console.error("Get achievements error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getFlashNew = async (req, res) => {
  try {
    const doc = await NewsAchievements.findOne();
    if (!doc || !doc.flashnews) return res.status(404).json({ message: "No flashnews found" });

    res.status(200).json({ flashnews: doc.flashnews });
  } catch (error) {
    console.error("Error fetching flashnews:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllAchievements = async (req, res) => {
  try {
    const doc = await NewsAchievements.findOne();

    if (!doc || !doc.achievements || doc.achievements.length === 0) {
      return res.status(200).json({ achievements: [] });
    }

    res.status(200).json({ achievements: doc.achievements });
  } catch (error) {
    console.error("Error fetching achievements:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
