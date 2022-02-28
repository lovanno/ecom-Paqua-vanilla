window.addEventListener('scroll', function(){
    let header = document.querySelector(".nav-items");
    let windowScroll = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowScroll);
        
    })
    