import { question } from "readline-sync";

export function pedir_numero(label = 'Digite um número: '){
    let numero = question(label)

    while(isNaN(Number(numero)) || numero === ''){
        console.log('Valor inválido! Insira um número')
        numero = question(label)
    }
    
    return Number(numero)
}