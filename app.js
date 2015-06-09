//function init() {
	var stage = new PIXI.Stage(0x66FF99);
	var renderer = PIXI.WebGLRenderer(512, 384);
	document.body.appendChild(renderer.view);

	requestAnimationFrame(animate);
//}

function animate(){
	requestAnimationFrame(animate);
	renderer.render(stage);
}
