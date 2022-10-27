import * as THREE from "three"
import { BoxGeometry, Camera, MeshBasicMaterial } from "three";
import {GLTFLoader} from 'THREE/examples/jsm/loaders/GLTFLoader.js';
export default class Experience{
    constructor(canvas){
        this.canvas=canvas;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(39.6,window.innerWidth/window.innerHeight, 0.1,1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(renderer.domElement);
        const loader = new GLTFLoader();
        var cube;
        loader.load(
            './gltfs/delete.glb',
            function(gltf){
                cube= gltf.scene;
                gltf.scene.traverse( function( node ) {

                    if ( node.isMesh ) { node.castShadow = true; }
            
                } );
                scene.add(gltf.scene);
            }
        );
        scene.background= new THREE.Color(0xF8A3A5);
        
        const amlight = new THREE.AmbientLight( 0xF8A3A5 );
        scene.add( amlight );

        const light1= new THREE.PointLight(0xffffff,2.5,60,2);
        light1.castShadow=true;
        scene.add(light1);
        light1.position.set(0,7,18);

        camera.position.x=0;
        camera.position.y=5;
        camera.position.z=19.0;



        function animate(){
            requestAnimationFrame(animate);
            camera.position.z+=0.01;
            renderer.render(scene,camera);
        }
        animate();
    }
}