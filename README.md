# PersonalTracker

## Plan of action

1. Create web app with https://github.com/Microsoft/TypeScript-React-Starter
2. Copy application from https://github.com/psgivens/MiscellaneousLinux/tree/master/Tracker/starter-1 . Polish as I go.
3. Create an API container with docker: https://github.com/psgivens/MiscellaneousLinux/tree/master/Tracker/PomodoroApi
4. Convert it client to an electron app as per https://github.com/psgivens/MiscellaneousLinux/tree/master/Tracker/ElectronClient

### References

* https://github.com/Microsoft/TypeScript-React-Starter
* https://hackernoon.com/building-a-website-with-react-and-bulma-d655214bff2a

### Pomodoro Specifications
https://docs.google.com/document/d/1-UGs1sjak47g3rOUxxQdHw2YaLRaX6qU79luKfSk_-g/edit

### Install Log

    sudo npm install -g create-react-app
        
    create-react-app webapp --scripts-version=react-scripts-ts
   

Copy dependencies to packages.json and add the following to scripts section. Change all script sections from `react-scripts` to `react-scripts-ts`.
    
    "build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",

Then call `npm install`. 
    
    npm install -g typescript

### Problem Log    
    
Ran into problems running `npm start`. I installed ts-jest. `npm install ts-jest`. The problem went way, but I don't know if this was the fix. 

