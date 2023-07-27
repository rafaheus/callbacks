// setInterval(() => {
//     console.log('Olá Alunxs!')
// }, 2000)

 

// const imprimir = () => {
//      console.log('Olá Alunxs!')
//      clearInterval(interval)
//  }
//  const interval = setInterval(imprimir, 2000)
 
let numero = 10

const contador = setInterval(function(){
    console.log(numero)
    numero --
    if (numero === 0) {
        console.log('Bomba Explodiu')
        clearInterval(contador)
    }
    
}, 1000)


