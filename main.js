// Wait until the HTML document is fully parsed and ready
document.addEventListener('DOMContentLoaded', function () {
  
  // 1. DYNAMIC YEAR SCRIPT
  const year = document.getElementById('current_year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }


});