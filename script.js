const paginas = [
  {
    frase: "Eu amo voce e amo tanto o amor que voce tem por mim, amo tanto seu jeito carinhoso e companheiro que fui obrigado a fazer isso! espero que goste!",
  },
  {
    frase: "fiz esse projeto para te mostrar o quanto eu amo voce,o qual especial vc é, voce sempre tera a mim esse cara brincallhao, leve amoroso e cheio de caretas so pra te arrancar sorrisos e gargalhadas todos os dias 😜 ",
    imagem: "imagens/foto5.jpeg"
  },
  {
    frase: "voce e dona do melhor e mais bonito sorriso desse mundo,eu sou apaixonado apaixonado em seu sorriso em sua beleza em seu lindo cabelo, tudo em voce me encanta 😍,como pode existir uma mulher tao perfeita!!!!!",
    imagem: "imagens/foto6.jpeg"
  },
  {
    frase: "papai do ceu me abencoou com a sua mais preciosa filha, a mais linda, a mais fofa, a mais simpatica, a mais amorosa e carinhosa que tem, como eu amo todo seu amor e carinho por mim, com o seu amor eu sei que papai do ceu me ama muito, me enviou a maior companheira de todas!!!🥹 ",
    imagem: "imagens/foto4.jpeg"
  },
  {
    frase: "Nao pode faltar a minha foto preferida sua, a foto com a qual eu mais me apaaixonei na sua beleza, no seu jeitinho, nas suas caras e bocas hehehe, eu me aapaixonei demaaaais em cada detalhe seu, e ahhhh essa camisa ficou tao perfeita em voce, sem duvidas voce vai ser a minha esposa!!!!👰‍♀️",
    imagem: "imagens/foto3.jpeg"
  },
  {
    frase: "Agr vem meus prediletos, seus videos mais fofos e lindos do mundo, como falei amo suas caaraas e bocas e quando voce pisca e mostra a linguinha ahhhhhh eu me apaixono cada vez mais!!!!!🫠",
    video: "videos/video1.mp4",
  },
  {
    frase: "olha essa piscadinha me diz se nao e a melhor mulher do mundo, agradeço tanto a Deus por ter colocado voce na minha vida, mesmo a distancia voce me traz tanta paz e felicidadeeeeeeee!!!!🥰",
    video: "videos/video2.mp4"
  },
  {
    frase: "Amor voce nao tem noçao do quanto que eu babei nesse video, nesse teu jeitnho que me encanta me fascina me deixa doido, como eu queria te ter por perto, te abraçar,cuidar de vc, como eu queria so ficar ao seu lado ja me faria o homem mais feliz do mundo!!🥰",
    video: "videos/video3.mp4"
  },
  {
    frase: "Amor eu estou doido pra ir ai te ver e passaar a tarde vendo esse finzinho de tarde com a pessoa mais incrivel desse mundo, esse vai ser nosos primeiro momento juntos e vai ser tao incrivel ter voce ao meu lado, qualquer lugar ate mesmo sentado numa calçada tomando refri iria ser um dos melhores momentos da minha vida... eu te amooooooo!!!🥰",
    imagem: "imagens/foto2.jpeg"
  },
  {
    frase: "Amor pode ter certeza q eu esperarei o tempo que for para ter vc ao meu lado eu te amo demais em tao pouco tempo, eu prometo sempre cuidar de voce, sempre orar por vc, sempre te apoiar e incentivar e sempre te amar da maneira em que voce merece, voce e uma pessoa que merece o mundo e todo o o amor que a nele, voce e unica e ja esta se tornando a minha pessoa preferida nesse mundo!🥰",
    imagem: "imagens/foto1.jpeg"
  },
  {
    frase: "esse e o fim desse projeto mas vai ter inumeros outros,Amor existe uma lenda em que quando a pessoa morre passa-se 7 minutos tendo as melhores lembrancas de sua vida, pode acreditar voce estara em todas as minhas lembraças por que iremos ter diversos momentos mararavilhosos juntos!Amor nesse pouco tempo eu ja te amo demais, prometo sempre cuidar e te amar como voe merece,voce é a pessoa em que eu quero e VOU compartilhar minha vida(eu nao tenho devolução papai do ceu ja avisou),vou passar todos os momentos bons com voce e os momentos ruins, serei seu apoio para todos os momentos, semrpe serei atencioso e consolador com voce,tentarei trazer sempre alegria assim como voce ja me traz hoje distante, sei que voce ja estaa num dia triste hj, espero que esse projeto te anime e arranque um pouco de alegria, eu amo voce e jamais desistirei de voce pode ter certeza absoluta disso voce e minha escolha de todos os dias, amo voce mil milhoes!!!❤️ "
  }


];


paginas.forEach(p => {
  if (p.imagem) new Image().src = p.imagem;
  if (p.video) {
    const v = document.createElement("video");
    v.src = p.video;
  }
});

let indice = 0;
let musicaIniciada = false;
let bloqueioClique = false;

const frase = document.getElementById("frase");
const foto = document.getElementById("foto");
const video = document.getElementById("video");
const botao = document.getElementById("btn");
const musica = document.getElementById("musica");

function limparMidias() {
  foto.style.display = "none";
  foto.src = "";

  video.pause();
  video.style.display = "none";
  video.src = "";
}

function atualizarPagina() {
  const pagina = paginas[indice];
  frase.innerHTML = pagina.frase;

  limparMidias();

  if (pagina.imagem) {
    foto.src = pagina.imagem;
    foto.style.display = "block";
  }

  if (pagina.video) {
    video.src = pagina.video;
    video.muted = true;
    video.style.display = "block";
  }
}

botao.addEventListener("click", () => {
  if (bloqueioClique) return;
  bloqueioClique = true;
  setTimeout(() => bloqueioClique = false, 300);

  if (!musicaIniciada) {
    musica.volume = 0.4;
    musica.play();
    musicaIniciada = true;
  }

  if (indice < paginas.length - 1) {
    indice++;
    atualizarPagina();
  } else {
    botao.disabled = true;
    botao.textContent = "Eu te amo ❤️";
  }
});

atualizarPagina();