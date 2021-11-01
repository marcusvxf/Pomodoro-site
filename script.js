const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")
let acabar = true;
let pressionado = false;
let momento = 1;


const comecar = ()=>{
    if(pressionado == false){
        pressionado = true;
        if (momento == 1){
            relogio();
        }else if(momento == 8){
            minutos.innerHTML = 15;
            relogio();
        }else if ( momento%2 === 0){
            minutos.innerHTML = 5;
            relogio();
        }else{
            minutos.innerHTML = 25;
            relogio();
        }
    }

    
}

const relogio = ()=>{
    acabar = true;
    let timeInterval = setInterval(()=>{
        if(acabar == false){
            clearInterval(timeInterval);
        }
        else if(minutos.innerHTML == 0 && segundos.innerHTML == 00){
            song()
            momento = momento+1;
            pressionado = false;
            clearInterval(timeInterval);
        }else if(segundos.innerHTML == 00){ 
            minutos.innerHTML = parseInt(minutos.innerHTML)-1;
            segundos.innerHTML = 59;
        }else{
            segundos.innerHTML = parseInt(segundos.innerHTML) - 1;
        }        
    },1000);

}

const parar = ()=> {
    acabar = false;
    pressionado = false;
}

const song = () =>{
    var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    audio.play();
}