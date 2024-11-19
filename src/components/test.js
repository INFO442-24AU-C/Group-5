import React, { useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, set } from "firebase/database";

const FirebaseTest = () => {
  useEffect(() => {
    const testFirebaseConnection = async () => {
      try {
        await set(ref(database, "test"), { message: "Hello Firebase!" });
        console.log("Firebase test write successful!");
      } catch (error) {
        console.error("Firebase test write failed:", error);
      }
    };

    testFirebaseConnection();
  }, []);

  return <div>Testing Firebase connectivity... Check the console for results.</div>;
};

export default FirebaseTest;