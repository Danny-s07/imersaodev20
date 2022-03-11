//variavel com o nome dos filmes listados
var nomesfilmesSeries = []
   nomesfilmesSeries.push ("Grey's Anatomy")
  nomesfilmesSeries.push ("Queer EYe 5")
   nomesfilmesSeries.push ("Interestelar")
    nomesfilmesSeries.push ("Joker")
   nomesfilmesSeries.push ("Sherlock Holmes")
   nomesfilmesSeries.push ("FleaBag") 
   nomesfilmesSeries.push ("Mulher Maravilha")
   nomesfilmesSeries.push ("Aves de Rapina")

var divImages = document.querySelector(".image")
function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector('#filme-imagem')
      var filmeFavorito = campoFilmeFavorito.value
divImages.innerHTML = "<img src=" + filmeFavorito + ">" 

  if(filmeFavorito.endsWith('.jpg')) {
         listarFilmesNaTela(filmeFavorito)
     }else{
       alert("imagem invalida")
     } 
   campoFilmeFavorito.value = ""
   divImages.innerHTML = ""

} 
 
//variavel com as imagens dos filmes a serem listadas
var listafILmes = ["https://m.media-amazon.com/images/M/MV5BMjgwNGNkZGYtMWQyYS00YjEzLWFmZTctODUzYWMxOWJkNTAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOTU2ZTE0M2MtMzE4ZC00NWJmLWJjZGYtOTRmYWVmMDY0N2Q4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzQ3NTQxMjItODBjYi00YzUzLWE1NzQtZTBlY2Y2NjZlNzkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var links = [
"https://www.youtube.com/embed/TZKEyJrl8HY",
"https://www.youtube.com/embed/WechPJGpqS8",
"https://www.youtube.com/embed/mbbPSq63yuM",
"https://www.youtube.com/embed/zAGVQLHvwOY",
 "https://www.youtube.com/embed/xK7S9mrFWL4",
 "https://www.youtube.com/embed/aX2ViKQFL_k",
 "https://www.youtube.com/embed/8XrFAXykgoc",
 "https://www.youtube.com/embed/vzMLBmG2lnc",
]

    
for(var i = 0; i < listafILmes.length; i++){
    divImages.innerHTML += "<div onclick=\"setarIframe('"+links[i]+"')\" class='box'><h1>"+nomesfilmesSeries[i]+"</h1><img src=" + listafILmes[i] + "></div>" 
} 
function setarIframe(url){
    ifr.src = url
    console.log(url)
}

function listarFilmesNaTela(filme) {
      var listaFilme = document.querySelector('#listaFilmes')
      
     var elementoFilme = "<img src=" + filme + " onclick='videoFilme()' >"
      listaFilme.innerHTML = listaFilme.innerHTML + elementoFilme
    
  }
 

// Obtem código do filme digitado pelo usuário e roda o trailer
function trailerUsuario(){
  var inputUsuario = document.querySelector('#filme');
  var linkFilme = inputUsuario.value;
 var iCodigo = linkFilme.indexOf("?v=")+3;
   var codVideo = linkFilme.substring(iCodigo);
    rodarTrailer(codVideo); 
  inputUsuario.value = ""
}
// Obtem código do filme clicado e roda o trailer
function rodarMeuTrailer(numeroFilme){
  var codVideo = filmesTrailer[numeroFilme];
  rodarTrailer(codVideo);
  
}

// Roda o trailer do link escolhido
function rodarTrailer(codVideo) {
  var linkFilme = "https://www.youtube.com/embed/"+codVideo; 
  var iframeTrailer = document.querySelector('#trailer');
  var tagFilme = "<iframe id='frameTrailer' width='400' height='200' src='" + linkFilme +"' ></iframe>";
  iframeTrailer.innerHTML = tagFilme;
}
 
