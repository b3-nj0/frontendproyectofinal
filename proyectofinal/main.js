let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Bienvenidos a la ciudad espejo')
  .pauseFor(1000)
  .deleteChars(10)
  .start();