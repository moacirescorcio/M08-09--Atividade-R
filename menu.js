import { question } from "readline-sync";
import {pedir_numero, positivos, negativos} from "./util.js"

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
                let numero = numero_aleatorio(minimo,maximo)
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
            let somatorio = 0
            let somatorio_pos = 0
            let somatorio_neg = 0
            for(let item of vetor){
                somatorio += item
                if(item > 0){
                    somatorio_pos += item
                }else if(item < 0){
                    somatorio_neg += item
                }
            }
            console.log('>>Somatório dos números do vetor: ')
            console.log(`Total: ${somatorio}`)
            console.log(`Total positivos: ${somatorio_pos}`)
            console.log(`Total negativos: ${somatorio_neg}`)
        }
        
        //numero 8
        if(numero_menu === 8){
            let media_total = 0
            let media_pos = 0
            let media_neg = 0
            let somatorio = 0
            let somatorio_pos = 0
            let somatorio_neg = 0
            let contador_pos = 0
            let contador_neg = 0
            for(let item of vetor){
                somatorio += item
                if(item > 0){
                    somatorio_pos += item
                    contador_pos++
                }else if(item < 0){
                    somatorio_neg += item
                    contador_neg++
                }
            }
            media_total = calcular_media(somatorio, vetor.length)
            media_pos = calcular_media(somatorio_pos, contador_pos)
            media_neg = calcular_media(somatorio_neg, contador_neg)
            console.log(`Média total: ${media_total.toFixed(2)}`)
            console.log(`Média total positiva: ${media_pos.toFixed(2)}`)
            console.log(`Média total negativa: ${media_neg.toFixed(2)}`)
            //mediana
            const vetor_organizado = quicksort(vetor)
            const vetor_positivos = quicksort(positivos(vetor))
            const vetor_negativos = quicksort(negativos(vetor))
            console.log(vetor_positivos)
            console.log(vetor_negativos)
            let mediana_total = 0
            let mediana_pos = 0
            let mediana_neg = 0
            if(vetor_organizado.length % 2 != 0){
                mediana_total = vetor_organizado[Math.floor(vetor_organizado.length/2)]
            }else{
                let indice_meio_total = vetor_organizado.length / 2
                mediana_total = Math.floor((vetor_organizado[indice_meio_total - 1] + vetor_organizado[indice_meio_total]) / 2)
            }

            if(vetor_positivos.length % 2 != 0){
                mediana_pos = vetor_positivos[Math.floor(vetor_positivos.length/2)]
            }else{
                let indice_meio_pos = vetor_positivos.length / 2
                mediana_pos = Math.floor((vetor_positivos[indice_meio_pos - 1] + vetor_positivos[indice_meio_pos]) / 2)
            }

            if(vetor_negativos.length % 2 != 0){
                mediana_pos = vetor_negativos[Math.floor(vetor_negativos.length/2)]
            }else{
                let indice_meio_neg = vetor_negativos.length / 2
                mediana_neg = Math.floor((vetor_negativos[indice_meio_neg - 1] + vetor_negativos[indice_meio_neg]) / 2)
            }

            if(mediana_neg === NaN){
                mediana_neg === 0
            }
            if(media_neg === NaN){
                media_neg === 0
            }

            console.log(`Mediana total: ${mediana_total}`)
            console.log(`Mediana positivos: ${mediana_pos}`)
            console.log(`Mediana negativos: ${mediana_neg}`)

        }

        //numero 9
        if(numero_menu === 9){
            let maior = 0
            let menor = Infinity
            for(let item of vetor){
                if(item > maior){
                    maior = item
                }
                if(item < menor){
                    menor = item
                }
            }
            console.log(`Maior: ${maior}`)
            console.log(`Menor: ${menor}`)
        }

        //numero 10
        if(numero_menu === 10){
            let vetor_pos = []
            let vetor_neg = []
            let i = 0
            let j = 0
            for(let item of vetor){
                if(item > 0){
                    vetor_pos[i] = item
                    i++
                }else if(item < 0){
                    vetor_neg[j] = item
                    j++
                }
            }
            const aleatorio_pos = vetor_pos[Math.floor(Math.random(vetor_pos) * vetor_pos.length)]
            const aleatorio_neg = vetor_neg[Math.floor(Math.random(vetor_neg) * vetor_neg.length)]
            console.log(`Número aleatório positivo: ${aleatorio_pos}`)
            console.log(`Número aleatório negativo: ${aleatorio_neg}`)
        }

        //numero 11
        if(numero_menu === 11){
            const n = pedir_numero('Quantos novos arrays? ')
            const t = pedir_numero('De que tamanho? ')
            let novo_array = []
            
            
        }

        //numero 12
        if(numero_menu === 12){
            const n = pedir_numero('Tamanho do vetor: ')
            let novo_vetor = Array(n)
            for(let i = 0; i < n; i++){
                const numero = pedir_numero(`Digite o número [${i}] - `)
                novo_vetor[i] = numero
            }
            if(comparar_vetores(vetor, novo_vetor)){
                console.log('Os vetores são iguais!')
            }else{
                console.log('Os vetores são diferentes!')
            }
        
        }

        //numero 13
        if(numero_menu === 13){
            const n = pedir_numero('Top X maiores números: ')
            let vetor_ordenado = quicksort(vetor)
            let n_maiores = vetor_ordenado.slice(-n)
            console.log(`Seu vetor ordenado: ${vetor_ordenado}`)
            console.log(`Top ${n} maiores: ${n_maiores}`)

        }
        
        //numero 14
        if(numero_menu === 14){
            const n = pedir_numero('Top X menores números: ')
            let vetor_ordenado = quicksort(vetor)
            let n_menores = vetor_ordenado.slice(0, n)
            console.log(`Seu vetor ordenado: ${vetor_ordenado}`)
            console.log(`Top ${n} menores: ${n_menores}`)
        }
        
        //numero 15
        if(numero_menu === 15){
            let somatorio = 0
            for(let item of vetor){
                somatorio += item
            }
            let media = somatorio / vetor.length
            
            let menores_q_media = []
            let maiores_q_media = []
            for(let item of vetor){
                if(item < media){
                    menores_q_media.push(item)
                }else{
                    maiores_q_media.push(item)
                }
            }
            console.log(`Média: ${media.toFixed(1)}`)
            console.log(`Menores: ${menores_q_media}`)
            console.log(`Maiores: ${maiores_q_media}`)
        }

        //numero 17
        if(numero_menu === 17){
            let somatorio_pos_div_2 = 0
            let produto_neg_par = 0
            
            for(let item of vetor){
                if(item > 0 && item % 2 === 0){
                    somatorio_pos_div_2 += item
                }
                if(item < 0 && item % 2 === 0){
                    produto_neg_par = item * produto_neg_par
                }
            }
            const somatorio = somatorio_pos_div_2 + produto_neg_par
            console.log(`Seu vetor: ${vetor}`)
            console.log(`Somatorio dos positivos pares com o produto dos negativos pares: ${somatorio}`)
        }
        
        //numero 18
        if(numero_menu === 18){
            const vetor_ordem_crescente = quicksort(vetor)
            console.log(`Seu vetor: ${vetor}`)
            console.log(`Seu vetor em ordem crescente: ${vetor_ordem_crescente}`)
        }

        //numero 19
        if(numero_menu === 19){
            const vetor_ordem_decrescente = quicksort_decrescente(vetor)
            console.log(`Seu vetor: ${vetor}`)
            console.log(`Seu vetor em ordem descrescente: ${vetor_ordem_decrescente}`)
        }
        
        //numero 20
        if(numero_menu === 20){
            const n = pedir_numero('Digite um número: ')
            const m = pedir_numero('Digite um segundo número: ')
            let vetor_sem_multiplos = []
            for(let item of vetor){
                if(item % n != 0 && item & m != 0){
                   vetor_sem_multiplos.push(item)
                }

            }
            console.log(`Seu vetor: ${vetor}`)
            console.log(`Seu vetor sem múltiplos de ${n} e ${m}: ${vetor_sem_multiplos}`)
            
        }

        


        //escolha do número
        numero_menu = Number(question('\n>> Escolha um número do menu: '))
    }

    console.log(tchaus_randomicos())
        

    
}

