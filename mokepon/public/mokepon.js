const sectionSeleccionarAtaque = document.getElementById ('seleccionar-ataque')
const sectionReiniciar = document.getElementById ('reiniciar')
const sectionMensajeReiniciar = document.getElementById ('mensajeResultado')
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById('boton-reiniciar')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const secctionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataquesDelJugador")
const ataqueDelEnemigo = document.getElementById("ataquesDelEnemigo")
const sectionSeleccionarMascota = document.getElementById ('seleccionar-mascota')

const spanMascotaJugador = document.getElementById("mascotaJugador")
const spanMascotaEnemigo = document.getElementById ("mascotaEnemigo")
const contenedorTarjetas = document.getElementById ("contenedorTarjetas")
const contenedorAtaques = document.getElementById ('contenedorAtaques')
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById ('mapa')
const anchoMaximoDelMapa = 700

let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
let ataqueEnemigo = []
let vidasJugador = 3
let vidasEnemigo = 3
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let botonFuego 
let botonAgua
let botonTierra
let botones = []
let ataqueJugador = []
let ataquesMokepon
let ataquesMokeponEnemigo
let mascotaJugador
let mascotaJugadorObjeto
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d")
let intervalo 
let mapaBackground = new Image
mapaBackground.src = './assets/mokemap.png' 
let alturaQueBuscamos
//let anchoDelMapa = mapa.getBoundingClientRect().width - 20
let anchoDelMapa = window.innerWidth -20
if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20}
alturaQueBuscamos = anchoDelMapa * 6/8
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos




class Mokepon {
    constructor( nombre, foto, vida, fotoMapa, id) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image ( )
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0   
    }

    pintarMokepon () {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon( 'Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')
let capipepo = new Mokepon( 'Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png')
let ratigueya = new Mokepon( 'Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png')

const HIPODOGE_ATAQUES= [
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
]
hipodoge.ataques.push(...HIPODOGE_ATAQUES)

const CAPIPEPO_ATAQUES = [
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
]
capipepo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES = [
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},         
]
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

mokepones.push(hipodoge, capipepo, ratigueya)

/* class ataque {
    constructor(nombre, foto) {
        this.nombre = nombre
        this.foto = foto
    }
}

let agua = new ataque ('boton-agua', '💧')
let tierra = new ataque ('boton-tierra', '🌱')
let fuego = new ataque ('boton-fuego', '🔥')
ataques.push( agua, tierra, fuego)
 */


