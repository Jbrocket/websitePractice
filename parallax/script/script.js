window.addEventListener('scroll', function(e) {
    const target = document.querySelectorAll('.scroll');

    let index = 0, length = target.length
    for (index = 0; index < length; index++){
        if (this.window.pageYOffset < 290){
            let pos = window.pageYOffset;
            target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
        }
        else if (target[index].dataset.translate === 'horozontal'){
            let pos = (window.pageYOffset - 290) * target[index].dataset.rate;
            let y = window.pageYOffset;
            target[index].style.transform = `translate3d(${pos}px, ${y}px, 0px)`;
        }
        else if(this.window.pageYOffset > 800){
            target[index].style.transform = `translate3d(0px, 290px, 0px)`
        }
        else{
            let pos = (window.pageYOffset - 290) * target[index].dataset.rate + 290;
            target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
        }
    }
});