

let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting',
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting',
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting',
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures',
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures',
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures',
    },
];


function createCard(list){
      const painting = document.getElementById("painting")
      const actionFigures = document.getElementById("actionFigures")
  
  for(let i = 0; i < list.length; i++){
console.log(createCard)
      //Criando elementos
      const nameText = document.createElement("span");
      const priceText = document.createElement("p");
      const imageText = document.createElement("img");
      const listFrame = document.createElement("li");
      const listFigure = document.createElement("li");

       //Se produto o produto for igual a "Painting"
    if(list[i].type === "Painting"){

        //Configurando os elementos
        nameText.innerText=`${list[i].name}`
        priceText.innerText=list[i].price
        imageText.src=list[i].image
        imageText.alt = list[i].name
        imageText.className = "img"

        //Inserindo elemento na página
        listFrame.appendChild(imageText)
        listFrame.appendChild(nameText)
        listFrame.appendChild(priceText)
        painting.appendChild(listFrame)

        //Caso o produto seja "actionFigures"   
      }else{
           nameText.innerText=list[i].name
           priceText.innerText=list[i].price
          imageText.src=list[i].image

          //Inserindo elemento na página
          listFigure.appendChild(imageText)
          listFigure.appendChild(nameText)
          listFigure.appendChild(priceText)
          actionFigures.appendChild(listFigure)
        }
  } 
}

console.log(createCard(itens))


