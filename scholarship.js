document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('.item');
  
    items.forEach(function(item) {
      const title = item.querySelector('.info a').textContent.toLowerCase();
      const sponsor = item.querySelector('.info p:nth-child(2)').textContent.toLowerCase();
      const level = item.querySelector('.info p:nth-child(4)').textContent.toLowerCase();
  
      if (title.includes(searchTerm) || sponsor.includes(searchTerm) || level.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });