
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");


  


let data = [{
  title: "Whispurr",
  url: "https://mimo.app/i/whispurr.png",
  description: `Whispurr passe ses journées à fixer le mur avec l’air 
                songeur d’un vieux sage tibétain. Il a une théorie sur tout, 
                surtout sur la gravité, qu’il teste en poussant méthodiquement
                chaque objet de la table. Sa passion secrète ? Juger les humains
                depuis le haut du frigo.`
}, { //objet 1
  title: "Babaganoosh",
  url: "https://mimo.app/i/babaganoosh.png",
  description:`Babaganoosh compose des opéras de miaulements à des heures totalement aléatoires, persuadé que son talent mérite un public attentif. Il adore s’asseoir sur des documents importants et se transforme en liquide dès qu’il s’affale dans un panier trop petit pour lui. Son grand rêve : capturer ce mystérieux point rouge insaisissable`,
}, {
  title: "Nacho",
  url: "https://mimo.app/i/nacho.png",
  description: `Nacho considère que 4h du matin est le moment idéal pour une course effrénée à travers l’appartement, avec détours artistiques sur le canapé. Il est convaincu que tout ce qui bouge est une proie potentielle, y compris sa propre queue. Sa plus grande fierté ? Ouvrir les placards sans jamais pouvoir les refermer.
                3.	Berlioz, l’Artiste Incompris`
}, {
  title: "Arthur",
  url: "chat.jpg",
  description: `Arthur considère que chaque tapis est une invitation à la glisse, et que les plantes d’intérieur sont là uniquement pour tester sa dextérité. Son passe-temps favori ? Observer les humains comme s’ils étaient des mystères à résoudre, tout en planifiant des embuscades dignes d’un stratège. Sa plus grande fierté ? Faire tomber des objets des étagères avec une précision chirurgicale, juste pour voir ce qui se passe.`
},{
  title: "Pierre",
  url: "https://picsum.photos/id/237/200/300",
  description: `je mange mes pieds`
}];

function affiche_cards(cards) {
  const itemElements = document.querySelectorAll('.item'); //stock dans un tableau

  for( i=0; i< itemElements.length; i++){
    
    const currentItemElement = itemElements[i] ;

    const cardImageElement = currentItemElement.querySelector(".image");
    const cardTitleElement = currentItemElement.querySelector(".title");
    const cardDescriptionElement = currentItemElement.querySelector(".description");

    cardTitleElement.innerHTML = cards[i].title;
    cardImageElement.src = cards[i].url;
    cardDescriptionElement.innerHTML = cards[i].description;
  }
}

affiche_cards(data);

function showModal(thumbnail) {
    modal.style.display = "block";
  modalContent.src = thumbnail.src;
}

function hideModal() {
  modal.style.display = "none";
}


function left(){
  // Rotate data
  const saveCard = data[0];
  // [1, 2, 3, 4]

  for(i=1;i<data.length;i++){
    data[i-1]=data[i];
  }
  data[data.length - 1] = saveCard;
  
  affiche_cards(data);
}


function right(){
  // Rotate data
  const saveCard = data[data.length-1];
  // [A, B, C, D]
  // saveCard = D
  data.forEach((card, i) => {
    console.log(card, i);
  });

  for(i=data.length-1;i>0;i--){
    data[i]=data[i-1];
  }
  data[0] = saveCard;
  
  affiche_cards(data);
}



// NVM => Node Version Manager
// NODE => Interpreteur Javascript
// NPM => Node Package Manager (install liste des dépendance demandée [react,..])
// Git gerer les versions du code 
//--> commit = mettre un tampon pour se souvenir de quel version j'ai utilisé
