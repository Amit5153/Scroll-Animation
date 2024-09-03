document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const toggleButton = document.getElementById('dark-mode-toggle');
  
    window.addEventListener('scroll', checkBoxes);
  
    checkBoxes(); // Initial check
  
    function checkBoxes() {
      const triggerBottom = window.innerHeight / 5 * 4;
  
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
  
        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    }
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });
  