<script>
    import Icons from "../../components/Icons.svelte";
    $: innerWidth = window.innerWidth
    $: innerHeight = window.innerHeight

    window.addEventListener("resize", () => {
        innerWidth = window.innerWidth
        innerHeight = window.innerHeight
    })
   
</script>


<div class="left w-3/6 flex items-center m-4">
    <a href="/" class="bg-purple rounded-2xl flex items-center place-content-center justify-center p-2" >
        <svg width="156" height="37" viewBox="0 0 156 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3245 16.7614C20.4368 16.8296 21.5491 16.9661 22.6614 16.932C31.6988 16.7273 40.7014 16.5226 49.7389 16.2837C63.3993 15.9084 77.0249 15.5332 90.6853 15.1579C108.273 14.6802 125.827 14.1685 143.415 13.7249C146.404 13.6567 149.428 13.6908 152.418 13.7932C153.287 13.8273 154.225 14.1002 154.99 14.5437C155.511 14.8167 155.963 15.5673 155.998 16.1473C156.033 16.7273 155.616 17.6484 155.164 17.819C153.704 18.399 152.14 18.979 150.576 19.0472C137.854 19.6614 125.166 20.2072 112.445 20.719C92.8056 21.4696 73.1319 22.1519 53.4929 22.8684C47.0276 23.1072 40.5276 23.2778 34.0624 23.4825C32.533 23.5507 31.0036 23.6872 28.5009 23.8578C29.787 25.086 30.3432 25.7343 30.9688 26.2119C33.0196 27.7131 35.1747 29.0437 37.1212 30.6131C38.894 32.0801 39.2068 33.9566 38.2683 35.4577C37.2603 37.0954 35.6614 37.1636 33.9929 36.8565C33.3325 36.7201 32.6721 36.4471 32.0116 36.2083C23.5304 33.2742 15.0143 30.306 6.53308 27.3378C6.08121 27.2013 5.69885 26.9966 5.24698 26.7919C-1.25301 23.926 -1.6701 21.5719 3.75233 17.2731C7.15875 14.5779 10.7737 12.0873 14.3539 9.59672C18.3165 6.83321 22.3138 4.10382 26.3111 1.44266C29.0223 -0.365566 31.2122 -0.467918 32.533 1.10148C34.0277 2.87559 33.5063 5.46852 30.8993 7.5838C28.9528 9.1532 26.763 10.5179 24.6774 11.9167C22.8004 13.1791 20.8887 14.3732 19.0117 15.6014C19.1507 15.9426 19.2202 16.352 19.3245 16.7614Z" fill="#85E1D0"/>
            </svg>
    
    </a>

</div>
<h1 class="text-5xl lg:text-9xl text-purple z-40 self-center font-bold font-poppins px-16 my-16">

    Introdu????o Musical
    <svg width="129" height="16" viewBox="0 0 129 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8H120.507" stroke="#85E1D0" stroke-width="15" stroke-linecap="round"/>
        </svg>
        
</h1>


<div class="master flex flex-col" >

    <div class="box">
    
        <h2 class="text-5xl lg:text-7xl text-purple z-40 self-center font-bold font-poppins my-8 lg:mt-20 pl-16">
            Pauta
        </h2>
        
        <div class="box w-full lg:w-8/12 bg-cyan rounded-r-xl flex flex-row  lg:absolute">
            <div class="content w-full lg:w-6/12 p-8 self-center flex flex-row">
        
                <div class="text self-center w-full">
                    <p class="font-montserrat p-12 text-xl">
                        A m??sica, como regra geral, ?? escrita num conjunto de 5 linhas paralelas que chamamos de <strong>PAUTA</strong> ou <strong>PENTAGRAMA</strong> . Pauta ?? o nome do conjunto de linhas utilizado para escrever as notas musicais de uma partitura, no sistema de nota????o da m??sica ocidental. Atualmente, a pauta cont??m 5 linhas e por isso tamb??m ?? chamada ??s vezes de pentagrama. (Fonte: Bucher, 2003, p. 10)
                        
                    </p> 
        
                </div>
            </div>
        
            
        </div>
        <img src="/staff2.png" class="img p-4 my-16 lg:left-[746px] lg:top-16 self-center lg:relative" alt="">
    </div>
    
    <div class="box mt-32">
        
        <h2 class="text-5xl lg:text-7xl text-purple z-40 self-center font-bold font-poppins my-8 lg:mt-20 pl-16 ">
            Clave
        </h2>
        
