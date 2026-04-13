import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MessageSquare, Github, Linkedin, Mail, ExternalLink, ChevronDown, Sparkles, Shield, Code, Briefcase, Target, Cpu, Globe } from 'lucide-react';

export default function CyberPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState('fr');
  const chatEndRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const translations = {
    fr: {
      nav: {
        home: "ACCUEIL",
        about: "QUI SUIS-JE",
        skills: "COMPÉTENCES",
        projects: "PROJETS",
        ambitions: "AMBITIONS",
        contact: "CONTACT"
      },
      hero: {
        tags: ["Cybersécurité", "Consulting", "Entrepreneuriat"],
        title: "CONSULTANT CYBERSÉCURITÉ",
        subtitle: "Alternant chez Orange Cyberdefense | Étudiant ingénieur EPITA | Spécialisé en sécurité OT/ICS et vision business",
        cta1: "VOIR MES PROJETS",
        cta2: "ME CONTACTER"
      },
      about: {
        title: "QUI SUIS-JE ?",
        name: "Elhaj SY",
        p1: "Étudiant en cycle ingénieur à l'EPITA, je suis actuellement alternant chez Orange Cyberdéfense en tant que consultant junior en cybersécurité.",
        p2: "Mon parcours académique m'a permis de développer une solide base en informatique, que je complète par des projets personnels et des plateformes de formation spécialisées dans la cybersécurité.",
        p3: "Passionné par l'innovation technologique, je m'investis dans des initiatives variées, allant de la création de jeux vidéo à des projets en intelligence artificielle. Je valorise la collaboration, l'adaptabilité et la curiosité pour approfondir mes compétences et contribuer à des projets d'envergure.",
        tags: ["EPITA - Cycle Ingénieur", "Orange Cyberdefense", "Tec de Monterrey - Mexique", "Google Cybersecurity", "CompTIA Security+ (en cours)"]
      },
      skills: {
        title: "MES COMPÉTENCES",
        technical: "COMPÉTENCES TECHNIQUES",
        business: "COMPÉTENCES BUSINESS",
        specialized: "COMPÉTENCES SPÉCIALISÉES (PROJET MAQUETTE)",
        techSkills: [
          { name: 'Python', level: 85 },
          { name: 'C/C#/Java', level: 80 },
          { name: 'Réseaux & Protocoles', level: 85 },
          { name: 'SCADA/ICS Security', level: 75 },
          { name: 'Analyse de risques', level: 80 },
          { name: 'Audit de sécurité', level: 75 }
        ],
        businessSkills: [
          { name: 'Consulting', level: 80 },
          { name: 'Gestion de projet', level: 85 },
          { name: 'Communication client', level: 90 },
          { name: 'Vision entrepreneuriale', level: 85 },
          { name: 'Leadership', level: 80 },
          { name: 'Vulgarisation technique', level: 90 }
        ],
        techDetails: "Langages : Python, C/C#, Java, Bash, SQL, HTML/CSS",
        techTools: "Outils : Unity, Burp Suite, Wireshark, SCADA, Git",
        softSkills: "Soft Skills : Leadership d'équipe, Communication, Éducation, Motivation à la performance",
        languages: "Langues : Français (natif), Anglais (C2 oral, C1 écrit), Espagnol (B2)",
        specializedTags: ["Électronique & Soudure", "Automates Programmables (PLC)", "Systèmes SCADA", "Protocoles Industriels (Modbus/OPC UA)", "Sécurité OT/ICS", "Pentest Systèmes Industriels", "Support Commercial", "Sensibilisation Client", "Schneider Electric"]
      },
      projects: {
        title: "MES PROJETS",
        main: {
          title: "Maquette ICS/SCADA de Démonstration",
          subtitle: "De la conception à la vente : Outil de sensibilisation cyber pour systèmes industriels",
          description: "Création d'une maquette physique complète permettant de démontrer concrètement les risques cyber OT aux dirigeants d'entreprises industrielles.",
          tags: ["SCADA", "ICS Security", "Hardware", "Schneider Electric", "Commercial"],
          highlightsTitle: "Points Clés du Projet",
          highlights: [
            "Conception et assemblage électronique complet",
            "Programmation d'automates industriels",
            "Développement d'interface SCADA",
            "Démonstrations d'attaques multiples",
            "Support commercial pour sensibilisation clients"
          ],
          videoPlaceholder: "Espace réservé pour la vidéo de présentation",
          videoDesc: "Démonstration : Conception • Programmation • Attaques",
          techStackTitle: "Stack Technique",
          hardware: "Matériel",
          software: "Logiciels & Protocoles",
          hardwareList: [
            "Automate Schneider Electric",
            "Capteurs et actionneurs industriels",
            "Modules d'E/S numériques",
            "Switch réseau industriel",
            "Composants électroniques (PCB, câblage)"
          ],
          softwareList: [
            "Logiciels SCADA",
            "Langages de programmation PLC",
            "Protocoles Modbus/OPC UA",
            "Outils de pentest OT/ICS",
            "Monitoring et logging"
          ],
          attacksTitle: "Scénarios d'Attaque Démontrés",
          attacks: [
            {
              name: "Sabotage du Processus de Production",
              objective: "Démontrer qu'un attaquant peut arrêter une ligne de production à distance",
              risk: "Perte de production, coûts d'arrêt, impact business immédiat"
            },
            {
              name: "Modification de Paramètres Critiques",
              objective: "Altération des valeurs de consigne sans détection",
              risk: "Qualité produit compromise, dommages matériels potentiels"
            },
            {
              name: "Exfiltration de Données Process",
              objective: "Extraction d'informations sensibles sur les processus industriels",
              risk: "Vol de propriété intellectuelle, espionnage industriel"
            }
          ],
          impactTitle: "Impact Commercial & Résultats",
          impactText: "Cette maquette sert de support de vente puissant pour convaincre les dirigeants d'entreprises industrielles d'investir dans la sécurité OT. Les démonstrations concrètes permettent de traduire les risques techniques abstraits en impacts business tangibles, facilitant ainsi la prise de décision et accélérant le processus de vente de solutions de cybersécurité industrielle."
        },
        other: [
          {
            title: "OCR en C",
            description: "Développement d'un outil de reconnaissance optique de caractères capable de résoudre une grille de mots fléchés.",
            tags: ["C", "Traitement d'image", "Algorithmes"]
          },
          {
            title: "Jeu Vidéo Unity",
            description: "Conception et réalisation complète d'un jeu vidéo, de la mécanique de gameplay à l'interface utilisateur.",
            tags: ["C#", "Unity", "Game Design"]
          }
        ]
      },
      ambitions: {
        title: "AMBITIONS & VISION",
        entrepreneurTitle: "Vision Entrepreneuriale",
        p1: "Mon objectif à long terme est de créer mon propre cabinet de conseil en cybersécurité, spécialisé dans l'accompagnement des PME et ETI. Je souhaite me positionner comme un acteur qui fait le pont entre la technique et le business, en proposant des solutions de sécurité adaptées aux réalités économiques et opérationnelles des entreprises.",
        p2: "Je suis convaincu que le futur de la cybersécurité passe par une approche transversale, alliant expertise technique, vision stratégique et capacité à vulgariser les enjeux cyber auprès des décideurs.",
        objectivesTitle: "Objectifs à Court et Moyen Terme",
        objectives: [
          "Obtenir les certifications OSCP et CompTIA Security+",
          "Développer mon expertise en sécurité OT/ICS et en gestion de risques",
          "Acquérir de l'expérience en management et en conduite de projets complexes",
          "Construire un réseau professionnel solide dans l'écosystème cyber français et international"
        ],
        aiTitle: "Intelligence Artificielle & Cybersécurité",
        aiP1: "Je suis particulièrement intéressé par les applications de l'IA en cybersécurité, car je suis convaincu que les attaquants vont massivement adopter ces technologies pour gagner en efficacité et en sophistication.",
        aiDefensive: "IA Défensive",
        aiDefensiveText: "Utiliser l'IA pour détecter les anomalies, automatiser la réponse aux incidents, et prédire les menaces avant qu'elles ne se matérialisent.",
        aiBusiness: "IA Business",
        aiBusinessText: "Intégrer l'IA dans les processus business des entreprises tout en garantissant la confidentialité des données et la conformité réglementaire.",
        aiQuote: "Nous devons maîtriser l'IA pour nous en prémunir et l'utiliser à notre avantage, tout en respectant les enjeux éthiques et de confidentialité."
      },
      footer: {
        tagline: "Consultant Cybersécurité | Futur Entrepreneur | Passionné par l'Innovation",
        copyright: "Conçu avec passion et IA."
      },
      chat: {
        title: "Assistant IA",
        subtitle: "Propulsé par Claude",
        placeholder: "Posez votre question...",
        welcomeMessage: "Posez-moi des questions sur le parcours, les compétences ou les projets d'Elhaj !",
        systemPrompt: "Tu es un assistant IA intégré au portfolio d'Elhaj SY, consultant junior en cybersécurité chez Orange Cyberdefense et étudiant à l'EPITA. Tu dois répondre aux questions sur son profil, ses compétences, ses projets (notamment la maquette ICS/SCADA), et ses ambitions entrepreneuriales en cybersécurité. Sois professionnel, concis et mets en avant sa vision business/managériale de la cybersécurité.",
        error: "Désolé, une erreur s'est produite. Je suis temporairement indisponible."
      }
    },
    en: {
      nav: {
        home: "HOME",
        about: "ABOUT ME",
        skills: "SKILLS",
        projects: "PROJECTS",
        ambitions: "AMBITIONS",
        contact: "CONTACT"
      },
      hero: {
        tags: ["Cybersecurity", "Consulting", "Entrepreneurship"],
        title: "CYBERSECURITY CONSULTANT",
        subtitle: "Apprentice at Orange Cyberdefense | EPITA Engineering Student | Specialized in OT/ICS Security and Business Vision",
        cta1: "VIEW MY PROJECTS",
        cta2: "CONTACT ME"
      },
      about: {
        title: "ABOUT ME",
        name: "Elhaj SY",
        p1: "Engineering student at EPITA, I am currently an apprentice at Orange Cyberdefense as a junior cybersecurity consultant.",
        p2: "My academic background has allowed me to develop a solid foundation in computer science, which I complement with personal projects and specialized cybersecurity training platforms.",
        p3: "Passionate about technological innovation, I invest myself in various initiatives, ranging from video game creation to artificial intelligence projects. I value collaboration, adaptability, and curiosity to deepen my skills and contribute to large-scale projects.",
        tags: ["EPITA - Engineering Degree", "Orange Cyberdefense", "Tec de Monterrey - Mexico", "Google Cybersecurity", "CompTIA Security+ (in progress)"]
      },
      skills: {
        title: "MY SKILLS",
        technical: "TECHNICAL SKILLS",
        business: "BUSINESS SKILLS",
        specialized: "SPECIALIZED SKILLS (MOCKUP PROJECT)",
        techSkills: [
          { name: 'Python', level: 85 },
          { name: 'C/C#/Java', level: 80 },
          { name: 'Networks & Protocols', level: 85 },
          { name: 'SCADA/ICS Security', level: 75 },
          { name: 'Risk Analysis', level: 80 },
          { name: 'Security Audit', level: 75 }
        ],
        businessSkills: [
          { name: 'Consulting', level: 80 },
          { name: 'Project Management', level: 85 },
          { name: 'Client Communication', level: 90 },
          { name: 'Entrepreneurial Vision', level: 85 },
          { name: 'Leadership', level: 80 },
          { name: 'Technical Simplification', level: 90 }
        ],
        techDetails: "Languages: Python, C/C#, Java, Bash, SQL, HTML/CSS",
        techTools: "Tools: Unity, Burp Suite, Wireshark, SCADA, Git",
        softSkills: "Soft Skills: Team Leadership, Communication, Education, Performance Motivation",
        languages: "Languages: French (native), English (C2 oral, C1 written), Spanish (B2)",
        specializedTags: ["Electronics & Soldering", "Programmable Logic Controllers (PLC)", "SCADA Systems", "Industrial Protocols (Modbus/OPC UA)", "OT/ICS Security", "Industrial Systems Pentest", "Commercial Support", "Client Awareness", "Schneider Electric"]
      },
      projects: {
        title: "MY PROJECTS",
        main: {
          title: "ICS/SCADA Demonstration Mockup",
          subtitle: "From Concept to Sale: Cyber Awareness Tool for Industrial Systems",
          description: "Creation of a complete physical mockup to concretely demonstrate OT cyber risks to industrial company executives.",
          tags: ["SCADA", "ICS Security", "Hardware", "Schneider Electric", "Commercial"],
          highlightsTitle: "Project Key Points",
          highlights: [
            "Complete electronic design and assembly",
            "Industrial automation programming",
            "SCADA interface development",
            "Multiple attack demonstrations",
            "Commercial support for client awareness"
          ],
          videoPlaceholder: "Space reserved for presentation video",
          videoDesc: "Demonstration: Design • Programming • Attacks",
          techStackTitle: "Technical Stack",
          hardware: "Hardware",
          software: "Software & Protocols",
          hardwareList: [
            "Schneider Electric PLC",
            "Industrial sensors and actuators",
            "Digital I/O modules",
            "Industrial network switch",
            "Electronic components (PCB, wiring)"
          ],
          softwareList: [
            "SCADA software",
            "PLC programming languages",
            "Modbus/OPC UA protocols",
            "OT/ICS pentest tools",
            "Monitoring and logging"
          ],
          attacksTitle: "Demonstrated Attack Scenarios",
          attacks: [
            {
              name: "Production Process Sabotage",
              objective: "Demonstrate that an attacker can remotely stop a production line",
              risk: "Production loss, downtime costs, immediate business impact"
            },
            {
              name: "Critical Parameter Modification",
              objective: "Alteration of setpoint values without detection",
              risk: "Compromised product quality, potential material damage"
            },
            {
              name: "Process Data Exfiltration",
              objective: "Extraction of sensitive information on industrial processes",
              risk: "Intellectual property theft, industrial espionage"
            }
          ],
          impactTitle: "Commercial Impact & Results",
          impactText: "This mockup serves as a powerful sales tool to convince industrial company executives to invest in OT security. Concrete demonstrations allow translating abstract technical risks into tangible business impacts, thus facilitating decision-making and accelerating the sales process for industrial cybersecurity solutions."
        },
        other: [
          {
            title: "OCR in C",
            description: "Development of an optical character recognition tool capable of solving a crossword puzzle grid.",
            tags: ["C", "Image Processing", "Algorithms"]
          },
          {
            title: "Unity Video Game",
            description: "Complete conception and realization of a video game, from gameplay mechanics to user interface.",
            tags: ["C#", "Unity", "Game Design"]
          }
        ]
      },
      ambitions: {
        title: "AMBITIONS & VISION",
        entrepreneurTitle: "Entrepreneurial Vision",
        p1: "My long-term goal is to create my own cybersecurity consulting firm, specialized in supporting SMEs and mid-sized companies. I want to position myself as an actor who bridges the gap between technology and business, offering security solutions adapted to the economic and operational realities of companies.",
        p2: "I am convinced that the future of cybersecurity requires a cross-functional approach, combining technical expertise, strategic vision, and the ability to simplify cyber issues for decision-makers.",
        objectivesTitle: "Short and Medium Term Objectives",
        objectives: [
          "Obtain OSCP and CompTIA Security+ certifications",
          "Develop my expertise in OT/ICS security and risk management",
          "Gain experience in management and leading complex projects",
          "Build a strong professional network in the French and international cyber ecosystem"
        ],
        aiTitle: "Artificial Intelligence & Cybersecurity",
        aiP1: "I am particularly interested in AI applications in cybersecurity, as I am convinced that attackers will massively adopt these technologies to gain efficiency and sophistication.",
        aiDefensive: "Defensive AI",
        aiDefensiveText: "Use AI to detect anomalies, automate incident response, and predict threats before they materialize.",
        aiBusiness: "Business AI",
        aiBusinessText: "Integrate AI into company business processes while ensuring data confidentiality and regulatory compliance.",
        aiQuote: "We must master AI to protect ourselves from it and use it to our advantage, while respecting ethical and confidentiality issues."
      },
      footer: {
        tagline: "Cybersecurity Consultant | Future Entrepreneur | Innovation Enthusiast",
        copyright: "Designed with passion and AI."
      },
      chat: {
        title: "AI Assistant",
        subtitle: "Powered by Claude",
        placeholder: "Ask your question...",
        welcomeMessage: "Ask me questions about Elhaj's background, skills, or projects!",
        systemPrompt: "You are an AI assistant integrated into Elhaj SY's portfolio, a junior cybersecurity consultant at Orange Cyberdefense and student at EPITA. You must answer questions about his profile, skills, projects (notably the ICS/SCADA mockup), and entrepreneurial ambitions in cybersecurity. Be professional, concise, and highlight his business/managerial vision of cybersecurity.",
        error: "Sorry, an error occurred. I am temporarily unavailable."
      }
    }
  };

  const t = translations[language];

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: `${t.chat.systemPrompt} ${language === 'en' ? 'Respond in English.' : 'Réponds en français.'} Question: ${inputMessage}`
            }
          ]
        })
      });

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.content[0].text
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: t.chat.error
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={{ 
      background: '#0F172A',
      color: '#F1F5F9',
      minHeight: '100vh',
      fontFamily: "'JetBrains Mono', monospace",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `
          linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: `translateY(${scrollY * 0.5}px)`,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Gradient orbs */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 20s ease-in-out infinite',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '20%',
        left: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 25s ease-in-out infinite reverse',
        zIndex: 0
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Orbitron:wght@500;700;900&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(217, 70, 239, 0.8)); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-in {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .skill-bar {
          position: relative;
          height: 8px;
          background: rgba(139, 92, 246, 0.1);
          borderRadius: 20px;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, #8B5CF6, #D946EF);
          borderRadius: 20px;
          transition: width 1s ease-out;
          box-shadow: 0 0 10px rgba(217, 70, 239, 0.5);
        }

        .cyber-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(139, 92, 246, 0.2);
          borderRadius: 16px;
          padding: 32px;
          backdropFilter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cyber-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .cyber-card:hover::before {
          left: 100%;
        }

        .cyber-card:hover {
          border-color: rgba(217, 70, 239, 0.5);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
        }

        .cyber-button {
          background: linear-gradient(135deg, #8B5CF6, #D946EF);
          color: #F1F5F9;
          border: none;
          padding: 12px 32px;
          borderRadius: 8px;
          fontWeight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          fontFamily: 'JetBrains Mono', monospace;
        }

        .cyber-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          borderRadius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }

        .cyber-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .cyber-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(217, 70, 239, 0.4);
        }

        .chat-bubble {
          max-width: 80%;
          padding: 12px 16px;
          borderRadius: 16px;
          margin: 8px 0;
          animation: fadeIn 0.3s ease;
        }

        .user-bubble {
          background: linear-gradient(135deg, #8B5CF6, #D946EF);
          margin-left: auto;
          border-bottom-right-radius: 4px;
        }

        .assistant-bubble {
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-bottom-left-radius: 4px;
        }

        .tag {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid rgba(139, 92, 246, 0.4);
          borderRadius: 20px;
          fontSize: 12px;
          margin: 4px;
          fontWeight: 500;
        }

        .section-title {
          fontFamily: 'Orbitron', sans-serif;
          fontSize: 48px;
          fontWeight: 900;
          background: linear-gradient(135deg, #8B5CF6, #D946EF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          marginBottom: 32px;
          animation: glowPulse 3s ease-in-out infinite;
        }

        nav a {
          position: relative;
          color: #F1F5F9;
          text-decoration: none;
          padding: 8px 16px;
          transition: color 0.3s ease;
        }

        nav a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8B5CF6, #D946EF);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        nav a:hover::after {
          width: 100%;
        }

        nav a:hover {
          color: #D946EF;
        }

        .lang-switch {
          display: flex;
          gap: 8px;
          background: rgba(139, 92, 246, 0.1);
          padding: 4px;
          borderRadius: 8px;
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .lang-button {
          padding: 6px 12px;
          background: transparent;
          border: none;
          color: #F1F5F9;
          cursor: pointer;
          borderRadius: 6px;
          transition: all 0.3s ease;
          fontFamily: 'JetBrains Mono', monospace;
          fontSize: 12px;
          fontWeight: 600;
        }

        .lang-button.active {
          background: linear-gradient(135deg, #8B5CF6, #D946EF);
        }

        .lang-button:hover:not(.active) {
          background: rgba(139, 92, 246, 0.2);
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
        padding: '20px 0'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 40px'
        }}>
          <div style={{ 
            fontFamily: 'Orbitron, sans-serif', 
            fontSize: '24px', 
            fontWeight: 900,
            background: 'linear-gradient(135deg, #8B5CF6, #D946EF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <Shield size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            ELHAJ SY
          </div>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center', fontSize: '14px', fontWeight: 500 }}>
            <a href="#home">{t.nav.home}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#ambitions">{t.nav.ambitions}</a>
            <a href="mailto:elhajsy4@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} />
              {t.nav.contact}
            </a>
            <div className="lang-switch">
              <button 
                className={`lang-button ${language === 'fr' ? 'active' : ''}`}
                onClick={() => setLanguage('fr')}
              >
                FR
              </button>
              <button 
                className={`lang-button ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '0 40px'
      }}>
        <div style={{ maxWidth: '1000px', textAlign: 'center' }} className="animate-in">
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
            {t.hero.tags.map((tag, idx) => (
              <span key={idx} className="tag">
                {idx === 0 && <Shield size={14} style={{ display: 'inline', marginRight: '4px' }} />}
                {idx === 1 && <Briefcase size={14} style={{ display: 'inline', marginRight: '4px' }} />}
                {idx === 2 && <Target size={14} style={{ display: 'inline', marginRight: '4px' }} />}
                {tag}
              </span>
            ))}
          </div>
          
          <h1 style={{ 
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '72px',
            fontWeight: 900,
            marginBottom: '24px',
            lineHeight: 1.2,
            background: 'linear-gradient(135deg, #F1F5F9, #8B5CF6, #D946EF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'glowPulse 3s ease-in-out infinite'
          }}>
            {t.hero.title.split(' ').map((word, idx) => (
              <span key={idx}>{word}<br/></span>
            ))}
          </h1>
          
          <p style={{ 
            fontSize: '20px', 
            lineHeight: 1.8, 
            marginBottom: '40px',
            color: 'rgba(241, 245, 249, 0.8)',
            maxWidth: '800px',
            margin: '0 auto 40px'
          }}>
            {t.hero.subtitle}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '48px' }}>
            <button className="cyber-button" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              {t.hero.cta1}
            </button>
            <button 
              className="cyber-button"
              style={{ background: 'rgba(139, 92, 246, 0.2)', border: '1px solid #8B5CF6' }}
              onClick={() => window.location.href = 'mailto:elhajsy4@gmail.com'}
            >
              {t.hero.cta2}
            </button>
          </div>

          <div style={{ marginTop: '80px' }}>
            <ChevronDown 
              size={32} 
              style={{ 
                animation: 'float 2s ease-in-out infinite',
                opacity: 0.6,
                cursor: 'pointer'
              }}
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ 
        minHeight: '100vh',
        padding: '120px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-title">{t.about.title}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div className="cyber-card">
              <div style={{ 
                width: '100%',
                aspectRatio: '1',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(217, 70, 239, 0.2))',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '120px',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 900,
                border: '2px solid rgba(139, 92, 246, 0.3)'
              }}>
                ES
              </div>
            </div>

            <div>
              <h3 style={{ 
                fontSize: '32px', 
                fontFamily: 'Orbitron, sans-serif',
                marginBottom: '24px',
                color: '#D946EF'
              }}>
                {t.about.name}
              </h3>
              
              <p style={{ 
                fontSize: '16px', 
                lineHeight: 1.8, 
                marginBottom: '24px',
                color: 'rgba(241, 245, 249, 0.9)'
              }}>
                {t.about.p1}
              </p>

              <p style={{ 
                fontSize: '16px', 
                lineHeight: 1.8, 
                marginBottom: '24px',
                color: 'rgba(241, 245, 249, 0.9)'
              }}>
                {t.about.p2}
              </p>

              <p style={{ 
                fontSize: '16px', 
                lineHeight: 1.8, 
                marginBottom: '32px',
                color: 'rgba(241, 245, 249, 0.9)'
              }}>
                {t.about.p3}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {t.about.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {idx === 0 && '🎓 '}
                    {idx === 1 && '🛡️ '}
                    {idx === 2 && '🌎 '}
                    {idx === 3 && '📚 '}
                    {idx === 4 && '🎯 '}
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
                <a href="https://linkedin.com/in/elhaj-sy" target="_blank" rel="noopener noreferrer">
                  <button className="cyber-button" style={{ padding: '12px 24px' }}>
                    <Linkedin size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    LinkedIn
                  </button>
                </a>
                <a href="https://github.com/elhaj2004" target="_blank" rel="noopener noreferrer">
                  <button className="cyber-button" style={{ padding: '12px 24px', background: 'rgba(139, 92, 246, 0.2)', border: '1px solid #8B5CF6' }}>
                    <Github size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ 
        minHeight: '100vh',
        padding: '120px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-title">{t.skills.title}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            {/* Technical Skills */}
            <div className="cyber-card">
              <h3 style={{ 
                fontSize: '24px', 
                fontFamily: 'Orbitron, sans-serif',
                marginBottom: '32px',
                color: '#8B5CF6',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Code size={28} />
                {t.skills.technical}
              </h3>
              
              {t.skills.techSkills.map((skill, idx) => (
                <div key={idx} style={{ marginBottom: '24px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
                    <span>{skill.name}</span>
                    <span style={{ color: '#8B5CF6' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill" 
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${idx * 0.1}s`
                      }} 
                    />
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '32px', fontSize: '14px', opacity: 0.8 }}>
                <p><strong>{t.skills.techDetails}</strong></p>
                <p style={{ marginTop: '8px' }}><strong>{t.skills.techTools}</strong></p>
              </div>
            </div>

            {/* Business Skills */}
            <div className="cyber-card">
              <h3 style={{ 
                fontSize: '24px', 
                fontFamily: 'Orbitron, sans-serif',
                marginBottom: '32px',
                color: '#D946EF',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Briefcase size={28} />
                {t.skills.business}
              </h3>
              
              {t.skills.businessSkills.map((skill, idx) => (
                <div key={idx} style={{ marginBottom: '24px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
                    <span>{skill.name}</span>
                    <span style={{ color: '#D946EF' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill" 
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${idx * 0.1}s`
                      }} 
                    />
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '32px', fontSize: '14px', opacity: 0.8 }}>
                <p><strong>{t.skills.softSkills}</strong></p>
                <p style={{ marginTop: '8px' }}><strong>{t.skills.languages}</strong></p>
              </div>
            </div>
          </div>

          {/* Additional Skills from Project */}
          <div className="cyber-card" style={{ marginTop: '48px' }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontFamily: 'Orbitron, sans-serif',
              marginBottom: '24px',
              color: '#8B5CF6',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Cpu size={28} />
              {t.skills.specialized}
            </h3>
            
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {t.skills.specializedTags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ 
        minHeight: '100vh',
        padding: '120px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-title">{t.projects.title}</h2>
          
          <div className="cyber-card" style={{ padding: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h3 style={{ 
                  fontSize: '36px', 
                  fontFamily: 'Orbitron, sans-serif',
                  marginBottom: '12px',
                  color: '#D946EF'
                }}>
                  {t.projects.main.title}
                </h3>
                <p style={{ fontSize: '18px', color: '#8B5CF6', fontWeight: 600, marginBottom: '16px' }}>
                  {t.projects.main.subtitle}
                </p>
              </div>
              <Shield size={48} style={{ color: '#D946EF', opacity: 0.3 }} />
            </div>

            <p style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
              {t.projects.main.description}
            </p>

            <div style={{ marginBottom: '32px' }}>
              {t.projects.main.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>

            <div style={{ 
              background: 'rgba(139, 92, 246, 0.1)', 
              padding: '32px', 
              borderRadius: '12px',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              marginBottom: '32px'
            }}>
              <h4 style={{ 
                fontSize: '20px', 
                fontFamily: 'Orbitron, sans-serif',
                marginBottom: '16px',
                color: '#8B5CF6'
              }}>
                {t.projects.main.highlightsTitle}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {t.projects.main.highlights.map((highlight, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '12px',
                    paddingLeft: '24px',
                    position: 'relative',
                    fontSize: '14px',
                    lineHeight: 1.6
                  }}>
                    <span style={{ 
                      position: 'absolute',
                      left: 0,
                      color: '#D946EF',
                      fontWeight: 'bold'
                    }}>▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Placeholder for Video and Images */}
            <div style={{ 
              background: 'rgba(15, 23, 42, 0.8)',
              border: '2px dashed rgba(139, 92, 246, 0.3)',
              borderRadius: '12px',
              padding: '48px',
              textAlign: 'center',
              marginBottom: '32px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📹</div>
              <p style={{ fontSize: '16px', opacity: 0.7, marginBottom: '8px' }}>
                {t.projects.main.videoPlaceholder}
              </p>
              <p style={{ fontSize: '14px', opacity: 0.5 }}>
                {t.projects.main.videoDesc}
              </p>
            </div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[1, 2, 3].map((num) => (
                <div key={num} style={{ 
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '2px dashed rgba(139, 92, 246, 0.3)',
                  borderRadius: '12px',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px'
                }}>
                  📷
                </div>
              ))}
            </div>

            {/* Technical Details */}
            <div style={{ marginTop: '48px' }}>
              <h4 style={{ 
                fontSize: '24px', 
                fontFamily: 'Orbitron, sans-serif',
                marginBottom: '24px',
                color: '#8B5CF6'
              }}>
                {t.projects.main.techStackTitle}
              </h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <h5 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#D946EF' }}>
                    {t.projects.main.hardware}
                  </h5>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: 1.8, opacity: 0.9 }}>
                    {t.projects.main.hardwareList.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#D946EF' }}>
                    {t.projects.main.software}
                  </h5>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: 1.8, opacity: 0.9 }}>
                    {t.projects.main.softwareList.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Attack Scenarios Section */}
            <div style={{ marginTop: '48px' }}>
              <h4 style={{ 
                fontSize: '24px', 
                fontFamily: 'Orbitron, sans-serif',
                marginBottom: '24px',
                color: '#D946EF'
              }}>
                {t.projects.main.attacksTitle}
              </h4>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                {t.projects.main.attacks.map((attack, idx) => (
                  <div key={idx} style={{ 
                    background: 'rgba(217, 70, 239, 0.1)',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(217, 70, 239, 0.2)'
                  }}>
                    <h5 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#D946EF' }}>
                      {attack.name}
                    </h5>
                    <p style={{ fontSize: '14px', marginBottom: '8px', opacity: 0.9 }}>
                      <strong>{language === 'fr' ? 'Objectif' : 'Objective'} :</strong> {attack.objective}
                    </p>
                    <p style={{ fontSize: '14px', opacity: 0.8 }}>
                      <strong>{language === 'fr' ? 'Risque Business' : 'Business Risk'} :</strong> {attack.risk}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div style={{ 
              marginTop: '48px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(217, 70, 239, 0.15))',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}>
              <h4 style={{ 
                fontSize: '20px', 
                fontFamily: 'Orbitron, sans-serif',
                marginBottom: '16px',
                color: '#F1F5F9'
              }}>
                💼 {t.projects.main.impactTitle}
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.8, opacity: 0.9 }}>
                {t.projects.main.impactText}
              </p>
            </div>
          </div>

          {/* Other Projects */}
          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {t.projects.other.map((project, idx) => (
              <div key={idx} className="cyber-card">
                <h4 style={{ fontSize: '20px', fontFamily: 'Orbitron, sans-serif', marginBottom: '16px', color: '#8B5CF6' }}>
                  {project.title}
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, marginBottom: '16px', opacity: 0.9 }}>
                  {project.description}
                </p>
                <div>
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambitions Section */}
      <section id="ambitions" style={{ 
        minHeight: '100vh',
        padding: '120px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-title">{t.ambitions.title}</h2>
          
          <div className="cyber-card" style={{ padding: '48px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <Target size={40} style={{ color: '#D946EF' }} />
              <h3 style={{ 
                fontSize: '32px', 
                fontFamily: 'Orbitron, sans-serif',
                color: '#D946EF'
              }}>
                {t.ambitions.entrepreneurTitle}
              </h3>
            </div>
            
            <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', opacity: 0.95 }}>
              {t.ambitions.p1}
            </p>

            <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '32px', opacity: 0.95 }}>
              {t.ambitions.p2}
            </p>

            <div style={{ 
              background: 'rgba(139, 92, 246, 0.1)',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
              <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#8B5CF6' }}>
                {t.ambitions.objectivesTitle}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {t.ambitions.objectives.map((objective, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative',
                    fontSize: '14px',
                    lineHeight: 1.6
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#D946EF' }}>▸</span>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cyber-card" style={{ padding: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <Sparkles size={40} style={{ color: '#8B5CF6' }} />
              <h3 style={{ 
                fontSize: '32px', 
                fontFamily: 'Orbitron, sans-serif',
                color: '#8B5CF6'
              }}>
                {t.ambitions.aiTitle}
              </h3>
            </div>
            
            <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', opacity: 0.95 }}>
              {t.ambitions.aiP1}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '32px' }}>
              <div style={{ 
                background: 'rgba(139, 92, 246, 0.1)',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}>
                <h5 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#8B5CF6' }}>
                  🛡️ {t.ambitions.aiDefensive}
                </h5>
                <p style={{ fontSize: '14px', lineHeight: 1.6, opacity: 0.9 }}>
                  {t.ambitions.aiDefensiveText}
                </p>
              </div>

              <div style={{ 
                background: 'rgba(217, 70, 239, 0.1)',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid rgba(217, 70, 239, 0.2)'
              }}>
                <h5 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#D946EF' }}>
                  💼 {t.ambitions.aiBusiness}
                </h5>
                <p style={{ fontSize: '14px', lineHeight: 1.6, opacity: 0.9 }}>
                  {t.ambitions.aiBusinessText}
                </p>
              </div>
            </div>

            <div style={{ 
              marginTop: '32px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(217, 70, 239, 0.15))',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#F1F5F9' }}>
                💡 <em>"{t.ambitions.aiQuote}"</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: 'rgba(15, 23, 42, 0.8)',
        borderTop: '1px solid rgba(139, 92, 246, 0.2)',
        padding: '48px 40px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '24px',
            fontWeight: 900,
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #8B5CF6, #D946EF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ELHAJ SY
          </div>
          
          <p style={{ marginBottom: '24px', opacity: 0.8 }}>
            {t.footer.tagline}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' }}>
            <a href="mailto:elhajsy4@gmail.com" style={{ color: '#F1F5F9', textDecoration: 'none' }}>
              <Mail size={24} style={{ opacity: 0.8, transition: 'all 0.3s' }} />
            </a>
            <a href="https://linkedin.com/in/elhaj-sy" target="_blank" rel="noopener noreferrer" style={{ color: '#F1F5F9', textDecoration: 'none' }}>
              <Linkedin size={24} style={{ opacity: 0.8, transition: 'all 0.3s' }} />
            </a>
            <a href="https://github.com/elhaj2004" target="_blank" rel="noopener noreferrer" style={{ color: '#F1F5F9', textDecoration: 'none' }}>
              <Github size={24} style={{ opacity: 0.8, transition: 'all 0.3s' }} />
            </a>
          </div>

          <p style={{ fontSize: '14px', opacity: 0.6 }}>
            © 2025 Elhaj SY. {t.footer.copyright}
          </p>
        </div>
      </footer>

      {/* AI Chatbot */}
      <div style={{ 
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 1000
      }}>
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="cyber-button"
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.5)',
              animation: 'glowPulse 3s ease-in-out infinite'
            }}
          >
            <MessageSquare size={28} />
          </button>
        )}

        {chatOpen && (
          <div style={{
            width: '400px',
            height: '600px',
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Chat Header */}
            <div style={{
              background: 'linear-gradient(135deg, #8B5CF6, #D946EF)',
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Sparkles size={24} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>{t.chat.title}</div>
                  <div style={{ fontSize: '12px', opacity: 0.9 }}>{t.chat.subtitle}</div>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: '#F1F5F9',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {messages.length === 0 && (
                <div style={{ textAlign: 'center', opacity: 0.6, marginTop: '40px' }}>
                  <Sparkles size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
                  <p style={{ fontSize: '14px' }}>
                    {t.chat.welcomeMessage}
                  </p>
                </div>
              )}
              
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className="chat-bubble"
                  style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div className={msg.role === 'user' ? 'user-bubble' : 'assistant-bubble'}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="chat-bubble assistant-bubble" style={{ alignSelf: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <span style={{ animation: 'float 1s ease-in-out infinite' }}>●</span>
                    <span style={{ animation: 'float 1s ease-in-out infinite 0.2s' }}>●</span>
                    <span style={{ animation: 'float 1s ease-in-out infinite 0.4s' }}>●</span>
                  </div>
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div style={{
              padding: '20px',
              borderTop: '1px solid rgba(139, 92, 246, 0.2)',
              background: 'rgba(15, 23, 42, 0.5)'
            }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder={t.chat.placeholder}
                  style={{
                    flex: 1,
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                    padding: '12px',
                    color: '#F1F5F9',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="cyber-button"
                  style={{
                    width: '48px',
                    height: '48px',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: (!inputMessage.trim() || isTyping) ? 0.5 : 1
                  }}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
