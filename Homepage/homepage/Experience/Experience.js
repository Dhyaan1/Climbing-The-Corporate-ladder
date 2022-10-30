import * as THREE from "three"
import { BoxGeometry, Camera, MeshBasicMaterial } from "three";
import {GLTFLoader} from 'THREE/examples/jsm/loaders/GLTFLoader.js';
export default class Experience{
    constructor(canvas){
        this.canvas=canvas;
        const scene = new THREE.Scene();
        scene.background= new THREE.Color(0xCD8080);

        const camera = new THREE.PerspectiveCamera(39.6,window.innerWidth/window.innerHeight, 0.1,1500);
        camera.position.set=(0,20,19.0);
        camera.position.y=15;
        camera.position.z=0;
        camera.rotation.x-=Math.PI/3;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.physicallyCorrectLights=true;
        renderer.toneMapping=THREE.ACESFilmicToneMapping;
        document.body.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        var cube;
        var pc1;
        var pc2;
        var pc3;
        loader.load(
            './gltfs/test2.glb',
            function(gltf){
                cube= gltf.scene;
                gltf.scene.traverse( function( node ) {

                    if ( node.isMesh ) { node.castShadow = true; node.receiveShadow=true; }
            
                } );
                scene.add(gltf.scene);
            }
        );
        loader.load(
            './gltfs/lvl1.glb',
            function(gltf){
                pc1= gltf.scene;
                gltf.scene.traverse( function( node ) {

                    if ( node.isMesh ) { node.castShadow = true; node.receiveShadow=true; }
            
                } );
                scene.add(gltf.scene);
            }
        );
        loader.load(
            './gltfs/lvl2.glb',
            function(gltf){
                pc2= gltf.scene;
                gltf.scene.traverse( function( node ) {

                    if ( node.isMesh ) { node.castShadow = true; node.receiveShadow=true; }
            
                } );
                scene.add(gltf.scene);
            }
        );
        loader.load(
            './gltfs/lvl3.glb',
            function(gltf){
                pc3= gltf.scene;
                gltf.scene.traverse( function( node ) {

                    if ( node.isMesh ) { node.castShadow = true; node.receiveShadow=true; }
            
                } );
                scene.add(gltf.scene);
            }
        );
  
        
        const amlight = new THREE.AmbientLight( 0xCD8080 );
        scene.add( amlight );
        

        const light1= new THREE.PointLight(0xffffff,122,50,2);
        light1.castShadow=true;
        light1.shadow.bias=-0.01;
        light1.shadow.radius=8;
        scene.add(light1);
        light1.position.x=0;
        light1.position.y=10;
        light1.position.z=-4;
        light1.shadow.mapSize.height= 1024;
        light1.shadow.mapSize.width= 1024;

        const light2= new THREE.PointLight(0xffffff,122,50,2);
        light2.castShadow=true;
        light2.shadow.bias=-0.01;
        light2.shadow.radius=8;
        scene.add(light2);
        light2.position.x=0;
        light2.position.y=10;
        light2.position.z=3;
        light2.shadow.mapSize.height= 1024;
        light2.shadow.mapSize.width= 1024;


        const light3= new THREE.PointLight(0xffffff,122,50,2);
        light3.castShadow=true;
        light3.shadow.bias=-0.01;
        light3.shadow.radius=8;
        scene.add(light3);
        light3.position.x=0;
        light3.position.y=10;
        light3.position.z=10;
        light3.shadow.mapSize.height= 1024;
        light3.shadow.mapSize.width= 1024;

        const light4= new THREE.PointLight(0xffffff,122,50,2);
        light4.castShadow=true;
        light4.shadow.bias=-0.01;
        light4.shadow.radius=8;
        scene.add(light4);
        light4.position.x=0;
        light4.position.y=10;
        light4.position.z=18;
        light4.shadow.mapSize.height= 1024;
        light4.shadow.mapSize.width= 1024;

        const light5= new THREE.PointLight(0xffffff,122,50,2);
        light5.castShadow=true;
        light5.shadow.bias=-0.01;
        light5.shadow.radius=8;
        scene.add(light5);
        light5.position.x=0;
        light5.position.y=10;
        light5.position.z=25;
        light5.shadow.mapSize.height= 1024;
        light5.shadow.mapSize.width= 1024;
        const link=document.querySelector('.link');


        function animate(){
            setTimeout( function() {

                requestAnimationFrame( animate );
        
            }, 1000 / 7 );
            document.onkeydown = checkKey;
            console.log(camera.position.z)
            if (camera.position.z>=18 && camera.position.z<=20){
                link.innerHTML="Play Level 1";
                console.log(link.innerHTML);
            }
            if (camera.position.z>=23 && camera.position.z<=25){
                link.innerHTML="Play Level 2";
                console.log(link.innerHTML);
                
            }
            if (camera.position.z>=28){
                link.innerHTML="Play Level 3";
                console.log(link.innerHTML);
            }
            }
            function checkKey(e) {

            e = e || window.event;

            if (e.keyCode == '38') {
            // up arrow
            camera.position.z-=0.1;

            }
  
         else if (e.keyCode == '40') {
            // down arrow
            camera.position.z+=0.08;
        

        }
            
            renderer.render(scene,camera);
        }
        animate();
    }
}