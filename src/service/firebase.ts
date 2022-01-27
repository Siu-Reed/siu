import { initializeApp } from 'firebase/app';
import { getDatabase , ref, push } from "firebase/database";
import { SubmitObject } from '../interface/interface';

const firebaseConfig = {
    apiKey : process.env.REACT_APP_API_KEY,
    authDomain : process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL : process.env.REACT_APP_DATABASE_URL,
    projectId : process.env.REACT_APP_STORAGE_BUCKET,
    storageBucket : process.env.REACT_APP_PROJECT_ID,
    appId : process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function writeSurveyData(submit: SubmitObject) {
    const date = new Date();
    await push(ref(database, '/'), {
        ...submit,
        date : date.toLocaleDateString('ko-KR')
    });
}