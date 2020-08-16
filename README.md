
# Parakeet
QR code app for users to leave reviews at restaurants and SMBS. Has a consumer side that is mobile first and allows the patrons to leave the reviews. Also has a business side where business owners can look at a dashboard of their reviews.

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

```npm run build && firebase serve``` to compile react files into src and public files into build and then serve to view changes

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

## Libraries

QR Code: https://davidshimjs.github.io/qrcodejs/

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
