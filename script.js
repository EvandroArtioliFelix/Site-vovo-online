// Classe Prato
class Prato {
    constructor(nome, tipo, descricao) {
        this.nome = nome;
        this.tipo = tipo;
        this.descricao = descricao; // Adiciona a descrição da receita
        this.ingredientes = [];
    }

    adicionarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
    }

    removerIngrediente(ingrediente) {
        this.ingredientes = this.ingredientes.filter(ing => ing.nome !== ingrediente.nome);
    }
}

// Classe Ingrediente
class Ingrediente {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    getNome() {
        return this.nome;
    }

    getQuantidade() {
        return this.quantidade;
    }
}

// Classe Filtro
class Filtro {
    filtrarPorTipo(listaPratos, tipo) {
        return listaPratos.filter(prato => prato.tipo === tipo);
    }

    filtrarPorIngrediente(listaPratos, ingrediente) {
        return listaPratos.filter(prato => prato.ingredientes.some(ing => ing.nome.toLowerCase().includes(ingrediente.toLowerCase())));
    }
}

// Criação da lista de pratos
let pratos = [
    new Prato("Torta de Limão", "doce", `
    <h4>Ingredientes da Massa:</h4>
    <ul>
        <li>4 ovos</li>
        <li>2 xícaras de chá de farinha de trigo</li>
        <li>1 xícara de chá de açúcar</li>
        <li>1 xícara de chá de leite</li>
        <li>2 colheres de sopa de margarina ou manteiga sem sal</li>
        <li>2 colheres de sopa de coco ralado</li>
        <li>1 colher de sopa de fermento em pó</li>
    </ul>
    <h4>Modo de Preparo:</h4>
    <ol>
        <li>No liquidificador, misture ovos, leite, margarina, açúcar e coco ralado. Bata até misturar bem.</li>
        <li>Adicione a farinha aos poucos e mexa com uma espátula. Acrescente fermento devagar.</li>
        <li>Espalhe a massa em uma forma untada e asse por 40 minutos ou até dourar.</li>
    </ol>`),
    
    new Prato("Frango Agridoce com Abobrinha e Parmesão", "salgado", `
    <h4>Ingredientes do Frango:</h4>
    <ul>
        <li>1 quilo de coxa e sobrecoxa de frango</li>
        <li>2 colheres de sopa de extrato de tomate</li>
        <li>2 colheres de sopa de azeite</li>
        <li>2 colheres de sopa de vinagre</li>
        <li>1 colher de sopa de mel</li>
        <li>Sal parrilla a gosto</li>
        <li>150 ml de suco de laranja</li>
        <li>1 colher de sopa de páprica defumada</li>
        <li>50g de manteiga derretida</li>
        <li>4 dentes de alho cortados em lâminas</li>
    </ul>
    <h4>Modo de Preparo:</h4>
    <ol>
        <li>Tempere o frango com todos os ingredientes e deixe marinar por 24 horas.</li>
        <li>Asse na brasa, pincelando com a mistura de manteiga e caldo restante.</li>
        <li>Grelhe abobrinhas com azeite e alho em pó, finalize com parmesão.</li>
    </ol>`),
    
    new Prato("Peixe com Limão e Alcaparras", "salgado", `
    <h4>Ingredientes:</h4>
    <ul>
        <li>2 postas de robalo (180g cada)</li>
        <li>2 colheres de sopa de manteiga</li>
        <li>1 colher de sopa de azeite</li>
        <li>1 limão-siciliano</li>
        <li>2-3 colheres de sopa de alcaparras</li>
        <li>Pimenta-do-reino branca moída</li>
        <li>1 dente de alho laminado</li>
    </ul>
    <h4>Modo de Preparo:</h4>
    <ol>
        <li>Aqueça o azeite e coloque as postas de peixe com o lado da pele para baixo.</li>
        <li>Adicione fatias de limão na frigideira. Após dourar, vire o peixe e adicione alcaparras e alho.</li>
        <li>Tampe e cozinhe por mais 6 minutos. Finalize com endro.</li>
    </ol>`)
];

// Adicionando ingredientes aos pratos
pratos[0].adicionarIngrediente(new Ingrediente("Limão", "2 unidades"));
pratos[0].adicionarIngrediente(new Ingrediente("Farinha", "200g"));
pratos[1].adicionarIngrediente(new Ingrediente("Frango", "1kg"));
pratos[1].adicionarIngrediente(new Ingrediente("Mel", "1 colher de sopa"));
pratos[2].adicionarIngrediente(new Ingrediente("Peixe", "2 postas"));
pratos[2].adicionarIngrediente(new Ingrediente("Alcaparras", "3 colheres de sopa"));

// Função para aplicar o filtro
function aplicarFiltro() {
    const tipo = document.getElementById("tipoPrato").value;
    const ingrediente = document.getElementById("ingrediente").value;

    const filtro = new Filtro();
    let pratosFiltrados = filtro.filtrarPorTipo(pratos, tipo);

    if (ingrediente) {
        pratosFiltrados = filtro.filtrarPorIngrediente(pratosFiltrados, ingrediente);
    }

    exibirPratosFiltrados(pratosFiltrados);
}

// Função para exibir os resultados filtrados
function exibirPratosFiltrados(listaPratos) {
    const resultadoDiv = document.getElementById("resultadoFiltro");
    resultadoDiv.innerHTML = '';  // Limpa os resultados anteriores

    if (listaPratos.length === 0) {
        resultadoDiv.innerHTML = '<p>Nenhum prato encontrado.</p>';
    } else {
        listaPratos.forEach(prato => {
            const pratoDiv = document.createElement('div');
            pratoDiv.innerHTML = `
                <h3>${prato.nome}</h3>
                <p>Tipo: ${prato.tipo}</p>
                <div>${prato.descricao}</div>
            `;
            resultadoDiv.appendChild(pratoDiv);
        });
    }
}
