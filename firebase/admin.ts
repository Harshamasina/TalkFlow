import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const initFirebaseAdmin = () => {
    const apps = getApps();
    if(!apps.length){
        const projectId = process.env.FIREBASE_PROJECT_ID?.replace(/^\"|\"$/g, "");
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL?.replace(/^\"|\"$/g, "");
        const privateKey = process.env.FIREBASE_PRIVATE_KEY
            ?.replace(/\\n/g, "\n")
            ?.replace(/^\"|\"$/g, "");

        initializeApp({
            credential: cert({
                projectId,
                clientEmail,
                privateKey,
            }),
        });
    }
    return {
        auth: getAuth(),
        db: getFirestore()
    }
}

export const { auth, db } = initFirebaseAdmin();
