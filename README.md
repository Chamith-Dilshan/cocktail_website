<div align="center">

# 🍸 Velvet Pour - Premium Cocktail Website

### _React + TypeScript + Tailwind CSS v4 + GSAP Animations_

<p align="center">
  <strong>A stunning, interactive cocktail website that creates an emotional connection to the authentic bar experience, showcasing premium mixology with smooth animations and responsive design</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p align="center">
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">🛠️ Tech Stack</a> •
  <a href="#-key-libraries">📚 Libraries</a> •
  <a href="#-learning-objectives">🎯 Learning</a> •
  <a href="#-getting-started">🚀 Setup</a>
</p>

---

</div>

## ✨ Features

<div align="center">

> **Premium cocktail experience with cutting-edge web technologies**

</div>

- 🎭 **Immersive Hero Section** - Full-screen background with parallax effects
- 🎨 **Advanced GSAP Animations** - Smooth text reveals, scroll-triggered animations
- 📱 **Fully Responsive Design** - Optimized for all devices using Tailwind CSS v4
- 🍹 **Interactive Cocktail Menu** - Dynamic slider with recipe details
- 🎬 **Video Integration** - Scroll-controlled video playback and loading screens
- ♿ **Accessibility First** - ARIA labels, keyboard navigation, screen reader support
- ⚡ **Performance Optimized** - Lazy loading, efficient animations, modern React patterns

## 🛠️ Tech Stack

<div align="center">

| Frontend | Styling         | Animation | Build Tool | Language   |
| -------- | --------------- | --------- | ---------- | ---------- |
| React 19 | Tailwind CSS v4 | GSAP      | Vite       | TypeScript |

</div>

## 📚 Key Libraries

<div align="center">

> **Powerful libraries that bring this cocktail experience to life**

</div>

### 🎬 `@gsap/react`

**Official React integration for GSAP animations**

```jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".title", {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
  });
};
```

_Perfect for creating smooth, performant animations in React components with automatic cleanup._

### ⚡ `gsap` (GreenSock Animation Platform)

**Industry-standard JavaScript animation library**

```jsx
import { gsap, ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Scroll-triggered parallax effects
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })
  .to(".right-leaf", { y: 200 }, 0)
  .to(".left-leaf", { y: -200 }, 0);
```

_Enables complex animations like text splitting, scroll triggers, and timeline control._

### 📱 `react-responsive`

**Responsive breakpoint management for React**

```jsx
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const startValue = isMobile ? "top 50%" : "center 60%";
  // Conditional animation values based on screen size
};
```

_Provides clean, declarative media queries for responsive animations and layouts._

## 🎯 Learning Objectives

<div align="center">

> **This project is designed for educational purposes to demonstrate modern React development practices**

</div>

### 🧠 React Concepts Covered

- **⚛️ Modern Hooks** - useRef, useGSAP, custom hooks patterns
- **🎨 Component Architecture** - Modular design, reusable components
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS v4
- **🎬 Media Handling** - Video controls, loading states, intersection observers
- **⚡ Performance** - Animation optimization, lazy loading, efficient re-renders
- **♿ Accessibility** - WCAG compliance, semantic HTML, ARIA attributes
- **🎭 Advanced Animations** - GSAP integration, scroll-triggered effects, text animations
- **📐 Layout Techniques** - CSS Grid, Flexbox, absolute positioning

### 🔧 Development Skills

- **TypeScript Integration** - Proper typing for animations and media elements
- **Modern CSS** - Tailwind CSS v4 features, custom utilities, layer management
- **Animation Principles** - Timing, easing, stagger effects, performance considerations
- **Responsive Development** - Breakpoint management, mobile optimization
- **Asset Optimization** - Video loading, image handling, performance monitoring

## 🚀 Getting Started

### Prerequisites

```bash
Node.js 18+ and npm/yarn/pnpm
```

### Installation

```bash
# Clone the repository
git clone https://github.com/Chamith-Dilshan/cocktail_website.git

# Navigate to project directory
cd cocktail_website

# Install dependencies
npm install

# Start development server
npm run dev
```

### 🎯 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Main hero section with video
│   ├── NavBar.tsx        # Navigation with scroll effects
│   ├── Menu.tsx          # Interactive cocktail slider
│   ├── LoadingScreen.tsx # Video preloader
│   └── ...
├── constants/
│   └── index.ts          # Navigation links, cocktail data
├── assets/
│   ├── images/           # Static images
│   └── videos/           # Background videos
└── index.css             # Tailwind CSS v4 configuration
```

## 🎨 Animation Highlights

- **Text Reveal Animations** - Character-by-character text animations using SplitText
- **Scroll-Controlled Video** - Video playback synced with scroll progress
- **Parallax Effects** - Multi-layer scrolling with different speeds
- **Interactive Sliders** - Smooth transitions between cocktail selections
- **Loading Animations** - Engaging preloader with progress tracking

## 🌟 Educational Purpose

<div align="center">

**This repository is created for educational purposes to demonstrate:**

</div>

- Modern React development patterns and best practices
- Advanced animation techniques with GSAP in React applications
- Responsive design implementation using Tailwind CSS v4
- TypeScript integration in complex React projects
- Performance optimization strategies for animation-heavy websites
- Accessibility considerations in modern web development

## 🤝 Contributing & Learning

<div align="center">

**Perfect for developers looking to learn modern React + GSAP integration! 🎓**

<p>
<a href="https://github.com/Chamith-Dilshan/cocktail_website/issues">🐛 Report Issues</a> •
<a href="https://github.com/Chamith-Dilshan/cocktail_website/issues">💡 Suggest Improvements</a> •
<a href="https://github.com/Chamith-Dilshan/cocktail_website/fork">🍴 Fork & Learn</a>
</p>

### ⭐ Star this repository if it helps your learning journey!

**Built with ❤️ for the React community and aspiring developers**

</div>
