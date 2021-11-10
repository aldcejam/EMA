{
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
{
    let lastIndex = 0;
    let images = document.querySelectorAll('.slider__slide img')

    images.forEach((item, index) => {

        document.querySelectorAll('.slide__bullet-single')[index].addEventListener('click', function () {
            let lastImage = document.querySelectorAll('.slider__slide img')[lastIndex]
            let actualImages = document.querySelectorAll('.slider__slide img')[index]

            document.querySelectorAll('.slide__bullet-single')[lastIndex].classList.remove('slide__active-bullet')
            document.querySelectorAll('.slide__bullet-single')[index].classList.add('slide__active-bullet')

            lastImage.style.opacity = 0;
            actualImages.style.opacity = 1;
            lastIndex = index;


        })
    })
}
{
    function validate() {
        var campRegistration = document.getElementById('userRegistration');
        var campPassword = document.getElementById('userPassword');

        if (campRegistration.value == '' || campPassword.value == '') {
            alert('preencha os campos vazios')
            return false;
        }
        if (campRegistration.value.length < 4) {
            alert('Matricula curta demais')
            return false
        }
        if (campPassword.value.length < 6) {
            alert('Senha Pequena Demais')
            return false
        }

        return true;

    }
}