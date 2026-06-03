# Web Portfolio 2025

A modern, responsive, and highly interactive personal portfolio website designed to showcase projects, skills, and professional experience. Built with performance, accessibility, and sleek animations in mind.

## 🚀 Live Demo

**[View the Live Site](https://web-portfolio-f6789.web.app)** (Deployed on Firebase Hosting)

## 🛠️ Tech Stack

This project is built using a modern frontend ecosystem:

- **Framework:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [Radix UI](https://www.radix-ui.com/) & shadcn/ui
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Contact Form:** [EmailJS](https://www.emailjs.com/)
- **Hosting/Deployment:** [Firebase Hosting](https://firebase.google.com/)

## ✨ Key Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **Dynamic Animations:** Smooth page transitions and scroll animations powered by Framer Motion.
- **Modern UI/UX:** Clean aesthetics leveraging Tailwind CSS and accessible Radix UI components.
- **Working Contact Form:** Integrated with EmailJS to receive direct messages from visitors.
- **Fast Performance:** Lightning-fast builds and optimized assets thanks to Vite.

## 💻 Getting Started (Local Development)

Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and npm installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/themzaid/web_portfolio.git
   cd web_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   - Copy the example environment file:
     ```bash
     cp .env.example .env.local
     ```
   - Open `.env.local` and add your own EmailJS keys to enable the contact form.

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📦 Build and Deployment

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing optimized static assets.

To deploy the app to Firebase (assuming you have the Firebase CLI installed and are authenticated):

```bash
firebase deploy
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).