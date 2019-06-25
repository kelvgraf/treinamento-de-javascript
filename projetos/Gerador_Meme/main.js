 
 var box = document.getElementById('linha');
 var list = document.createElement('ul');
 var itemList = document.createElement('li');
 var img = document.createElement('img');
 img.className = 'fig';
 var srcAttribute = document.createAttribute('src');
 img.setAttributeNode(srcAttribute);

 box.appendChild(list);
 list.appendChild(itemList);
itemList.appendChild(img);

  
  var listMeme = [
    {
      "img": './img/1.jpeg'
    },
    {
      "img": './img/2.png'
    },
    {
      "img": './img/3.jpg'
    },
    {
      "img": './img/4.jpg'
    },
    {
      "img": './img/5.jpeg'
    },
    {
      "img": './img/6.jpg'
    },
    {
      "img": './img/7.jpg'
    },
    {
      "img": './img/8.jpg'
    },
    {
      "img": './img/9.jpg'
    }
  ]

function generate() {
  var memes = listMeme;
  getRandom();
}

function getRandom() {
  var meme= listMeme[Math.floor(Math.random() * listMeme.length)];

  var image = document.getElementsByClassName('fig').src = meme.img;

  document.getElementsByClassName('fig').innerHTML = meme

   srcAttribute.value = meme.img;
}



