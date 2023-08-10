// selecionar os elementos
const inputElement = document.querySelector("#input")
const fromElement = document.querySelector("#from")
// TIPO DO DADO QUE A GENTE TA CONVERTENDO 
const toElement = document.querySelector("#to")
const outputElement = document.querySelector("#output")
const convertButton = document.querySelector("#convert-btn")
const messageElement = document.querySelector("#message")

// função para converter as unidades.
/*Função para converter os valores*/

/**
 * values() retorna um array cujos elementos são os valores das propriedades enumeradas encontradas
 *  no objeto.
 * 
 */
function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    // validação se as unidades de entrada e saida forem iguais 
    if(fromValue == toValue){
        // se o valor final for igual ao inicial o resultado é o mesmo.
        outputElement.value = inputElement.value;
        // limpando a mensagem 
        messageElement.textContent = "";
        return
    }

    // Converter a unidade para metros independente do dado que chegou 
     let meters 
     if (fromValue == "m"){
        meters = inputElement.value

     } else if (fromValue == "km") {
        meters = inputElement.value * 1000

     } else if (fromValue == "cm") {
        meters = inputElement.value / 100

     } else if (fromValue == "mm") {
        meters = inputElement.value / 1000
     }

     // converter metros para unidade de saida 
     let result; 
     if (toValue == "m"){
        result = meters
     } else if (toValue == "km") {
        result = meters / 1000

     } else if (toValue == "cm") {
        result = meters * 100

     } else if (toValue == "mm") {
        result = meters * 1000
     }

     // exibir resultado no input
     outputElement.value = result

     // Exibir resultado na mensagem
     const fromLabel = fromElement.options[fromElement.selectedIndex].text;
     const toLabel = toElement.options[toElement.selectedIndex].text;

     // criando a mensagem 
     const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`

     messageElement.textContent = message;
     return;

     console.log(message)
}

// Evento de lista para acompanhar todos os passos da funcionalidade 
convertButton.addEventListener("click", convert);