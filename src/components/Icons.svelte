<script>
    export let height
    export let width
    import circle from "./assets/circle.svg"
    import star from "./assets/star.svg"

    import infinite from "./assets/infinite.svg"
    import guitar from "./assets/guitar.svg"
    import piano from "./assets/piano.svg"
    import drum from "./assets/drum.svg"

    let icons = [circle, star, infinite, guitar, piano, drum]
</script>

<img class="opacity-75" src="{icons[Math.floor(Math.random() * icons.length)]}" alt=""  style="position: absolute; top: {height}px; right: {width}px; transform: rotate({Math.floor(Math.random() * 360)}deg); z-index: -1">
