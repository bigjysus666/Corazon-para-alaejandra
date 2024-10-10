let size = 250; // Tamaño inicial del corazón grande
let grow = true; // Variable para controlar si el corazón crece o decrece
let opacity = 0; // Opacidad inicial del texto
let fadeIn = true; // Control para el efecto de desvanecimiento del texto

function setup() {
  createCanvas(400, 500); // Lienzo de 400x500 píxeles
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  background(255); // Fondo blanco
  
  // Mover el origen al centro del canvas pero más arriba
  translate(width / 2, height / 2 - 50); // Subimos el corazón para que no se corte abajo
  
  // Dibujar el corazón grande
  drawHeart(0, 0, size);
  
  // Actualizar tamaño del corazón para el efecto de "latido"
  if (grow) {
    size += 2; // Crece
    if (size > 270) grow = false; // Tamaño máximo
  } else {
    size -= 2; // Disminuye
    if (size < 230) grow = true; // Tamaño mínimo
  }
  
  // Efecto de parpadeo del texto
  fill(255, 255, 255, opacity); // Texto blanco con opacidad variable
  textSize(28); // Tamaño de texto ajustado para encajar
  text('Alejandra', 0, size / 2.5); // Texto más cerca de la base del corazón
  
  // Control de opacidad para el efecto de desvanecimiento
  if (fadeIn) {
    opacity += 5; // Aumenta la opacidad
    if (opacity > 255) fadeIn = false; // Si llega al máximo, empieza a disminuir
  } else {
    opacity -= 5; // Disminuye la opacidad
    if (opacity < 0) fadeIn = true; // Si llega al mínimo, comienza a aumentar
  }
}

// Función para dibujar el corazón grande
function drawHeart(x, y, size) {
  fill(255, 0, 0); // Color rojo
  beginShape();
  vertex(x, y + size / 4);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y + size / 4);
  endShape(CLOSE);
}
