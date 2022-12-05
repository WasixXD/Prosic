<script>
    import { onMount } from "svelte";
    import Dot from "../../components/Dot.svelte";
    import * as Tone from "tone"
    import Icons from "../../components/Icons.svelte";
    import "tw-elements"
    let current = 1
    $: bpm = 90
    $: max = 4
    let isPlaying = false
    
    let objectBeat = [1,2,3,4]
    onMount(() => {
         const buffer = new Tone.ToneAudioBuffer("https://tonejs.github.io/audio/casio/A1.mp3", () => {
            console.log("loaded")
        })

    })

    $: innerWidth = window.innerWidth
    $: innerHeight = window.innerHeight

    const loop = new Tone.Loop(time => {
        max = Number(max)
        const synt= new Tone.Synth().toDestination()
        Tone.Transport.bpm.value = bpm
       objectBeat = []
        for(let i = 1; i < max + 1; i++) {
            objectBeat.push(i)
        }
       if(current > max) {
        current = 1
       }
        if(current == max) {
            synt.triggerAttackRelease("C3", "8n", time)
            current = 1
        } else {
            current++
            synt.triggerAttackRelease("C4", "8n", time)
        }

        
        }, "4n").start(0)


   
    
    async function start() {
        
        await Tone.start()
        Tone.Transport.start()
        isPlaying = true
        
    }

    async function stop() {
        Tone.Transport.stop()
        isPlaying = false
    }


    
   
    window.addEventListener("resize", () => {
        innerWidth = window.innerWidth
        innerHeight = window.innerHeight

    })
    

</script>

<div class="app" >

  
    <div class="modal m-auto rounded-r-xl bg-purple z-40 fade fixed top-0 left-0 hidden w-4/6 h-screen outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable"  aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
          <div class="modal-content   relative flex flex-col w-full pointer-events-auto  bg-clip-padding rounded-md ">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
              <h5 class="text-3xl font-poppins text-white leading-normal " id="exampleModalCenteredScrollableLabel">
                Metrônomo e Tempo
              </h5>
              <button type="button"
                class="btn-close box-content z-40 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"> <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.8371 22.175C42.8371 21.9 42.6121 21.675 42.3371 21.675L38.2121 21.6937L31.9996 29.1L25.7934 21.7L21.6621 21.6812C21.3871 21.6812 21.1621 21.9 21.1621 22.1812C21.1621 22.3 21.2059 22.4125 21.2809 22.5062L29.4121 32.1937L21.2809 41.875C21.2053 41.9666 21.1634 42.0813 21.1621 42.2C21.1621 42.475 21.3871 42.7 21.6621 42.7L25.7934 42.6812L31.9996 35.275L38.2059 42.675L42.3309 42.6937C42.6059 42.6937 42.8309 42.475 42.8309 42.1937C42.8309 42.075 42.7871 41.9625 42.7121 41.8687L34.5934 32.1875L42.7246 22.5C42.7996 22.4125 42.8371 22.2937 42.8371 22.175Z" fill="#85E1D0"/>
                    <path d="M32 4.0625C16.5375 4.0625 4 16.6 4 32.0625C4 47.525 16.5375 60.0625 32 60.0625C47.4625 60.0625 60 47.525 60 32.0625C60 16.6 47.4625 4.0625 32 4.0625ZM32 55.3125C19.1625 55.3125 8.75 44.9 8.75 32.0625C8.75 19.225 19.1625 8.8125 32 8.8125C44.8375 8.8125 55.25 19.225 55.25 32.0625C55.25 44.9 44.8375 55.3125 32 55.3125Z" fill="#85E1D0"/>
                    </svg>
                    </button>
            </div>
            <div class="modal-body relative p-4 text-white">
              <h1 class="text-2xl text-white py-4 font-poppins">Utilização</h1>
              <p class="text-xl text-white-600 font-montserrat">Os músicos utilizam metrônomos para manter um tempo padrão, ou seja, um pulso regular ao longo de toda a composição ou uma de suas seções. Mesmo em peças que não possuem marcação rígida de tempo tempo rubato , um metrônomo pode ser usado para indicar o tempo em torno do qual as variações serão realizadas.

                Os compositores incluem marcações de metrônomo no início e no fim da partitura. Uma vez que alterações no tempo e no andamento podem ocorrer durante uma peça, é necessário estar atento a ambos para que erros de execução sejam evitados e a velocidade indicada para a peça seja tocada de maneira efetiva. Normalmente se considera que o Allegro (andamento)|allegro pode variar entre 120 e 168 batidas por minuto (bpm). </p>
                
                <h1 class="text-2xl text-white py-4 font-poppins">Tempo (Música) </h1>
                <p class="text-xl text-white font-montserrat">
                    Em musicologia, tempo rítmico, é a duração de cada unidade do compasso, e também indica o andamento (a velocidade) com que se deve executar um trecho de música (trecho chamado movimento), indicado por expressões técnicas de velocidade (como moderato, alegreto, marcha).

