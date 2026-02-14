import mongoose from "mongoose";

const hobbySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a hobby name"],
      trim: true,
      maxlength: [50, "Hobby can not be more than 50 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description can not be more than 500 characters"],
    },
    category: {
      type: String,
      enum: ["Sports", "arts", "music", "gaming", "reading", "other"],
      default: "other",
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "rarely"],
      default: "weekly",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const Hobby = mongoose.model("Hobby", hobbySchema);