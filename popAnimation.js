document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('title');
  const words = title.textContent.trim().split(' ');

  title.innerHTML = ''; // Clear original text

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word + ' ';
    span.style.animationDelay = `${index * 0.2}s`;
    title.appendChild(span);
  });
});
