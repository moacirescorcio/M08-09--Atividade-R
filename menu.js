import { question } from "readline-sync";
import {pedir_numero} from "./util.js"

function main(){
    //iniciando com cabeçalho
    cabecalho()

    //escolha do número
    const numero_menu = Number(question('\n>> Escolha um número do menu: '))

    //processamentos
    //numero 1 - vetor com tamanho n e dps com os números n
    if (numero_menu === 1){
        const n = Number(question('Tamnho do vetor: '))
        const vetor = Array(n)
        console.log(vetor)

        let novo_vetor = []
        for (let i = 0; i < n; i++){
            novo_vetor[i] = n
        }
        console.log(novo_vetor)
        
    }

    //numero 2
    if(numero_menu === 2){
        const n = pedir_numero('Tamanho do vetor: ')
        const vetor = Array(n)
        for(let i = 0; i < n; i++){
            const numero = pedir_numero(`Digite o número [${i}] - `)
            vetor[i] = numero
        }

        console.log(vetor)
    }
}

function cabecalho(){
    console.log(`
    -----MENU-----
    `)
    console.log(`
    1. Gerar vetor N posições, pedir valor padrão
    2. Preencher vetor manualmente item a item
    3. Preencher vetor automaticamente
    4. Mostrar vetor
    5. Transformar vetor: elevar a potência N
    6. Contar: Positivos, Negativos e Zeros
    7. Somatório: De todos, Dos Negativos e dos Positivos
    8. Exibir Média e Mediana: De Todos, Dos Positivos e Dos Negativos
    9. Exibir Maior e Menor número
    10. Sortear dois números: um positivo e um negativo
    11. Gerar N grupos de T tamanhos. Não repetir valores
    12. Pedir um novo vetor e verificar se está 100% presente nos números do sistema (e na mesma ordem)
    13. Top N maiores números
    14. Top N menores números
    15. Listar valor médio, e listar números maiores que a Média e Menores que a Média
    17. Somatório da Média dos Números Positivos múltiplos dois COM o Produto acumulado dos números negativos pares reduzidos à metade
    18. Ordenar os números em ordem crescente: 
    19. Ordenar em ordem decrescente
    20. Eliminar números múltiplos de N e M (simultaneamente)
    0. Sair (mensagem automática de tchau)

    
    `)
}

main()