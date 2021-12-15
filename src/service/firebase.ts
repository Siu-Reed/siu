import { initializeApp } from 'firebase/app';
import { getDatabase , ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAVmj0ub6GHx4CntoXc7ZV_50mhA9vpucQ",
    authDomain: "siureed.firebaseapp.com",
    databaseURL: "https://siureed-default-rtdb.firebaseio.com",
    projectId: "siureed",
    storageBucket: "siureed.appspot.com",
    messagingSenderId: "46094653965",
    appId: "1:46094653965:web:1e5184f76c670ae61a1344",
    measurementId: "G-PCY8JSL5PZ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function writeSurveyData(resultId:number, tiger:number, retire:number, it:boolean, impression:string, why:string) {
    set(ref(database, 'results/' + resultId), {
        tiger,
        retire,
        it,
        impression,
        why
    })
    .then(() => {

    })
    .catch((e) => {

    });
}