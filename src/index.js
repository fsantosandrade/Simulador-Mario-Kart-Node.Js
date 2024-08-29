let player1 = {
  nome: "",
  velocidade: 0,
  manobrabilidade: 0,
  poder: 0,
  pontos: 0
};

let player2 = {
    nome: "",
    velocidade: 0,
    manobrabilidade: 0,
    poder: 0,
    pontos: 0
};

//Rolagem de dados
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function playRaceEngine(character1, character2) {
    //rounds

    for(let i = 1; i <= 5; i++) {
        console.log("------------------------")
        console.log(`🏁 Rodada ${i}\n`)

        //Sortear bloco
        let pista = Math.floor(Math.random() * 3) + 1

        //Rolagem player 1
        let p1 = await rollDice()

        //Rolagem player 2
        let p2 = await rollDice()

        switch(pista) {
            case 1:
                //Bloco de reta
                console.log("Bloco: RETA!\n")
                
                
                console.log(`${character1.nome} 🎲 rolou um dado de velocidade ${p1} + ${character1.velocidade} = ${p1 + character1.velocidade}`)

                console.log(`${character2.nome} 🎲 rolou um dado de velocidade ${p2} + ${character2.velocidade} = ${p2 + character2.velocidade}`)

                //Resultado da rodada
                if((p1 + character1.velocidade) > (p2 + character2.velocidade)) {
                    console.log(`${character1.nome} marcou ponto!`)
                    console.log("------------------------\n")
                    character1.pontos ++
                }else if((p2 + character2.velocidade) > (p1 + character1.velocidade)) {
                    console.log(`${character2.nome} marcou ponto!`)
                    console.log("------------------------\n")
                    character2.pontos ++
                }else {
                    console.log("Empate! Ninguém marcou ponto. 💪\n")
                    console.log("------------------------\n")
                }
                break
            
            //Bloco de curva
            case 2:
                console.log("Bloco: CURVA!\n")
                
                console.log(`${character1.nome} 🎲 rolou um dado de manobrabilidade ${p1} + ${character1.manobrabilidade} = ${p1 + character1.manobrabilidade}`)

                console.log(`${character2.nome} 🎲 rolou um dado de manobrabilidade ${p2} + ${character2.manobrabilidade} = ${p2 + character2.manobrabilidade}`)

                //Resultado da rodada
                if((p1 + character1.manobrabilidade) > (p2 + character2.manobrabilidade)) {
                    console.log(`${character1.nome} marcou ponto!`)
                    console.log("------------------------\n")
                    character1.pontos ++
                }else if((p2 + character2.manobrabilidade) > (p1 + character1.manobrabilidade)) {
                    console.log(`${character2.nome} marcou ponto!`)
                    console.log("------------------------\n")
                    character2.pontos ++
                }else {
                    console.log("Empate! Ninguém marcou ponto. 💪")
                    console.log("------------------------\n")
                }
                break

            //Bloco de confronto
            case 3:
                console.log("Bloco: CONFRONTO!\n")
                
                console.log(`${character1.nome} 🎲 rolou um dado de poder ${p1} + ${character1.poder} = ${p1 + character1.poder}`)

                console.log(`${character2.nome} 🎲 rolou um dado de poder ${p2} + ${character2.poder} = ${p2 + character2.poder}`)

                //Sortear se é uma bomba ou um casco
                const rodadaConfronto = Math.floor(Math.random() * 2)
                let bombaOuCasco
                if(rodadaConfronto === 0) {
                    bombaOuCasco = "bomba"
                }else if (rodadaConfronto === 1) {
                    bombaOuCasco = "casco"
                }

                //Resultado da rodada
                //Player 1 vence 
                if((p1 + character1.poder) > (p2 + character2.poder)) {
                    if(bombaOuCasco === "casco") {
                        console.log(`${character2.nome} bateu em um casco 🐢 e perdeu um ponto!`)
                        if(character2.pontos > 0) {
                            character2.pontos --
                        }
                    }else if(bombaOuCasco === "bomba") {
                        console.log(`${character2.nome} bateu em uma bomba 💣 e perdeu dois pontos!`)
                        if(character2.pontos === 1) {
                            character2.pontos --
                        }else if(character2.pontos > 1) {
                            character2.pontos -= 2
                        }
                    }

                    //Turbo aleatório
                    const turboConfronto = Math.floor(Math.random() * 2)
                    let turbo
                    if(turboConfronto === 0) {
                        turbo = false
                    }else if (turboConfronto === 1) {
                        turbo = true
                    }

                    //Sorteando o turbo
                    if(turbo) {
                        console.log(`${character1.nome} pegou um turbo🔥 e ganhou um ponto!`)
                        character1.pontos ++
                    }
                    console.log("------------------------\n")

                //Player 2 vence
                }else if((p2 + character2.poder) > (p1 + character1.poder)) {
                    if(bombaOuCasco === "casco") {
                        console.log(`${character1.nome} bateu em um casco 🐢 e perdeu um ponto!`)
                        if(character1.pontos > 0) {
                            character1.pontos --
                        }
                    }else if(bombaOuCasco === "bomba") {
                        console.log(`${character1.nome} bateu em uma bomba 💣 e perdeu dois pontos!`)
                        if(character1.pontos === 1) {
                            character1.pontos --
                        }else if(character1.pontos > 1) {
                            character1.pontos -= 2
                        }
                    }

                    //Turbo aleatório
                    const turboConfronto = Math.floor(Math.random() * 2)
                    let turbo
                    if(turboConfronto === 0) {
                        turbo = false
                    }else if (turboConfronto === 1) {
                        turbo = true
                    }

                    //Sorteando o turbo
                    if(turbo) {
                        console.log(`${character2.nome} pegou um turbo🔥 e ganhou um ponto!`)
                        character2.pontos ++
                    }
                    console.log("------------------------\n")

                }else {
                    console.log("Empate! Ninguém perdeu ponto. 💪")
                    console.log("------------------------\n")
                }
                break

            default:
                console.log("ERROR")
                break
        }
    }

    //Verificando ganhador
    if(character1.pontos > character2.pontos) {
        console.log(`${character1.nome} é o vencedor da corrida! 🏅`)
    }else if(character2.pontos > character1.pontos) {
        console.log(`${character2.nome} é o vencedor da corrida! 🏅`)
    }else {
        console.log("Empate! Ninguém venceu. 💪")
    }
}