function tchaus_randomicos(){
    const vetor_tchaus = ['Bom te ver!', 'Até a próxima!', 'Tchau, coração!', 'Se for, vá na paz!']
    const numero_random = Math.floor(Math.random() * vetor_tchaus.length)
    return vetor_tchaus[numero_random]
}

function quicksort(vetor) {
    if (vetor.length <= 1) {
      return vetor
    } else {
      const pivo = vetor[0]
      const menores = []
      const maiores = []
  
      for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] <= pivo) {
          menores.push(vetor[i])
        } else {
          maiores.push(vetor[i])
        }
      }
  
      return [...quicksort(menores), pivo, ...quicksort(maiores)]
    }
}

function quicksort_decrescente(vetor) {
    if (vetor.length <= 1) {
      return vetor
    } else {
      const pivo = vetor[0]
      const menores = []
      const maiores = []
  
      for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] <= pivo) {
          menores.push(vetor[i])
        } else {
          maiores.push(vetor[i])
        }
      }
  
      return [...quicksort_decrescente(maiores), pivo, ...quicksort_decrescente(menores)]
    }
}
  

function comparar_vetores(vetor, novo_vetor){
    if(vetor.length != novo_vetor.length){
        return false
    }
    for(let i = 0; i < novo_vetor.length; i++){
        if(vetor[i] != novo_vetor[i] || vetor.indexOf(vetor[i]) !== novo_vetor.indexOf(novo_vetor[i]))
        return false
    }
    return true
}

function dividir_vetor(vetor, t){
    let novo_vetor = []
    for(let i = 0; i < t; i++){
        novo_vetor[i] = vetor[i]
    }
    return novo_vetor
}

function calcular_media(somatorio, vetor){
    return (somatorio)/vetor
}



function numero_aleatorio(min,max){
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