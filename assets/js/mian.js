 function openNav(){
    let nav = document.querySelector('main header ul');
    nav.classList.toggle('active-menu');
}

window.addEventListener('resize', function(){
    let screenSize = this.window.innerWidth;
    let nav = document.querySelector('main header ul');
    if (screenSize > 700 && nav.classList.contains('active-menu') ){
        nav.classList.remove('active-menu');
     }
});