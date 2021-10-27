class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        
        this.rank = null ;
    }

    addPlayer() {
        var playerIndex = "players/player" + this.index;
        
        database.ref(playerIndex).set({
          name: this.name,
          distance: this.distance,
          rank: this.rank,
          score: this.score,
        });
      }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

   getPlayerAtEnd(){
     var playerAtEnd = database.ref("playerAtEnd");
     playerAtEnd.on("value", (data) => {
        this.rank = data.val();
     }
    );
   }
       

   static updatePlayerAtEnd(rank) {
     database.ref("/").set({
        playerAtEnd: rank
     })

   }
}
