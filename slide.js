/*para imagem passar de uma a outra*/

var radio = document.querySelector('.manual-btn')

var count = 1

/*guardar em uma variavel para que uma das imagems e input estejam marcados */


document.getElementById ('radio1').checked = true/*o primeiro input está marcado */
/*definir o tempo das imagems */

setInterval(() => {
    /*função responsavel de passar uma imagem a outra */
    proximaImg()
}, 5000)

/*quando a função for chamada este contador ganhara um valor a mais e quando for maior que 3 ele volta no 1 */
function proximaImg(){
    count++

    if (count > 3 ){
        count = 1
    }
    /*radio se junta ao conte ganhando o numero */
    document.getElementById ('radio'+ count).checked = true
}
