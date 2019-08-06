'use strict'
window.addEventListener('load',()=>{
    //Timers
    var tiempo
    function intervalo() {
        tiempo = setInterval(() => {
            console.log("Set interval ejecutado");
                 if (document.querySelector("#boton").style.background=="green"){
                     console.log("Cambia de color");
                 document.querySelector("#boton").style.background="blue";
                } else {
                    document.querySelector("#boton").style.background="green";}
         }, 1000);
    };


    function detener() {
        clearInterval(tiempo);
        console.log(tiempo);
    }
    
    //detener
    var stop = document.querySelector("#detener");
    stop.addEventListener("click",function(){
        detener();
        this.style.background="blue";
    });
    var start = document.querySelector("#boton");
    start.addEventListener("click",intervalo);
    // ejecuta solo una vez
    // var tiempo = setTimeout(() => {
    //     console.log("Set interval ejecutado");
    //          if (document.querySelector("#boton").style.background=="green"){
    //              console.log("Cambia de color");
    //          document.querySelector("#boton").style.background="blue";}
    //          else {document.querySelector("#boton").style.background="green";}
 
    //  //    
    //  }, 1000);
 

   

});
