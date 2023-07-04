(() => {
    return new class {
		
        id = "seeds";
        name = "Seeds Mod";
        chatName = "Seeds";
        version = 2;

        onGameStart = (game) => {
			
			game.addImage("tools/seeds-tree", game.getModResource("tool-seeds-tree.png"));
			game.addTool("tools/seeds-tree", 0, "seeds-tree", true);
			
			game.addImage("tools/seeds-grass", game.getModResource("tool-seeds-grass.png"));
			game.addTool("tools/seeds-grass", 0, "seeds-grass", true);
			
			game.addImage("tools/seeds-flower", game.getModResource("tool-seeds-flower.png"));
			game.addTool("tools/seeds-flower", 0, "seeds-flower", true);
			
        };

        onUseTool = (game, player, x, y, layer, toolId) => {
			
			if (toolId === "seeds-tree"){
				
				// 16: tree trunk bottom
				// 17: tree thunk middle
				// 5 : tree leaves
				
				game.setBlock(x, y, layer, 16);
				
				for(let i = 1; i < 3; i++) {
					
					game.setBlock(x, y - i, layer, 17);
					
				}
				
				for(let i = 0; i < 3; i++) {
					
					game.setBlock(x - 1, y - 3 - i, layer, 5);
					game.setBlock(x, y - 3 - i, layer, 5);
					game.setBlock(x + 1, y - 3 - i, layer, 5);
					
				}
				
				game.playSfx("jump");
				
			}
			
			if (toolId === "seeds-grass"){
				
				if(game.getBlock(x, y + 1, layer) === 2){
					
					if(game.getBlock(x, y, layer) === 0){
						
						game.setBlock(x, y, layer, 9 + Math.floor(Math.random() * 4));
						
					}
					
				}
				
				game.playSfx("jump");
				
			}
			
			if (toolId === "seeds-flower"){
				
				if(game.getBlock(x, y + 1, layer) === 2){
					
					if(game.getBlock(x, y, layer) === 0){
						
						game.setBlock(x, y, layer, 13 + Math.floor(Math.random() * 3));
						
					}
					
				}
				
				game.playSfx("jump");
				
			}
			
        };
		
    }
})();