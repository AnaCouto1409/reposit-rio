
function add_active_to_els(container, elements){

    let add_active_to_els_func = function(){
   
    console.log("container recebido", container);
    let container_el = document.querySelector(container);
    console.log("container achado", container_el);
   
    if(container_el.getBoundingClientRect().top <= (window.innerHeight / 2)){
   
    let all_elements = document.querySelectorAll(elements);
   
    if(!all_elements[0].classList.contains('active')){
   
    for ( i = 0; i < all_elements.length; i++) {
    all_elements[i].classList.add('active');
    }
   
    }
   
    } 
    }
   
    add_active_to_els_func();
   
    window.addEventListener('scroll', add_active_to_els_func);
   }
   
   window.onload = function(){
    add_active_to_els('.skill-container', '.skill-item-list .item');
    add_active_to_els('.portfolio-section', '.portfolio-section .portfolio-card');
   }
   