const imageLinks = document.querySelectorAll('.gallery a');

imageLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const imageSrc = this.href;
    const image = document.querySelector('#popup img');
    image.src = imageSrc;       
        
        /* Add code to get and display the image description here */        
        
        document.querySelector('#popup').classList.remove('hidden'); // Show the popup    
    });
});

    
const closeButton = document.getElementById('close-popup');

closeButton.addEventListener('click', function() {    
    document.querySelector('#popup').classList.add('hidden');
    }
);