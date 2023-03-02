const accordeonTexts = document.querySelectorAll('.accodeon-inner');
const errowDowns = document.querySelectorAll('.arrow-down');

errowDowns.forEach((errowDown, index) => {
  errowDown.addEventListener('click', function() {
    const accordeonText = accordeonTexts[index];
    accordeonText.style.display = accordeonText.style.display === 'none' ? 'block' : 'none';
  });
});
