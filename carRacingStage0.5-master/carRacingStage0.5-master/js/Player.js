class Player {
  constructor(){
    this.index=null
    this.name=null
    this.distance=0
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

static getplayerinfo(){

  var playerinforef=database.ref("player")
  playerinforef.on("value",(data)=>{
    allplayers = data.val()

  })


}


}
