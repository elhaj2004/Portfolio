# Portfolio Cybersécurité - Elhaj SY

Portfolio professionnel bilingue (FR/EN) d'Elhaj SY, consultant junior en cybersécurité chez Orange Cyberdefense et étudiant ingénieur à l'EPITA.

🌐 **[Voir le site en ligne](https://elhaj2004.github.io/Portfolio)**

## 🚀 Fonctionnalités

- ✨ **Design Cyber-Punk Elegant** avec animations CSS sophistiquées
- 🌍 **Bilingue FR/EN** avec switch de langue dynamique
- 🤖 **Chatbot IA intégré** propulsé par Claude d'Anthropic
- 📱 **Responsive** - fonctionne sur tous les appareils
- ⚡ **Performance optimisée** avec Vite et React
- 🎨 **Palette de couleurs cohérente** : Deep Oil-Blue, Violet néon, Fuchsia
- 🔐 **Sections détaillées** : Projets (maquette ICS/SCADA), Compétences, Ambitions

## 🛠️ Technologies utilisées

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **Lucide React** - Icônes modernes
- **Claude AI API** - Chatbot intelligent
- **CSS-in-JS** - Styling dynamique

## 📦 Installation locale

### Prérequis
- Node.js 18+ et npm

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/elhaj2004/Portfolio.git
cd Portfolio
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🚀 Déploiement sur GitHub Pages

### Configuration initiale (une seule fois)

1. **Vérifier que votre repository est bien nommé**
   - URL du repo : `https://github.com/elhaj2004/Portfolio`

2. **Activer GitHub Pages**
   - Aller sur GitHub : `Settings` → `Pages`
   - Source : `gh-pages branch`
   - Cliquer sur `Save`

### Déployer les mises à jour

À chaque fois que vous voulez mettre à jour le site :

```bash
npm run deploy
```

Cette commande :
1. Build le projet en production
2. Push le contenu dans la branche `gh-pages`
3. GitHub Pages met automatiquement à jour le site

🌐 **Le site sera accessible sur : `https://elhaj2004.github.io/Portfolio`**

## 📁 Structure du projet

```
Portfolio/
├── src/
│   ├── App.jsx           # Composant principal avec tout le portfolio
│   ├── main.jsx          # Point d'entrée React
│   └── index.css         # Styles globaux
├── public/               # Assets statiques
├── index.html            # Template HTML
├── package.json          # Dépendances et scripts
├── vite.config.js        # Configuration Vite
└── README.md            # Ce fichier
```

## 🎨 Personnalisation

### Changer les couleurs
Modifiez les variables CSS dans `App.jsx` :
- `#0F172A` - Fond principal (Deep Oil-Blue)
- `#8B5CF6` - Accent 1 (Violet néon)
- `#D946EF` - Accent 2 (Fuchsia)
- `#F1F5F9` - Texte (Pale Grey)

### Ajouter vos médias
1. **Photos/Vidéos de la maquette** : Remplacez les placeholders 📹 et 📷 dans la section Projects
2. **Photo professionnelle** : Remplacez le placeholder "ES" dans la section About

### Modifier le contenu
Tout le contenu est dans l'objet `translations` dans `App.jsx` :
- `translations.fr` - Contenu français
- `translations.en` - Contenu anglais

## 🤖 Configuration du Chatbot IA

Le chatbot utilise l'API Claude d'Anthropic. Pour qu'il fonctionne :

1. Le code utilise déjà l'endpoint public (pas besoin de clé API côté client)
2. Les réponses sont en temps réel et contextuelles à votre profil

## 🔧 Commandes disponibles

```bash
npm run dev      # Lancer en développement
npm run build    # Build pour production
npm run preview  # Prévisualiser le build
npm run deploy   # Déployer sur GitHub Pages
```

## 📱 Responsive Design

Le site s'adapte automatiquement à toutes les tailles d'écran :
- 📱 Mobile (< 768px)
- 💻 Tablette (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🎯 Sections du portfolio

1. **Hero** - Présentation impactante avec tags professionnels
2. **About Me** - Parcours et présentation personnelle
3. **Skills** - Compétences techniques et business
4. **Projects** - Projets détaillés (maquette ICS/SCADA)
5. **Ambitions** - Vision entrepreneuriale et IA
6. **Footer** - Contacts et réseaux sociaux

## 📞 Contact

- **Email** : elhajsy4@gmail.com
- **LinkedIn** : [elhaj-sy](https://linkedin.com/in/elhaj-sy)
- **GitHub** : [elhaj2004](https://github.com/elhaj2004)

## 📄 Licence

MIT License - Vous êtes libre d'utiliser ce code comme template pour votre propre portfolio.

## 🙏 Remerciements

Conçu avec passion, React et IA (Claude) 🚀

---

**Fait avec ❤️ par Elhaj SY**
