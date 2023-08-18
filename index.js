const burgerImage = document.querySelector('.header-burger'); 
const modal = document.querySelector('.mobi-navigate'); 
burgerImage.addEventListener('click', function() {
  modal.style.display = 'block'; 
});


const closeButton = document.querySelector('.close'); 

closeButton.addEventListener('click', function() {
  const modal = document.querySelector('.mobi-navigate'); 
  modal.style.display = 'none'; 
});
