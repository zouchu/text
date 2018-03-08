var placeholder_image_cnt = 1;
var placeholder_image_index = 0;
var table = new Array;
for(var i = 0; i < 126; i++) {
	table[i] = new Object();
	if(i < personArray.length) {
		table[i] = personArray[i];
		table[i].src = personArray[i].image;
	} else {
		if(placeholder_image_cnt > 0) {
			if(placeholder_image_index >= placeholder_image_cnt) {
				placeholder_image_index = 0;
			}
			placeholder_image = placeholder_imgs[placeholder_image_index];
			placeholder_image_index++;
			table[i].src = placeholder_image;
		} else {
			table[i].src = "https://duud.cn/addons/meepo_xianchang/cdhn80.jpg";
		}

	}
	table[i].p_x = i % 20 + 1;
	table[i].p_y = Math.floor(i / 20) + 1;
}
//打乱数组顺序
table = table.sort(function() {
	return Math.random()
});
console.log(table)
var return_array = new Array();

function getArrayItems(arr, num) {
	var temp_array = new Array();
	for(var index in arr) {
		temp_array.push(arr[index]);
	}
	for(var i = 0; i < num; i++) {
		if(temp_array.length > 0) {
			var arrIndex = Math.floor(Math.random() * temp_array.length);
			return_array[i] = temp_array[arrIndex];
			temp_array.splice(arrIndex, 1);
		} else {
			return false;
		}
	}
	return return_array;
}
getArrayItems(personArray, 50);
var newPic = new Array();
setInterval(function() {
	if(newPic.length > 0) {
		var temp_fans = newPic.shift();
		personArray.push(temp_fans);
		$('.element').eq(personArray.length - 1).find('img').attr('src', temp_fans.image);
	}
	getArrayItems(personArray, 50);
}, 8000);



THREE.CSS3DObject = function ( element ) {
	THREE.Object3D.call( this );
	this.element = element;
	this.element.style.position = 'absolute';
	this.addEventListener( 'removed', function ( event ) {
		if ( this.element.parentNode !== null ) {
			this.element.parentNode.removeChild( this.element );
		}
	} );
};
THREE.CSS3DObject.prototype = Object.create( THREE.Object3D.prototype );
THREE.CSS3DObject.prototype.constructor = THREE.CSS3DObject;

