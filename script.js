// Mapeamento de letras para imagens
const letterImages = {
    'a': 'images/a.png',
    'b': 'images/b.png',
    'c': 'images/c.png',
    'd': 'images/d.png',
    'e': 'images/e.png',
    'f': 'images/f.png',
    'g': 'images/g.png',
    'h': 'images/h.png',
    'i': 'images/i.png',
    'j': 'images/j.png',
    'k': 'images/k.png',
    'l': 'images/l.png',
    'm': 'images/m.png',
    'n': 'images/n.png',
    'o': 'images/o.png',
    'p': 'images/p.png',
    'q': 'images/q.png',
    'r': 'images/r.png',
    's': 'images/s.png',
    't': 'images/t.png',
    'u': 'images/u.png',
    'v': 'images/v.png',
    'x': 'images/x.png',
    'y': 'images/y.png',
    'z': 'images/z.png',
    '.': 'images/periodo.png',  // Nome alterado para evitar conflitos com o ponto final
    '´': 'images/acute.png',    // Nome alterado para representar acento agudo
    '?': 'images/question.png', // Imagem para o ponto de interrogação
    '!': 'images/exclamation.png', // Imagem para o ponto de exclamação
    ':': 'images/colon.png',    // Imagem para o caractere de dois pontos
    ';': 'images/semicolon.png' // Imagem para o ponto e vírgula
    // Adicione outras letras conforme necessário
};

// Função para atualizar as imagens com base na entrada
function updateImages() {
    const inputText = document.getElementById('inputText').value.toLowerCase(); // Pega o texto digitado e converte para minúsculas
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Limpa as imagens existentes

    // Para cada letra digitada, cria uma imagem se houver correspondência
    for (let char of inputText) {
        if (letterImages[char]) {
            const img = document.createElement('img');
            img.src = letterImages[char];
            img.alt = char;
            imageContainer.appendChild(img);
        }
    }
}