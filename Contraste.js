/* Codigo de Ativação do Modo Escuro */
document.addEventListener('DOMContentLoaded', function() {
   const themeToggle = document.getElementById('input');

   // Load saved theme preference
   if (localStorage.getItem('darkTheme') === 'true') {
      themeToggle.checked = true;
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
   } else {
      themeToggle.checked = false;
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
   }
   // Listen for toggle changes
   themeToggle.addEventListener('change', function() {
      if (this.checked) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            localStorage.setItem('darkTheme', 'true');
            
      } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('darkTheme', 'false');
            
      }
   });
});
