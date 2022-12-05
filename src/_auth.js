import admin from "firebase-admin"
import sdk from "./firestorekey.json"

admin.initializeApp({
    credential: admin.credential.cert(sdk),
    
})

let db = admin.firestore()


export default db