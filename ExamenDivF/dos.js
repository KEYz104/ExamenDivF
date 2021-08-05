function mostrar() {
  let nacionalidad, resultado, edad, cepa;

  let contPosi = 0,
    contNega = 0,
    porcentajePositivos,
    porcentajeNegativos;
  let contDelta = 0,
    contAlfa = 0,
    contBeta = 0;
  let cantCepaMenor,
    nombreCepaMenor,
    edadMenorArg,
    contExtraDelta = 0;
     flagArg = 1;

  for (let i = 1; i <= 8; i++) {
    nacionalidad = prompt(
      "Ingrese la nacionalidad (argentina / extranjero)"
    ).toLowerCase();

    while (
      !isNaN(nacionalidad) ||
      (nacionalidad != "argentina" && nacionalidad != "extranjero")
    ) {
      nacionalidad = prompt(
        "ERROR Ingrese un nombre valido (argentina / extranjero)"
      ).toLowerCase();
    }

    resultado = prompt(
      "Ingrese su resultado del hisopado positivo/negativo"
    ).toLowerCase();

    while (
      !isNaN(resultado) ||
      (resultado != "positivo" && resultado != "negativo")
    ) {
      resultado = prompt(
        "ERROR, Por favor elija solo entre positivo/negativo"
      ).toLowerCase();
    }

    edad = parseInt(prompt("Ingrese su edad (entre 18 y 69 años):"));

    while (isNaN(edad) || edad < 18 || edad > 69) {
      edad = parseInt(prompt("Ingrese su edad bien (entre 18 y 19 años)"));
    }

    if (resultado == "negativo") {
      contNega++;
      alert("No hace falta agregar nada mas su resultado es negativo");
      cepa = "ninguna";
    } else {
      contPosi++;

      //aprovecho el if/else para calcular el argentino con menor edad contagiado
      if (flagArg && nacionalidad == "argentina") {
        edadMenorArg = edad;
        flagArg = 0;
      } else if (
        !flagArg &&
        nacionalidad == "argentina" &&
        edad < edadMenorArgentino
      ) {
        edadMenorArg = edad;
      }

      cepa = prompt("Ingrese cepa (delta/alfa/beta)").toLowerCase();
      while (
        !isNaN(cepa) ||
        (cepa != "delta" && cepa != "alfa" && cepaIngresada != "beta")
      ) {
        cepa = parseInt(prompt("Ingrese cepa (delta/alfa/beta)")).toLowerCase();
      }
    }

    switch (cepa) {
      case "alfa":
        contAlfa++;
        break;
      case "delta":
        contDelta++;
        if (nacionalidad == "extranjero") {
          contExtraDelta++;
        }
        break;
      case "beta":
        contBeta++;
        break;
    }
  }

 
  porcentajePositivos = contPosi * 12.5; 
  porcentajeNegativos = contadorNegativos * 12.5;

 

  if (contAlfa < contDelta && contAlfa < contBeta) {
    cantCepaMenor = contAlfa;
    nombreCepaMenor = "Alfa";
  } else if (contDelta < contAlfa && contDelta < contBeta) {
    cantCepaMenor = contDelta;
    nombreCepaMenor = "Delta";
  } else if (contBeta < contAlfa && contBeta < contDelta) {
    cantCepaMenor = contBeta;
    nombreCepaMenor = "Beta";
  }

  alert(
    "El porcentaje de positivos es " + porcentajePositivos + "% "
  );
  alert(
    "El porcentaje de negativos es  " + porcentajeNegativos + "% "
  );
  alert(
    "La cepa menos encontrada es la cepa " +
      nombreCepaMenor +
      " con un total de " +
      cantCepaMenor +
      " casos"
  );
  alert(
    "La edad del argentino mas joven contagiado es de " +
      edadMenorArg +
      " anios "
  );

  if (contExtraDelta > 0) {
    alert(
      "La cantidad de personas extranjeras con Delta es: " +
        contadorExtranjerosDelta
    );
  } else {
    alert("No hay extranjeros con Delta o no se ingresaron");
  }
}
