/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2) {
    var p = "Pedra";
    var t = "Tesoura";
    var p2 = "Papel";

    if (player1 === p && player2 === p2) {
        return "Jogador 1 venceu!";
    } else if (player1 === p2 && player2 === t) {
        return "Jogador 1 venceu!"
    } else if (player1 === p && player2 === t) {
        return "Jogador 2 venceu!"
    } else if (player1 === p2 && player2 === t) {
        return "Jogador 2 venceu!"
    } else if (player1 === p && player2 === p2) {
        return "Jogador 2 venceu!"
    } else if (player1 === player2) {
        return "Empate!"
    }

}