Na partitura ocidental, o tempo rítmico é representado por uma formula de compasso musical ou assinatura de tempo (também conhecida como assinatura do medidor ou assinatura de medida)um padrão usada na notação musical ocidental, para especificar quantas batidas (pulsos) estão contidas em cada compasso, e qual o valor da nota é equivalente a uma batida. A assinatura do tempo aparece no início da partitura, como um símbolo de tempo common time ou numerais empilhados 4/4 , seguindo a assinatura da chave (ou seguindo o símbolo da clave, se a assinatura da chave estiver vazia). Uma assinatura de tempo de pontuação média, geralmente seguindo uma linha de barra, indica uma mudança de medidor. 
                </p>

                <h1 class="text-2xl text-white py-4 font-poppins">Compasso</h1>
                <p class="text-xl text-white font-montserrat">Na notação musical, um compasso é uma forma de dividir quantitativamente em grupos os sons de uma composição musical, com base nas batidas e pausas (pulsos). Os compassos facilitam a execução musical, ao definir a unidade de tempo, o pulso e o ritmo da composição ou de partes dela. </p>
                <br>
                <p class="text-xl text-white font-montserrat"> Os compassos são divididos na partitura a partir de linhas verticais desenhadas sobre a pauta. A soma dos valores temporais das notas e pausas dentro de um compasso deve ser igual à duração, definida pela fórmula de compasso (ou fração de compasso, assinatura de tempo, assinatura de medida) que especifica quantas batidas (pulsos) estão contidas em cada compasso, e qual o valor da nota é equivalente a uma batida. A fórmula aparece no início da partitura da composição (as vezes no início de uma seção quando ocorre mudança na música) como um símbolo de tempo common time ou numerais empilhados 4/4 .</p>
                <figure class="text-center flex flex-col">
                    <img src="/compas.png" class="self-center" alt="">
                    <figcaption class="text-md text-white font-montserrat">Exemplo com três compassos</figcaption>

                </figure>

                <h1 class="text-2xl text-white py-4 font-poppins">Figuras Musicais</h1>
                <p class="text-xl text-white font-montserrat">
                    Valores ou figuras musicais são símbolos que representam o tempo de duração das notas musicais. São também chamados de valores positivos.

                    Os símbolos das figuras são usados para representar a duração do som a ser executado. As notas são mostradas na figura abaixo, por ordem decrescente de duração. Elas são: <strong>semibreve</strong> , <strong>mínima</strong> , <strong>semínima</strong> ,<strong>colcheia</strong> , <strong>semicolcheia</strong> , <strong>fusa</strong>  e <strong>semifusa</strong> . 
                </p>
                <figure class="text-center flex flex-col">
                    <img src="/valuesNotes.png" class="self-center" alt="">
                    <figcaption class="text-md text-white font-montserrat">Figuras Musicais em sequência</figcaption>

                </figure>

                <h1 class="text-2xl text-white py-4 font-poppins">Pausas</h1>
                <p class="text-xl text-white font-montserrat">
                    representam o tempo, uma pausa, em que o instrumento não produz sons, ou determinado som, As pausas se subdividem também como as figuras em termos de duração. Cada pausa dura o mesmo tempo relativo que sua figura correspondente, ou seja, a pausa mais longa corresponde exatamente à duração de uma semibreve. A correspondência é feita na seguinte ordem:  
                </p>
                <figure class="text-center flex flex-col">
                    <img src="/pausas.png" class="self-center" alt="">
                    <figcaption class="text-md text-white font-montserrat">Pausas em sequência</figcaption>

                </figure>
            </div>
            <div
              class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-2 rounded-b-md">
              <button type="button"
                class="inline-block z-40 px-6 py-2.5 bg-cyan text-purple font-poppins text-xl leading-tight uppercase rounded  ease-in-out"
                data-bs-dismiss="modal">
                FECHAR
              </button>
              
            </div>
          </div>
        </div>
      </div>



    <div class="top flex w-full p-8">
        <div class="left w-3/6 flex items-center">
            <a href="/" class="bg-purple rounded-2xl flex items-center place-content-center justify-center p-2" on:click={() => stop()}>
                <svg width="156" height="37" viewBox="0 0 156 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3245 16.7614C20.4368 16.8296 21.5491 16.9661 22.6614 16.932C31.6988 16.7273 40.7014 16.5226 49.7389 16.2837C63.3993 15.9084 77.0249 15.5332 90.6853 15.1579C108.273 14.6802 125.827 14.1685 143.415 13.7249C146.404 13.6567 149.428 13.6908 152.418 13.7932C153.287 13.8273 154.225 14.1002 154.99 14.5437C155.511 14.8167 155.963 15.5673 155.998 16.1473C156.033 16.7273 155.616 17.6484 155.164 17.819C153.704 18.399 152.14 18.979 150.576 19.0472C137.854 19.6614 125.166 20.2072 112.445 20.719C92.8056 21.4696 73.1319 22.1519 53.4929 22.8684C47.0276 23.1072 40.5276 23.2778 34.0624 23.4825C32.533 23.5507 31.0036 23.6872 28.5009 23.8578C29.787 25.086 30.3432 25.7343 30.9688 26.2119C33.0196 27.7131 35.1747 29.0437 37.1212 30.6131C38.894 32.0801 39.2068 33.9566 38.2683 35.4577C37.2603 37.0954 35.6614 37.1636 33.9929 36.8565C33.3325 36.7201 32.6721 36.4471 32.0116 36.2083C23.5304 33.2742 15.0143 30.306 6.53308 27.3378C6.08121 27.2013 5.69885 26.9966 5.24698 26.7919C-1.25301 23.926 -1.6701 21.5719 3.75233 17.2731C7.15875 14.5779 10.7737 12.0873 14.3539 9.59672C18.3165 6.83321 22.3138 4.10382 26.3111 1.44266C29.0223 -0.365566 31.2122 -0.467918 32.533 1.10148C34.0277 2.87559 33.5063 5.46852 30.8993 7.5838C28.9528 9.1532 26.763 10.5179 24.6774 11.9167C22.8004 13.1791 20.8887 14.3732 19.0117 15.6014C19.1507 15.9426 19.2202 16.352 19.3245 16.7614Z" fill="#85E1D0"/>
                    </svg>
            
            </a>

        </div>
        

        <div class="right w-3/6 flex place-content-end items-center" >


                <button type="button" class="bg-purple rounded-2xl flex items-center place-content-center justify-center" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1216 60.7928C17.0079 61.3684 17.3891 61.8314 17.9785 61.8269L50.2671 61.5777C50.8541 61.5732 51.2446 61.1012 51.1394 60.5232L47.9949 43.2807C47.8895 42.7029 47.563 42.645 47.2653 43.1513L44.8332 47.2903C44.5357 47.7968 44.379 48.6734 44.4844 49.2527L45.79 56.4326C45.8949 57.0103 45.5052 57.4783 44.9166 57.4783H23.5372C22.95 57.4783 22.5653 57.0122 22.6785 56.4371L30.507 16.6103L38.0614 16.4802L41.192 28.2819C41.3426 28.8501 41.7259 28.9157 42.0516 28.424L44.2807 25.0585C44.6048 24.569 44.7402 23.715 44.5833 23.15L42.0343 13.9859C41.7198 12.8552 40.511 11.9467 39.3414 11.9571L28.8782 12.0498C27.7054 12.0602 26.5704 13.0018 26.343 14.1514L17.1216 60.7928Z" fill="#85E1D0"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.375 52.8421C31.061 53.3375 31.2828 53.7391 31.8709 53.7391H35.1626C35.7506 53.7391 36.4822 53.3343 36.7943 52.8387L53.9404 25.6219C54.2538 25.1249 54.9779 24.6399 55.5543 24.5398L58.0993 24.097C58.6775 23.9963 59.2925 23.4648 59.4747 22.9027L60.7422 19.0007C60.9237 18.4418 60.7255 17.6635 60.2968 17.2595L57.2506 14.3897C56.8232 13.9867 56.0601 13.8951 55.5506 14.1825L52.4165 15.9502C51.9052 16.2387 51.4533 16.9474 51.4074 17.5318L51.1582 20.7105C51.1123 21.2954 50.8209 22.1709 50.5066 22.6663L31.3747 52.8421H31.375Z" fill="#85E1D0"/>
                        </svg>
            </button>
        </div>
        
        
    </div>
    <div class="middle w-full relative z-20">
        <div class="bpm text-center my-16 ">
            <div class="curve absolute -top-32 left-1 w-full flex place-content-center z-30">
                <svg  width="829" height="467" viewBox="0 0 829 467" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M819.658 467C821.863 449.811 823 432.288 823 414.5C823 188.892 640.108 6 414.5 6C188.892 6 6 188.892 6 414.5C6 432.288 7.137 449.811 9.34229 467H3.29318C1.11996 449.806 0 432.284 0 414.5C0 185.578 185.578 0 414.5 0C643.422 0 829 185.578 829 414.5C829 432.284 827.88 449.806 825.707 467H819.658Z" fill="#211A36"/>
                    </svg>

            </div>
            <h1 class="font-poppins text-9xl py-28 text-purple z-40">
                {bpm}
            </h1>
        </div>

    </div>
    <div class="dots font-montserrat flex flex-row place-content-center items-center">
        {#each objectBeat as number}
            <Dot active={current == number? true:false} number={number}/>
            
        {/each}
    </div>        

<div class="bottom w-full text-center flex flex-col xl:flex-row items-center pt-16">
    <div class="left font-poppins w-4/12 text-center">
        <p class="text-2xl text-purple py-4">Batidas</p>
        <select name="batidas" class="p-4 bg-stone-500 border rounded-xl focus:outline-none" id="batidas" placeholder="4" bind:value={max}>
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
            <option value=6>6</option>
            <option value=7>7</option>
            <option value=8>8</option>
            <option value=9>9</option>
            <option value=10>10</option>
            <option value=11>11</option>
            <option value=12>12</option>
        </select>
    </div>

    <div class="middle w-4/12 text-center my-8" >

        {#if isPlaying}
            
            <button class="bg-purple rounded-full p-8"  on:click={() => stop()}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_603_9)">
                    <path d="M22.898 7.11108H10.7025C8.67005 7.11108 7.02246 8.75868 7.02246 10.7911V53.2089C7.02246 55.2413 8.67005 56.8889 10.7025 56.8889H22.898C24.9304 56.8889 26.578 55.2413 26.578 53.2089V10.7911C26.578 8.75868 24.9304 7.11108 22.898 7.11108Z" fill="#85E1D0"/>
                    <path d="M53.1197 7.11108H40.9241C38.8917 7.11108 37.2441 8.75868 37.2441 10.7911V53.2089C37.2441 55.2413 38.8917 56.8889 40.9241 56.8889H53.1197C55.1521 56.8889 56.7997 55.2413 56.7997 53.2089V10.7911C56.7997 8.75868 55.1521 7.11108 53.1197 7.11108Z" fill="#85E1D0"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_603_9">
                    <rect width="64" height="64" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    
                </button>
        {:else}
        <button class="bg-purple rounded-full p-8"  on:click={() => start()}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 10.6667V53.3334M53.3333 32L16 53.3334M53.3333 32L16 10.6667" stroke="#85E1D0" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
        </button>

        
            
        {/if}

        
    </div>

    <div class="right w-4/12 text-center flex flex-col place-content-center">
        <p class="text-2xl text-purple py-4">BPM</p>
        <input type="number" name="bpm" id="textBpm" class="p-4 self-center bg-stone-500 xl:w-4/12 border rounded-xl focus:outline-none" placeholder="90" max="300" bind:value={bpm} on:click={(e) => e.preventDefault()}>
    </div>
    {#each Array(20) as _, index (index)}
        <Icons height={Math.floor(Math.random() * innerHeight)} width={Math.floor(Math.random() * innerWidth)}/>
        
    {/each}

</div>
    

</div>

<!-- Button trigger modal -->



<style>
    .app {
        overflow-y: hidden;
        overflow-x: hidden;
    }
</style>