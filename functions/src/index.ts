import * as functions from 'firebase-functions';
const Home = require('./docusaurus/src/page');

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const portfolio = functions.https.onRequest((request, response) => {
 response.send(Home);
});