function iniciarJuego (){
    
sectionSeleccionarAtaque.style.display= 'none'
sectionVerMapa.style.display = 'none'
    
mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `
contenedorTarjetas.innerHTML += opcionDeMokepones
inputHipodoge = document.getElementById("Hipodoge")
inputCapipepo = document.getElementById("Capipepo")
inputRatigueya = document.getElementById("Ratigueya")

})

/* ataques.forEach((ataque) => {
        opcionDeAtaques = `
        <button id=${ataque.nombre} class="boton-de-ataque" > ${ataque.nombre} ${ataque.foto} </button>
        `
ataques.innerHTML += opcionDeAtaques
botonFuego = document.getElementById('boton-fuego')
botonTierra = document.getElementById('boton-tierra')
botonFuego = document.getElementById('boton-agua')
}) */

    sectionReiniciar.style.display= 'none'
    sectionMensajeReiniciar.style.display= 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego )
unirseAlJuego ()

}
/**
 * @description 
 */
function unirseAlJuego () {
    fetch('http://192.168.1.73:8080/unirse')
        .then(function (res) {
        if (res.ok) {
            res.text()
                .then(function(respuesta) {
                    console.log(respuesta)
                    jugadorId = respuesta
                })
            }
        }) 
}

function seleccionarMascotaJugador() { 
    
   /*  sectionSeleccionarMascota.style.display= 'none'
    sectionVerMapa.style.display ='flex' */
   

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }
    else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }
    else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }
    else {
        alert (" Selecciona una mascota ")
        return
    }
    seleccionarMokepon(mascotaJugador)
    extraerAtaques(mascotaJugador)
    iniciarMapa ()
    sectionSeleccionarMascota.style.display= 'none'
    sectionVerMapa.style.display ='flex'
    
}
/* 
function seleccionarMokepon(mascotaJugador) {
    fetch(`http://192.168.1.73:8080/mokepon/${jugadorId}`, {
        method: "post", 
        headers: {
            "content-Type" : "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    });

} */

/**
 * 
 * @param {*} mascotaJugador 
 */
function seleccionarMokepon(mascotaJugador){
    fetch(`http://192.168.1.73:8080/mokepon/${jugadorId}`,{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
} 

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `<button id=${ataque.id} class="boton-de-ataque BAtaque" >${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaques () {
    botones.forEach ((boton) => {
        boton.addEventListener('click', (e) => {
            //console.log (e)
            if (e.target.textContent === '🔥 ') {
                ataqueJugador.push('Fuego')   
                console.log(ataqueJugador)
                boton.style.background = '#122f58'
                boton.disabled = true            
            } else if (e.target.textContent === '💧 ') {
                ataqueJugador.push('Agua')   
                console.log(ataqueJugador)
                boton.style.background = '#122f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('Tierra')   
                console.log(ataqueJugador)
                boton.style.background = '#122f58'
                boton.disabled = true
            }
            if (ataqueJugador.length === 5) {
                enviarAtaques ()
            }
                
        })
    })
    
}

function enviarAtaques() {
    fetch (`http://192.168.1.73:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://192.168.1.73:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res) {
           if (res.ok) {
            res.json()
                .then(function ({ataques}){
                    if (ataques.length=== 5) {
                        ataqueEnemigo = ataques
                        combate()
                    }
                })
           }
        })
}

/* function seleccionarMascotaEnemigo(enemigo) {
    
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaques ()
 */
 /*    if (mascotaAleatoria == 0) {
        spanMascotaEnemigo.innerHTML = inputHipodoge.id
    } 
    else if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = inputCapipepo.id
    } 
    else {
        spanMascotaEnemigo.innerHTML = inputRatigueya.id
    }  */


/* function ataqueAleatorioEnemigo () {
   let ataqueAleatorio = aleatorio (0, ataquesMokeponEnemigo.length -1)
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("Fuego")
    }
    else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("Agua")
    }
    else {
        ataqueEnemigo.push("Tierra")
    } 
    console.log(ataqueEnemigo)
    iniciarCombate()
} */

