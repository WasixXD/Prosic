<script>
    import daily from "@daily-co/daily-js"
    import { onMount } from "svelte";
    import { browser } from "$app/environment"

    import { goto } from '$app/navigation';
    import CamOn from "./assets/CamOn.svg"
    import CamOff from "./assets/CamOff.svg"
    import MicOn from "./assets/MicOn.svg"
    import MicOff from "./assets/MicOff.svg"
    import Leave from "./assets/Leave.svg"



    export let callObject
    
    let camOn
    let micOn
    let browserSupport

    async function LeaveCall(){
        if(!callObject) return
        await callObject.leave()
        await callObject.destroy()
        goto("/")
    }

    function activeVideo() {
        if(!callObject) return
        const currentVid = callObject.localVideo()
        camOn = !currentVid
        callObject.setLocalVideo(!currentVid)
        
    }
    
    function activeAudio() {
        if(!callObject) return
        const currentAud = callObject.localAudio()
        micOn = !currentAud
        callObject.setLocalAudio(!currentAud)
        
    }

    function GetLocalDevices() {
        if(!callObject) return
        camOn = callObject.localVideo()
        micOn = callObject.localAudio()
    }

    onMount(() => {
        if(browser) {
            browserSupport = daily?.supportedBrowser
        }
        GetLocalDevices()
    })
</script>



<div class="main control flex justify-center bg-cyan rounded w-fit">
    <div class="devices justify-center content-center">
        <button on:click={activeVideo} class="p-4">
                <img src={camOn? CamOn : CamOff} alt="Active Cam">
        </button>


        <button on:click={activeAudio} class="p-4">
            <img src={micOn? MicOn : MicOff} alt="Active Mic">
        </button>
        
        
        <button on:click={LeaveCall} class="p-4">
            <img src={Leave} alt="Active Mic">
        </button>


    </div>

      

</div>