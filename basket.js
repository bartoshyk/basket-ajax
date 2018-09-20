function showBags(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    // console.log(xhr);

    xhr.onload = function() {
        if (this.status === 200) {
            let arrAllBags = JSON.parse(this.responseText);
            // console.log(arrAllBags);

            let objSelectedBagsIds = JSON.parse(localStorage.getItem('bugs'));
            // console.log(objSelectedBagsIds);
            
            let arrSelectedBagsIds = [];
            for(key in objSelectedBagsIds){
                arrSelectedBagsIds.push(objSelectedBagsIds[key]);
                // console.log("arrSelectedBagsIds", arrSelectedBagsIds);
            }


            let newBugs = [];

            arrAllBags.forEach(element => {
                arrSelectedBagsIds.forEach(id => {
                    // console.log("id", id);
                    if(element.id === id){
                        // console.log("hhhh", true )
                        newBugs.push(element);
                    }
                })

            });

            // console.log("!!!!!!!!!!!!!!! ", newBugs);
            let output = '';

            newBugs.forEach(bag => {
                output += `
                <div class = "aboutProduct">
                <ul>
                <li><img src = '${bag.img}'></li>
                <li>Brand: ${bag.brand}</li>
                <li>Name: ${bag.nameBags}</li>
                <li>Price: ${bag.price}</li>
                </ul>
                <button onclick="remove('${bag.id}')">Удалить из корзины</button>
     
        
                </div>
            `;
            });
            document.getElementById('basket').innerHTML = output;
    


    //     if (this.status === 200) {
    //         const bags = JSON.parse(this.responseText);
    //         console.log(bags);
    //         let jsonObj = JSON.parse(localStorage.getItem('bugs'));
    //         console.log(jsonObj);

    //         const newBags1 = bags.filter(it => Object.values(jsonObj).includes(it.id)) 

    //         const newBags2 = bags.filter((bag) => {
    //             for(key in jsonObj) {
    //                 if (jsonObj[key] === bag.id) {
    //                     return true;
    //                 }
    //             }
    //             return false;
    //         }) 

    


        }
    }
    xhr.send();

}
showBags();


function remove(bagId) {
    let jsonStr = localStorage.getItem('bugs');
    // console.log(jsonStr);
    let jsonObj =  JSON.parse(jsonStr);
    // console.log(jsonObj);

    for(key in jsonObj){
        if(jsonObj[key] === bagId) { 
            delete jsonObj[key];
        }
      }
    // console.log(jsonObj);

    let json = JSON.stringify(jsonObj);
    localStorage.setItem('bugs', json);
    showBags();
    
    // localStorage.removeItem("");

}

document.getElementById('button').addEventListener('click', removeAll);

function removeAll(){
    localStorage.clear();
    showBags();
}

// /* let counter = 1;
// function plus(){

// } */



