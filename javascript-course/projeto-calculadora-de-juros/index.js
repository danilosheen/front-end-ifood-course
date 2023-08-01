import rl from 'readline-sync'

console.log('---- Aplicação de Juros ----\n')

let valorDevido = rl.question('Informe o valor devido: ')
let diasDeAtraso = rl.question('Informe quantos dias se passaram desde o vencimento do boleto: ')

console.log('\nValor original da dívida: R$', valorDevido)
console.log('Dias atrasados: ', diasDeAtraso)

if (diasDeAtraso > 15){
    valorDevido = (valorDevido*1.10).toFixed(0)
    console.log('Taxa de juros: 10%')

}else{
    valorDevido = (valorDevido*1.05).toFixed(0)
    console.log('Taxa de juros: 5%')
}
console.log('Valor total com juros: R$', valorDevido)


