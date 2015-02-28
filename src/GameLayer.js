var GameLayer = cc.LayerColor.extend({
	init: function(){
		this._super(new cc.Color(0,0,0,0));
		
		this.maze = new Maze();
		this.maze.setPosition( cc.p( 0, 40 ) );
        this.addChild( this.maze );

        this.pacman = new Pacman( 10*40 + (-20), 6*40 + (-20) );
        this.maze.addChild( this.pacman );
        this.pacman.setMaze(this.maze);
        this.pacman.scheduleUpdate();

        this.addKeyboardHandlers();

		this.scheduleUpdate();

		return true;
	},
	addKeyboardHandlers: function(){
		var self = this;
		cc.eventManager.addListener({
			event: cc.EventListener.KEYBOARD,
			onKeyPressed : function(e){
				self.onKeyDown(e);
			},
			onKeyReleased: function(e){
				self.onKeyUp(e);
			}
		},this);
	},
	onKeyDown: function(keyCode){
		switch(keyCode){
			case cc.KEY.left:
				this.pacman.setDirection(Pacman.DIR.LEFT);
				break;
			case cc.KEY.right:
				this.pacman.setDirection(Pacman.DIR.RIGHT);
				break;
			case cc.KEY.up:
				this.pacman.setDirection(Pacman.DIR.UP);
				break;
			case cc.KEY.down:
				this.pacman.setDirection(Pacman.DIR.DOWN);
				break;
		}
	},
	onKeyUp: function(keyCode){
		//this.pacman.setDirection(Pacman.DIR.STILL);
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



