const slider = document.querySelector('.slider');
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then((data) => {
    const slides = [];
    // let currentSlideIndex = 0;

  data.forEach((product)=> {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `<img src="${product.image}">`;
    slider.appendChild(slide);
    slides.push(slide);
  });
});












