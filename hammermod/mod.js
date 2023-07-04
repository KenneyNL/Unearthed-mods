(() => {
    return new class {
		
        id = "hammer";
        name = "Hammer Mod";
        chatName = "Hammer";
        version = 1;

        onGameStart = (game) => {
			
			game.addImage("tools/hammer", game.getModResource("tool-hammer.png"));
			game.addTool("tools/hammer", 0, "hammer", false, true, 10);
			
			game.addImage("tools/hammer-strong", game.getModResource("tool-hammer-strong.png"));
			game.addTool("tools/hammer-strong", 0, "hammer-strong", true, true, 10);
			
        };

        onUseTool = (game, player, x, y, layer, toolId) => {
			
			if (toolId === "hammer"){
				
				game.setBlock(x, y, layer, 0);
				
			}
			
			if (toolId === "hammer-strong"){
				
				game.setBlock(x, y, 0, 0);
				game.setBlock(x, y, 1, 0);
				
			}
			
        };
		
    }
})();