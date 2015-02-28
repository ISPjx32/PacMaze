var Maze = cc.Node.extend({
	ctor: function(){
		this._super();
		this.WIDTH = 20;
		this.HEIGHT = 13;
		this.MAP = [
			'####################',
            '#..................#',
            '#.###.###..###.###.#',
            '#.#...#......#...#.#',
            '#.#.###.#..#.###.#.#',
            '#.#.#...#..#...#.#.#',
            '#.....###..###.....#',
            '#.#.#...#..#...#.#.#',
            '#.#.###.####.###.#.#',
            '#.#...#......#...#.#',
            '#.###.###..###.###.#',
            '#..................#',
            '####################'
		];
		for (var r = 0; r < this.HEIGHT; r++){
			for(var c = 0; c < this.WIDTH; c++){
				if(this.MAP[r][c] == '#'){
					var s = cc.Sprite.create('res/images/wall.png')
					s.setAnchorPoint(cc.p(0,0)); // cc.p(0,0) === new cc.Point(0,0)
					s.setPosition(cc.p(c*40,(this.HEIGHT - r - 1) * 40));
					this.addChild(s);
				}
			}
		}
		this.setAnchorPoint( cc.p( 0, 0 ) );
	}
});