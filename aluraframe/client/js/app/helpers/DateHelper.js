class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada pois possui métodos estáticos!');
    }
    
    static ConverterDataParaTexto(data) {
        // Template String -> Interpolação de strings
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    static ConverterTextoParaData(texto) {
        
        //Fail Fast com expressão regular para mandar a data no formato correto
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Data deve estar no formato YYYY-MM-DD');
        
        // ... represent Spread Operator
        return new Date(...texto
            .split('-')
            .map((item, indice) => item - indice % 2) // Arrow Function
        );
    }
}