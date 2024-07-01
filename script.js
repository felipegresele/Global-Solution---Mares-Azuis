window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("header-scrolled");
      } else {
        document.getElementById("header").classList.remove("header-scrolled");
      }
    }

    let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.getElementById('formaDeReporta').addEventListener('submit', function(event) {
  event.preventDefault();

  const localizacao = document.getElementById('localizacao').value;
  const tipoPoluicao = document.getElementById('tipoPoluicao').value;
  const descricao = document.getElementById('descricao').value;

  const reportData = {
      localizacao: localizacao,
      tipoPoluicao: tipoPoluicao,
      descricao: descricao
  };

  console.log('Relatório enviado:', reportData);

  document.getElementById('respostaMensagem').textContent = 'Relatório enviado com sucesso!';
  document.getElementById('formaDeReporta').reset();
});

document.addEventListener("DOMContentLoaded", function() {
  const text = document.getElementById("respostaMensagem");
  const colors = ["#6495ED", "#0000CD", "#0000FF", "#6495ED", "#4169E1", "#244ec2"];
  let currentColorIndex = 0;

  function changeColor() {
      text.style.color = colors[currentColorIndex];
      currentColorIndex = (currentColorIndex + 1) % colors.length;
  }

  setInterval(changeColor, 500); // Muda a cor a cada 500 milissegundos
});