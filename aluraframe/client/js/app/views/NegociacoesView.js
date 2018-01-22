class NegociacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template(model) {

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map(item => 
                        `
                            <tr>
                                <td>${DateHelper.ConverterDataParaTexto(item.data)}</td>
                                <td>${item.quantidade}</td>
                                <td>${item.valor}</td>
                                <td>${item.volume}</td>
                            </tr>
                        `
                    ).join('')}
                </tbody>
                
                <tfoot> 
                    <td colspan="3"></td>
                    <td>${model.negociacoes.reduce((total, item) => total + item.volume, 0.0)}</td>
                </tfoot>
            </table>
        `;
    }
    
    update(model) {

        this._elemento.innerHTML = this._template(model);
    }
}
