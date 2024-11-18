import { initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl1xpYV9Cy4WaQAsobzj03Ph2kiAh4rs8",
  authDomain: "birdies-43bf5.firebaseapp.com",
  databaseURL: "https://birdies-43bf5-default-rtdb.firebaseio.com",
  projectId: "birdies-43bf5",
  storageBucket: "birdies-43bf5.appspot.com",
  messagingSenderId: "171158465948",
  appId: "1:171158465948:web:7abdb19da6f47defdf2c59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database and storage instances
export const database = getDatabase(app);
export const storage = getStorage(app);
