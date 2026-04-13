# 📘 Guide de Déploiement - GitHub Pages

## ✅ Checklist avant déploiement

- [ ] Vous avez un compte GitHub
- [ ] Node.js et npm sont installés sur votre machine
- [ ] Vous avez cloné le repository localement
- [ ] Les dépendances sont installées (`npm install`)

## 🚀 Déploiement Étape par Étape

### 1️⃣ Première fois - Configuration initiale

#### A. Configurer Git (si pas déjà fait)

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

#### B. Se connecter au repository

```bash
cd Portfolio
git remote -v  # Vérifier que le remote pointe vers elhaj2004/Portfolio
```

Si ce n'est pas le cas :
```bash
git remote add origin https://github.com/elhaj2004/Portfolio.git
```

#### C. Activer GitHub Pages

1. Aller sur https://github.com/elhaj2004/Portfolio
2. Cliquer sur `Settings` (⚙️)
3. Dans le menu latéral, cliquer sur `Pages`
4. Sous "Source", sélectionner :
   - Branch : `gh-pages`
   - Folder : `/ (root)`
5. Cliquer sur `Save`

### 2️⃣ Déployer votre site

```bash
npm run deploy
```

Cette commande va :
1. ✅ Builder votre application (`vite build`)
2. ✅ Créer/mettre à jour la branche `gh-pages`
3. ✅ Pusher le contenu sur GitHub
4. ✅ GitHub Pages déploiera automatiquement

**⏱️ Temps de déploiement** : 1-3 minutes après le push

### 3️⃣ Vérifier que ça fonctionne

Attendez 2-3 minutes, puis visitez :
```
https://elhaj2004.github.io/Portfolio
```

## 🔄 Mettre à jour le site

À chaque modification :

1. **Modifiez vos fichiers** (App.jsx, etc.)

2. **Testez localement**
```bash
npm run dev
```

3. **Déployez**
```bash
npm run deploy
```

C'est tout ! 🎉

## 🐛 Résolution de problèmes

### Problème : "Permission denied" ou erreur d'authentification Git

**Solution** : Configurer l'authentification GitHub

**Option 1 - Token d'accès personnel (recommandé)**

1. Aller sur GitHub : Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Générer un nouveau token avec scope `repo`
3. Copier le token
4. Utiliser le token comme mot de passe quand Git le demande

**Option 2 - SSH**

```bash
ssh-keygen -t ed25519 -C "votre.email@example.com"
cat ~/.ssh/id_ed25519.pub
```
Copier la clé et l'ajouter sur GitHub : Settings → SSH and GPG keys

Changer le remote :
```bash
git remote set-url origin git@github.com:elhaj2004/Portfolio.git
```

### Problème : Page 404 après déploiement

**Solutions** :
1. Vérifier que la branche `gh-pages` existe :
```bash
git branch -a
```

2. Vérifier la configuration dans Settings → Pages
   - Source doit être `gh-pages`

3. Vider le cache du navigateur et réessayer

### Problème : Build fail

```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problème : Chatbot ne fonctionne pas

Le chatbot utilise l'API Claude. Vérifiez :
- Connexion internet stable
- Console du navigateur pour erreurs (F12)

## 📝 Workflow recommandé

### Pour les modifications mineures (texte, couleurs)

```bash
# 1. Modifier les fichiers
# 2. Tester
npm run dev
# 3. Déployer directement
npm run deploy
```

### Pour les modifications majeures

```bash
# 1. Créer une branche
git checkout -b feature/ma-modification

# 2. Faire les modifications et tester
npm run dev

# 3. Commit
git add .
git commit -m "Description de la modification"

# 4. Merger dans main
git checkout main
git merge feature/ma-modification

# 5. Déployer
npm run deploy
```

## 🎯 Commandes Git utiles

```bash
# Voir l'état
git status

# Voir les changements
git diff

# Annuler les modifications non commitées
git checkout -- <fichier>

# Voir l'historique
git log --oneline

# Push vers main (si besoin)
git push origin main
```

## 🌐 URLs importantes

- **Repository** : https://github.com/elhaj2004/Portfolio
- **Site déployé** : https://elhaj2004.github.io/Portfolio
- **Settings Pages** : https://github.com/elhaj2004/Portfolio/settings/pages

## 💡 Astuces

### Déploiement rapide sans confirmation

Si vous êtes sûr de vos modifications :
```bash
npm run deploy -- --no-verify
```

### Vérifier avant de déployer

```bash
# Build et preview localement
npm run build
npm run preview
```
Ouvrir http://localhost:4173 pour voir exactement ce qui sera déployé

### Forcer un redéploiement

```bash
git push origin --delete gh-pages  # Supprimer la branche
npm run deploy  # Redéployer
```

## 📞 Besoin d'aide ?

Si vous rencontrez des problèmes :

1. Vérifiez les logs de déploiement
2. Regardez la section "Actions" sur GitHub
3. Consultez la documentation Vite : https://vitejs.dev/guide/static-deploy.html
4. Consultez la documentation GitHub Pages : https://docs.github.com/en/pages

---

**Bon déploiement ! 🚀**
