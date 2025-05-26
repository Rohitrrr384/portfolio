import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaGithub,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";
// Projects
import Movix from "./assets/Movix2.png";
import Medari from "./assets/Mdari.png";
import MockMate from "./assets/MockMate.png";
import Request from "./assets/Request.jpg";
import AlamalDashboard from "./assets/Alamal-dashboard.png";
import TChat from "./assets/t.chat.png";
import CodeZone from "./assets/Code Zone.png";
import Bondi from "./assets/Bondi.png";
import Pixel from "./assets/Pixel.png";
import TwitterClone from "./assets/TwitterClone.png";
import Crud from "./assets/Crud.png";
import Kasper from "./assets/Kasper.png";
import starbucks from "./assets/Starbuks.png";
import Todo from "./assets/Todo.png";
import YumDash from "./assets/Screenshot (44).png";
import Zakat from "./assets/Screenshot (6).png";
import honeypot from "./assets/honeypot.png";
import shakti from "./assets/shakti.png"; 
import plant from "./assets/plant.png";
import ecotrack from "./assets/eco.png";
import traffic from "./assets/traffic.png";
import phishguard from "./assets/phishguard.png";
import lost from "./assets/lost.png";
import farmer from "./assets/farmer.png";
import skillhub from "./assets/skillhub.png";
import virtual from "./assets/virtual.png";
import voice from "./assets/voice.png";
import java from "./assets/java.png"
import cpp from "./assets/cpp.png";
import android from "./assets/android.png";
import kali from "./assets/kali.png";
import python from "./assets/python.png";
import clogo from "./assets/c.png";
// Theme
import Theme1 from "./assets/blue-circle-png-8.png";
import Theme2 from "./assets/Green.png";
import Theme3 from "./assets/orange.png";
import Theme4 from "./assets/Red.png";
import Theme5 from "./assets/gold.png";
import Theme6 from "./assets/Bink.png";
import Theme7 from "./assets/Purple.png";
import Theme8 from "./assets/Purple2.png";

// Skills
import Html from "./assets/html_ph9Z0PP.png";
import Js from "./assets/Js.webp";
import Css from "./assets/css.webp";
import React from "./assets/React.webp";
import Redux from "./assets/Redux.png";
import Git from "./assets/git_nnrA35B.png";
import Github from "./assets/code_LmikzpY.png";
import Firease from "./assets/Firbase.webp";
import Bootsrap from "./assets/Bootstrap.png";
import sass from "./assets/sass.svg";
import Google from "./assets/search_v42JcMU.png";
import Api from "./assets/api_jWHrF5L.png";
import Deploy from "./assets/rocket.png";
import Vscode from "./assets/visual-studio_PvbYL6E.png";
import Gpt from "./assets/chatbot_hKae2Xk.png";
import Agile from "./assets/Agile.png";
import tailwind from "./assets/icons8-tailwind-css-48.png";
import deepseek from "./assets/deepSeek.png";
// Status
import Experience from "./assets/Sucsess.png";
import Sucsess from "./assets/experiance.png";
import Comment from "./assets/Comment.png";

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Belal",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Hesham",
  },

  {
    id: 3,
    title: "Age : ",
    description: "19 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Egyption",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Egypt",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "01060074246",
  },

  {
    id: 8,
    title: "Email : ",
    description: "balalaboseada@gmail.com",
  },
  {
    id: 10,
    title: "Langages : ",
    description: "swahili, English ,Germany",
  },
];

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaUser className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const stats = [
  {
    id: 1,
    no: "Fresher",
    img: Experience,
    title: "Year of Experience",
  },

  {
    id: 2,
    no: "+10",
    img: Sucsess,
    title: "Completed Project",
  },

  {
    id: 3,
    no: "",
    img: Comment,
    title: "Be The First Comment",
  },
];
// skills
export const skills = [
  {
    id: 1,
    title: "Html",
    img: Html,
    Cat: "Skills",
  },

  {
    id: 2,
    title: "Javascript",
    img: Js,
    Cat: "Skills",
  },

  {
    id: 3,
    title: "Css",
    img: Css,
    Cat: "Skills",
  },

  {
    id: 4,
    title: "React",
    img: React,
    Cat: "Skills",
  },
  {
    id: 5,
    title: "Java",
    img: java,
    Cat: "Skills",
  },

  {
    id: 6,
    title: "Kali",
    img: kali,
    Cat: "Tools",
  },

  {
    id: 7,
    title: "git",
    img: Git,
    Cat: "Tools",
  },

  {
    id: 8,
    title: "GitHub",
    img: Github,
    Cat: "Tools",
  },
  {
    id: 9,
    title: "Android Studio",
    img: android,
    Cat: "Tools",
  },
  {
    id: 10,
    title: "cpp",
    img: cpp,
    Cat: "Skills",
  },
  {
    id: 11,
    title: "c Lang",
    img: clogo,
    Cat: "Skills",
  },
  {
    id: 12,
    title: "Api",
    img: Api,
    Cat: "Skills",
  },
  {
    id: 13,
    title: "Deploy",
    img: Deploy,
    Cat: "Skills",
  },
  {
    id: 14,
    title: "VS Code",
    img: Vscode,
    Cat: "Tools",
  },
  {
    id: 15,
    title: "ChatGpt",
    img: Gpt,
    Cat: "Tools",
  },
  {
    id: 16,
    title: "Python",
    img: python,
    Cat: "Skills",
  },

  {
    id: 17,
    title: "deep seek",
    img: deepseek,
    Cat: "Tools",
  },
  {
    id: 17,
    title: "Devops",
    img: Agile,
    Cat: "Tools",
  },
];

