import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDr_4lyW507EfeRPbG1ER6XSzAgHPYuQkM",
  authDomain: "goalcoachdes.firebaseapp.com",
  databaseURL: "https://goalcoachdes.firebaseio.com",
  projectId: "goalcoachdes",
  storageBucket: "goalcoachdes.appspot.com",
  messagingSenderId: "1084074632425"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
