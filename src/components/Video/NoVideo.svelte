<script>

    export let participant
    import MicOn from "./assets/MicOn.svg"
    import MicOff from "./assets/MicOff.svg"

</script>





<div class="p-12 w-max lg:w-screen">

    <div class="bg-purple ">
        <img src="{participant?.audio? MicOn : MicOff}" alt="">
    </div>

</div>