THREE.CSS3DSprite = function ( element ) {

	THREE.CSS3DObject.call( this, element );
};
THREE.CSS3DSprite.prototype = Object.create( THREE.CSS3DObject.prototype );
THREE.CSS3DSprite.prototype.constructor = THREE.CSS3DSprite;
CSS3DRenderer = function () {
	var _width, _height;
	var _widthHalf, _heightHalf;
	var matrix = new THREE.Matrix4();
	var cache = {
		camera: { fov: 0, style: '' },
		objects: {}
	};

	var domElement = document.createElement( 'div' );
	domElement.style.overflow = 'hidden';

	domElement.style.WebkitTransformStyle = 'preserve-3d';
	domElement.style.MozTransformStyle = 'preserve-3d';
	domElement.style.oTransformStyle = 'preserve-3d';
	domElement.style.transformStyle = 'preserve-3d';

	this.domElement = domElement;

	var cameraElement = document.createElement( 'ul' );

	cameraElement.style.WebkitTransformStyle = 'preserve-3d';
	cameraElement.style.MozTransformStyle = 'preserve-3d';
	cameraElement.style.oTransformStyle = 'preserve-3d';
	cameraElement.style.transformStyle = 'preserve-3d';
	domElement.appendChild( cameraElement );
	this.setClearColor = function () {};
	this.getSize = function() {
		return {
			width: _width,
			height: _height
		};
	};
	this.setSize = function ( width, height ) {
		_width = width;
		_height = height;
		_widthHalf = _width / 2;
		_heightHalf = _height / 2;
		domElement.style.width = width + 'px';
		domElement.style.height = height + 'px';
		cameraElement.style.width = width + 'px';
		cameraElement.style.height = height + 'px';
	};
	var epsilon = function ( value ) {
		return Math.abs( value ) < Number.EPSILON ? 0 : value;
	};
	var getCameraCSSMatrix = function ( matrix ) {
		var elements = matrix.elements;
		return 'matrix3d(' +
			epsilon( elements[ 0 ] ) + ',' +
			epsilon( - elements[ 1 ] ) + ',' +
			epsilon( elements[ 2 ] ) + ',' +
			epsilon( elements[ 3 ] ) + ',' +
			epsilon( elements[ 4 ] ) + ',' +
			epsilon( - elements[ 5 ] ) + ',' +
			epsilon( elements[ 6 ] ) + ',' +
			epsilon( elements[ 7 ] ) + ',' +
			epsilon( elements[ 8 ] ) + ',' +
			epsilon( - elements[ 9 ] ) + ',' +
			epsilon( elements[ 10 ] ) + ',' +
			epsilon( elements[ 11 ] ) + ',' +
			epsilon( elements[ 12 ] ) + ',' +
			epsilon( - elements[ 13 ] ) + ',' +
			epsilon( elements[ 14 ] ) + ',' +
			epsilon( elements[ 15 ] ) +
		')';
	};
	var getObjectCSSMatrix = function ( matrix ) {
		var elements = matrix.elements;
		return 'translate3d(-50%,-50%,0) matrix3d(' +
			epsilon( elements[ 0 ] ) + ',' +
			epsilon( elements[ 1 ] ) + ',' +
			epsilon( elements[ 2 ] ) + ',' +
			epsilon( elements[ 3 ] ) + ',' +
			epsilon( - elements[ 4 ] ) + ',' +
			epsilon( - elements[ 5 ] ) + ',' +
			epsilon( - elements[ 6 ] ) + ',' +
			epsilon( - elements[ 7 ] ) + ',' +
			epsilon( elements[ 8 ] ) + ',' +
			epsilon( elements[ 9 ] ) + ',' +
			epsilon( elements[ 10 ] ) + ',' +
			epsilon( elements[ 11 ] ) + ',' +
			epsilon( elements[ 12 ] ) + ',' +
			epsilon( elements[ 13 ] ) + ',' +
			epsilon( elements[ 14 ] ) + ',' +
			epsilon( elements[ 15 ] ) +
		')';
	};
	var renderObject = function ( object, camera ) {
		if ( object instanceof THREE.CSS3DObject ) {
			var style;
			if ( object instanceof THREE.CSS3DSprite ) {
				matrix.copy( camera.matrixWorldInverse );
				matrix.transpose();
				matrix.copyPosition( object.matrixWorld );
				matrix.scale( object.scale );
				matrix.elements[ 3 ] = 0;
				matrix.elements[ 7 ] = 0;
				matrix.elements[ 11 ] = 0;
				matrix.elements[ 15 ] = 1;
				style = getObjectCSSMatrix( matrix );
			} else {
				style = getObjectCSSMatrix( object.matrixWorld );
			}
			var element = object.element;
			var cachedStyle = cache.objects[ object.id ];
			if ( cachedStyle === undefined || cachedStyle !== style ) {
				element.style.WebkitTransform = style;
				element.style.MozTransform = style;
				element.style.oTransform = style;
				element.style.transform = style;
				cache.objects[ object.id ] = style;
			}
			if ( element.parentNode !== cameraElement ) {
				cameraElement.appendChild( element );
			}
		}
		for ( var i = 0, l = object.children.length; i < l; i ++ ) {
			renderObject( object.children[ i ], camera );
		}
	};
	this.render = function ( scene, camera ) {
		var fov = 0.5 / Math.tan( THREE.Math.degToRad( camera.fov * 0.5 ) ) * _height;
		if ( cache.camera.fov !== fov ) {
			domElement.style.WebkitPerspective = fov + "px";
			domElement.style.MozPerspective = fov + "px";
			domElement.style.oPerspective = fov + "px";
			domElement.style.perspective = fov + "px";
			cache.camera.fov = fov;
		}
		scene.updateMatrixWorld();
		if ( camera.parent === null ) camera.updateMatrixWorld();
		camera.matrixWorldInverse.getInverse( camera.matrixWorld );
		var style = "translate3d(0,0," + fov + "px)" + getCameraCSSMatrix( camera.matrixWorldInverse ) +
			" translate3d(" + _widthHalf + "px," + _heightHalf + "px, 0)";
		if ( cache.camera.style !== style ) {
			cameraElement.style.WebkitTransform = style;
			cameraElement.style.MozTransform = style;
			cameraElement.style.oTransform = style;
			cameraElement.style.transform = style;
			cache.camera.style = style;
		}
		renderObject( scene, camera );
	};
};


