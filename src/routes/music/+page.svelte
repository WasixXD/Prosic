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

    Introdução Musical
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
                        A música, como regra geral, é escrita num conjunto de 5 linhas paralelas que chamamos de <strong>PAUTA</strong> ou <strong>PENTAGRAMA</strong> . Pauta é o nome do conjunto de linhas utilizado para escrever as notas musicais de uma partitura, no sistema de notação da música ocidental. Atualmente, a pauta contém 5 linhas e por isso também é chamada às vezes de pentagrama. (Fonte: Bucher, 2003, p. 10)
                        
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
                        Na teoria musical, a clave musical informa ao músico como ler a partitura, a clave indica a posição da nota musical na partitura, informando o nome e altura da nota; pois a notação musical ela é relativa e a nota pode ocupar qualquer linha ou espaço na pauta. Cada tipo de clave define uma nota diferente de referência, modernamente existem quatro claves: Dó, Fá, Sol e neutra/rítmica; que permitem a escrita para instrumentos/vozes que possuem tessituras diferentes (como graves e os agudos) evitando uso das linhas suplementares. 
                        <br><br>As várias claves existem para permitir a escrita para instrumentos musicais ou vozes, que possuem tessituras diferentes, ou seja, alguns são muito mais graves ou mais agudos do que os outros. Quando se utilizam apenas as cinco linhas e quatro espaços da pauta, só é possível representar nove notas musicais, mas a maior parte dos instrumentos possui uma extensão muito maior, exigindo a utilização de linhas e espaços suplementares acima ou abaixo da pauta. O uso de até três linhas suplementares acima ou abaixo é praticamente inevitável na maior parte das composições, mas se usarmos muitas linhas suplementares a leitura se torna muito difícil. Assim ao utilizar claves diferentes podemos fazer com que a maior parte das notas utilizadas pelo instrumento estejam representadas dentro da pauta e que o mínimo de linhas suplementares sejam utilizadas.                     
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
                            Nota musical é um termo empregado para designar o menor elemento de um som, determinada por uma fonte sonora que durante um tempo de duração emite uma frequência sonora medida em hertz (Hz), a qual descreverá em termos físicos se a nota é grave ou aguda, que pode ser representada por um símbolo em uma partitura ou letra em uma tablatura.
                            <br><br>
                            De forma geral, podemos relacionar as notas a um alfabeto musical que dá possibilidade de associar determinadas frequências (ou conjuntos de frequências) a nomes comuns, viabilizando a composição de músicas ou qualquer outro tipo de manifestação sonora de forma clara e compreensível. Sem as notas musicais, uma partitura provavelmente seria escrita como uma sequência de números relativamente extensos, correspondentes as frequências que se espera ouvir. 
                        </p>
                    </div>
                </div>
            </div>

        </div>
    
    
      
</div>    




{#each Array(20) as _, index (index)}
        <Icons height={Math.floor(Math.random() * innerHeight)} width={Math.floor(Math.random() * innerWidth)}/>
        
{/each}