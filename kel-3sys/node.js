const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const closeBtn = document.querySelector('.close');

/* Animasi muncul */
cards.forEach((card, i) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";

  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, i * 150);

  /* Spotlight mouse */
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
  });

  /* Klik → modal */
  card.addEventListener('click', () => {
    modal.style.display = "flex";
    modalImg.src = card.querySelector('img').src;
    modalName.innerText = card.querySelector('p').innerText;
  });
});

/* Close modal */
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

/* PARALLAX HALUS */
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  document.querySelectorAll('.card').forEach(card => {
    card.style.transform = `translateY(-10px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });
});