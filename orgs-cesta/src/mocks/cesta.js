import logo from '../../assets/logo.png';

const cesta = {
    //topo e detalhes sao filhos(children) da const cesta
    topo:{
        titulo: "Detalhe da cesta",
    },

    detalhes:{
        nome: "Cesta de verduras",
        nomeFazenda: "Jenny Jack Farm",
        logoFazenda: logo,
        descricao: "Uma cesto com produtos selecionados cuidadosamente da fazenda para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    }
}

export default cesta;