const fungi = extend(ItemTurret, "fungi", {});

const vortex = extend(ItemTurret, "vortex", {});

const fusor = extend(PowerTurret, "fusor", {});

const thearchy = extend(PowerTurret, "thearchy", {});

const bladeShoot = new Effect(20, e => {
	let p = 4
	
  	Draw.color(Color.white, Color.valueOf("989aa4"), e.fin());
	
  	const hl = new Floatc2({get: function(x, y){
		Mathf.rand.setSeed(e.id)
		
  		Fill.poly(e.x + x, e.y + y, 3, e.fout() * 5, e.rotation+Mathf.random(-180,180));
  	}});
	
  	Angles.randLenVectors(e.id, p, e.finpow() * 35.0, e.rotation, 180.0, hl);
});

const bladeBeam = extend(LaserBulletType, {
  	length: 200,
  	colors: [Color.valueOf("989aa4"), Color.valueOf("dcdde3"), Color.white],
  	damage: 150,
  	hitSize: 1.5,
  	drawSize: 150,
  	lifetime: 15,
  	sideAngle: 0,
  	width: 32,
	shootEffect: bladeShoot,
});

const blade = extend(PowerTurret, "blade", {
  shootType: bladeBeam,
});
