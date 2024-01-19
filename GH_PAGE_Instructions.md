1. Install gh-pages
npm install gh-pages --save-dev

2. Open package.json
   1. Add homepage property
         "homepage""https://gitname.github.io/react-gh-pages"
   2. Add to scripts for predeploy and deploy:
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",

