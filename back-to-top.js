window.onscroll = function() {
    const btn = document.getElementById('backToTop');
    btn.style.display = (document.body.scrollTop > 20 || 
                        document.documentElement.scrollTop > 20) 
                        ? 'block' : 'none';
  };
  
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });