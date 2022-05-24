let inputText = prompt("Ingresa un Nómbre Registrado: ");

while (inputText === "ESC"){

    alert("El usuario " + inputText + " esta registrado.");

    break;

}

while (inputText != "ESC"){

    for (let i = 1; i <= 3; i++) {

        alert("Intento N° " + i + " de 3. El usuario " + inputText + " no esta registrado.");
        
        inputText = prompt("Ingresa otro usuario");

    }

    break;

}