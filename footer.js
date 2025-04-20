// Load footer
document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('footer').innerHTML = 
    await (await fetch('footer.html')).text();
});