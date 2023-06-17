import { question } from "readline-sync";

export function pedir_numero(label = 'Digite um número: '){
    let numero = question(label)

    while(isNaN(Number(numero)) || numero === ''){
        console.log('Valor inválido! Insira um número')
        numero = question(label)
    }
    
    return Number(numero)
}

export function positivos(vetor){
    const vetor_pos = []
    for(let item of vetor){
        if(item > 0){
            vetor_pos.push(item)
        }
    }
    return vetor_pos
}

export function negativos(vetor){
    const vetor_neg = []
    for(let item of vetor){
        if(item < 0){
            vetor_neg.push(item)
        }
    }

    return vetor_neg
}



