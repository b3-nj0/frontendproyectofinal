let app = document.getElementById('paquetetour');
 
let paquetetour = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
paquetetour
  .pauseFor(2500)
  .typeString('Paquetes de Tour')
  .pauseFor(1000)
  .deleteChars(10)
  .start();