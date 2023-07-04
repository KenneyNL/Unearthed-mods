(() => {
    return new class {
        id = "conveyor";
        name = "Conveyor Mod";
        chatName = "Conveyor";
        version = 1;

        onGameStart = (game) => {
			
            game.addImage("tiles/conveyor-slow-right", game.getModResource("conveyor-slow-right.png"));
            game.addBlock(210,
                {
                    sprite: "tiles/conveyor-slow-right",
                    blocks: true,
                    blocksDown: true, 
                    ladder: false, 
                    needsGround: false, 
                    blocksDiscovery: false, 
                    leaveBackground: false, 
                    blocksLight: false
                },
            );
            game.addTool("tiles/conveyor-slow-right", 210, "", false);
			
			game.addImage("tiles/conveyor-slow-left", game.getModResource("conveyor-slow-left.png"));
            game.addBlock(211,
                {
                    sprite: "tiles/conveyor-slow-left",
                    blocks: true,
                    blocksDown: true, 
                    ladder: false, 
                    needsGround: false, 
                    blocksDiscovery: false, 
                    leaveBackground: false, 
                    blocksLight: false
                },
            );
            game.addTool("tiles/conveyor-slow-left", 211, "", false);
			
			game.addImage("tiles/conveyor-fast-right", game.getModResource("conveyor-fast-right.png"));
            game.addBlock(212,
                {
                    sprite: "tiles/conveyor-fast-right",
                    blocks: true,
                    blocksDown: true, 
                    ladder: false, 
                    needsGround: false, 
                    blocksDiscovery: false, 
                    leaveBackground: false, 
                    blocksLight: false
                },
            );
            game.addTool("tiles/conveyor-fast-right", 212, "", false);
			
			game.addImage("tiles/conveyor-fast-left", game.getModResource("conveyor-fast-left.png"));
            game.addBlock(213,
                {
                    sprite: "tiles/conveyor-fast-left",
                    blocks: true,
                    blocksDown: true, 
                    ladder: false, 
                    needsGround: false, 
                    blocksDiscovery: false, 
                    leaveBackground: false, 
                    blocksLight: false
                },
            );
            game.addTool("tiles/conveyor-fast-left", 213, "", false);
			
        };

        onWorldStart = (game) => {
        };

        onStandOn = (game, mob, x, y) => {
			
			if (game.getBlock(x, y, 0) === 210){ mob.x = mob.x + 1; }
			if (game.getBlock(x, y, 0) === 211){ mob.x = mob.x - 1; }
			
			if (game.getBlock(x, y, 0) === 212){ mob.x = mob.x + 5; }
			if (game.getBlock(x, y, 0) === 213){ mob.x = mob.x - 5; }
			
        };
		
    }
})();