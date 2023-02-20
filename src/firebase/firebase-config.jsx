import { initializeApp } from 'firebase/app';
import{
   collection,
   getFirestore
} from 'firebase/firestore';

import {GoogleAuthProvider , getAuth} from 'firebase/auth';


const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
   storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
   messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
   appId: import.meta.env.VITE_FIREBASE_APP_ID
}

initializeApp(firebaseConfig)
export const auth = getAuth()
export const database = getFirestore()
export const provider = new GoogleAuthProvider()
export const formDataCollectionRef = collection(database,'formData')
export const usersSubmittedFormCollectionRef = collection(database,'usersSubmittedFormData')