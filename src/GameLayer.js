var GameLayer = cc.LayerColor.extend({
	init: function(){
		this._super(new cc.Color(0,0,0,0));
		
		this.maze = new Maze();
		this.maze.setPosition( cc.p( 0, 40 ) );
        this.addChild( this.maze );

        this.pacman = new Pacman( 10*40 + 20, 6*40 + 20 );
        this.maze.addChild( this.pacman );
        this.pacman.scheduleUpdate();
        
		//this.scheduleUpdate();

		return true;
	}
	
});

var StartScene = cc.Scene.extend({
	onEnter: function(){
		this._super();
		var layer = new GameLayer();
		layer.init();
		this.addChild(layer);
	}
});



