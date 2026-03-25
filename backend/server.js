import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const distPath = path.join(__dirname, "..", "frontend", "dist");
app.use(express.static(distPath));

app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  console.log("\n--- New Contact Form Submission ---");
  console.log(`Name:    ${name}`);
  console.log(`Email:   ${email}`);
  console.log(`Subject: ${subject || "(none)"}`);
  console.log(`Message: ${message}`);
  console.log("-----------------------------------\n");

  return res.status(200).json({ success: true, message: "Message received! I will get back to you soon." });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`\n  Portfolio server running at: http://localhost:${PORT}\n`);
});
