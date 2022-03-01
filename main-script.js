//3 Arrays representing the three clothing categories 
/*
let tops = ['playboy letter', 'Lil Peep hoodie', 'Green Hoodie', 'Black playboy hoodie', 'Pink Sweater'];
let bottoms = ['Black Playboy Pants', 'Cheetah Shorts', 'Orange Sweats', 'Jeans'];
let shoes = ['Spiked boots', 'Black Uggs', 'Purp Uggs'];
*/

let ranBtn = document.getElementById('ran-btn');


//SELECT IMAGES AND LOAD THEM INTO VARIABLES 


// ---- TOPS ----
let blackHoodie = new Image(150, 150);
blackHoodie.src = 'Clothes/Tops/Black-Hoodie.jpg';
//document.body.appendChild(blackHoodie);

let blueHoodie = new Image(150, 150);
blueHoodie.src = 'Clothes/Tops/Blue-Hoodie.jpg';
//document.body.appendChild(blueHoodie);

let whiteHoodie = new Image(150, 150);
whiteHoodie.src = 'Clothes/Tops/White-Hoodie.jpg';
//document.body.appendChild(whiteHoodie);

let shortShirtMTV = new Image(150, 150);
shortShirtMTV.src = 'Clothes/Tops/MTV-Shirt.jpg';
//document.body.appendChild(shortShirtMTV);


// ---- BOTTOMS ----
let greySweats = new Image(125, 125);
greySweats.src = 'Clothes/Bottoms/Grey-Sweats.jpg';
//document.body.appendChild(greySweats);

let blackJeans = new Image(100, 170);
blackJeans.src = 'Clothes/Bottoms/Black-Jeans.jpg';
//document.body.appendChild(blackJeans);

let blueJeans = new Image(100, 130);
blueJeans.src = 'Clothes/Bottoms/Blue-Jeans.jpg';
//document.body.appendChild(blueJeans);

// ---- SHOES ----
let adidasShoes = new Image(125, 125);
adidasShoes.src = 'Clothes/Shoes/adidas.jpg';
//document.body.appendChild(adidasShoes);

let nikeShoes = new Image(125, 125);
nikeShoes.src = 'Clothes/Shoes/Nikes.jpg';
//document.body.appendChild(nikeShoes);


//3 Arrays (top, Bottoms, Shoes) full of articles of clothing 
let imgTops = [blackHoodie.src, blueHoodie.src, whiteHoodie.src, shortShirtMTV.src];
let imgBottoms = [greySweats.src, blackJeans.src, blueJeans.src];
let imgShoes = [adidasShoes.src, nikeShoes.src];




/*--- PERSONAL TOPS ---*/
let myTop1 = new Image(125, 125);
myTop1.src = 'myClothes/Tops/Jacket-Tan.JPG';

let myTop2 = new Image(125, 125);
myTop2.src = 'myClothes/Tops/Jacket-Tye.JPG';

let myTop3 = new Image(125, 125);
myTop3.src = 'myClothes/Tops/Hoodie-Green.JPG';

let myTop4 = new Image(125, 125);
myTop4.src = 'myClothes/Tops/Hoodie-Checkered.JPG';

let myTop5 = new Image(125, 125);
myTop5.src = 'myClothes/Tops/ShortShirt-Pink.JPG';



/*--- PERSONAL BOTTOMS ---*/
let myPants1 = new Image(125, 125);
myPants1.src = 'myClothes/Bottoms/Pants-Black.JPG';

let myPants2 = new Image(125, 125);
myPants2.src = 'myClothes/Bottoms/Pants-Gray.JPG';


/*--- PERSONAL SHOES ---*/
let mySneaker1 = new Image(125, 125);
mySneaker1.src = 'myClothes/Shoes/Sneakers-Vans.JPG';

let mySneaker2 = new Image(125, 125);
mySneaker2.src = 'myClothes/Shoes/Sneakers-Vans2.JPG';


let myBoots1 = new Image(125, 125);
myBoots1.src = 'myClothes/Shoes/Boots-Brown.JPG';

let myShoes1 = new Image(125, 125);
myShoes1.src = 'myClothes/Shoes/Shoes-Gray.JPG';

let mySneaker3 = new Image(125, 125);
mySneaker3.src = 'myClothes/Shoes/Sneakers-Nike.JPG';