var camera, scene, renderer;
var controls;
var oss = [];
var targets = {grid: [] };
function init() {
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100000 );				
	camera.position.z = 2800;
	scene = new THREE.Scene();
	for ( var i = 0; i < table.length; i ++ ) {
		var element = document.createElement( 'li' );
		element.className = 'element';
		var img = document.createElement( 'img' );
		img.src = table[ i ].src;
		if(i==12 || i==37 || i==62 || i==87 || i==112){
			img.style.width = img.style.height = "300px";
		}
		element.appendChild( img );
		var ott = new THREE.CSS3DObject( element );
		ott.position.x = ((i % 5) * 600) - 1200;
        // ott.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
        ott.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
        // ott.position.z = (Math.floor(i / 25)) * 1000 - 2000;
        ott.position.z = 200-i*60*1.5;
		scene.add( ott );
		oss.push( ott );
	}
	// grid
	var vector = new THREE.Vector3();				

	for ( var i = 0, l = oss.length; i < l; i ++ ) {

		var ott = new THREE.Object3D();

		ott.position.x = ((i % 5) * 600) - 1200;
        // ott.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
        ott.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
        // ott.position.z = (Math.floor(i / 25)) * 1000 - 2000;
        ott.position.z = 200-i*60*1.5;
		//ott.rotation.z = -i*0.03;

        vector.x = ott.position.x;
		vector.y = ott.position.y;
		vector.z = ott.position.z;

		ott.lookAt( vector );
		targets.grid.push( ott );

	}
	renderer = new CSS3DRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.domElement.style.position = 'absolute';
	document.getElementById( 'container' ).appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );
}
function transform( shape, duration, style, time ) {
	scene.position.x = 0;
	scene.position.y = 0;
	scene.position.z = 0;
	for ( var i = 0; i < oss.length; i ++ ) {

		var ott = oss[ i ];
		var target = shape[ i ];
		new TWEEN.Tween( ott.position )
			.to( { x: target.position.x, y: target.position.y, z: target.position.z }, duration )
			.easing( TWEEN.Easing.Exponential.InOut )						
			.start();		
		new TWEEN.Tween( ott.position )
			.to( { x: target.position.x, y: target.position.y, z: target.position.z}, 1000 )
			.delay(195000)
			.start();
		
	}	

	new TWEEN.Tween( this )
		.to( {}, 1000000 )
		.onUpdate(function(){ 
			render(style);
		})
		.start();
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	render();

}
function animate() {
	window.requestAnimationFrame( animate );
	TWEEN.update();

}

function update(){
  for ( var i = 0; i < oss.length; i ++ ) {
	var ott = oss[ i ];
    ott.position.z+=180;
    if(ott.position.z>800){
		ott.position.z = 200-(oss.length-1)*60*1.5;
    } 
  }
}
function render(style) {
	if(style == 'grid'){
		update();		
	}
	renderer.render( scene, camera );
}