import { playersChoose, 
    mario,
    bowser,
    luigi,
    peach,
    yoshi,
    donkeyKong,
    choose1,
    choose2 
} from './playersChoose.js'

async function playersToRun() {
    //Escolhendo os jogadores
    await playersChoose()
    let p1, p2

    // Configura o primeiro jogador
    switch (choose1.toUpperCase()) {
        case "M":
            player1 = { ...mario }; // Supondo que player1 e player2 são objetos
            p1 = true;
            break;
        case "B":
            player1 = { ...bowser };
            p1 = true;
            break;
        case "P":
            player1 = { ...peach };
            p1 = true;
            break;
        case "Y":
            player1 = { ...yoshi };
            p1 = true;
            break;
        case "L":
            player1 = { ...luigi };
            p1 = true;
            break;
        case "D":
            player1 = { ...donkeyKong };
            p1 = true;
            break;
        default:
            p1 = false;
            break;
    }

    // Configura o segundo jogador
    switch (choose2.toUpperCase()) {
        case "M":
            player2 = { ...mario };
            p2 = true;
            break;
        case "B":
            player2 = { ...bowser };
            p2 = true;
            break;
        case "P":
            player2 = { ...peach };
            p2 = true;
            break;
        case "Y":
            player2 = { ...yoshi };
            p2 = true;
            break;
        case "L":
            player2 = { ...luigi };
            p2 = true;
            break;
        case "D":
            player2 = { ...donkeyKong };
            p2 = true;
            break;
        default:
            p2 = false;
            break;
    }

    return p1 && p2;
}

(async function main() {
    const allPlayersValid = await playersToRun()

    if(allPlayersValid) {
        console.log("\n")
        console.log(`🏁🚦 A corrida entre ${player1.nome} e ${player2.nome} está começando! \n`)

        //Iniciando o jogo
        await playRaceEngine(player1, player2)
        console.log("\n")
    }else {
        console.log("\nUm ou mais desses jogadores não existem!\n")
    }
    
})();