var Pacman = cc.Sprite.extend({
	ctor: function(x,y){
		this._super();
		this.initWithFile('res/images/pacman.png');

		this.direction = Pacman.DIR.STILL;

		this.x = x;
		this.y = y;
		this.updatePosition();
	},
	updatePosition: function(){
		this.setPosition(cc.p(this.x,this.y));
	},
	update: function(dt){
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
		this.direction = dir;
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