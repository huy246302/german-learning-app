import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Save a new word
export const saveWord = async (word, translation) => {
  try {
    await addDoc(collection(db, "vocabulary"), {
      word,
      translation,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Fetch all words
export const getWords = async () => {
  const querySnapshot = await getDocs(collection(db, "vocabulary"));
  return querySnapshot.docs.map((doc) => doc.data());
};
