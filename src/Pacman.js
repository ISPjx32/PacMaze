var Pacman = cc.Sprite.extend({
	ctor: function(x,y){
		this._super();
		this.initWithFile('res/images/pacman.png');

		this.x = x;
		this.y = y;
		this.updatePosition();
	},
	updatePosition: function(){
		this.setPosition(cc.p(this.x,this.y));
	}
});