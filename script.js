function toggleMenu() {
    var ul = document.querySelector('#nav_bar ul');
    ul.style.display = ul.style.display === 'none' ? 'flex' : 'none';
}

document.addEventListener("contextmenu", function(e){
    e.preventDefault()
},false)