let myTops = [myTop1.src, myTop2.src, myTop3.src, myTop4.src, myTop5.src,];
let myBottoms = [myPants1.src, myPants2.src];
let myShoes = [mySneaker1.src, mySneaker2.src, mySneaker3.src, myBoots1.src, myShoes1.src];



//Functions: getRanNum(), getTop(), getBottoms(), getShoes(), addShirt(), addPants(), addShoes(), countUniqueFits(), addShirt(), addBottoms(), addShoes()
//deleteShirt(), deleteBottoms(), deleteShoes()

//Select a random article of clothing from each clothing category and display it into its respective area
function makeSuggestion(){


ranBtn.addEventListener('click', () => {
    let top = getTop();
    let bottoms = getBottoms();
    let shoes = getShoes();

    /*
    console.log('');
    console.log('Looking Cute Sydney!! As always ;)')
    */

    /*
    let sentence = document.getElementById("para");
    sentence.innerHTML = "You should wear your " + top +  " with your " + bottoms + 
        " as pants and your " + shoes + " shoes";
    */

    /*
    let sentence2 = document.getElementById("para2");
    sentence2.innerHTML = "Looking cute Sydney!!!! As always ;)";
    */ 

    //let topImg = document.getElementById("top");

    document.getElementById("top").src = top;
    //document.getElementById("top").src = 'Clothes/Tops/White-Hoodie.jpg';

    document.getElementById("bottoms").src = bottoms;
    //document.getElementById("bottoms").src = 'Clothes/Bottoms/Grey-Sweats.jpg';

    document.getElementById("shoes").src = shoes;
    //document.getElementById('shoes').src = nikeShoes.src;
})
};

//getTop(): 
//Parameters: None
//Returns: Suggestion - Returns a clothing suggestion from the category (TOP)
//Process the number of elements in this array, use the number of elements in this array to generate a random number, use that random number to return a random
//article of clothing from the top category
function getTop(){
    let numOfTops = myTops.length;
    //console.log('You have ' + numOfTops + ' tops');

    let ranNum = getRanNum(numOfTops);

    let topSuggestion = myTops[ranNum];

    

    //console.log('You should try wearing your: ' + topSuggestion);
    return topSuggestion;
}

//getBottom()
//Parameters: None
//Returns: Suggestion - Returns a clothing suggestion from the category (BOTTOM)
//Process the number of elements in this array, use the number of elements in this array to generate a random number, use that random number to return a random
//article of clothing from the BOTTOMS category
function getBottoms(){
    let numOfBottoms = myBottoms.length;
    //console.log('You have ' + numOfBottoms + ' pairs of bottoms');

    let randomNum = getRanNum(numOfBottoms);

    let bottomsSuggestion = myBottoms[randomNum];

    

    //console.log('You should try wearing your: ' + bottomsSuggestion);
    return bottomsSuggestion;


}

//getShoes()
//Parameters: None
//Returns: Suggestion - Returns a clothing suggestion from the category (SHOES)
//Process the number of elements in this array, use the number of elements in this array to generate a random number, use that random number to return a random
//article of clothing from the SHOE category
function getShoes(){
    let numOfShoes = myShoes.length;
    //console.log('You have ' + numOfShoes + ' pairs of shoes');

    let randomNum = getRanNum(numOfShoes);

    let shoesSuggestion = myShoes[randomNum];

    

    //console.log('You should try wearing your: ' + shoesSuggestion);

    return shoesSuggestion;
}

//getRanNum
//Parameters: Int that serves as the max length of the given array 
//Returns: A number between 0 - (the max length of an array) 
//
function getRanNum(numOfArticles){
    //console.log('Fetching random number');

    let ranNum = Math.floor(Math.random() * numOfArticles);

    //console.log('Random Number is: ' + ranNum);
    console.log(' ');

    return ranNum;

    /*
    let ranNum = Math.random();
    ranNum = (ranNum * 10);
    ranNum = Math.ceil(ranNum);
    ranNum = ranNum % 4;

    return ranNum;
    */
}

//addTop()
//addBottoms()
//addShoes()

function countUniqueFits(){
    return (imgTops.length * imgBottoms.length * imgShoes.length);
}


//deleteShirt() 
//deleteBottoms()
//deleteShoes()
