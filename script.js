//Carlos Agüero Marquizani
//TNS Informática m/ Ciberseguridad
//Evaluación Final

//Esto va a gitlab
//Obtener el DOM del body html más color de fondo

const body = document.body
body.style.backgroundColor = '#C3F8FF'

//Creación del elemnto center para centrar el contenido de la página
const centro = document.createElement('center')
body.appendChild(centro)

//Creación de un div que va contener todos los elementos más tamaño, color de fondo y redondeo de bordes
const cajaCompleta = document.createElement('div')
cajaCompleta.style.backgroundColor = '#ABD9FF'
cajaCompleta.style.width = '400px'
cajaCompleta.style.borderRadius = '15px'
centro.appendChild(cajaCompleta)

//función utilizada para crear saltos de linea
const saltoLinea = () =>{
    let br = document.createElement('br')
    cajaCompleta.appendChild(br)
  }

//Creación de un h1 para el titulo de la página más color y tipo de fuente
const titulo1 = document.createElement('h1')
titulo1.innerHTML = '🍀 Polla Chilena de Beneficiencia 💵'
titulo1.style.textAlign = 'center'
titulo1.style.fontFamily = 'monospace'
titulo1.style.color = '#0D4C92'
cajaCompleta.appendChild(titulo1)

//Creación de botón instrucciones más estilizado
let buttonInst = document.createElement('button')
buttonInst.innerText = 'Instrucciones ⚠️'
buttonInst.style.backgroundColor = '#FFFF00'
buttonInst.style.border = '4px solid #FCE700'
buttonInst.style.borderRadius = '4px'
buttonInst.style.width = '140px'
buttonInst.onclick = () => instrucciones()
cajaCompleta.appendChild(buttonInst)

let buttonPremios = document.createElement('button')
buttonPremios.innerText = 'Premios 🏆'
buttonPremios.style.backgroundColor = '#FF8D29'
buttonPremios.style.border = '4px solid #FFCD38'
buttonPremios.style.borderRadius = '4px'
buttonPremios.style.width = '100px'
buttonPremios.onclick = () => premios()
cajaCompleta.appendChild(buttonPremios)
saltoLinea()

//Creación de texto y input del usuario más el botón
const nomUser = document.createElement('label')
nomUser.innerText = 'Ingrese Nombre: '
nomUser.style.fontFamily = 'Helvetica'
cajaCompleta.appendChild(nomUser)
let inputUser = document.createElement('input')
    inputUser.id = 'inputUser'
    inputUser.placeholder = 'Ej. Carlos Agüero'
    cajaCompleta.appendChild(inputUser)
let buttonUser = document.createElement('button')
buttonUser.innerText = 'Aceptar'
buttonUser.style.backgroundColor = '#7EC6FE'
buttonUser.style.border = '4px solid #034980'
buttonUser.style.borderRadius = '4px'
buttonUser.onclick = () => botonUser()
cajaCompleta.appendChild(buttonUser)
saltoLinea()

//Creación del texto polla
const nomPolla = document.createElement('label')
nomPolla.innerText = 'Polla'
nomPolla.style.fontFamily = 'Helvetica'
cajaCompleta.appendChild(nomPolla)
saltoLinea()

//Creación de los seis inputs para la polla
  for(let i = 0;  i <= 5; ++i){
    let inputPolla = document.createElement('input')
    inputPolla.setAttribute('type','number')
    inputPolla.className = 'inputPolla'
    inputPolla.value = 0
    cajaCompleta.appendChild(inputPolla)
    saltoLinea()
  }

//Creación del texto Jugador
const nomJugador = document.createElement('label')
nomJugador.innerText = 'Jugador: '
nomJugador.style.fontFamily = 'Helvetica'
cajaCompleta.appendChild(nomJugador)
saltoLinea()

//Creación del texto Jugador, luego este toma el lugar del nombre del usuario con la funcion
const nomJugadorEstatico = document.createElement('label')
nomJugadorEstatico.innerText = ''
nomJugadorEstatico.style.fontFamily = 'Helvetica'
nomJugadorEstatico.id = 'nomJugadorEstatico'
cajaCompleta.appendChild(nomJugadorEstatico)
saltoLinea()

//Creación de los seis inputs para el usuario
  for(let i = 0;  i <= 5; ++i){
    let inputJugador = document.createElement('input')
    inputJugador.setAttribute('type','number')
    inputJugador.className = 'inputJugador'
    inputJugador.value = 0
    cajaCompleta.appendChild(inputJugador)
    saltoLinea()

  }

// Creación de los botones Polla, Suerte y Jugar otra vez
let buttonPolla = document.createElement('button')
buttonPolla.innerText = 'Polla ⚽'
buttonPolla.style.backgroundColor = '#F3CCFF'
buttonPolla.style.border = '4px solid #3F0071'
buttonPolla.style.borderRadius = '4px'
buttonPolla.style.width = '100px'
buttonPolla.onclick = () => aleatorioPolla()
cajaCompleta.appendChild(buttonPolla)

