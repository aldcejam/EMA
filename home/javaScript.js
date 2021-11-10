{
    let lastIndex = 0;
    let images = document.querySelectorAll('.slide__container img')

    images.forEach((item, index) => {

        document.querySelectorAll('.bullets__bullet-single')[index].addEventListener('click', function () {
            let lastImage = document.querySelectorAll('.slide__container img')[lastIndex]
            let actualImages = document.querySelectorAll('.slide__container img')[index]

            document.querySelectorAll('.bullets__bullet-single')[lastIndex].classList.remove('bullets__active-bullet')
            document.querySelectorAll('.bullets__bullet-single')[index].classList.add('bullets__active-bullet')

            lastImage.style.opacity = 0;
            actualImages.style.opacity = 1;
            lastIndex = index;


        })
    })
} {
    let burguer = document.querySelectorAll('.header__menu')[0];
    let disas = document.querySelectorAll('.header__options')[0]
    let lineBurguer = document.querySelectorAll('.menu__line');
    burguer.addEventListener('click', () => {
        if (disas.classList.contains('option--efects')) {
            disas.classList.remove('option--efects')
            lineBurguer[0].style.cssText = 'background-color: hsl(288, 94%, 19%);'
            lineBurguer[1].style.cssText = 'background-color: hsl(288, 94%, 19%);'
        } else {
            disas.classList.add('option--efects')
            lineBurguer[0].style.cssText = 'background-color: rgb(189, 187, 185);'
            lineBurguer[1].style.cssText = 'background-color: rgb(189, 187, 185);'

        }


    })

}
