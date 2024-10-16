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
    </ol>`),

    new Prato("Batata Assada Recheada", "salgado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>4 batatas grandes</li>
            <li>200g de bacon picado</li>
            <li>200g de queijo muçarela ralado</li>
            <li>1 colher de sopa de manteiga</li>
            <li>Sal e pimenta a gosto</li>
            <li>Cheiro-verde picado para decorar</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Lave bem as batatas e faça furos com um garfo. Asse em forno pré-aquecido a 200°C por 45 minutos ou até ficarem macias.</li>
            <li>Enquanto isso, frite o bacon até dourar e reserve.</li>
            <li>Retire as batatas do forno, corte ao meio e retire parte da polpa com cuidado.</li>
            <li>Misture a polpa retirada com a manteiga, o bacon e metade do queijo. Tempere com sal e pimenta.</li>
            <li>Recheie as batatas com essa mistura, cubra com o restante do queijo e leve ao forno para gratinar.</li>
            <li>Decore com cheiro-verde antes de servir.</li>
        </ol>
    `),

    new Prato("Mousse de Chocolate Vegano", "doce", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>170 gramas de tofu mole</li>
            <li>3 colheres de sopa de xarope de bordo</li>
            <li>2 colheres de sopa de cacau em pó amargo</li>
            <li>1 colher de chá de pasta de baunilha</li>
            <li>40 gramas de chocolate amargo 70%</li>
            <li>1 colher de sobremesa de licor de amêndoas</li>
            <li>2 colheres de sopa de leite de aveia</li>
            <li>1 figo (opcional)</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Retire o excesso de água do tofu envolvendo com um papel toalha e pressionando bem.</li>
            <li>Em um processador, coloque o tofu, o leite de aveia, o xarope de bordo, o licor, a baunilha e o cacau em pó. Processe até ficar bem cremoso.</li>
            <li>Derreta o chocolate e espere chegar à temperatura ambiente.</li>
            <li>Acrescente o chocolate derretido ao creme no processador e bata um pouco mais.</li>
            <li>Transfira o creme para um saco de confeiteiro com bico pitanga e sirva na taça de sua preferência.</li>
            <li>Deixe descansar na geladeira por pelo menos 30 minutos antes de servir.</li>
            <li>Finalize com uma fatia de figo fresco e sirva a seguir.</li>
        </ol>
    `),

    new Prato("Sablée de Pistache com Creme Mascarpone e Frutas", "doce", `
        <h4>Ingredientes - Sablée de Pistache:</h4>
        <ul>
            <li>150 gramas de farinha de trigo</li>
            <li>40 gramas de açúcar de confeiteiro</li>
            <li>1 pitada de sal</li>
            <li>80 gramas de manteiga bem fria cortada em cubos</li>
            <li>45 gramas de farinha de pistache</li>
            <li>1 gema de ovo</li>
            <li>1 colher de sopa cheia de água gelada</li>
        </ul>
        
        <h4>Ingredientes - Creme Mascarpone:</h4>
        <ul>
            <li>200 gramas de mascarpone (ou ricota cremosa fresca, ou cream cheese)</li>
            <li>50 mililitros de creme de leite fresco</li>
            <li>30 gramas de açúcar de confeiteiro</li>
            <li>Baunilha em pasta, favas ou essência (ou raspas de limão, conhaque ou cachaça)</li>
        </ul>
        
        <h4>Ingredientes - Cobertura:</h4>
        <ul>
            <li>Frutas vermelhas ou frutas frescas a gosto</li>
            <li>Doce de leite cremoso a gosto</li>
        </ul>
        
        <h4>Modo de Preparo - Sablée de Pistache:</h4>
        <ol>
            <li>Misture a farinha de trigo, açúcar de confeiteiro e sal em um bowl.</li>
            <li>Adicione a manteiga fria e misture com as mãos até formar uma farofa.</li>
            <li>Incorpore a farinha de pistache, gema de ovo e a água gelada. Misture até formar uma massa homogênea.</li>
            <li>Embrulhe a massa em filme plástico e leve à geladeira por 30 minutos.</li>
            <li>Abra a massa e forre uma forma. Asse em forno pré-aquecido a 180°C até dourar levemente.</li>
        </ol>
        
        <h4>Modo de Preparo - Creme Mascarpone:</h4>
        <ol>
            <li>Bata o mascarpone com o creme de leite fresco até obter uma textura suave e cremosa.</li>
            <li>Adicione o açúcar de confeiteiro e a baunilha (ou a substituição escolhida) e misture bem.</li>
        </ol>
        
        <h4>Montagem:</h4>
        <ol>
            <li>Após a massa esfriar, espalhe o creme mascarpone sobre a base de sablée.</li>
            <li>Decore com frutas vermelhas ou frutas frescas a gosto e finalize com doce de leite cremoso.</li>
        </ol>
    `)
    
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
