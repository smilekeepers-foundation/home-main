import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { folder } = req.query;

  const directoryPath = path.join(process.cwd(), "public/images", folder);
  try {
    const files = fs.readdirSync(directoryPath);
    const images = files.map((file) => `/images/${folder}/${file}`);
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to load images" });
  }
}
