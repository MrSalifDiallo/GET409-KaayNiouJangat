# Atelier Claude Code

Un parcours pas à pas pour débuter avec Claude Code sous Windows, calqué sur la progression de Ryan Ahmed dans *The Complete Claude Code & Claude Cowork Masterclass \[2026\]* (Udemy), adapté à ATA suarl et à ton plan Pro. Chaque épisode : une démo animée, puis des étapes à cocher avec les commandes exactes à copier.

Progression **0 / 15**

≈ 7 h 10 au total

Avant de commencer : comment suivre un épisode, et les mots à connaître

#### Comment suivre un épisode

1. **Regarde la démo** avec ▶ : c'est ce que tu vas voir à l'écran.
2. **Suis le « Pas à pas »** sous la démo, étape par étape, et coche chaque étape faite.
3. **Copie les commandes** avec le bouton Copier. Tu les colles dans le terminal avec Ctrl+V ou un clic droit, puis Entrée. PowerShell = terminal de VS Code, Claude = dans Claude Code.
4. **Compare avec « Tu dois voir »**. Si ça ne correspond pas, ouvre « Si ça bloque ».
5. **Envoie-moi les preuves** demandées (captures). Je valide avant l'épisode suivant.

Commence par le **parcours Essentiel** (E00 à E08). Les épisodes **Avancé** viennent ensuite, quand tu es à l'aise. Les installations et commandes clés ont été testées en réel avec Claude Code 2.1.283 (détails en bas de page).

#### Les mots à connaître

Terminal

La zone en bas de VS Code où l'on tape des commandes (PowerShell sous Windows).

Claude Code

Claude qui travaille directement dans ton dossier : il lit, crée et modifie des fichiers, avec ta permission.

Prompt

Ta demande écrite à Claude.

Mode plan

Claude réfléchit et propose un plan sans rien modifier.

Commit (git)

Une photo de ton dossier à un instant T, pour pouvoir y revenir.

Branche

Une copie de travail pour essayer sans abîmer la version principale.

Skill

Un savoir-faire écrit (un fichier SKILL.md) que Claude utilise quand il en a besoin.

Plugin

Un paquet prêt à installer : skills, commandes, connecteurs.

MCP / connecteur

Le « câble » qui relie Claude à un outil externe (Notion, Gmail…).

CLAUDE.md

La fiche de présentation du projet que Claude relit à chaque démarrage.

Contexte · tokens

La mémoire de travail de Claude, mesurée en tokens (morceaux de mots). Ton quota Pro se compte aussi en tokens.

## …

Visual Studio Code

Explorer

file

ProblemsOutput**Terminal**

file:///

Les écrans de la démo sont simplifiés : quelques libellés peuvent différer légèrement chez toi. Les commandes d'installation, les noms des plugins, la boucle Ralph, la skill /ata-brand, les règles deny et le sous-agent ont été testés en réel le 25/09/2026 avec Claude Code 2.1.283. La connexion à Notion et Context7 et l'ouverture du navigateur Playwright n'ont pas pu être testées ici (réseau bloqué dans mon environnement) : tu les confirmeras chez toi. Non couverts : sections 2 à 5 du cours (Cowork, Chat, Excel, PowerPoint).