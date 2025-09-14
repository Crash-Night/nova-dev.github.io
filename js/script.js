var counter = document.getElementById("counter");

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

var min = 0;
var max = 0;

async function run() {
  while (min < max) {
    await sleep(Math.floor(Math.random() * 1500));
    min += Math.floor(Math.random() * 10);
    counter.textContent = new Intl.NumberFormat("en-US").format(min);
    console.log(counter.textContent);
  }
}

run();

/* Funciones */

  (function(){
    const token = "<?php echo $token; ?>";

    fetch("img.php", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      },
      body: JSON.stringify({ token })
    })
    .then(resp => {
      if (!resp.ok) throw new Error("No autorizado");
      return resp.blob();
    })
    .then(blob => {
      const img = document.getElementById("protected-img");
      img.src = URL.createObjectURL(blob);
      setTimeout(() => URL.revokeObjectURL(img.src), 60_000);
    })
    .catch(err => {
      console.warn("No se pudo cargar imagen limpia:", err);
    });
  })();
  
// Función para actualizar contador
function updateCounter(input, counterId, maxLength) {
    const counter = document.getElementById(counterId);
    counter.textContent = (maxLength - input.value.length) + " caracteres restantes";
}

// Selección de inputs y textarea
const fields = [
    {id:'nombre', counter:'nombre-count', max:<?php echo $max_lengths['nombre']; ?>},
    {id:'email', counter:'email-count', max:<?php echo $max_lengths['email']; ?>},
    {id:'asunto', counter:'asunto-count', max:<?php echo $max_lengths['asunto']; ?>},
    {id:'mensaje', counter:'mensaje-count', max:<?php echo $max_lengths['mensaje']; ?>}
];

// Añadir eventos
fields.forEach(f => {
    const el = document.querySelector(`[name="${f.id}"]`);
    el.addEventListener('input', () => updateCounter(el, f.counter, f.max));
});