let buttonJugador = document.createElement('button')
buttonJugador.innerText = 'Suerte 🍀'
buttonJugador.style.backgroundColor = '#F0FF42'
buttonJugador.style.border = '4px solid #379237'
buttonJugador.style.borderRadius = '4px'
buttonJugador.style.width = '100px'
buttonJugador.onclick = () => aleatorioJugador()
cajaCompleta.appendChild(buttonJugador)

let buttonAgain = document.createElement('button')
buttonAgain.innerText = 'Jugar Otra Vez 🔴'
buttonAgain.style.backgroundColor = '#FF7D7D'
buttonAgain.style.border = '4px solid #EA047E'
buttonAgain.style.borderRadius = '4px'
buttonAgain.style.width = '150px'
buttonAgain.onclick = () => limpiar()
cajaCompleta.appendChild(buttonAgain)



//Función para agregar el nombre del usuario
botonUser = () => {
  inputUsuario = document.getElementById('inputUser')
  textoDinamicoUser = document.getElementById('nomJugadorEstatico')
  textoDinamicoUser.innerText = inputUsuario.value
}
//Función para premios
premios = () =>{
  alert(`"Premios 🏆"
  "Premio Mayor el LOTO 🍀" 
  Se obtiene acertando los 6 números del loto
  Monto: $1.000.000 CLP

  "Quina 🎖️"
  Se obtiene acertando 5 números del loto
  Monto: $700.000 CLP

  "Cuterna 🏅"
  Se obtiene acertando 4 números del loto
  Monto: $400.000 CLP

  "Terna 🥉"
  Se obtiene acertando 3 números del loto
  Monto: $200.000 CLP
  `
)
}
//Función para las Instrucciones
instrucciones = () =>{
  alert(`"Bienvenido a polla Chilena"
  1.- Ingrese su nombre.
  2.- Click en botón "Polla" para generar números aleatorios a sortear.
  3.- Click en botón "Suerte" para generar sus números aleatorios.
  4.- Usted cuenta con 6 intentos.
  5.- Click "Jugar otra vez" para comenzar desde cero. OJO 👀 *El registro se elimina por completo.
  6.- Mucha Suerte 🍀`
)
}

//Función que permite generar numeros al azar en los inputs de polla ya creados
aleatorioPolla = () =>{
    inputs = document.querySelectorAll('.inputPolla')
      for(let i=0; i <= 5; i++ ){
        var lanzar = 42
        while ((lanzar >= 42)||((lanzar <= 1))){
          lanzar = Math.round(Math.random()*42)
        }
        inputs[i].value = lanzar
      }
    } 

//Creación del div que contiene las jugadas del usuario
const divJugadas = document.createElement('div')
divJugadas.style.backgroundColor = '#FFF6BF'
divJugadas.id = 'divJugadas'
cajaCompleta.appendChild(divJugadas)

//Inicialización de contador
let jugadas = 0


//Creación del div que contiene la felicitacón del usuario
const divFelicitaciones = document.createElement('div')
divFelicitaciones.style.backgroundColor = '#FFEBAD'
cajaCompleta.appendChild(divFelicitaciones)

//Creación del label que contiene la felicitacón del usuario
const textoEstatico = document.createElement('label')
textoEstatico.style.fontFamily = 'Helvetica'
textoEstatico.style.fontSize = '30px'
textoEstatico.innerText = ' '
textoEstatico.id = 'textoEstatico'
divFelicitaciones.appendChild(textoEstatico)

