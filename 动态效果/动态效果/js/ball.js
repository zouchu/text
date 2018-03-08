window.onload = function() {
	var camera, scene, renderer;
	var controls;

	var objects = [];
	var targets = {table: [],sphere: [],helix: [],grid: []};
	init();
	
//	transform(5000);

	function init() {

		camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
		console.log(camera)
		camera.position.z = 3000;
		scene = new THREE.Scene();

		// table

		for(var i = 0; i < personArray.length; i++) {

			var element = document.createElement('li');
			element.className = 'element';
			element.style.position = 'absolute';
			var img = document.createElement('img');
			img.className = 'img';
			img.src = personArray[i].image;
			element.appendChild(img);
			var object = new THREE.CSS3DObject(element);
			//					object.position.x = Math.random() * 4000 - 2000;
			//					object.position.y = Math.random() * 4000 - 2000;
			//					object.position.z = Math.random() * 4000 - 2000;
			scene.add(object);

			objects.push(object);

		}
		window.addEventListener('resize', onWindowResize, false);
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);

		render();

	}

	function transform(duration) {
		var objectArr = [];
		
		animate();
		var vector = new THREE.Vector3();
		for(var i = 0, l = objects.length; i < l; i++) {

			var phi = Math.acos(-1 + (2 * i) / l);
			var theta = Math.sqrt(l * Math.PI) * phi;

			var object = new THREE.Object3D();

			object.position.x = 800 * Math.cos(theta) * Math.sin(phi);
			object.position.y = 800 * Math.sin(theta) * Math.sin(phi);
			object.position.z = 800 * Math.cos(phi);

			vector.copy(object.position).multiplyScalar(2);
			object.lookAt(vector);
			objectArr.push(object);

		}

		TWEEN.removeAll();
		for(var i = 0; i < objects.length; i++) {
			var object = objects[i];
			var target = objectArr[i];

			new TWEEN.Tween(object.position)
				.to({
					x: target.position.x,
					y: target.position.y,
					z: target.position.z
				}, Math.random() * duration + duration)
				.easing(TWEEN.Easing.Exponential.InOut)
				.start();

			new TWEEN.Tween(object.rotation)
				.to({
					x: target.rotation.x,
					y: target.rotation.y,
					z: target.rotation.z
				}, Math.random() * duration + duration)
				.easing(TWEEN.Easing.Exponential.InOut)
				.start();

		}

		new TWEEN.Tween(this)
			.to({}, duration * 2)
			.onUpdate(render)
			.start();

	}
	renderer = new THREE.CSS3DRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.domElement.style.position = 'absolute';
	document.getElementById('container').appendChild(renderer.domElement);
				renderer.render(scene, camera);

	function animate() {
		requestAnimationFrame(animate);
		TWEEN.update();
	}

	function render() {
console.log(camera)
		renderer.render(scene, camera);

	}
}