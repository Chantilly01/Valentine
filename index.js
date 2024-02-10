// index.js

document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencias a los elementos
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const firstDiv = document.querySelector(".first");
    const secondDiv = document.querySelector(".second");
    const titt = document.querySelector(".titt");

    // Lista de mensajes alternativos
    const messages = [
        "¡Seguro que no?",
        "Piénsalo bien",
        "De verdad, piénsalo",
        "Piénsalo otra vez",
        "Último chance",
        "¿Segura, segura?",
        "Podrías arrepentirte",
        "Dame una oportunidad",
        "¡Andaleeeeeeeeee!"
    ];

    let currentMessageIndex = 0;

    // Añade un evento de clic al botón "si"
    yesButton.addEventListener("click", function () {
        // Oculta el primer div
        firstDiv.style.display = "none";
        // Muestra el segundo div
        secondDiv.style.display = "block";
        yesButton.style.display = "none";
        noButton.style.display = "none";

        // Restaura el texto del botón "no" y la pregunta
        noButton.textContent = "No";
        titt.textContent = "¿Quieres ser mi post Valentine?";
    });

    // Añade un evento de clic al botón "no"
    noButton.addEventListener("click", function () {
        // Cambia el texto del botón "no" y la pregunta
        noButton.textContent = messages[currentMessageIndex];

        // Incrementa el índice para obtener el siguiente mensaje en el próximo clic
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;

        // Obtiene el tamaño actual del botón "si"
        const currentSize = window.getComputedStyle(yesButton).fontSize;

        // Convierte el tamaño actual a un número y agrégale 2 píxeles
        const newSize = (parseFloat(currentSize) + 10) + "px";

        // Asigna el nuevo tamaño al botón "si"
        yesButton.style.fontSize = newSize;
    });
});
