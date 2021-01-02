//Create variables here
var dog ;
var hungrydogImg;
var backImg;
var sound
var food
var foodS=20;
var sitDog;
var boy;
var boyImg;
var foodStock;
var database;
var feedTime;
var lastFed;
var foodObj,Ffed,lastFeed;



function preload()
{
  hungrydogImg=loadImage("dogImg1.png");
  sitDog=loadImage("dogImg.png");
  backImg=loadImage("park.jpg");
  boyImg=loadImage("standingBoy.png");
}

function setup() {
  database=firebase.database();
  createCanvas(800, 700);
  

  //creating dog variable

  foodObj=new Food();
  dog=createSprite(500,600,20,20);
  dog.addImage(hungrydogImg);
  dog.scale=(0.2)
  // creating boy variable
  boy=createSprite(300,550,20,20);
  boy.addImage(boyImg);
  boy.scale=(0.7)

  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood= createButton("Add The Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  
// fetching data 
foodStock =database.ref('Food');
foodStock.on("value",readStock);


}


function draw() {  
  
background(backImg);
  
fedTime=database.ref("FedTime");
fedTime.on("value",function (data){
  lastFed= data.val();
})

fill(255);
textSize(28);
if(lastFed>= 12){
  text("Last Fed  : "+ lastFed  + " PM " ,350,38 );  
}else if(lastFed==0){
  text("Lat Fed : 12AM ",350,30);
}
else{
  text("Last Feed " + lastFed +" AM",350,30 )

}

foodObj.display();
drawSprites();

  //add styles here

textSize(20);
fill("green")
  


}


//function to read valuefrom DB
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
dog.addImage(sitDog);
foodObj.updateFoodStock(foodObj.getFoodStock()-1)
database.ref('/').update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()
})
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

