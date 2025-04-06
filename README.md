
# PragatiAI: Personalized Learning for Rural Education 🌱

🔗 **Live Demo**: [Visit Website](https://dashing-ganache-0dbb1a.netlify.app/)

---

## 🧠 Key Features

### 1. Learning Pattern Detection  
AI-generated test to identify student learning styles (visual, auditory, etc.) and group them accordingly.  
![Learning Pattern Detection](https://via.placeholder.com/600x300?text=Learning+Pattern+Detection)

---

### 2. Offline Language Conversion  
Uses Bhasini and Whisper to convert recorded lectures into regional languages for better accessibility.  
![Offline Language Conversion](https://via.placeholder.com/600x300?text=Regional+Language+Conversion)

---

### 3. AI-Generated Personalized Videos  
Generates custom visual-based videos (diagrams, animations, etc.) based on the student's learning style.  
![AI Video Generation](https://via.placeholder.com/600x300?text=AI+Generated+Videos)

---

### 4. Teacher Companion Dashboard  
Mobile-first interface that works offline. Helps teachers monitor group progress and receive teaching recommendations.  
![Teacher Dashboard](https://via.placeholder.com/600x300?text=Teacher+Dashboard)

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- PWA

### Backend
- Node.js  
- Express.js  
- Firebase / Railway  
- MongoDB / Firestore

### AI/ML
- Whisper (small)  
- TTS (Text-to-Speech)  
- TensorFlow Lite  
- Scikit-learn  
- Manim / Pictory / Kaiber

### Other Tools
- Bhasini  
- Python  
- GitHub

---

## 🗃️ Datasets

- Learning Style Models: VARK, Felder-Silverman  
- Speech: Bhasini, Mozilla Common Voice  
- Education: NROER, Khan Academy, Custom Videos  
- User Data: Locally generated via interactions

---

## 🧩 Solution Architecture

1. On-device AI test detects learning type  
2. Students grouped accordingly  
3. AI-generated regional language videos assigned  
4. Teacher dashboard shows student progress  
5. Syncs to cloud when connectivity is available

---

## 📦 Installation & Run

```bash
# Clone the repo
git clone https://github.com/yourusername/pragati-ai.git

# Frontend
cd client
npm install
npm run dev

# Backend
cd ../server
npm install
npm start
