var GameLayer = cc.LayerColor.extend({
	init: function(){
		this._super(new cc.Color(127,127,127,255));
		
		this.maze = new Maze();
		this.maze.setPosition( cc.p( 0, 40 ) );
        this.addChild( this.maze );

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



