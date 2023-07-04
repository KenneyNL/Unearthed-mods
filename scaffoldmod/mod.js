(() => {
    return new class {
        id = "scaffold";
        name = "Scaffold Mod";
        chatName = "Scaffold";
        version = 1;

        onGameStart = (game) => {
			
			game.addImage("tiles/scaffold", game.getModResource("scaffold.png"));
            game.addBlock(230,
                {
                    sprite: "tiles/scaffold",
                    blocks: false,
                    blocksDown: false,
                    ladder: true,
                    needsGround: false,
                    blocksDiscovery: false,
                    leaveBackground: false,
                    blocksLight: false
                },
            );
			
			game.addTool("tiles/scaffold", 0, "scaffold", true, true);
			
			game.addAudio("unpack", game.getModResource("unpack.mp3"));
			
        };
		
		onUseTool = (game, player, x, y, layer, toolId) => {
			
			if (toolId === "scaffold"){
				
				if(game.getBlock(x, y, 0) === 0){
				
					for(let i = 0; i < 6; i++) {
						
						if(game.getBlock(x, y - i, 0) === 0){
							
							game.setBlock(x, y - i, 0, 230);
							
						}else{ break; }
						
					}
					
				}else if(game.getBlock(x, y, 0) === 230){
				
					for(let i = 0; i < 6; i++) {
						
						if(game.getBlock(x, y - i, 0) === 230){
							
							game.setBlock(x, y - i, 0, 0);
							
						}else{ break; }
						
					}
					
				}
				
				game.playSfx("unpack");
				
			}
			
        };
		
    }
})();