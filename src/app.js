window.onload = generarExcusa;

function generarExcusa() {
  let who =['El perro', 'Mi abuela','El cartero','Mi pájaro'];
  let action =['se comió', 'orinó en', 'aplastó','rompió'];
  let what =['mi tarea', 'mi teléfono','el coche'];
  let when =['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio','durante mi almuerzo','mientras estaba rezando'];
  
  let ex1 =who[Math.floor(Math.random() * who.length)];
  let ex2 =action[Math.floor(Math.random() *action.length)];
  let ex3 = what[Math.floor(Math.random() * what.length)];
  let ex4 = when[Math.floor(Math.random() *when.length)];

// Genera la excusa combinando las partes
  let excusa = `${ex1} ${ex2} ${ex3} ${ex4}.`;
  
  document.getElementById("excusa").innerText = excusa;
}



