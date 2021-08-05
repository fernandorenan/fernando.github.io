
let btnSolo = document.querySelector('#btnSolo')
let secret = document.querySelector('#secret')

btnSolo.addEventListener('click', fazChiste)
let click = 0    

function fazChiste(){


if( click ===0 ) {
    btnSolo.innerHTML='Ou será que faz?';
    click++;
     
}
else if ( click === 1){
    btnSolo.innerHTML='Fez mesmo!';
    click++;
     
}
else if( click === 2){
    btnSolo.innerHTML='Agora acabou!';
    click++;
    
    secret.innerHTML='<p>Em breve apresento algo digno de portfolio, ou não.</p>'

}else{
    btnSolo.innerHTML='Esse botão não faz nada!';
    click = 0;
}

}