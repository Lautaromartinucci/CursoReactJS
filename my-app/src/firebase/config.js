
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXkjmHA1HC--VwDgapAxpz2EUA8KNorOs",
  authDomain: "miproyecto-ea547.firebaseapp.com",
  projectId: "miproyecto-ea547",
  storageBucket: "miproyecto-ea547.appspot.com",
  messagingSenderId: "630215782247",
  appId: "1:630215782247:web:ec0fe228d0759269d909c2",
  measurementId: "G-ECRMTYJBFV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const getFirestoreApp = () => {
    return app;
}

