import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaGithub,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";
// Projects
import honeypot from "./assets/honeypot.png";
import shakti from "./assets/shakti.png"; 
import plant from "./assets/plant.png";
import phishguard from "./assets/phishguard.png";
import lost from "./assets/lost.png";
import farmer from "./assets/farmer.png";
import virtual from "./assets/virtual.png";
import voice from "./assets/voice.png";
import java from "./assets/java.png"
import cpp from "./assets/cpp.png";
import android from "./assets/android.png";
import kali from "./assets/kali.png";
import python from "./assets/python.png";
import clogo from "./assets/c.png";
import blackshell from "./assets/blackshell.png";
import locationsharing  from "./assets/locationsharing.png";
import dandiya from "./assets/dandiya.png";
import treetimer from "./assets/treetimer.png";
import flappybird from "./assets/flappybird.png";
import todo from "./assets/Todo.png";

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
import Git from "./assets/git_nnrA35B.png";
import Github from "./assets/code_LmikzpY.png";
import Api from "./assets/api_jWHrF5L.png";
import Vscode from "./assets/visual-studio_PvbYL6E.png";
import xml from "./assets/xml.png";
import post from "./assets/post.png";
// Status
import Experience from "./assets/Sucsess.png";
import Sucsess from "./assets/experiance.png";
import Comment from "./assets/Comment.png";

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Rohit",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Rathod",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "India",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "9741917875",
  },

  {
    id: 8,
    title: "Email : ",
    description: "rohitrathod15032004@gmail.com",
  },
  {
    id: 10,
    title: "Langages : ",
    description: "Kannada, English ,Hindi",
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
    title: "Java",
    img: java,
    Cat: "Skills",
  },
  {
    id: 2,
    title: "c Lang",
    img: clogo,
    Cat: "Skills",
  },
  {
    id: 3,
    title: "cpp",
    img: cpp,
    Cat: "Skills",
  },
  {
    id: 4,
    title: "Python",
    img: python,
    Cat: "Skills",
  },
  {
    id: 5,
    title: "Html",
    img: Html,
    Cat: "Skills",
  },
  {
    id: 6,
    title: "Javascript",
    img: Js,
    Cat: "Skills",
  },

  {
    id: 7,
    title: "Css",
    img: Css,
    Cat: "Skills",
  },

  {
    id: 8,
    title: "xml",
    img: xml,
    cat : "Skills"
  },

  {
    id: 9,
    title: "Linux",
    img: kali,
    Cat: "Tools",
  },

  {
    id: 10,
    title: "git",
    img: Git,
    Cat: "Tools",
  },

  {
    id: 11,
    title: "React",
    img: React,
    Cat: "Tools",
  },
  {
    id: 12,
    title: "GitHub",
    img: Github,
    Cat: "Tools",
  },
  {
    id: 13,
    title: "Android Studio",
    img: android,
    Cat: "Tools",
  },
  
  
  {
    id: 14,
    title: "REST Api",
    img: Api,
    Cat: "Skills",
  },
  {
    id: 15,
    title: "Post man",
    img: post,
    Cat: "Tools",
  },
  {
    id: 16,
    title: "VS Code",
    img: Vscode,
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
          title: "https://github.com/Rohitrrr384/Snapcure",
          link: "https://github.com/Rohitrrr384/Snapcure",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "To be host",
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
    img: treetimer,
    title: "Tree Timer & Productivity App",
    category: "Android",
    desc: "Focus timer app where trees grow as you stay productive",
    details: [
    {
      icon: <FaGithub />,
      title: "Repo :",
      desc: {
        title: "https://github.com/Rohitrrr384/TreeTimer",
        link: "https://github.com/Rohitrrr384/TreeTimer",
      },
    },
    {
      icon: <FiExternalLink />,
      title: "Preview : ",
      desc: {
        title: "To be host",
        link: "https://github.com/Rohitrrr384/TreeTimer",
      },
    },
  ],
  Overview: [
    "A minimal and aesthetic timer app where leaves fall from a tree as time passes.",
    "Customizable timer for focus sessions, studying, meditation, or workouts.",
    "Falling leaves animation that gradually drops leaves until the timer ends.",
    "Tree visualization that becomes emptier as time runs out.",
    "Beautiful, calming UI/UX designed to enhance focus and reduce stress.",
  ],
  },
  {
      id: 3,
      img: flappybird,
      title: "Flappy Bird – Android Game",
      category: "Android",
      desc: "A smooth and responsive Android remake of Flappy Bird",
      details: [
    {
      icon: <FaGithub />,
      title: "Repo :",
      desc: {
        title: "https://github.com/Rohitrrr384/FlappyBird",
        link: "https://github.com/Rohitrrr384/FlappyBird",
      },
    },
    {
      icon: <FiExternalLink />,
      title: "Preview : ",
      desc: {
        title: "To be host",
        link: "https://github.com/Rohitrrr384/FlappyBird",
      },
    },
  ],
  Overview: [
    "Android game inspired by the classic Flappy Bird.",
    "Built using Canvas API and custom game loop.",
    "Collision detection and physics implemented manually.",
    "Smooth animations and responsive controls.",
    "Developed fully in Java using Android Studio.",
  ],
  },
  {
    id: 4,
    img: todo,
    title: "Bubble To-Do App",
    category: "Android",
    desc: "A fun and interactive To-Do app with bubble-style tasks",
    details: [
    {
      icon: <FaGithub />,
      title: "Repo :",
      desc: {
        title: "https://github.com/Rohitrrr384/to-do",
        link: "https://github.com/Rohitrrr384/to-do",
      },
    },
    {
      icon: <FiExternalLink />,
      title: "Preview : ",
      desc: {
        title: "To be host",
        link: "https://github.com/Rohitrrr384/to-do",
      },
    },
  ],
  Overview: [
    "A fun and interactive To-Do List Android App built with Java in Android Studio.",
    "Each task appears as a bubble/balloon with playful animations.",
    "Categories bring different bubble styles and colors.",
    "Local storage using Room + Gson for full persistence.",
    "Smooth animations for popping, bursting, and floating effects.",
    "Pin important tasks to keep priority items always visible.",
  ],
  },
  {
    id: 5,
    img: shakti,
    title: "Shakti",
    category: "Android",
    desc: "Women's safety app with ML and emergency features",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/",
          link: "https://github.com/your-username/shakti-safety-app",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "To be host",
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
    id: 6,
    img: locationsharing,
    title: "Real-Time Location Sharing App",
    category: "Android",
    desc: "Share real-time location using Google Maps and Firebase",
    details: [
    {
      icon: <FaGithub />,
      title: "Repo :",
      desc: {
        title: "https://github.com/Rohitrrr384/LocationSharing-",
        link: "https://github.com/Rohitrrr384/LocationSharing-",
      },
    },
    {
      icon: <FiExternalLink />,
      title: "Preview : ",
      desc: {
        title: "To be host",
        link: "https://github.com/Rohitrrr384/LocationSharing-",
      },
    },
  ],
  Overview: [
    "Android app for sharing and tracking real-time locations.",
    "Integrates Google Maps API for live user movement tracking.",
    "Uses Firebase Realtime Database for instant location updates.",
    "Supports live route display and friend-to-friend sharing.",
    "Built in Android Studio using Java.",
  ],
  },
  

  // Machine Learning Projects
  {
    id: 7,
    img: blackshell, 
    title: "Black Shell Linux Simulator",
    category: "Android",
    desc: "A full Linux terminal simulation with Git, SSH, and system utilities",
    details: [
    {
      icon: <FaGithub />,
      title: "Repo :",
      desc: {
        title: "https://github.com/Rohitrrr384/Black-Shell",
        link: "https://github.com/Rohitrrr384/Black-Shell",
      },
    },
    {
      icon: <FiExternalLink />,
      title: "Preview : ",
      desc: {
        title: "To be host",
        link: "https://github.com/Rohitrrr384/Black-Shell",
      },
    },
  ],
  Overview: [
    "Android app that simulates a complete Linux terminal environment.",
    "Supports Git commands, SSH operations, and core Linux utilities.",
    "Includes built-in tools such as a code editor, file manager, calculator, and settings system.",
    "All components mimic real Linux behavior for an immersive experience.",
    "Developed in Android Studio using Java with a custom command processor.",
  ],
  },

  // Cybersecurity Projects
  {
    id: 8,
    img: honeypot,
    title: "HoneyPot 2.0",
    category: "Cybersecurity",
    desc: "Advanced honeypot trap system",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/UnifiedBitLab/honeypot-2.0",
          link: "https://github.com/UnifiedBitLab/honeypot-2.0",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "To be host",
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
    id: 9,
    img: phishguard,
    title: "PhishGuard",
    category: "Cybersecurity",
    desc: "AI-based phishing detection system",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/",
          link: "https://github.com/your-username/phishguard",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "To be host",
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
    id: 10,
    img: lost,
    title: "Lost & Found System",
    category: "Web Apps",
    desc: "Community platform for reporting lost and found items",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/samrudhip006/LostandFound",
          link: "https://github.com/samrudhip006/LostandFound",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "To be host",
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
    id: 11,
    img: farmer,
    title: "Farmers Auction System",
    category: "Web Apps",
    desc: "Bidding platform for farmers and marts",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/UnifiedBitLab/Vegies-Bidout",
          link: "https://github.com/UnifiedBitLab/Vegies-Bidout",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "to be host",
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
    id: 12,
    img: dandiya,
    title: "Dandiya Event App",
    category: "Web Apps",
    desc: "Event information and management app for Dandiya festival",
    details: [
    {
      icon: <FaGithub />,
      title: "Repo :",
      desc: {
        title: "https://github.com/Rohitrrr384/dandiya",
        link: "https://github.com/Rohitrrr384/dandiya",
      },
    },
    {
      icon: <FiExternalLink />,
      title: "Preview : ",
      desc: {
        title: "https://github.com/Rohitrrr384/dandiya",
        link: "https://github.com/Rohitrrr384/dandiya",
      },
    },
  ],
  Overview: [
    "A festive React app where users can write beautiful Diwali wishes.",
    "Send floating Diyas into the sky with a smooth, magical animation.",
    "Multiple color themes to personalize the celebration experience.",
    "Displays recent wishes submitted by users for a community vibe.",
  ],
  },

  // AI + NLP Projects
  {
    id: 13,
    img: virtual,
    title: "Virtual Assistant App",
    category: "AI + NLP",
    desc: "Voice-activated personal assistant with emotion detection",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/",
          link: "https://github.com/your-username/virtual-assistant",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "to be host",
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
    id: 14,
    img: voice,
    title: "Voice-Based Authentication",
    category: "AI + NLP",
    desc: "App unlocking features via unique voice recognition",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo :",
        desc: {
          title: "https://github.com/",
          link: "https://github.com/your-username/voice-auth-app",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "to be host",
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
