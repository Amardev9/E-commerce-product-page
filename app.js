// Navigation

const navToggler = document.querySelector('.toggler-icon');
const closeNav = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
navToggler.addEventListener('click',() => {
    overlay.classList.add('open')
})

closeNav.addEventListener('click',() => {
    overlay.classList.remove('open')
})




let imageNumber = 0;
const galleryImages = document.querySelectorAll('.gallery-img');
let activeImage = galleryImages[imageNumber];
activeImage.classList.add('active-img');

// Slider Mobile 
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

const sliderImages = ['/images/image-product-1.jpg','/images/image-product-2.jpg','/images/image-product-3.jpg','/images/image-product-4.jpg'];
const sliderImage = document.getElementById('slideImage');
sliderImage.src = sliderImages[imageNumber];

nextBtn.addEventListener('click', () => {
    if((imageNumber >= 0) && (imageNumber < 3)){
        imageNumber++
        sliderImage.src = sliderImages[imageNumber];
        // For thumbnail gallery
        removeAndAddActiveImageClass();
    }
})

previousBtn.addEventListener('click', () => {
    if(imageNumber > 0){
        imageNumber--
        sliderImage.src = sliderImages[imageNumber];
        // For thumbnail gallery
        removeAndAddActiveImageClass();
    }
})


galleryImages.forEach(image => {
    image.addEventListener('click', (e) => {
        let galleryImage = e.target.dataset.image;
        sliderImage.src = galleryImage;
        updateCounter(galleryImage);
        // For thumbnail gallery
        removeAndAddActiveImageClass();
    })
});

function removeAndAddActiveImageClass(){
    activeImage.classList.remove('active-img');
    activeImage = galleryImages[imageNumber];
    activeImage.classList.add('active-img');
}

function updateCounter(image){
    switch(image){
        case '/images/image-product-1.jpg':
        imageNumber = 0;
        break;
        case '/images/image-product-2.jpg':
        imageNumber = 1;
        break;
        case '/images/image-product-3.jpg':
        imageNumber = 2;
        break;
        case '/images/image-product-4.jpg':
        imageNumber = 3;
        break;
    }
}

// Cart 

const cartBtn = document.querySelector('.cart');
const cart = document.querySelector('.cart-container');

cartBtn.addEventListener('click', () => {
    if(cart.classList.contains('cart-open')){
        cart.classList.remove('cart-open')
    }else{
        cart.classList.add('cart-open')
    }
})

const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
const productCounter = document.querySelector('.counter');
const cartCounter = document.querySelector('.items-in-cart');
const addToCart = document.querySelector('.cart-btn');
const productNumber = document.querySelector('.product-number');
const totalPrice = document.querySelector('.total-price');
const cartWrapper = document.querySelector('.cart-wrapper');
const deleteProduct = document.querySelector('.delete-icon');
const emptyCartTag = document.querySelector('.empty');
const checkout = document.querySelector('.checkout');

let counter = 1;
productCounter.textContent = counter;
subtractBtn.addEventListener('click', () => {
    if(counter > 1){
        counter--
        productCounter.textContent = counter;
    }
})

addBtn.addEventListener('click', () => {
        counter++
        productCounter.textContent = counter;
})

addToCart.addEventListener('click', () => {
    if(addToCart.textContent = 'Add to cart'){
        cartCounter.textContent = counter;
        productNumber.textContent = counter;
        totalPrice.textContent = '$'+(125 * counter)+'.00';
        emptyCartTag.classList.add('d-none');
        cartWrapper.classList.add('cart-open');
        addToCart.textContent = "In cart";
    }
})

deleteProduct.addEventListener('click', () => {
    cartWrapper.classList.remove('cart-open');
    emptyCartTag.classList.remove('d-none');
    cartCounter.textContent = '';
    addToCart.textContent = "Add to cart";
})

checkout.addEventListener('click', () => {
    cartWrapper.classList.remove('cart-open');
    emptyCartTag.classList.remove('d-none');
    cartCounter.textContent = '';
    addToCart.textContent = "Add to cart";
})