{#each Array(20) as _, index (index)}
<Icons height={Math.floor(Math.random() * innerHeight)} width={Math.floor(Math.random() * innerWidth)}/>

{/each}
        
        <div class="box w-full bg-cyan rounded-r-xl flex flex-col ">
            <div class="content w-full  p-8 self-center flex flex-col place-content-center">
                
                <div class="text self-center w-full  flex flex-col lg:flex-row ">
                    <p class="font-montserrat p-12 text-xl">
                        Na teoria musical, a clave musical informa ao m??sico como ler a partitura, a clave indica a posi????o da nota musical na partitura, informando o nome e altura da nota; pois a nota????o musical ela ?? relativa e a nota pode ocupar qualquer linha ou espa??o na pauta. Cada tipo de clave define uma nota diferente de refer??ncia, modernamente existem quatro claves: D??, F??, Sol e neutra/r??tmica; que permitem a escrita para instrumentos/vozes que possuem tessituras diferentes (como graves e os agudos) evitando uso das linhas suplementares. 
                        <br><br>As v??rias claves existem para permitir a escrita para instrumentos musicais ou vozes, que possuem tessituras diferentes, ou seja, alguns s??o muito mais graves ou mais agudos do que os outros. Quando se utilizam apenas as cinco linhas e quatro espa??os da pauta, s?? ?? poss??vel representar nove notas musicais, mas a maior parte dos instrumentos possui uma extens??o muito maior, exigindo a utiliza????o de linhas e espa??os suplementares acima ou abaixo da pauta. O uso de at?? tr??s linhas suplementares acima ou abaixo ?? praticamente inevit??vel na maior parte das composi????es, mas se usarmos muitas linhas suplementares a leitura se torna muito dif??cil. Assim ao utilizar claves diferentes podemos fazer com que a maior parte das notas utilizadas pelo instrumento estejam representadas dentro da pauta e que o m??nimo de linhas suplementares sejam utilizadas.                     
                        </p> 
                        
                        <img src="/claves.png" class="img  my-8 self-center " alt="">
                    </div>
                </div>
                
                
            </div>
        </div>

        
        <div class="box mt-32">
            <h2 class="text-5xl lg:text-7xl text-purple z-40 self-center font-bold font-poppins my-8 lg:mt-20 pl-16 ">
                Notas Musicais
            </h2>
            <div class="box w-full bg-cyan flex flex-row">
                <div class="content w-full p-8 self-center place-content-center">
                    <div class="image self-center">
        
                        <img src="/notas.png" alt="" class="w-fit">
                    </div>
                    <div class="text font-montserrat p-12 text-xl">
                        <p>
                            Nota musical ?? um termo empregado para designar o menor elemento de um som, determinada por uma fonte sonora que durante um tempo de dura????o emite uma frequ??ncia sonora medida em hertz (Hz), a qual descrever?? em termos f??sicos se a nota ?? grave ou aguda, que pode ser representada por um s??mbolo em uma partitura ou letra em uma tablatura.
                            <br><br>
                            De forma geral, podemos relacionar as notas a um alfabeto musical que d?? possibilidade de associar determinadas frequ??ncias (ou conjuntos de frequ??ncias) a nomes comuns, viabilizando a composi????o de m??sicas ou qualquer outro tipo de manifesta????o sonora de forma clara e compreens??vel. Sem as notas musicais, uma partitura provavelmente seria escrita como uma sequ??ncia de n??meros relativamente extensos, correspondentes as frequ??ncias que se espera ouvir. 
                        </p>
                    </div>
                </div>
            </div>

        </div>
    
    
      
</div>    




{#each Array(20) as _, index (index)}
        <Icons height={Math.floor(Math.random() * innerHeight)} width={Math.floor(Math.random() * innerWidth)}/>
        
{/each}