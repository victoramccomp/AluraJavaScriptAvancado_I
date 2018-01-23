class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    // Simulação de um método abstrato
    template() {

        throw new Error('O método _template deve ser implementado!')
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}

