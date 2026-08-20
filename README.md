# 💼 Muskan Kumari — Portfolio Website

A modern, responsive personal portfolio website built using the **MERN stack**. The website showcases my education, technical skills, internship experience, projects, certifications, and provides a working contact form backed by a REST API and MongoDB.

🔗 **Live Demo:** Add your deployed website URL
📄 **Resume:** Add your resume URL

---

## 📸 Preview

Add a screenshot or GIF of the portfolio here after deployment.

![Portfolio Preview](./client/public/preview.png)

---

## ✨ Features

- 📱 Fully responsive, mobile-first design
- 🌙 Dark/Light mode toggle
- 🧭 Smooth scroll navigation
- ✨ Entry and scroll animations
- 👩‍💻 About Me section
- 🛠️ Technical Skills section
- 💼 Internship & Experience section
- 🚀 Projects showcase
- 📜 Certifications section
- 📬 Working contact form
- 🗄️ Contact messages stored in MongoDB
- 🔗 REST API using Express.js
- 📄 Downloadable resume
- 🔍 SEO-friendly metadata
- 🧩 Component-based React architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Development Tools
- Git
- GitHub
- Postman
- VS Code

### Deployment
- **Frontend:** Vercel / Netlify
- **Backend:** Render / Railway
- **Database:** MongoDB Atlas

---

## 📁 Project Structure

```
muskan-protfolio/
│
├── client/                         # React frontend
│   ├── public/
│   │   ├── Muskan_Kumari_Resume.pdf
│   │   └── preview.png
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── SectionWrapper.jsx
│   │   │
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── data/
│   │   │   └── portfolio.js        # ← all personal data lives here
│   │   │
│   │   ├── hooks/
│   │   │   └── useScrollSpy.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── .env
│   └── package.json
│
├── server/                         # Express backend
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── contact.controller.js
│   │   ├── middleware/
│   │   │   └── validate.js
│   │   ├── models/
│   │   │   └── Contact.model.js
│   │   ├── routes/
│   │   │   └── contact.routes.js
│   │   └── index.js
│   │
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js v18 or higher
- MongoDB Atlas account or local MongoDB
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

---

### 🔧 Backend Setup

Navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your-gmail@gmail.com      # optional — for email notifications
EMAIL_PASS=your-app-password         # generate at myaccount.google.com/apppasswords
CLIENT_URL=http://localhost:5173
```

> **Note:** Port 5001 is used instead of 5000 because macOS reserves port 5000 for AirPlay Receiver.

Start the backend:

```bash
npm run dev
```

The backend will run on: **http://localhost:5001**

---

### 🎨 Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `client` directory:

```env
VITE_API_URL=http://localhost:5001/api
```

Add your resume PDF to:

```
client/public/Muskan_Kumari_Resume.pdf
```

Update your personal links in:

```
client/src/data/portfolio.js
```

Start the development server:

```bash
npm run dev
```

The frontend will run on: **http://localhost:5173**

---

## 🔌 API

The portfolio uses an Express REST API to handle contact form submissions.

### Send a Contact Message

**POST** `/api/contact`

Example request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello Muskan!"
}
```

The submitted message is validated and stored in MongoDB using Mongoose. If `EMAIL_USER` and `EMAIL_PASS` are set, a notification email is also sent via Nodemailer.

---

## 🔐 Environment Variables

> Never commit your `.env` files to GitHub.

### Backend `.env`

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
CLIENT_URL=http://localhost:5173
```

### Frontend `.env`

```env
VITE_API_URL=http://localhost:5001/api
```

The following are already in `.gitignore`:

```
.env
node_modules/
dist/
```

---

## ☁️ Deployment

### Frontend

The React frontend can be deployed using [Vercel](https://vercel.com) or [Netlify](https://netlify.com).

Set root directory to `client` and add the environment variable:

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

### Backend

The Express backend can be deployed using [Render](https://render.com) or [Railway](https://railway.app).

Set the required environment variables on the deployment platform:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
CLIENT_URL=https://your-frontend.vercel.app
```

### MongoDB Atlas

1. Create a MongoDB cluster.
2. Create a database user.
3. Copy the connection string and add it to `MONGODB_URI`.
4. Under **Network Access**, whitelist your backend's IP (or `0.0.0.0/0` for simplicity during development).

---

## 📈 Future Improvements

Some improvements planned for future versions:

- Admin dashboard for viewing contact messages
- Email notifications for new messages (Nodemailer already wired — just add credentials)
- Blog section
- Project filtering by technology
- Improved accessibility
- Advanced SEO optimisation
- Analytics integration
- CI/CD pipeline

---

## 🧑‍💻 About Me

**Muskan Kumari**
Computer Science Undergraduate at Galgotias University (B.Tech CSE, 2023–2027, CGPA 8.59)

I am interested in software engineering and full-stack web development, with a focus on building practical, production-grade applications using modern technologies.

### Connect With Me

📧 **Email:** [muskankumari7371039@gmail.com](mailto:muskankumari7371039@gmail.com)
🔗 **LinkedIn:** [linkedin.com/in/muskan-kumari773](https://www.linkedin.com/in/muskan-kumari773/)
🐙 **GitHub:** [github.com/muskan-773](https://github.com/muskan-773)
💻 **LeetCode:** [leetcode.com/u/Muskan_Kumari01](https://leetcode.com/u/Muskan_Kumari01/)

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

⭐ If you find this project useful, consider giving it a star on GitHub!
