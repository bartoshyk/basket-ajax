// document.getElementById('button').addEventListener('click', showBags);

function showBags(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);

      const bags = JSON.parse(this.responseText);
      let output = '';

      bags.forEach(bag => {
        output += `
        <div class = "aboutProduct">
        <ul>
          <li><img src = '${bag.img}'></li>
          <li>Brand: ${bag.brand}</li>
          <li>Name: ${bag.nameBags}</li>
          <li>Price: ${bag.price}</li>
        </ul>
        <button class = "shop" onclick="add('${bag.id}')">Купить</button>
        </div>
      `;
      });
      document.getElementById('bags').innerHTML = output;
    }
  }
  xhr.send();
}

function add(bagId) {
  let jsonStr = localStorage.getItem('bugs'); 
  // console.log(jsonStr);
  let jsonObj = (jsonStr && jsonStr !== 'undefined') ? JSON.parse(jsonStr) : {};
  // console.log(jsonObj);

  let isUnique = true;
  
  for(key in jsonObj){
    if(jsonObj[key] === bagId) { 
      isUnique = false;
    }
  }
      if(isUnique){

        jsonObj[`${Object.keys(jsonObj).length}`] = bagId;
        let json = JSON.stringify(jsonObj);
        localStorage.setItem('bugs', json);

      }
    }
showBags();
