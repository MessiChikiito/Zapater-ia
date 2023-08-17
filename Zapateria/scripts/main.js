'use strict';

const inicioLink = document.getElementById('inicio');
const informacionLink = document.getElementById('informacion');
const contactoLink = document.getElementById('contacto');
const contenido = document.getElementById('contenido');

inicioLink.addEventListener('click', () => {
    contenido.innerHTML = '<p>Contenido de la página de inicio.</p>';
});

informacionLink.addEventListener('click', () => {
    contenido.innerHTML = '<p>Contenido de la página de información.</p>';
});

contactoLink.addEventListener('click', () => {
    contenido.innerHTML = '<p>Contenido de la página de contacto.</p>';
});