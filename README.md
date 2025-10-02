YouTube Summariser & Study Assistant

AI-powered Chrome extension + website that helps students learn better from YouTube videos.
Summarise lectures, auto-generate quizzes, create flashcards, and save/export notes.


🛠️ Tech Stack

Extension (Frontend)

React + Vite (popup UI)
Chrome Extension Manifest V3
Content scripts for YouTube integration

Backend / AI

Node.js + Express
Hugging Face Inference API (DistilBART, T5 QG)
(Stretch) Whisper ASR

Database (Phase 4+)

MongoDB / Firebase (user notes, auth)

Website

React / Next.js + Tailwind CSS
Responsive dashboard
🚀 Setup & Run
1. Clone repo
git clone https://github.com/yourname/youtube-summariser.git
cd youtube-summariser

2. Install dependencies
npm install

3. Run popup in dev mode
npm run dev

4. Build extension
npm run build

5. Load into Chrome
Go to chrome://extensions/
Enable Developer Mode
Click Load unpacked
Select dist/ folder