function iniciarCombate () {
    if (ataqueJugador.length === 5) {
        //console.log(ataqueJugador.length)
        combate ()
        
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
} 

function combate () {
    clearInterval (intervalo)

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
        }
        else if (ataqueJugador[index] === "Fuego" && ataqueEnemigo[index] === "Tierra") {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if (ataqueJugador[index] === "Agua" && ataqueEnemigo[index] === "Fuego") {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if (ataqueJugador[index] === "Tierra" && ataqueEnemigo[index] === "Agua") {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if (ataqueJugador[index] === "Tierra" && ataqueEnemigo[index] === "Agua") {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else { 
            indexAmbosOponente(index, index)
            crearMensaje("KGASTE")
            victoriasEnemigo ++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}
    
/*     if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra" ) {
        crearMensaje("GANASTE")
        vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego" ) {
        crearMensaje("GANASTE")
        vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua" ) {
        crearMensaje("GANASTE")
        vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
    } else { crearMensaje("KGASTE")
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
} */

function revisarVidas() {
    
    if (victoriasJugador == victoriasEnemigo) {
        //document.getElementById('resultadoTotal').innerHTML = 'GANASTE, PRUEBA OTRA VEZ'
        crearMensajeFinal('esto es un EMPATE!')
        
  /*   botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true */
    sectionReiniciar.style.display= 'block'
    sectionMensajeReiniciar.style.display= 'block'
    
    } else if ( victoriasJugador > victoriasEnemigo) {
        //document.getElementById('resultadoTotal').innerHTML = 'FELICIDADES, GANASTE!!!'
        crearMensajeFinal('FELICIDADES, GANASTE!!!')
       
   /*  botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true */
    sectionReiniciar.style.display= 'block'
    sectionMensajeReiniciar.style.display= 'block'
    
    }
    else 
    crearMensajeFinal('PERDISTE, PRUEBA OTRA VEZ')
}

function crearMensaje (resultado) {

    let nuevoAtaqueDeJugador = document.createElement("p")
    let nuevoAtaqueDeEnemigo = document.createElement("p")

    secctionMensajes.innerHTML = resultado
    nuevoAtaqueDeJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDeEnemigo.innerHTML = indexAtaqueEnemigo
    ataqueDelJugador.appendChild(nuevoAtaqueDeJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDeEnemigo)

} 
function crearMensajeFinal (resultadoFinal) {
    secctionMensajes.innerHTML = resultadoFinal
    /* botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true */
    sectionReiniciar.style.display= 'block'
} 

/**
 * @description se encarga de x
 */
function reiniciarJuego() {
    location.reload()
}

function aleatorio (min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas() {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage (
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )
    mascotaJugadorObjeto.pintarMokepon()
    
    enviarPosicion ( mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
    mokeponesEnemigos.forEach(function (mokepon) {
        if(mokepon !== undefined){
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    }})
} 

function enviarPosicion (x,y) {
    fetch(`http://192.168.1.73:8080/mokepon/${jugadorId}/posicion`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        x,
        y
      })   
    })
     .then(function(res){
         if (res.ok) {
            res.json()
                .then(function({enemigos}) {
                    mokeponesEnemigos = enemigos.map((function(enemigo) {
                        let mokeponEnemigo = null
                        /* let mokeponNombre = null
                        if (enemigo?.mokepon?.nombre == undefined) {
                            return enviarPosicion ()
                        }
                        else { */
                        const mokeponNombre = enemigo?.mokepon?.nombre || ""
                        if (mokeponEnemigo) {
                        if (mokeponNombre === "Hipodoge") {
                            mokeponEnemigo = new Mokepon( 'Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png', enemigo.id)
                        } else if (mokeponNombre === "Capipepo") {
                            mokeponEnemigo = new Mokepon( 'Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png',enemigo.id)
                        } else if (mokeponNombre === "Ratigueya") {
                            mokeponEnemigo = new Mokepon( 'Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png', enemigo.id)
                        }
                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y
                        return mokeponEnemigo
                        }
                        
                    }))
                })
         }
     })
}




function moverDerecha () {
    mascotaJugadorObjeto.velocidadX = 5
}
function moverArriba () {
    mascotaJugadorObjeto.velocidadY = -5
   
}
function moverIzquierda () {
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo () {
    mascotaJugadorObjeto.velocidadY = 5
}
function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla  (event) {
   // console.log(event.key)
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        default:
            break;
    }
}
function obtenerObjetoMascota () {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    if(enemigo.x == undefined || enemigo.y == undefined){
        return
    } 
    else {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    const arribaMascota =
        mascotaJugadorObjeto.y
    const abajoMascota =
        mascotaJugadorObjeto.y +mascotaJugadorObjeto.alto
    const derechaMascota =
        mascotaJugadorObjeto.x +mascotaJugadorObjeto.ancho
    const izquierdaMascota =
        mascotaJugadorObjeto.x
    
    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo || 
        izquierdaMascota > derechaEnemigo
    ) { 
        return
    }
    }
    clearInterval(intervalo)
    detenerMovimiento ()
    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display= 'flex'
    sectionVerMapa.style.display = 'none'
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    secuenciaAtaques ()
   
    //seleccionarMascotaEnemigo(enemigo)
    //alert ("Hay colision" + enemigo.nombre)
}

function iniciarMapa () {
 
    mascotaJugadorObjeto = obtenerObjetoMascota (mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener ('keydown', sePresionoUnaTecla) 
    window.addEventListener ('keyup', detenerMovimiento)
}


window.addEventListener('load', iniciarJuego)

