import readline from 'readline'
export let choose1, choose2

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questionPlayer(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (answer) => {
            resolve(answer)
        })
    })
}

export async function playersChoose() {
    try {
    const pergunta = 
    `\n
Escolha um jogador: \n
    -------------------------------
    | Mario (M) | Peach (P)       |\n      
    | Yoshi (Y) | Bowser (B)      |\n 
    | Luigi (L) | Donkey Kong (D) |\n
    -------------------------------\n`

        choose1 = await questionPlayer(pergunta)

        choose2 = await questionPlayer(pergunta)
    }finally {
        rl.close()
    }
}

export const mario = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0
  };
  
export const bowser = {
    nome: "Bowser",
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0
};

export const peach = {
    nome: "Peach",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0
  };
  
export const yoshi = {
    nome: "Yoshi",
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
    pontos: 0
};

export const luigi = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0
  };
  
export const donkeyKong = {
    nome: "Donkey Kong",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0
};