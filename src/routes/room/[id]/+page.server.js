import db from '../../../_auth';

const DAILY_API = import.meta.env.VITE_DAILY_API

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let collec = db.collection("rooms")
    let exist = await collec.where("room.name", "==", params.id).get()
    let room = {}

    if(!exist.empty) {
        //so entrar
        console.log("existe")


    } else {
        const res = await fetch("https://api.daily.co/v1/rooms", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${DAILY_API}`,
                'Content-type': "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({properties: {exp: Math.round(Date.now() / 1000) * 10}, name: params.id})
        })

       console.log(res)
        if(res.ok) {
            room = await res.json()
     
            
        } else {
            room = {error: "Could not create the room"}
            return 
        }
        await collec.add({room})

        
        
    }
    
}