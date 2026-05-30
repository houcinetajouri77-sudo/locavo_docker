# 🚗 Locavo – Guide de démarrage Docker

## Structure du projet

```
locavo/
├── Dockerfile              ← Image PHP/Apache
├── docker-compose.yml      ← Orchestration des services
├── config.php              ← Connexion BDD (compatible Docker)
├── .dockerignore
├── index.html
├── php/                    ← Pages PHP
├── html/                   ← Pages HTML statiques
├── css/                    ← Feuilles de style
├── js/                     ← Scripts JavaScript
├── images/                 ← Images du site
└── sql/
    ├── create.sql          ← Création des tables (auto-exécuté)
    └── init.sql            ← Données initiales  (auto-exécuté)
```

## Prérequis

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé et lancé
- Ports **8080**, **8081**, **3306** disponibles sur votre machine

---

## 🚀 Lancer le projet

### 1. Placer tous les fichiers du projet dans le même dossier

Assurez-vous que votre dossier contient bien :
`Dockerfile`, `docker-compose.yml`, `config.php`, `index.html`,
et les dossiers `php/`, `html/`, `css/`, `js/`, `images/`, `sql/`

### 2. Construire et démarrer les conteneurs

```bash
docker compose up --build
```

> La première fois, Docker télécharge les images et initialise la base de données automatiquement. Patientez ~30 secondes.

### 3. Accéder à l'application

| Service      | URL                          |
|--------------|------------------------------|
| 🌐 Site web  | http://localhost:8080        |
| 🛠 phpMyAdmin | http://localhost:8081        |

---

## 🛑 Arrêter le projet

```bash
docker compose down
```

Pour supprimer aussi les données de la base :
```bash
docker compose down -v
```

---

## 🔧 Commandes utiles

```bash
# Voir les logs en temps réel
docker compose logs -f

# Redémarrer seulement le service web
docker compose restart web

# Entrer dans le conteneur PHP
docker exec -it locavo_web bash

# Entrer dans le conteneur MySQL
docker exec -it locavo_db mysql -u locavo_user -plocavo_pass locavo_db
```

---

## 🔐 Identifiants

| Rôle          | Utilisateur    | Mot de passe  |
|---------------|----------------|---------------|
| MySQL root    | root           | root_pass     |
| MySQL app     | locavo_user    | locavo_pass   |
| phpMyAdmin    | locavo_user    | locavo_pass   |

> **⚠️ Production** : Changez tous les mots de passe avant tout déploiement en production.

---

## ❓ Problèmes fréquents

**Le site affiche "Erreur de connexion à la base de données"**
→ La base de données n'est pas encore prête. Attendez quelques secondes et rechargez la page.

**Le port 8080 est déjà utilisé**
→ Modifiez dans `docker-compose.yml` : `"8080:80"` → `"8090:80"` (ou autre port libre)

**Les images ne s'affichent pas**
→ Vérifiez que le dossier `images/` est bien présent dans le répertoire du projet.
