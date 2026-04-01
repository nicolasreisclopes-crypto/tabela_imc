


import { calculo, imc } from "./imc.js";

var trs = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')


for (let index = 0; index <20 ; index++) {
 
    let tr = trs[index]
    let filhos = tr.children
    

    let peso = filhos[2].textContent
    let altura = filhos[3].textContent
    
   
    peso = parseFloat(peso)
    altura = parseFloat(altura)

 
    const imcConta = calculo(peso, altura)
    const imcTipo = imc(imcConta)

 
    filhos[4].textContent = imcConta
    filhos[5].textContent = imcTipo
    

}

trs.forEach(tr => {
    let filhos = tr.children
    
    let status = filhos[5]
    let pai = status.parentNode
       
    if(status.textContent == 'Abaixo do peso'){
        pai.style.backgroundColor = ' #eec6c6'
    } else if(status.textContent == 'Peso normal'){
       pai.style.backgroundColor = 'white'
    } else if(status.textContent == 'Sobrepeso'){
       pai.style.backgroundColor = ' #edf4d8'
    } else if(status.textContent == 'Obesidade grau I'){
       pai.style.backgroundColor = ' #cb9c9c'
    } else if(status.textContent == 'Obesidade grau II'){
        pai.style.backgroundColor = ' #6f3939'
    } else if(status.textContent == 'Obesidade grau III'){
        pai.style.backgroundColor = ' #350a0a'
    } 
    
})

// filtro na tabela
input.addEventListener('input', ()=>{

    //let texto = entrada.value
    let esconder = true

    trs.forEach(tr => {
        tr.visible = true
        let tds = tr.children
        
                
        if(!tds[5].textContent.includes(input.value)){
            tr.visible = false      
        }
        
        console.log(tr.visible)
        
        if(tr.visible){
            tr.style.display = 'table-row'
        } else {
            tr.style.display = 'none'
        }
        
    })
    console.log('----')

})