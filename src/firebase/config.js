import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsj3JhaLJbacFbDszIh3J1L-3cgJk9v_I",
  authDomain: "wt-mini-upload.firebaseapp.com",
  projectId: "wt-mini-upload",
  storageBucket: "wt-mini-upload.appspot.com",
  messagingSenderId: "18953820147",
  appId: "1:18953820147:web:46f82d0f6024d06cb42486"
};


  // Initialize Firebase
initializeApp(firebaseConfig);

// const projectStorage=firebase.storage();
// const projectFirestore=firebase.firestore();
  export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

