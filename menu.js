import { question } from "readline-sync";
import {pedir_numero} from "./util.js"

function main(){
    //iniciando com cabeçalho
    cabecalho()

    //escolha do número
    let numero_menu = Number(question('\n>> Escolha um número do menu: '))
    let vetor
    while(numero_menu != 0){
        //processamentos
        //numero 1 - vetor com tamanho n e dps com os números n
        if (numero_menu === 1){
            const n = Number(question('Tamnho do vetor: '))
            vetor = Array(n)
            console.log(`>> Seu vetor de tamanho ${n} vazio:`)
            console.log(vetor)

            let novo_vetor = []
            for (let i = 0; i < n; i++){
                novo_vetor[i] = n
            }
            console.log(`>> Seu vetor de tamanho ${n} com o número ${n}:`)
            console.log(novo_vetor)
            
            
        }

        //numero 2
        if(numero_menu === 2){
            const n = pedir_numero('Tamanho do vetor: ')
            vetor = Array(n)
            for(let i = 0; i < n; i++){
                const numero = pedir_numero(`Digite o número [${i}] - `)
                vetor[i] = numero
            }

            console.log(`>> Seu vetor de tamanho ${n} com os números digitados:`)
            console.log(vetor)
        }

        //numero 3
        if(numero_menu === 3){
            const n = pedir_numero('Tamanho do vetor: ')
            const minimo = pedir_numero('Número mínimo: ')
            const maximo = pedir_numero('Número máximo: ')
            vetor = Array(n)
            for(let i = 0; i < n; i++){
                let numero = numero_aleatori(minimo,maximo)
                vetor[i] = numero

            }
            console.log(`>> Seu vetor de tamanho ${n} com o número aleatórios de ${minimo} até ${maximo}:`)
            console.log(vetor)
        }

        //numero 4
        if(numero_menu === 4){
            console.log(`>> Seu vetor: `)
            console.log(vetor)
        }

        //numero 5
        if(numero_menu === 5){
            const n = pedir_numero('Digite o potência')
            let novo_vetor = []
            let i = 0
            for(let item of vetor){
                novo_vetor[i] = item**n
                i++
            }
            console.log(`>> Seu vetor elevado a potência ${n}:`)
            console.log(novo_vetor)
        }

        //numero 6
        if(numero_menu === 6){
            let menor_q_0 = 0
            let igual_0 = 0
            let maior_q_0 = 0
            for(let item of vetor){
                if(item < 0){
                    menor_q_0++
                }else if(item === 0){
                    igual_0++
                }else if(item > 0){
                    maior_q_0++
                }
            }
            console.log('>>Quantitativos dos números:')
            console.log(`Menor que 0: ${menor_q_0}`)
            console.log(`Igual a 0: ${igual_0}`)
            console.log(`Maior que 0: ${maior_q_0}`)
        }

        //numero 7
        if(numero_menu === 7){
            
        }
        
        
        
        
        //escolha do número
        numero_menu = Number(question('\n>> Escolha um número do menu: '))
    }
        

    
}



function numero_aleatori(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
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