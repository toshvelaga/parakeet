
# Parakeet
QR code app for users to leave reviews at restaurants and collect rewards.

## Parakeet Summary
https://docs.google.com/document/d/1sqc-CRj6KMgcFMMrjJoKsm28HoNYheImF92kH5gRjQs/edit?usp=sharing

## Design v1
https://xd.adobe.com/view/541548dd-2672-4e63-488b-a532dd783f2d-2224/

## Task List & Product Features

https://trello.com/b/Izbdyppk/spot-mvp

## Setup Dev Environment

```npm init```

```npm install --save firebase``` to install firebase to the web app

```firebase login``` to login to the firebase project

```firebase serve``` to test your dev instance locally at http://localhost:5000/

```firebase deploy``` to deploy app to firebase server at https://spot-f43fe.firebaseapp.com/ or "https://feedback-9ac15.firebaseio.com"

## Project Firebase Console

https://console.firebase.google.com/u/2/project/feedback-9ac15/overview
https://console.firebase.google.com/u/2/project/spot-f43fe/overview

## Cloud Firestore

Cloud Firestore for reading and writing data:

https://firebase.google.com/docs/firestore/

## Deployment

```firebase use --add``` to add another project to web app

```firebase use staging``` to use Spot environment

```firebase use default``` to use feedback environment

## Project Config

Staging - Spot
```
const firebaseConfig = {
  apiKey: "AIzaSyCoxNUQY1HgEBT_Gj4wt73zRJOpRJrdQH4",
  authDomain: "spot-f43fe.firebaseapp.com",
  databaseURL: "https://spot-f43fe.firebaseio.com",
  projectId: "spot-f43fe",
  storageBucket: "spot-f43fe.appspot.com",
  messagingSenderId: "818173559737",
  appId: "1:818173559737:web:9a17477c137f0a2fccac68",
  measurementId: "G-ZCG4509038"
};
```

Default - Feedback

```
const firebaseConfig = {
  apiKey: "AIzaSyDPoVhmh6ABuI2DJU7SkVwUuk0uiXXBknI",
  authDomain: "feedback-9ac15.firebaseapp.com",
  databaseURL: "https://feedback-9ac15.firebaseio.com",
  projectId: "feedback-9ac15",
  storageBucket: "feedback-9ac15.appspot.com",
  messagingSenderId: "863851276653",
  appId: "1:863851276653:web:dba487e0edb8094de49264",
  measurementId: "G-2DMDTT8Q6Z"
};
```

Production - Spotvue
```
const firebaseConfig = {
  apiKey: "AIzaSyCxf0jvqQhrIk67yLBGbGRIV8IbVuR4hDE",
  authDomain: "spotvue-f9d5d.firebaseapp.com",
  databaseURL: "https://spotvue-f9d5d.firebaseio.com",
  projectId: "spotvue-f9d5d",
  storageBucket: "spotvue-f9d5d.appspot.com",
  messagingSenderId: "28438992980",
  appId: "1:28438992980:web:1e1073ac0ac364f7ca35c1",
  measurementId: "G-QJ6BCT9PVQ"
};
```

## Firebase Security Database Rules

```
// Allow read/write access to all users under any conditions
// Warning: **NEVER** use this rule set in production; it allows
// anyone to overwrite your entire database.
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

## Git Workflow

1. Create your own dev branch off the ```HEAD``` of master branch 
    
    ```git branch -a``` to view all remote branches
    
    ```git fetch``` to fetch remote branches

    ```git checkout --track origin/<branch_name>``` to check out of the remote branch

2. Pull request to master branch based on your dev branch

3. Scrum master reviews the pull request to merge into master branch OR if you are confident you can merge your own pull request but make sure there are no errors. 

4. Always check master branch to be sure it is clean and working at end of the day.

Notes: 

To delete a remote branch: ```git push <remote_name> --delete <branch_name>```

To delete a local branch: ```git branch -D <branch_name>```

## Design

Foundation: https://foundation.zurb.com/sites/docs/

## Libraries

QR Code: https://davidshimjs.github.io/qrcodejs/

## Hosting

www.bluehost.com








## React Stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
