let scale = 1;
let zooming = false;
let modalImage = document.getElementById('modal-image');
let topbar = document.querySelector(".Top-bar")
let cropBox = null;

// Open modal and enlarge image
function openModal(imageItem) {
    const modal = document.getElementById('image-modal');
    const imageSrc = imageItem.querySelector('img').src;
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
    topbar.style.display = 'none';
}


// Close modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
    topbar.style.display = 'flex';
    stopCrop();
}

// Crop functionality
function startCrop() {
    stopCrop();  // Clear previous crop box if any

    const cropArea = document.createElement('div');
    cropArea.classList.add('crop-area');
    document.querySelector('.modal-content').appendChild(cropArea);
    cropBox = cropArea;

    cropBox.style.width = '150px';  // Initial crop area size
    cropBox.style.height = '150px';
    cropBox.style.top = '100px';
    cropBox.style.left = '100px';
}

// Stop crop (remove crop box)
function stopCrop() {
    if (cropBox) {
        cropBox.remove();
        cropBox = null;
    }
}

// Simulate crop action (just hiding part of the image)
function cropImageModal() {
    if (cropBox) {
        const modalContent = document.querySelector('.modal-content');
        modalImage.style.clipPath = `polygon(${cropBox.offsetLeft}px ${cropBox.offsetTop}px, 
                                           ${cropBox.offsetLeft + cropBox.offsetWidth}px ${cropBox.offsetTop}px, 
                                           ${cropBox.offsetLeft + cropBox.offsetWidth}px ${cropBox.offsetTop + cropBox.offsetHeight}px, 
                                           ${cropBox.offsetLeft}px ${cropBox.offsetTop + cropBox.offsetHeight}px)`;
        stopCrop();  // Hide the crop area after applying
    }
}

// Basic zoom functionality
function startZoom(image) {
    zooming = true;
    scaleImage(image, 1.2);  // Zoom in when mouse is pressed
}

function stopZoom(image) {
    zooming = false;
    scaleImage(image, 1);  // Reset zoom when mouse is released
}

function scaleImage(image, zoomLevel) {
    if (zooming) {
        image.style.transform = `scale(${zoomLevel})`;
    }
}

//Search input
function expandSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.classList.toggle('active');
    searchInput.focus();
}

// Delete functionality
function deleteImageModal() {
    if (confirm("Are you sure you want to delete this image?")) {
        closeModal();
    }
}

function editImageModal() {
    modalImage.style.filter = 'brightness(1.2) contrast(1.1)';
}

function aiEnhanceModal() {
    alert("AI Enhance feature")
}


/*------ EXPANDER MENU ---------*/ 
const showMenu = (toggleId, navbarId, bodyId)=>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)
  
    if(toggle && navbar){
      toggle.addEventListener('click', ()=>{
        navbar.classList.toggle('expander')
  
        bodypadding.classList.toggle('body-pd')
      })
    }
  }
  showMenu('nav-toggle','navbar','body-pd')
  
  /*-----LINK ACTIVE  ----*/ 
  const linkColor = document.querySelectorAll('.nav__link')
  function colorLink(){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  
  
  /*------ COLLAPSE MENU ----*/ 
  const linkCollapse = document.getElementsByClassName('collapse__link')
  var i
  
  for(i=0;i<linkCollapse.length;i++){
    linkCollapse[i].addEventListener('click', function(){
      const collapseMenu = this.nextElementSibling
      collapseMenu.classList.toggle('showCollapse')
  
      const rotate = collapseMenu.previousElementSibling
      rotate.classList.toggle('rotate')
    })
  }
  