// firebaseFirestore.js

import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Fetch all words from Firestore
export const getWords = async () => {
  const querySnapshot = await getDocs(collection(db, "vocabulary"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add a new word to Firestore
export const saveWord = async (word, translation) => {
  await addDoc(collection(db, "vocabulary"), { word, translation });
};

// Update an existing word in Firestore
export const updateWord = async (id, word, translation) => {
  const wordRef = doc(db, "vocabulary", id);
  await updateDoc(wordRef, { word, translation });
};

// Delete a word from Firestore
export const deleteWord = async (id) => {
  const wordRef = doc(db, "vocabulary", id);
  await deleteDoc(wordRef);
};
