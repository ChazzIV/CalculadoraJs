
const p = {
    teclas: document.querySelectorAll('.calculadora ul li'),
    accion: null,
    digito: null,
    operaciones: document.querySelector('.operaciones'),
    cantSig: 0,
    cantDeci: false,
    resultado: false
}

const m = () => {
    for(let i =0; i<p.teclas.length; i++){
        p.teclas[i].addEventListener('click', (e) => {
            p.accion = e.target.getAttribute('id')
            p.digito = e.target.innerHTML;
            calculadora(p.accion, p.digito)    
        })
    }
} 

const calculadora = (a,digito) =>{
    switch(a){
        case 'numero': 
        p.cantSig = 0
            if(p.operaciones.innerHTML == 0){
               p.operaciones.innerHTML = digito
            }else {
                if(p.resultado){
                    p.resultado = false
                    p.operaciones.innerHTML = digito
                }else{
                    p.operaciones.innerHTML += digito
                }
            }
        break;
        case 'signo':
            p.cantSig ++ 
            if(p.cantSig == 1){
                if(p.operaciones.innerHTML == 0){
                    p.operaciones.innerHTML = 0
                }else {
                    p.operaciones.innerHTML += digito
                    p.cantDeci = false
                    p.resultado = false
                } 
            }
        break;
        case 'punto':
            if(!p.cantDeci){
                p.operaciones.innerHTML += digito
                p.cantDeci = true
                p.resultado = false
            } 
        break;
        case 'igual':
        p.operaciones.innerHTML = eval(p.operaciones.innerHTML)
        p.resultado = true
        break;
    }
}

borrar.addEventListener('click', ()=>{
    p.operaciones.innerHTML = 0;
})

m();

