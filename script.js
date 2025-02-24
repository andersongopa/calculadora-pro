// Crear la estructura de la calculadora dinámicamente
window.onload = function() {
    const container = document.getElementById("calculator-container");

    // Crear el campo de display
    const display = document.createElement("input");
    display.type = "text";
    display.id = "display";
    display.disabled = true;
    container.appendChild(display);

    // Definir los botones de la calculadora
    const buttons = [
        [7, 8, 9, '+'],
        [4, 5, 6, '-'],
        [1, 2, 3, '*'],
        [0,'C', '=', '/']
    ];

    // Crear las filas de botones
    buttons.forEach(row => {
        const buttonRow = document.createElement('div');
        buttonRow.classList.add('row');

        row.forEach(buttonText => {
            const button = document.createElement('button');
            button.innerText = buttonText;
            
            // Agregar un evento para cada botón
            if (buttonText === 'C') {
                button.onclick = () => clearDisplay(display);
            } else if (buttonText === '=') {
                button.onclick = () => calculate(display);
            } else if (['+', '-', '*', '/'].includes(buttonText)) {
                button.onclick = () => appendOperator(display, buttonText);
            } else if (buttonText !== '') {
                button.onclick = () => appendNumber(display, buttonText);
            }

            buttonRow.appendChild(button);
        });

        container.appendChild(buttonRow);
    });
};



// Función para agregar operadores al display


// Función para calcular el resultado
