function mostrar() {
  let origen, cantVacIng, costoDelVuelo, seguir;

  let origenMenorVac,
    cantMenorVac,
    flagCantVac = 1;
  let cantVueloDelOcci = 0,
    totalVacDelOcci,
    VueOcciosOccidente;
  let totalSinDes = 0,
    totalConDes,
    porcDeDescuento,
    acumVac;

  do {
    origen = prompt(
      "Ingrese su origen (oriente/occidente/secreto)"
    ).toLowerCase();

    while (
      !isNaN(origen) ||
      (origen != "oriente" && origen != "occidente" && origen != "secreto")
    ) {
      origen = prompt(
        "ERROR Por favor Ingrese su origen (oriente/occidente/secreto)"
      ).toLowerCase();
    }
    cantVacIng = parseInt(
      prompt("Ingrese la cantidad de vacunas (entre 500000 y 2500000")
    );

    while (isNaN(cantVacIng) || cantVacIng < 500000 || cantVacIng > 2500000) {
      cantVacIng = parseInt(
        prompt(
          "ERROR Por favor, ingrese la cantidad de vacunas (entre 500000 y 2500000"
        )
      );
    }

    costoDelVuelo = parseInt(
      prompt("Ingrese la cantidad entre 1 millon y 5 millones")
    );

    while (
      isNaN(costoDelVuelo) ||
      costoDelVuelo < 1000000 ||
      costoDelVuelo > 5000000
    ) {
      costoDelVuelo = parseInt(
        prompt(
          "ERROR Por favor, ingrese la cantidad entre 1 millon  y 5 millones"
        )
      );
    }

    seguir = prompt(" ¿Quiere registrar a otra persona? si/no").toLowerCase();
    while (!isNaN(seguir) || (seguir != "si" && seguir != "no")) {
      seguir = prompt("¿Quiere registrar a otra persona? si/no").toLowerCase();
    }

    if (flagCantVac) {
      cantMenorVac = cantVacIng;
      origenMenorVac = origenIngresado;
      flagCantVac = 0;
    } else if (cantVacIng < cantMenorVac) {
      cantMenorVac = cantVacIng;
      origenMenorVac = origenIngresado;
    }

    if (origenIngresado == "occidente") {
      cantVueloDelOcci++;
      totalVacDelOcci += cantVacIng;
    }

    totalSinDes += costoDelVuelo;
    acumVac += cantVacIng;
  } while (respuesta != "n");

  alert(
    "El origen que envio la menor cantidad de vacunas es: " +
      origenMenosVacunas +
      ", con un total de " +
      cantidadMenosVacunas +
      " vacunas" 
  );

  if (cantVueloDelOcci > 0) {
    promVueOcci = totalVacDelOcci / cantVueloDelOcci;
    alert(
      "El promedio de vuelos con vacunas a occidente es de: " +
        promVueOcci 
        
    );
  } else {
    alert("No se puede mostrar por que nunca fue ingresado");
  }

  if (acumuladorVacunas > 10000000) {
    totalConDes = totalSinDes * 0.75;
    porcDeDescuento = 25;
  } else if (acumVac >= 5000000 && acumVac <= 10000000) {
    totalConDes = totalSinDes * 0.85;
    porcDeDescuento = 15;
  } else {
    totalConDes = totalSinDes;
  }

  if (totalConDes < totalSinDes) {
    alert(
      "Se hizo un descuento de " +
        porcDeDescuento +
        "% del total. Total a pagar: " +
        totalConDesc
    );
  } else {
    alert(
      "El total sin descuentos a pagar por los gastos de los viajes es " +
        totalSinDes
    );
  }
}
