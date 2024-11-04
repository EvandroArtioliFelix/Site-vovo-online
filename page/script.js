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
    `),
    new Prato("Mousse de Maracujá", "doce", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>2 xícaras de concentrado de maracujá</li>
            <li>1 lata ou 395 gramas de leite condensado</li>
            <li>1 lata ou 300 gramas de creme de leite</li>
            <li>1 colher de sopa de gelatina em pó sem sabor</li>
            <li>50 mililitros de água morna</li>
        </ul>
        
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>No liquidificador, acrescente 2 xícaras de concentrado de maracujá, 1 lata de leite condensado e 1 caixinha de creme de leite. Bata até ficar homogêneo.</li>
            <li>Em uma tigela, coloque 1 colher de sopa de gelatina em pó e dissolva em 50 mililitros de água morna. Em seguida, adicione a gelatina na mistura do liquidificador e bata por alguns segundos.</li>
            <li>Transfira a mistura para um refratário e decore com sementes de maracujá. Leve à geladeira por 4 horas antes de servir.</li>
        </ol>
    `),
    new Prato("Arroz Frito com Lombo e Teriyaki", "salgado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>320 gramas de arroz cozido</li>
            <li>64 gramas de cenoura em cubinhos</li>
            <li>4 gramas de alho picado</li>
            <li>40 gramas de cebola picada</li>
            <li>2 ovos</li>
            <li>80 gramas de brócolis em pedaços</li>
            <li>60 gramas de acelga fatiada</li>
            <li>20 gramas de salsão picado</li>
            <li>20 gramas de manteiga</li>
            <li>30 mililitros de shoyu</li>
            <li>6 gramas de cebolinha picada</li>
            <li>2 colheres de chá de gergelim</li>
            <li>200 gramas de lombo</li>
            <li>60 gramas de farinha panko</li>
            <li>40 mililitros de molho teriyaki</li>
            <li>20 gramas de maionese</li>
        </ul>
        
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Refogue a cebola, o alho e a cenoura na manteiga.</li>
            <li>Adicione os ovos mexidos, seguido do brócolis, acelga e salsão, refogando por mais alguns minutos.</li>
            <li>Misture o arroz cozido e tempere com shoyu.</li>
            <li>Frite o lombo empanado até dourar. Sirva sobre o arroz, finalize com cebolinha, gergelim, molho teriyaki e maionese.</li>
        </ol>
    `),

    new Prato("Bolo de Cenoura Vulcão", "doce", `
    <h4>Ingredientes - Bolo de Cenoura:</h4>
    <ul>
        <li>2 cenouras grandes picadas (300 g)</li>
        <li>1/2 xícara (chá) de óleo (120 ml)</li>
        <li>3 ovos</li>
        <li>1 e 1/2 xícara (chá) de açúcar</li>
        <li>2 xícaras (chá) de farinha de trigo com fermento</li>
    </ul>

    <h4>Ingredientes - Calda:</h4>
    <ul>
        <li>1 lata de leite condensado</li>
        <li>1 e 1/4 de xícara (chá) de leite (300 ml)</li>
        <li>1/2 xícara (chá) de achocolatado ou chocolate em pó</li>
        <li>2 colheres (sopa) de manteiga</li>
    </ul>
    
    <h4>Modo de Preparo - Bolo de Cenoura:</h4>
    <ol>
        <li>Bata a cenoura com o óleo, o açúcar e os ovos no liquidificador até triturar e misturar bem.</li>
        <li>Transfira para uma tigela e incorpore a farinha aos poucos e delicadamente.</li>
        <li>Despeje em fôrma de cone central (25 cm de diâmetro) untada e enfarinhada.</li>
        <li>Leve ao forno médio preaquecido (180 ºC) por cerca de 40 minutos ou até dourar.</li>
        <li>Desenforme morno e preencha o centro com a calda, deixando escorrer pela lateral.</li>
        <li>Sirva em seguida para cortar e obter o efeito de bolo vulcão.</li>
    </ol>
`),

    new Prato("Bolo de Cenoura Vulcão", "doce", `
    <h4>Ingredientes - Bolo de Cenoura:</h4>
    <ul>
        <li>2 cenouras grandes picadas (300 g)</li>
        <li>1/2 xícara (chá) de óleo (120 ml)</li>
        <li>3 ovos</li>
        <li>1 e 1/2 xícara (chá) de açúcar</li>
        <li>2 xícaras (chá) de farinha de trigo com fermento</li>
    </ul>

    <h4>Ingredientes - Calda:</h4>
    <ul>
        <li>1 lata de leite condensado</li>
        <li>1 e 1/4 de xícara (chá) de leite (300 ml)</li>
        <li>1/2 xícara (chá) de achocolatado ou chocolate em pó</li>
        <li>2 colheres (sopa) de manteiga</li>
    </ul>
    
    <h4>Modo de Preparo - Bolo de Cenoura:</h4>
    <ol>
        <li>Bata a cenoura com o óleo, o açúcar e os ovos no liquidificador até triturar e misturar bem.</li>
        <li>Transfira para uma tigela e incorpore a farinha aos poucos e delicadamente.</li>
        <li>Despeje em fôrma de cone central (25 cm de diâmetro) untada e enfarinhada.</li>
        <li>Leve ao forno médio preaquecido (180 ºC) por cerca de 40 minutos ou até dourar.</li>
        <li>Desenforme morno e preencha o centro com a calda, deixando escorrer pela lateral.</li>
        <li>Sirva em seguida para cortar e obter o efeito de bolo vulcão.</li>
    </ol>
`),

new Prato("Medalhão na Brasa com Molho de Mostarda", "salgado", `
    <h4>Ingredientes:</h4>
    <ul>
        <li>300 gramas de carne</li>
        <li>2 colheres de sopa de cebola picada</li>
        <li>1 colher de sopa de azeite extravirgem</li>
        <li>8 alcaparras</li>
        <li>1 ramo de tomilho</li>
        <li>1 colher de sopa de vinho tinto</li>
        <li>1 colher de sopa de vinagre suave</li>
        <li>2 colheres de sopa de mostarda Dijon</li>
        <li>1 colher de chá de molho inglês</li>
        <li>150 mililitros de creme de leite fresco</li>
        <li>1 colher de sopa de manteiga gelada</li>
        <li>Sal de parrilha a gosto</li>
    </ul>

    <h4>Modo de Preparo:</h4>
    <ol>
        <li>Coloque a carne na churrasqueira e salgue com sal de parrilha a gosto.</li>
        <li>Asse até o ponto de sua preferência.</li>
        <li>Refogue a cebola e as alcaparras.</li>
        <li>Em fogo baixo, acrescente os outros ingredientes, exceto a manteiga, e deixe cozinhar por três minutos.</li>
        <li>Acrescente a manteiga gelada, retire o ramo de tomilho e passe num mixer.</li>
        <li>Seu medalhão na brasa com molho está pronto para ser servido. Bom apetite!</li>
    </ol>
`),

new Prato("Robata de Salmão com Brócolis", "salgado", `
    <h4>Ingredientes:</h4>
    <ul>
        <li>400 gramas de salmão em cubos</li>
        <li>250 gramas de brócolis</li>
        <li>1 colher de chá de sal</li>
        <li>40 gramas de alho frito</li>
        <li>100 gramas de maionese</li>
        <li>Suco de 1 limão</li>
        <li>30 gramas de molho sriracha</li>
    </ul>

    <h4>Modo de Preparo:</h4>
    <ol>
        <li>Coloque o brócolis rapidamente em água fervente por 1 a 2 minutos e depois resfrie em água ambiente.</li>
        <li>Em uma tigela, tempere os cubos de salmão com sal a gosto. Deixe marinar por cerca de 15 a 20 minutos para absorver o tempero.</li>
        <li>Em espetos, intercale os cubos de salmão com os floretes de brócolis.</li>
        <li>Coloque os espetos na frigideira pré-aquecida com azeite e cozinhe por cerca de 2 a 3 minutos de cada lado, ou até que o salmão esteja cozido e os brócolis estejam ligeiramente grelhados.</li>
        <li>Em um bowl, misture a maionese, suco do limão e duas colheres de molho sriracha.</li>
        <li>Retire os espetos da frigideira e transfira para um prato.</li>
        <li>Finalize com alho frito por cima e sirva a robata de salmão com brócolis acompanhada pelo molho. Bom apetite!</li>
    </ol>
`),

new Prato("Balinhas de Manga, Morango e Uva Verde", "doce", `
    <h4>Ingredientes - Balinha de Manga:</h4>
    <ul>
        <li>1/4 de xícara de chá (60 ml) de polpa de manga</li>
        <li>3 colheres de sopa de suco de laranja</li>
        <li>30 gramas de cenoura cozida</li>
        <li>2 colheres de sopa de mel</li>
        <li>1 sachê de gelatina em pó incolor (hidratada conforme instruções do fabricante)</li>
    </ul>

    <h4>Ingredientes - Balinha de Morango:</h4>
    <ul>
        <li>1/4 de xícara de chá (60 ml) de polpa de morango</li>
        <li>3 colheres de sopa de suco de maçã</li>
        <li>30 gramas de beterraba cozida</li>
        <li>2 colheres de sopa de mel</li>
        <li>1 sachê de gelatina em pó incolor (hidratada conforme instruções do fabricante)</li>
    </ul>

    <h4>Ingredientes - Balinha de Uva Verde:</h4>
    <ul>
        <li>1/4 de xícara de chá (60 ml) de polpa de uva verde peneirada</li>
        <li>3 colheres de sopa de suco de limão</li>
        <li>10 gramas de folhas de espinafre</li>
        <li>2 colheres de sopa de mel</li>
        <li>1 sachê de gelatina em pó incolor (hidratada conforme instruções do fabricante)</li>
    </ul>

    <h4>Modo de Preparo - Balinhas:</h4>
    <ol>
        <li>Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.</li>
        <li>Aqueça levemente a mistura em fogo baixo para dissolver a gelatina, sem deixar ferver.</li>
        <li>Despeje em forminhas de silicone ou formas para balinhas.</li>
        <li>Leve à geladeira por pelo menos 2 horas, ou até as balinhas firmarem.</li>
        <li>Desenforme e sirva suas balinhas de manga, morango ou uva verde. Bom apetite!</li>
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
