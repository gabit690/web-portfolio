// Efecto de desplazamiento del menu mobile principal

let menu = document.getElementById('boton-home');

menu.addEventListener('click', () => {

    document.getElementById('menu-principal').classList.toggle('active');

})

// Activacion de la clase 'active' que permite la animacion de los botones del menu principal.

let menuBotones = document.getElementsByClassName('boton-menu-principal');

for (let indice = 0; indice < menuBotones.length; indice++ ) {

    menuBotones[indice].addEventListener('click', () => {
        
        if (window.innerWidth < 800) {

            document.getElementById('menu-principal').classList.toggle('active');
            
        }

    }); 
}

// Funcionalidad del switcher del menu principal.

let switcher = document.getElementById('switcher');

switcher.addEventListener('click', () => {

    let botonSwitcher = document.getElementById('boton-switcher');

    botonSwitcher.classList.toggle('cambiado');

    let body = document.getElementsByTagName('body')[0];

    body.classList.toggle('modo-oscuro');

    if (body.classList.contains('modo-oscuro')) {

    }


});

// Agregado de funcion para desplazar el contenido de cada categoria en la seccion de habilidades.

let botonesHabilidades = document.getElementsByClassName('boton-habilidades');

for (let indice = 0; indice < botonesHabilidades.length; indice++) {

    let contenedoresHabilidades = document.getElementsByClassName('contenido-habilidades');

    botonesHabilidades[indice].addEventListener('click', () => {

        let contenedor = document.getElementsByClassName('contenido-habilidades')[indice];
        
        contenedor.style.display = (contenedor.style.display == 'none' || contenedor.style.display == '') ? 'grid' : 'none';

    });
}

// Funcionalidad para cambiar las imagenes de los proyectos realizados.

let botonRetroceder = document.querySelector('#boton-retroceder');

botonRetroceder.addEventListener('click', () => {

    let proyectos = document.querySelectorAll('.tarjeta-proyecto');

    let posicion = 0;

    while (!proyectos[posicion].classList.contains('activa')) {

        posicion++;
        
    }

    if ( posicion > 0) {

        proyectos[posicion].classList.toggle('activa');

        proyectos[posicion-1].classList.toggle('activa');

        if (posicion == proyectos.length-1) {

            let botonAvanzar = document.querySelector('#boton-avanzar');

            botonAvanzar.classList.toggle('deshabilitado');

        }

        if (posicion == 1) {

            botonRetroceder.classList.toggle('deshabilitado');

        }

    }

});

let botonAvanzar = document.querySelector('#boton-avanzar');

botonAvanzar.addEventListener('click', () => {

    let proyectos = document.querySelectorAll('.tarjeta-proyecto');

    let posicion = 0;

    while (!proyectos[posicion].classList.contains('activa')) {

        posicion++;

    }

    if ( posicion < proyectos.length - 1) {

        proyectos[posicion].classList.toggle('activa');

        proyectos[posicion+1].classList.toggle('activa');

        if (posicion == 0) {

            let botonRetroceder = document.querySelector('#boton-retroceder');

            botonRetroceder.classList.toggle('deshabilitado');

        }

        if (posicion == proyectos.length-2) {

            botonAvanzar.classList.toggle('deshabilitado');

        }

    }

});

// Contador de caracteres del area de texto del formulario de contacto.

let areaDeTexto = document.getElementsByTagName('textarea')[0];

areaDeTexto.addEventListener('keydown', (event) => {

    if (event.keyCode == 8 || event.keyCode == 46) {

        let contador = document.querySelector('#actual');

        if (parseInt(contador.innerHTML) > 0) {
    
            contador.innerHTML = parseInt(contador.innerHTML) - 1;
    
        }

    }

});

areaDeTexto.addEventListener('keypress', () => {

    let contador = document.querySelector('#actual');

    if (parseInt(contador.innerHTML) < 140) {

        contador.innerHTML = parseInt(contador.innerHTML) + 1;

    }

});


// Para cambiar el contador en caso de usar comandos cortar y pegar.
areaDeTexto.addEventListener('keyup', () => {

    let contador = document.querySelector('#actual');

    contador.innerHTML = areaDeTexto.value.length;

});
