document.addEventListener("DOMContentLoaded", (e) => {
    const tela = document.querySelector("#tela");
    const contexto = tela.getContext("2d");

    const imagem = new Image();
    imagem.src = 'img/imagem-superior.jpg';

    imagem.onload = () => {
        tela.width = 500;
        tela.height = 500;

        contexto.drawImage(imagem, 0, 0, tela.width, tela.height);
        contexto.globalCompositeOperation = 'destination-out';
    }

    tela.addEventListener("mousemove", (e) => {
        const retangulo = tela.getBoundingClientRect();
        
        const x = e.clientX - retangulo.left;
        const y = e.clientY - retangulo.top;

        contexto.beginPath();
        contexto.arc(x, y, 20, 0, 2*Math.PI);
        contexto.fill();
    })
})