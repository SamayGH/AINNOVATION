# AI Adaptive Learning for Rural Youth

An offline-first, AI-powered learning platform that personalizes academic, vocational, and digital literacy content for rural youth (12–25) in local languages. Built with a teacher co‑pilot, mentorship network, and local job matching.

## 🚀 Why this matters
Rural learners face connectivity gaps, multi-grade classrooms, and limited localized content. Our solution adapts to each learner, works offline, and connects skills to jobs.

## ✨ Key Features
- AI-driven personalization (adaptive difficulty, pacing, content focus)
- Multilingual, culturally relevant content (TTS/STT via Azure Cognitive Services)
- Offline-first with SQLite caching and conflict-aware sync
- Teacher co‑pilot: diagnostics, grouping, printable worksheets, mastery dashboards
- Mentorship network and local job board
- Privacy by design: data minimization, granular consent, encryption

## 🏗️ Architecture (Azure)
- **Frontend:** React Native (Android/iOS)
- **APIs:** Node.js + Express on **Azure App Service**
- **Content Storage:** **Azure Blob Storage**
- **Database:** MongoDB (Atlas or VM) + SQLite for offline
- **AI/ML:** Python (TensorFlow/PyTorch) + **Azure Cognitive Services** (Translate, Speech)
- **Monitoring:** **Azure Monitor** / Application Insights
- **Analytics:** Export to Power BI / BigQuery alternative

See `/architecture/diagram.svg` for the high-level flow.

## 🧠 Adaptive Engine (simplified)
Signals → correctness, response time, hint usage, retry patterns  
Model → Bayesian/mastery model over a skill graph  
Policy → choose next best item to maximize expected learning gain; spaced review

## 📈 KPIs
- +0.3 SD learning gain in 8 weeks
- 30% faster time‑to‑mastery
- 60% WAU, 40% D7 retention
- 80% sessions completed offline

## 🗺️ Roadmap
- **Hackathon**: Diagnostic + adaptive math topic, Hindi UI, offline cache, teacher dashboard MVP
- **0–3 months**: Add English & digital literacy, mentor directory, basic job listings
- **3–6 months**: TTS/ASR, micro‑credentials, employer verification, more languages

## 🔐 Security & Privacy
Encryption in transit/at rest, PII minimization, role-based access, parental consent for minors, audit logs via Azure Monitor.

## 📝 License
MIT — see `LICENSE`.

---

## 🔧 Quickstart

### Mobile App (React Native / Expo)
```bash
cd app
npm install   # or: pnpm i / yarn
npm run start
```

### API (Express + Azure Translator)
```bash
cd server
cp .env.example .env   # fill AZURE_TRANSLATOR_KEY & AZURE_TRANSLATOR_REGION
npm install
npm run dev
```

Test translation:
```bash
curl -X POST http://localhost:4000/translate \
  -H "Content-Type: application/json" \
  -d '{ "text": "Hello world", "to": "hi" }'
```
