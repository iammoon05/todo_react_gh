1. Install gh-pages
npm install gh-pages --save-dev

2. Open package.json
   1. Add homepage property
         "homepage""https://gitname.github.io/react-gh-pages"
   2. Add to scripts for predeploy and deploy:
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",

3. Push everything to your github repo
   1. git remote add origin https://github.com/gitname/react-gh-pages.git

4. Go to settings page
   1. From the side bar Code and Automation section -> Pages


"deploy": "gh-pages -b main -d build"