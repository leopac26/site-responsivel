var tempo;
function rolar(e){
   if(e){
      var el = document.querySelector("#conteudo");
      tempo = setInterval(function(){
         var doc_scrl = document.documentElement.scrollTop;
         
         if(el.offsetTop-doc_scrl <= window.innerHeight-el.offsetHeight){ // aqui é quando a janela chega ao fim
            clearInterval(tempo);
         }else{
            window.scroll(0,doc_scrl+2);
         }
      }, 500);

   }else{
      clearInterval(tempo);
   }
}

   




/*teste de javascript para trocar cifras


  $(function() {
    $( "#tabs" ).tabs();

    document.getElementById('cifra').innerHTML =
   
    "<button id='menos-meio-tom'>-1/2 tom</button>" +
    "<button id='mais-meio-tom'>+1/2 tom</button>" +
    "</div></center><br/><br/>" + document.getElementById('cifra').innerHTML;

 

    $( "#menos-meio-tom" ).button()
    .click(function() {

        var cifras = document.getElementsByTagName ('b');

        for (i = 0; i < cifras.length; i++) {
            if(!mapMenosMeioTom[cifras.innerHTML]){
                console.log('Cifra no mapeada');
                continue;
            }

            cifras.innerHTML = mapMenosMeioTom[cifras.innerHTML];
        }

    });

    $( "#mais-meio-tom" ).button()
    .click(function() {

        var cifras = document.getElementsByTagName ('b');

        for (i = 0; i < cifras.length; i++) {
            if(!mapMaisMeioTom[cifras.innerHTML]){
                console.log('Cifra no mapeada', cifras.innerHTML);
                continue;
            }

            cifras.innerHTML = mapMaisMeioTom[cifras.innerHTML];
        }

    });

  });*/
  
  





