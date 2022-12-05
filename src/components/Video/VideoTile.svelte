<script>
    import Controle from "./Controle.svelte"
    import NoVideo from "./NoVideo.svelte"
    import MicOn from "./assets/MicOn.svg"
    import MicOff from "./assets/MicOff.svg"

    export let participant
    export let callObject
    export let screen
    export let screensList

    let videoTrackSet= false
    let videoSrc

    $: videoTrack = participant?.tracks?.video
    $: screenTrack = screen?.tracks?.screenVideo


    $:{
        if(!screen && videoTrack.state == "playable" && !videoTrackSet) {
            videoSrc = new MediaStream([videoTrack.persistentTrack])
            videoTrackSet= true
        } else if(screen && screenTrack.state == "playable" && !videoTrackSet) {
            videoSrc = new MediaStream([screenTrack.track])
            videoTrackSet = true
        }
    }


    let audioTrackSet = false
    let audioSrc
    $: audioTrack = participant?.tracks?.audio

    $:{
        if(audioTrack?.state == "playable" && !audioTrackSet) {
            audioSrc = new MediaStream([audioTrack.persistentTrack])
            audioTrackSet = true
        }
    }


    function srcObject(node, stream) {
        node.srcObject= stream
        return  {
            update(newStream) {
                if(node.srcObject != newStream){
                    node.srcObject = newStream
                }
            }
        }
    }

</script>


<div class="p-12 w-screen justify-center content-center lg:w-3/6">
    {#if !videoSrc}
        <p>aaa</p>
        <!-- <NoVideo {participant} /> -->
        
    {:else}
    
        <video 
            autoplay
            muted
            playsinline
            use:srcObject={videoSrc}
            class="rounded-xl w-fit"
            
        />
            {#if participant?.local}
        
        
                <div class="controls justify-center content-center flex">
                    
                    <Controle {callObject} {screensList}/>
                </div>
            
            {/if}
            {#if participant?.video && !participant?.local}
                    <span class="visitor-icon justify-center flex content-center self-center">
                        <img src={participant?.audio? MicOn : MicOff} alt="">
                    </span>
                
            {/if}

        {/if}
    
        
        
        {#if !participant?.local && audioSrc}
        <audio autoplay playsinline use:srcObject={audioSrc}></audio>        
        {/if}
        
        {#if participant?.video && (!screen || screen?.length == 0)}
        
            <!-- <NoVideo {participant}/> -->
        
        
        {/if}
        
    

    

</div>