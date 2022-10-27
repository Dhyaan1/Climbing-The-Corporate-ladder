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
        document.body.appendChild(renderer.domElement);
        const loader = new GLTFLoader();
        var cube;
        loader.load(
            './gltfs/delete.glb',
            function(gltf){
                cube= gltf.scene;
                scene.add(gltf.scene);
            }
        );
        scene.background= new THREE.Color(0xF87474);
        
        const light = new THREE.AmbientLight( 0xF87474 );
        scene.add( light );

        camera.position.x=0;
        camera.position.y=5;
        camera.position.z=0;

        console.log(camera.position.z);

        function animate(){
            requestAnimationFrame(animate);
            camera.position.z+=0.01;
            renderer.render(scene,camera);
        }
        animate();
    }
}