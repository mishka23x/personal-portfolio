
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.interactive-card').forEach(card => {
      card.addEventListener('click', function() {
   
        this.classList.toggle('active-card');
       
        setTimeout(() => this.classList.remove('active-card'), 300);
      });
    });
  });