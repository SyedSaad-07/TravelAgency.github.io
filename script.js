let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    login_form.classList.remove('active');
    search_form.classList.remove('active');
}

let login_form = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    login_form.classList.toggle('active');
    navbar.classList.remove('active');
    search_form.classList.remove('active');
}

let search_form = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    search_form.classList.toggle('active');
    navbar.classList.remove('active');
    login_form.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    login_form.classList.remove('active');
    search_form.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');
    
    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
};

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides:true,
    autoplay:{
        deplay:5500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });