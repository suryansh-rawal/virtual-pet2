class Food{
    constructor()
    {
        this. foodStock=20;
        this. lastFeed;
        this.image=loadImage("Milk.png")
    }
    

    updateFoodStock(foodStock){
            this.foodStock=foodStock;
    }

    getFeedTime(lastFeed){
this.lastFeed=lastFeed;
    }

    deductFood(){
        if(foodStock>0){
            this.foodStock=foodStock-1;
        }
        return this.foodStock;

    }

    getFoodStock(){
        return this.foodStock;
    }

    display(){
        var x=80, y=100;
        imageMode(CENTER);
        image(this.image,720,720,70,70);

        if(this.foodStock!=0){
            for(var i=0; i< this.foodStock;i++){
if(i%10==0){
    x=80;
    y=y+50
}
image(this.image,x,y,50,50);
x=x+30;
            }
        }
    }
}