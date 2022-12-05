
<script>
    
    import { onMount } from "svelte";
    import { browser } from "$app/environment"
    import daily from "@daily-co/daily-js"
    import { page } from "$app/stores"
    import VideoTile from "../../../components/Video/VideoTile.svelte"
    let participants = []
    let callObject
    $: screensList = participants?.filter((p) => p?.screen)

    
    onMount(() => {
        if(!browser)  return
        createAndJoinCall()
    })

    async function createAndJoinCall() {
        const roomName = $page.params.id
        const domain = import.meta.env.VITE_DAILY_DOMAIN
        const url = `https://${domain}/${roomName}`

        callObject = daily.createCallObject({ url, userName: "Test"})

        function updateParticipants(e) {
        
            if(!callObject) return
            participants = Object.values(callObject.participants())
        }


        function handleMeeting(e) {
            console.log("[joined]",e)
            updateParticipants(e)
        }

        callObject
            .on("joining-meeting", updateParticipants)
            .on("joined-meeting", handleMeeting)
            .on("partipant-joined", updateParticipants)
            .on("participant-left", updateParticipants)
            .on("participant-updated", updateParticipants)

        try {
            await callObject.join()
            

        } catch (e) {
            alert(e)
        }
        
    }




    
    function copyLink() {
        var copyText = window.location
        
    

        navigator.clipboard.writeText(copyText)
       
    }
    
 
        
        
</script>




<body class="bg-stone-500">


    <div class="top flex flex-row w-full p-16">

        <div class="left w-6/12 flex content-center">
            <a href="/" class="width-6/12 self-center">
                <svg width="156" height="37" viewBox="0 0 156 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3245 16.7614C20.4368 16.8296 21.5491 16.9661 22.6614 16.932C31.6988 16.7273 40.7014 16.5226 49.7389 16.2837C63.3993 15.9084 77.0249 15.5332 90.6853 15.1579C108.273 14.6802 125.827 14.1685 143.415 13.7249C146.404 13.6567 149.428 13.6908 152.418 13.7932C153.287 13.8273 154.225 14.1002 154.99 14.5437C155.511 14.8167 155.963 15.5673 155.998 16.1473C156.033 16.7273 155.616 17.6484 155.164 17.819C153.704 18.399 152.14 18.979 150.576 19.0472C137.854 19.6614 125.166 20.2072 112.445 20.719C92.8056 21.4696 73.1318 22.1519 53.4929 22.8684C47.0276 23.1072 40.5276 23.2778 34.0624 23.4825C32.533 23.5507 31.0036 23.6872 28.5009 23.8578C29.787 25.086 30.3432 25.7343 30.9688 26.2119C33.0196 27.7131 35.1747 29.0437 37.1212 30.6131C38.894 32.0801 39.2068 33.9566 38.2683 35.4577C37.2603 37.0954 35.6614 37.1636 33.9929 36.8565C33.3325 36.7201 32.6721 36.4471 32.0116 36.2083C23.5304 33.2742 15.0143 30.306 6.53308 27.3378C6.08121 27.2013 5.69886 26.9966 5.24698 26.7919C-1.253 23.926 -1.67011 21.5719 3.75234 17.2731C7.15875 14.5779 10.7737 12.0873 14.3539 9.59672C18.3165 6.83321 22.3138 4.10382 26.3111 1.44266C29.0223 -0.365565 31.2122 -0.467917 32.533 1.10148C34.0277 2.87559 33.5063 5.46851 30.8993 7.58379C28.9528 9.1532 26.763 10.5179 24.6774 11.9167C22.8004 13.1791 20.8887 14.3732 19.0117 15.6014C19.1507 15.9426 19.2202 16.352 19.3245 16.7614Z" fill="#211A36"/>
                    </svg>
    
    
            </a>


        </div>

        <div class="right w-6/12 flex content-center justify-end">

            
            <button on:click="{copyLink}" class="inline-block p-4 m-4 text-sm font-montserrat font-bold bg-cyan rounded transition hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                COPIAR LINK
            </button>
        </div>
                
    </div>

    <div class="middle w-screen flex flex-col content-center justify-center lg:flex-row">

        <!-- svelte-ignore a11y-media-has-caption -->        <!-- svelte-ignore a11y-media-has-caption -->

       {#each participants as participant}
        
            <VideoTile 
            {participant}
            {callObject}
            {screensList}

            />

            
           
       {/each}
       
    </div>
    

   

</body>