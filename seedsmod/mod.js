(() => {
    return new class {
		
        id = "seeds";
        name = "Seeds Mod";
        chatName = "Seeds";
        version = 3;

        onGameStart = (game) => {
			
			game.addImage("particles/leaves", game.getModResource("particle-leaves.png"));
			
			game.addImage("tools/seeds-tree", game.getModResource("tool-seeds-tree.png"));
			game.addTool("tools/seeds-tree", 0, "seeds-tree", true);
			
			game.addImage("tools/seeds-grass", game.getModResource("tool-seeds-grass.png"));
			game.addTool("tools/seeds-grass", 0, "seeds-grass", true);
			
			game.addImage("tools/seeds-flower", game.getModResource("tool-seeds-flower.png"));
			game.addTool("tools/seeds-flower", 0, "seeds-flower", true);
			
			game.addAudio("place-foliage", game.getModResource("place-foliage.mp3"));
			
        };

        onUseTool = (game, player, x, y, layer, toolId) => {
			
			if (toolId === "seeds-tree"){
				
				if(game.getBlock(x, y, layer) === 0){
				
					// 16: tree trunk bottom
					// 17: tree thunk middle
					// 5 : tree leaves
					
					var tree_height = 2 + Math.floor(Math.random() * 3);
					
					game.setBlock(x, y, layer, 16);
					
					for(let i = 1; i < tree_height; i++){
						
						if(game.getBlock(x, y - i, layer) === 0){
						
							game.setBlock(x, y - i, layer, 17);
							
						}else{
							
							tree_height = i;
							
							break;
							
						}
						
					}
					
					for(let i = 0; i < 3; i++) {
						
						if(game.getBlock(x - 1, y - tree_height - i, layer) === 0){
							
							game.setBlock(x - 1, y - tree_height - i, layer, 5);
							game.addParticlesAtTile("particles/leaves", x - 1, y - tree_height - i, 4);
							
						}
						
						if(game.getBlock(x + 0, y - tree_height - i, layer) === 0){
							
							game.setBlock(x + 0, y - tree_height - i, layer, 5);
							game.addParticlesAtTile("particles/leaves", x + 0, y - tree_height - i, 4);
							
						}
						
						if(game.getBlock(x + 1, y - tree_height - i, layer) === 0){
							
							game.setBlock(x + 1, y - tree_height - i, layer, 5);
							game.addParticlesAtTile("particles/leaves", x + 1, y - tree_height - i, 4);
							
						}
						
					}
					
					game.playSfx("place-foliage");
					
				}
				
			}
			
			if (toolId === "seeds-grass"){
				
				if(game.getBlock(x, y + 1, layer) === 2){
					
					if(game.getBlock(x, y, layer) === 0){
						
						game.setBlock(x, y, layer, 9 + Math.floor(Math.random() * 4));
						game.addParticlesAtTile("particles/leaves", x, y, 4);
						
						game.playSfx("place-foliage");
						
					}
					
				}
				
			}
			
			if (toolId === "seeds-flower"){
				
				if(game.getBlock(x, y + 1, layer) === 2){
					
					if(game.getBlock(x, y, layer) === 0){
						
						game.setBlock(x, y, layer, 13 + Math.floor(Math.random() * 3));
						game.addParticlesAtTile("particles/leaves", x, y, 4);
						
						game.playSfx("place-foliage");
						
					}
					
				}
				
			}
			
        };
		
    }
})();