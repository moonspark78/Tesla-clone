document.lastScrollePosition =0;


document.addEventListener('scrolle',  ()  => {
    const direction = window.pageYOffset - document.lastScrollePosition > 0 ? 'down' : 'up'; 


    document.lastScrollePosition = window.pageYOffset;
}) 