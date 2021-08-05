function mostrar() {
  let nombre, edad, vacuna, dosis, sexo;
  let promEdadVacuChina = 0,
    acumEdadChina = 0,
    contadorEdadChina = 0;
  let vacunaMasJoven,
    edadJoven,
    nombreVacuJoven,
    flagJoven = 1;
  let acumVacuChina = 0,
    acumVacuRusa = 0,
    acumVacuAmericana = 0;
  let mayorInoculada;

  do {
    nombre = prompt("Ingrese su nombre: ");
    while (!(nombre.length >= 3 && nombre.length <= 10)) {
      nombre = prompt(
        "Error, Ingrese su nombre con mas de 3 o menos de 10 caracteres: "
      );
    }
    edad = parseInt(
      prompt(
        "Ingrese su edad recuerde que tiene que ser mayor o tener 12 anios:"
      )
    );
	if(edad<12 && edad >17){
		
	}
    while (edad <= 12) {
      edad = parseInt(
        prompt(
          "Error, Ingrese su edad, recuerde que tiene que ser mayor o tener 12 anios:"
        )
      );
    }
    vacuna = prompt("Ingrese la vacuna (rusa/china/americana):");
    dosis = prompt(
      "Ingrese P si es la primera dosis o S si es la segunda:"
    ).toUpperCase();
    sexo = prompt("Ingrese sexo: F o M").toUpperCase();

    if (edad < 12 || edad > 17) {
    }
	seguir = prompt("¿Desea seguir?: s o n");
  } while (seguir != "n") 
  if (vacuna == "china") {
    acumEdadChina += edad;
    contadorEdadChina++;
  }
  promEdadVacuChina = acumEdadChina / contadorEdadChina;
  if (flagJoven || edad < edadJoven) {
    nombreVacuJoven = nombre;
    vacunaMasJoven = vacuna;
    flagJoven = 0;
    console.log(nombreVacuJoven);
  }
  switch (vacuna) {
    case "china":
      acumVacuChina++;
      break;
    case "rusa":
      acumVacuRusa++;
      break;
    case "americana":
      acumVacuAmericana++;
      break;
  }
  if (acumVacuChina > acumVacuRusa && acumVacuChina > acumVacuAmericana) {
    mayorInoculada = "China";
  } else if (
    acumVacuRusa >= acumVacuChina &&
    acumVacuRusa > acumVacuAmericana
  ) {
    mayorInoculada = "Rusa";
  } else {
    mayorInoculada = "Americana";
  }
}
