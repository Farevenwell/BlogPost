import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "@firebase/firestore"
import {getReactNativePersistence, initializeAuth} from "@firebase/auth"
import {SecureStorePersistence} from "@/services/util/StorePreferences"

const firebaseConfig = {
    apiKey: "AIzaSyD6DGCt8tjTWdjbFEAm_o9T6d1lr4MsYGY",
    authDomain: "blogpost-54ff8.firebaseapp.com",
    projectId: "blogpost-54ff8",
    storageBucket: "blogpost-54ff8.appspot.app",
    messagingSenderId: "691176707940",
    appId: "1:691176707940:web:70eeafc8b24b5ef2928c71",
    measurementId: "G-7GZXS8WK16"
}

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
