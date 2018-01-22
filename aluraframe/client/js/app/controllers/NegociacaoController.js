class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
    
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adicionar(event) {

        event.preventDefault();
        
        this._listaNegociacoes.adicionar(this._criarNegociacao());
        console.log(this._listaNegociacoes.negociacoes)
        this._limparFormulario();
    }

    _criarNegociacao() {
        
        return new Negociacao(
            DateHelper.ConverterTextoParaData(this._inputData.value),
            this._inputQuantidade.value, 
            this._inputValor.value
        );
    }

    _limparFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}