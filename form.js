const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado")

const preguntas = [
    {
        pregunta: "1. ¿De que color es la caja negra de un avión?",
        respuestas: {
          a: "Naranja",
          b: "Negra",
          c: "Blanca"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "2. Si en una pecera hay 12 peces y se mueren 5 ¿Cuantos peces quedan?",
        respuestas: {
          a: "7",
          b: "12",
          c: "17"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "3. ¿La palabra París compienza con P y termina con T?",
        respuestas: {
          a: "Verdadero",
          b: "Falso"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "4. ¿En que mes celebran los Rusos la Revolución de Octubre?",
        respuestas: {
          a: "Enero",
          b: "Octubre",
          c: "Noviembre"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "5. Antes que el Monte Everest fuera descubierto ¿Cual era la montaña mas alta del mundo?",
        respuestas: {
          a: "Lhotse",
          b: "Monte Everest",
          c: "K2"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "6. ¿Cuanto duro la guerra de los 100 años?",
        respuestas: {
          a: "116",
          b: "99",
          c: "100"
        },
        respuestaCorrecta: "a"
    },
    
];


function mostrarTest(){
    const preguntasYrespuestas = [];
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label>
                    <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}"></input>
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                </label>`

            );
        }
        preguntasYrespuestas.push(
            `<div class="cuestion">${preguntaActual.pregunta}</div>
            <div class="respuestas">${respuestas.join('')}</div>`
        )
    })
    contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarTest();

function mostrarResultado(){
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;
    let respuestasIncorrectas = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
        const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;

        if(respuestaElegida === preguntaActual.respuestaCorrecta){
            respuestasCorrectas++;
        }
        else{
            respuestasIncorrectas++;
        }
    });

    resultadoTest.innerHTML = 'respuestas correctas ' + respuestasCorrectas + ', respuestas incorrectas ' + respuestasIncorrectas + ', total de preguntas ' + preguntas.length;
}

botonRes.addEventListener('click', mostrarResultado);