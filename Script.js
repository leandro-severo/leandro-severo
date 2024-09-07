const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após se formar na escola, você descobre uma nova tecnologia: um chat que pode responder todas as suas dúvidas sobre saúde ambiental, além de gerar imagens e áudios detalhados. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é fascinante!",
                afirmacao: "Ficou empolgado com as possibilidades de utilizar tecnologia para aprender mais sobre saúde ambiental."
            },
            {
                texto: "Isso é um pouco perturbador...",
                afirmacao: "Inicialmente teve receios sobre como essa tecnologia pode impactar a percepção humana sobre questões ambientais."
            }
        ]
    },
    {
        enunciado: "Após a descoberta dessa tecnologia, uma professora de ciências da escola decide fazer uma série de aulas sobre inteligência artificial aplicada à saúde ambiental. No final de uma dessas aulas, ela pede que você escreva um trabalho sobre o uso da IA para abordar questões ambientais. Qual é a sua abordagem?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca baseada em IA para encontrar informações relevantes e explicar de forma acessível no trabalho.",
                afirmacao: "Conseguiu explorar eficientemente recursos de IA para enriquecer seu entendimento sobre saúde ambiental."
            },
            {
                texto: "Escreve o trabalho com base em pesquisas pessoais, conversas com colegas e conhecimento prévio sobre o tema.",
                afirmacao: "Preferiu confiar em sua própria pesquisa e reflexão para criar o trabalho."
            }
        ]
    },
    {
        enunciado: "Após escrever o trabalho, a professora conduziu um debate sobre como a IA impacta o futuro do meio ambiente. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode ser uma aliada na solução de problemas ambientais complexos e na educação ambiental.",
                afirmacao: "Está comprometido em explorar como a IA pode impulsionar práticas sustentáveis e educar as pessoas sobre a importância da saúde ambiental."
            },
            {
                texto: "Expressa preocupação com o impacto negativo da IA no meio ambiente e na sustentabilidade.",
                afirmacao: "Sua preocupação com o uso ético e responsável da IA no contexto ambiental o levou a explorar alternativas sustentáveis e conscientes."
            }
        ]
    },
    {
        enunciado: "Ao final do debate, você precisa criar uma imagem que represente sua visão sobre a interação entre IA e saúde ambiental. Como você aborda essa tarefa?",
        alternativas: [
            {
                texto: "Cria uma imagem utilizando ferramentas tradicionais de design.",
                afirmacao: "Percebeu a importância de compartilhar conhecimentos em design com ferramentas acessíveis para promover a conscientização sobre saúde ambiental."
            },
            {
                texto: "Cria uma imagem utilizando um gerador de imagens baseado em IA.",
                afirmacao: "Explorou como ferramentas de IA podem acelerar a criação de representações visuais complexas sobre saúde ambiental, facilitando a comunicação eficaz."
            }
        ]
    },
    {
        enunciado: "Você está em um trabalho em grupo de biologia focado em saúde ambiental, com entrega próxima. Um membro do grupo propõe usar um chat baseado em IA para gerar o conteúdo. No entanto, o trabalho gerado pelo chat é muito similar ao de outros grupos. Como você reage?",
        alternativas: [
            {
                texto: "Acredita que utilizar o chat para gerar o conteúdo completo não é um problema, pois economiza tempo e recursos.",
                afirmacao: "Passou a depender excessivamente da IA para todas as tarefas e percebeu a necessidade de equilibrar a contribuição humana com o uso da tecnologia."
            },
            {
                texto: "Revisa e adiciona perspectivas pessoais ao trabalho gerado pela IA, garantindo originalidade e reflexão crítica.",
                afirmacao: "Entendeu que a IA pode ser uma ferramenta útil, mas valoriza a contribuição individual e a originalidade na abordagem de questões ambientais."
            }
        ]
    },
    {
        enunciado: "Qual das seguintes afirmativas está correta sobre saúde ambiental?"

        alternativas: [a "A queima de combustíveis fósseis contribui para a redução da poluição do ar".

            b "A poluição da água por descarte inadequado de resíduos industriais não afeta a saúde dos ecossistemas aquáticos"
            
            c "A preservação de áreas verdes urbanas ajuda a reduzir o impacto do calor urbano e promove a biodiversidade local".
            
            d "O aumento do uso de plásticos descartáveis não tem impacto significativo na saúde ambiental".
    
            {
                texto: "Qual das seguintes práticas é mais benéfica para promover a saúde ambiental?",
                afirmacao :Uso "indiscriminado de pesticidas sintéticos em áreas agrícolas".

                b "Desmatamento de florestas para expansão urbana".
                
                c "Implementação de políticas de reciclagem e redução de resíduos".
                
                d "Descarte inadequado de produtos químicos em corpos d'água".
                
               
               texto:"Qual das seguintes práticas contribui positivamente para a saúde ambiental?
                afirmacao.
            },
            {
                texto: "...."
                afirmacao: "."
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
