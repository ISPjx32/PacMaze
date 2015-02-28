var Pacman = cc.Sprite.extend({
	ctor: function(x,y){
		this._super();
		this.initWithFile('res/images/pacman.png');

		this.nextDirection = Pacman.DIR.STILL;
		this.direction = Pacman.DIR.STILL;

		this.x = x;
		this.y = y;
		this.updatePosition();
	},
	updatePosition: function(){
		this.setPosition(cc.p(this.x,this.y));
	},
	update: function(dt){
		if (this.isAtCenter()){
			if(!this.isPossibleToMove(this.nextDirection)){
				this.nextDirection = Pacman.DIR.STILL;
			}
			this.direction = this.nextDirection;
		}
		switch (this.direction){
			case Pacman.DIR.UP:
				this.y += Pacman.MOVE_STEP;
				break;
			case Pacman.DIR.DOWN:
				this.y -= Pacman.MOVE_STEP;
				break;
			case Pacman.DIR.LEFT:
				this.x -= Pacman.MOVE_STEP;
				break;
			case Pacman.DIR.RIGHT:
				this.x += Pacman.MOVE_STEP;
				break;
		}
		this.updatePosition();
	},
	setDirection: function(dir){
		this.nextDirection = dir;
	},
	isAtCenter: function(){
		return (this.x  % 40 == 20) && (this.y % 40 == 20);
	},
	setMaze: function(maze){
		this.maze = maze;
	},
	isPossibleToMove: function(dir){
		if ( dir == Pacman.DIR.STILL){
			return true;
		}
		var nextBlockX = 0;
		var nextBlockY = 0;
		switch (dir){
			case Pacman.DIR.UP:
				nextBlockX = this.x;
				nextBlockY = this.y + 40;
				break;
			case Pacman.DIR.DOWN:
				nextBlockX = this.x;
				nextBlockY = this.y - 40;
				break;
			case Pacman.DIR.LEFT:
				nextBlockX = this.x - 40;
				nextBlockY = this.y;
				break;
			case Pacman.DIR.RIGHT:
				nextBlockX = this.x + 40;
				nextBlockY = this.y;
				break;
		}
		return !this.maze.isWall(((nextBlockX+20)/40)-1,((nextBlockY+20)/40)-1);
	}
});

Pacman.MOVE_STEP = 5;
Pacman.DIR = {
	LEFT: 1,
	RIGHT: 2,
	UP: 3,
	DOWN: 4,
	STILL: 0
};