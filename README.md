# NodeJS application

- Folder created NodeJS in :D drive and opened with cmd -> created Job_Portal folder
- Added README.md file for status tracking
- npm init (to initialize npm)
  - it creates a package.json (npm configuration file)
- Install express.js (framework used to create server)
  - npm install express.js
- Install nodemon (auto run after changes + save)
  - npm install nodemon --save-dev (dev dependency)
- Added index.js (entry point)
- Updated package.json with start script

  - "start": "nodemon index.js" (just start once and keep saving) or node index.js (need to kill and start again)
  - user npm start to start the application

- Created a express server in index.js
  **_GIT_**

  - .gitignore file added with "/node_modules"
  - git init
  - git add .
  - git status
  - git branch -M main
  - git commit -m "Express Server Initial Setup"
  - Need to add remote origin and push to new github repo \*\*\*\*

- "type" :module in package.json

  - Use import and export instead of require while importing the packages.

- Installed dotenv : to secure the passwords or tokens
  - npm install dotenv --save
