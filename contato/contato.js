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
    function validar() {
        var campName = document.getElementById('userName');
        var campEmail = document.getElementById('userEmail');
        var campAssunto = document.getElementById('userAssunto');
        var campMessage = document.getElementById('fieldset--message');

        if (campName.value == '' || campEmail.value == '' || campAssunto.value == '') {
            alert('preencha os campos vazios')
            return false;
        }
        if (campName.value.length < 4 || campEmail.value.length < 4) {
            alert('poucas caracterias')
            return false
        }
        if (campAssunto.value.length < 10) {
            alert('poucas caracterias no campo assunto')
            return false;
        }
        if (campMessage.value.length < 30) {
            alert('poucas caracterias no campo menssagem')
            return false;
        }
        return true;

    }

}