// portfolio
export const portfolioData = [
  // Android Projects
  {
    id: 1,
    img: plant,
    title: "Plant Disease Detection App",
    category: "Android",
    desc: "Detect plant diseases using deep learning",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/plant-disease-detection-app",
          link: "https://github.com/your-username/plant-disease-detection-app",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://yourapp-plantdisease.vercel.app/",
          link: "https://yourapp-plantdisease.vercel.app/",
        },
      },
    ],
    Overview: [
      "Android app that identifies plant diseases using image classification.",
      "Custom CNN model trained on 11 disease categories using Keras and TensorFlow.",
      "Built-in suggestion system for farmers to treat diseases based on detection.",
      "Supports offline mode with saved model integration.",
      "Frontend built using Android Studio with Java.",
    ],
  },
  {
    id: 2,
    img: shakti,
    title: "Shakti",
    category: "Android",
    desc: "Women's safety app with ML and emergency features",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/shakti-safety-app",
          link: "https://github.com/your-username/shakti-safety-app",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://shakti-women-safety.vercel.app/",
          link: "https://shakti-women-safety.vercel.app/",
        },
      },
    ],
    Overview: [
      "AI-based women’s safety app providing emergency response features.",
      "Includes voice-triggered SOS, live tracking, and safe zones.",
      "Built-in ML model detects stress via voice tone and activates alerts.",
      "Auto-alert system sends location and message to trusted contacts.",
      "Android app built using Java and Firebase for backend services.",
    ],
  },
  {
    id: 3,
    img: ecotrack,
    title: "EcoTrack",
    category: "Android",
    desc: "Carbon footprint tracker app",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/ecotrack-app",
          link: "https://github.com/your-username/ecotrack-app",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://ecotrack.vercel.app/",
          link: "https://ecotrack.vercel.app/",
        },
      },
    ],
    Overview: [
      "EcoTrack helps users track and reduce their daily carbon emissions.",
      "Built with Android Studio and Java, with local storage for offline tracking.",
      "Includes features like transport, energy, and diet-based carbon calculators.",
      "Gamification system rewards eco-friendly behaviors.",
      "Supports community leaderboard and challenge modes.",
    ],
  },

  // Machine Learning Projects
  {
    id: 4,
    img: traffic,
    title: "Smart Traffic Predictor",
    category: "Machine Learning",
    desc: "Predict traffic congestion using ML models",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/traffic-predictor-ml",
          link: "https://github.com/your-username/traffic-predictor-ml",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://smarttraffic.vercel.app/",
          link: "https://smarttraffic.vercel.app/",
        },
      },
    ],
    Overview: [
      "Uses regression models to predict traffic congestion based on GPS and weather data.",
      "Visual dashboard for route optimization and accident prediction.",
      "Built using Python, Pandas, Scikit-learn, and Mapbox API.",
      "Deployed via Flask backend with React frontend.",
      "Aims to reduce commute time and fuel consumption.",
    ],
  },

  // Cybersecurity Projects
  {
    id: 5,
    img: honeypot,
    title: "HoneyPot 2.0",
    category: "Cybersecurity",
    desc: "Advanced honeypot trap system",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/honeypot-2.0",
          link: "https://github.com/your-username/honeypot-2.0",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://honeypot-system.vercel.app/",
          link: "https://honeypot-system.vercel.app/",
        },
      },
    ],
    Overview: [
      "Cybersecurity system designed to lure and detect malicious activities.",
      "Logs and tracks suspicious IPs and unauthorized access attempts.",
      "Integrated dashboard for real-time monitoring and visualization.",
      "Built using Flask, Python, MongoDB, and Socket.IO.",
      "Helps secure internal networks through decoy file systems.",
    ],
  },
  {
    id: 6,
    img: phishguard,
    title: "PhishGuard",
    category: "Cybersecurity",
    desc: "AI-based phishing detection system",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/phishguard",
          link: "https://github.com/your-username/phishguard",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://phishguard.vercel.app/",
          link: "https://phishguard.vercel.app/",
        },
      },
    ],
    Overview: [
      "Detects phishing websites using machine learning on URLs and page metadata.",
      "Trained using datasets of phishing/malicious URLs and legitimate sites.",
      "Includes browser extension for real-time alerts.",
      "Built using Python (XGBoost, Random Forest), Flask, and JS for frontend.",
      "Improves online safety by warning users about suspicious sites.",
    ],
  },

  // Web Apps Projects
  {
    id: 7,
    img: lost,
    title: "Lost & Found System",
    category: "Web Apps",
    desc: "Community platform for reporting lost and found items",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/lost-found-app",
          link: "https://github.com/your-username/lost-found-app",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://lost-found-items.vercel.app/",
          link: "https://lost-found-items.vercel.app/",
        },
      },
    ],
    Overview: [
      "Web app to report and claim lost or found items in a locality or campus.",
      "Users can post images, item description, location, and contact info.",
      "Admin panel to verify and moderate posts.",
      "Built with Node.js, MongoDB, and EJS templating.",
      "Helps communities reduce loss and return items quickly.",
    ],
  },
  {
    id: 8,
    img: farmer,
    title: "Farmers Auction System",
    category: "Web Apps",
    desc: "Bidding platform for farmers and marts",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/farmers-auction-system",
          link: "https://github.com/your-username/farmers-auction-system",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://farmersauction.vercel.app/",
          link: "https://farmersauction.vercel.app/",
        },
      },
    ],
    Overview: [
      "Platform where farmers post products for auction to marts and consumers.",
      "Real-time bidding system with timer and alerts.",
      "User roles include Farmers, Marts, Admins.",
      "Tech stack: Node.js, Express, MongoDB, EJS.",
      "Helps increase transparency and profitability in crop sales.",
    ],
  },
  {
    id: 9,
    img: skillhub,
    title: "SkillHub",
    category: "Web Apps",
    desc: "Peer-to-peer microlearning platform",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/skillhub-platform",
          link: "https://github.com/your-username/skillhub-platform",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://skillhub.vercel.app/",
          link: "https://skillhub.vercel.app/",
        },
      },
    ],
    Overview: [
      "SkillHub connects learners and instructors for microlearning sessions.",
      "Includes chat, scheduling, and session recording features.",
      "Built using React, Firebase, and Node.js backend.",
      "Supports rating and reviews for sessions.",
      "Encourages continuous learning and skill-sharing.",
    ],
  },

  // AI + NLP Projects
  {
    id: 10,
    img: virtual,
    title: "Virtual Assistant App",
    category: "AI + NLP",
    desc: "Voice-activated personal assistant with emotion detection",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/virtual-assistant",
          link: "https://github.com/your-username/virtual-assistant",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://virtualassistant.vercel.app/",
          link: "https://virtualassistant.vercel.app/",
        },
      },
    ],
    Overview: [
      "Personal assistant app with speech recognition and NLP integration.",
      "Features sentiment analysis for empathetic responses.",
      "Contextual task scheduling, reminders, and habit tracking.",
      "Supports offline mode with sync and gesture control.",
      "Built using Dialogflow, TensorFlow.js, and React Native.",
    ],
  },
  {
    id: 11,
    img: voice,
    title: "Voice-Based Authentication",
    category: "AI + NLP",
    desc: "App unlocking features via unique voice recognition",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/your-username/voice-auth-app",
          link: "https://github.com/your-username/voice-auth-app",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://voiceauth.vercel.app/",
          link: "https://voiceauth.vercel.app/",
        },
      },
    ],
    Overview: [
      "Voice recognition system that authenticates users to unlock app features.",
      "Ignores unauthorized voices and uses voice biometrics.",
      "Includes fallback methods and voice-controlled privacy features.",
      "Built with TensorFlow, Python backend, and Android frontend.",
      "Enhances security and personalized user experience.",
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "#00A9FF",
    name: "Blue",
  },

  {
    id: 2,
    img: Theme2,
    color: "#41A145",
  },

  {
    id: 3,
    img: Theme3,
    color: "#FF5C26",
  },

  {
    id: 4,
    img: Theme4,
    color: " #C0131A",
  },

  {
    id: 5,
    img: Theme5,
    color: "#FFCD4B",
  },

  {
    id: 6,
    img: Theme6,
    color: "#FF00FF",
  },

  {
    id: 7,
    img: Theme7,
    color: "#8F1FAC",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(271, 76%, 53%)",
  },
];