//Función que actua con el boton suerte
aleatorioJugador = () =>{
    //llamamos a los elementos a utilizar
    inputs = document.querySelectorAll('.inputJugador')
    inputsPolla = document.querySelectorAll('.inputPolla')
    const nomJugadas = document.getElementById('textoEstatico')
    inputUsuario = document.getElementById('inputUser').value

    let cont = 0
    //contador 
    jugadas++
    //condicional para no superar las 6 tiradas
    if (jugadas <= 6){
        //ciclo for que nos permite llenar con numeros aleatorios los inputs del usuario 
        for(let i=0; i <= 5; i++ ){
            var lanzar = 42
            while ((lanzar >= 42)||((lanzar <= 1))){
            lanzar = Math.round(Math.random()*42)
                }
          inputs[i].value = lanzar
            }
            //push para agregar al construcctor
            jugadorConst.push({
              n1: inputs[0].value,
              n2: inputs[1].value,
              n3: inputs[2].value,
              n4: inputs[3].value,
              n5: inputs[4].value,
              n6: inputs[5].value
            })
            //ciclo for que nos permite recorrer los numero del jugador y las condicionales para preguntar si el index 0,1,2 etc. es igual a los index del usuario compara el valor de estos
          for(let i=0; i <= 5; i++ ){
            if(inputsPolla[0].value == inputs[i].value){
              cont = cont + 1
              console.log(cont)
          }
            if(inputsPolla[1].value == inputs[i].value){
              cont = cont + 1
              console.log(cont)
          }
            if(inputsPolla[2].value == inputs[i].value){
              cont = cont + 1
              console.log(cont)
          }
            if(inputsPolla[3].value == inputs[i].value){
              cont = cont + 1
              console.log(cont)
          }
            if(inputsPolla[4].value == inputs[i].value){
              cont = cont + 1
              console.log(cont)
          }
            if(inputsPolla[5].value == inputs[i].value){
              cont = cont + 1
              console.log(cont)
          }
                  }
          //se crea el div que contine los numero a mostrar
          let numeros = document.createElement('div')
          numeros.className = 'cajaNumeros'
          numeros.style.fontFamily = 'Helvetica'
          numeros.innerHTML = `<label>Jugada N°${jugadas}: ${inputs[0].value}, ${inputs[1].value}, ${inputs[2].value}, ${inputs[3].value}, ${inputs[4].value}, ${inputs[5].value}, N° Acertados: ${cont}</label> `
          divJugadas.appendChild(numeros)
          
          //Estas condicionales nos sirve para distinguir si nuestro usuario obtuvo tenar, cuaterna, quina y el loto.
          if(cont < 3){
            nomJugadas.innerText = `Mala suerte ${inputUsuario} 😔, la tirada no reúne los requisitos para ganar.`
            divFelicitaciones.appendChild(nomJugadas)
            console.log("entro en menos 3")
          }
          if(cont == 3){
            nombreJugada = 'terna'
            nomJugadas.innerText = `Felicitaciones! 🎊 ${inputUsuario} 🎉 ganaste $200.000CLP💵 realizando una ${nombreJugada} en tu jugada N° ${jugadas} .`
            divFelicitaciones.appendChild(nomJugadas)
            alert(`Felicitaciones haz realizado una ${nombreJugada} en tu jugada N° ${jugadas}.`)
          }
          if(cont == 4){
            
            nombreJugada = 'cuaterna'
            nomJugadas.innerText = `Felicitaciones! 🎊 ${inputUsuario} 🎉 ganaste $400.000CLP💵 realizando una ${nombreJugada} en tu jugada N° ${jugadas}.`
            divFelicitaciones.appendChild(nomJugadas)
            alert(`Felicitaciones haz realizado una ${nombreJugada} en tu jugada N° ${jugadas}.`)
          }
          if(cont == 5){
            
            nombreJugada = 'quina'
            nomJugadas.innerText = `Felicitaciones! 🎊 ${inputUsuario} 🎉 ganaste $700.000CLP💵 realizando una ${nombreJugada} en tu jugada N° ${jugadas}.`
            divFelicitaciones.appendChild(nomJugadas)
            alert(`Felicitaciones haz realizado una ${nombreJugada} en tu jugada N° ${jugadas}.`)
          }
          if(cont == 6){
            
            nombreJugada = 'LOTO!!!'
            nomJugadas.innerText = `Felicitaciones! 🎊 ${inputUsuario} 🎉 ganaste $1.000.000CLP💵 realizando un ${nombreJugada} en tu jugada N° ${jugadas}. Tienes mucha suerte 🍀.`
            divFelicitaciones.appendChild(nomJugadas)
            alert(`Felicitaciones haz realizado una ${nombreJugada} en tu jugada N° ${jugadas}.`)
          }

    
       
    } else {
      //alert que nos permite saber que nuestro intentos ya finalizaron
        alert("Finalizaron sus intentos.")
    }
    
          }
//Función limpar que interactua con el botón "Jugar otra vez"
limpiar = () => {
  //Creamos un confirm para que el usuario tenga chance de arrepentirse si es que lo apreto por error
  const confirmar = confirm('¿Esta seguro que desea jugar otra vez?')
  //En el caso que el usuario desee borrar por completo volvemos a los valores originales
  if(confirmar == true){
    //Contadores iniciados en 0
    jugadas = 0
    cont = 0
    //Splice en la posición para que borre todo menos el indice 0 de nuestro construcctor
    jugadorConst.splice(1)
    //Mediante esta funcion limpiamos todos los inputs
    inputs = document.querySelectorAll('input')
    inputs.forEach(input =>{
      input.value = ''
    })
    //llamamos todos nuestros textos dinámicos y los reseteamos a una cadena de texto vacia 
    document.getElementById('textoEstatico').innerText = ''
    document.getElementById('nomJugadorEstatico').innerText = ''
    document.getElementById('divJugadas').innerHTML = ''
    
  }
 
}

//Creación de nuestro construcctor
inputsConsJugador = document.querySelectorAll('.inputJugador')
const jugadorConst = [
  {
    n1: inputsConsJugador[0].value,
    n2: inputsConsJugador[1].value,
    n3: inputsConsJugador[2].value,
    n4: inputsConsJugador[3].value,
    n5: inputsConsJugador[4].value,
    n6: inputsConsJugador[5].value
  }
]

const creditos = document.createElement('h6')
creditos.innerHTML = `
Creado por: Carlos Agüero Marquizani. <br>
Institución: CFT Estatal Región de Valparaíso. <br>
Carrera: TNS Informática m/Ciberseguridad. <br>
Evalución Final Desarrollo y Diseño de Software.
 `
creditos.style.textAlign = 'center'
creditos.style.color = '#0D4C92'
cajaCompleta.appendChild(creditos)
    

 
//######################################################





