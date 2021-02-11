const petsModule = (function () {
  const _data = [
    {
      image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
      name: "Sam",
      type: "Golden Retriever/St. Bernard Mix",
      sound: "bark",
      soundText: "Bark - type b",
    },
    {
      image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
      name: "Mellie",
      type: "Domestic Shorthair",
      sound: "meow",
      soundText: "Meow - type m",
    },
    {
      image: "https://www.abc.net.au/cm/rimage/10418702-16x9-xlarge.jpg?v=3",
      name: "Sami",
      type: "Africa",
      sound: "elephant",
      soundText: "Elephant - type e",
    },
    {
      image: "https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2019/11/15/thumbs_b_c_aea1d20fb1bbe978781485d83d3ca592.jpg",
      name: "John",
      type: "Africa",
      sound: "lion",
      soundText: "Lion - type l",
    },
    {
      image: "https://www.bukrek.com/images/maymun-gunu.jpg",
      name: "Fin",
      type: "Baby Chapuchin",
      sound: "onkeys",
      soundText: "Monkey - type o",
    },
    {
      image: "https://img-s1.onedio.com/id-571fcd98740a7b6c55174f4f/rev-0/w-900/h-612/f-jpg/s-fa1bfd1709c458e65f7a394a0be6588b857df368.jpg",
      name: "Pingu",
      type: "tuxedo penguin",
      sound: "penguin",
      soundText: "Penguin - type p",
    },
    {
      image: "https://i.pinimg.com/originals/ff/8e/a0/ff8ea0d38ae51d9adf78b93c2c7bde97.jpg",
      name: "Walf",
      type: "polar wolf",
      sound: "wolf",
      soundText: "Wolf - type w",
    },
  ];
  const $tbodyEl = document.querySelector("tbody");
  const $buttons = document.querySelectorAll("button");

  const getButtons = function () {
    return document.querySelectorAll("button");
  };
  //her hayvanın bulunduğu kolonları getirdim.
  const getRowPet = function () {
    return document.querySelectorAll("tr");
  };
  

  const createPetElement = function (pet) {
    return (
      "<tr><td><img class='pet-image' src='" +
      pet.image +
      "' /></td><td>" +
      pet.name +
      "</td><td>" +
      pet.type +
      "</td><td><button data-sound='" +
      pet.sound +
      "'>" +
      pet.soundText +
      "</button></td></tr>"
    );
  };

  const addToTable = function (content) {
    $tbodyEl.innerHTML += content;
  };

  const putPetsInHtml = function () {
    for (let i = 0; i < _data.length; i++) {
      addToTable(createPetElement(_data[i]));
    }
  };

  //hayvan sesinin key ilemi button ilemi render edileceği nokta initte dönen nokta
  const bindEvents = function () {
    petSoundClick();
    keyTracking();
  };

  //Klavyeden tıklanan hayvanın çıkmasını saplayan fonksiyon
  const keyTracking = function () {
    document.addEventListener("keyup", function (e) {
      for (let i = 0; i < _data.length; i++) {
        const soundId = _data[i].sound;
        if (e.key === soundId.charAt(0)) {
          const soundElement = document.getElementById(soundId);
          playSound(soundElement);
          break;
        }
      }
    });
  };

  //buttona tıklandımı hayvanın sesini veren fonksiyon
  const petSoundClick = function () {
    const buttons = getButtons();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        const soundId = this.dataset.sound;
        const soundElement = document.getElementById(soundId);
        playSound(soundElement);
      });
    }
  };

  //hayvanın sesini çalan fonksiyon
  const playSound = function (soundElement) {
    if (soundElement) {
      event.stopPropagation();
      soundElement.play();
    }
  };

  //kolonlara click efecti ekledim.
  const petEvent = function () {
    const rows = getRowPet();
    for (let i = 1; i < rows.length; i++) {
      rows[i].addEventListener("click", function (event) {
        ChangeColor(rows[i],"#d5f4e6");
      });
      //tercihe bağlı mouse hayvan satırının üstünden kalkınca eski rengini alır satır.
      /*rows[i].addEventListener("mouseout", function (event) {
        ChangeColor(rows[i],"#cbedb5");
      });*/
    }
  };

  //her pet colonunun rengini değiştirir.
  const ChangeColor = function (row,color) {
    row.style.backgroundColor = color ;
    if (color === "#d5f4e6") MainImageChange(row) 
  };
  //main-image değiştirme fonksiyonu yazdım.
  const MainImageChange = function (row) {
    const ımg = document.querySelector(".main-image");
    const petImg = row.children[0].children[0];
    ımg.src = petImg.src;
  };

  const init = function () {
    putPetsInHtml();
    bindEvents();
    //hayvanın bulunduğu kolana tıklama efecti public yapıldı.
    petEvent();
  };

  return {
    init: init,
  };
})();
