//? REACT
import React, { useEffect, useRef } from 'react';

//? THREE
import * as THREE from 'three';

//? IMAGES
const reactTexture = require('../assets/reactTexture.svg').default;
const expressTexture = require('../assets/expressTexture.svg').default;
const nodeTexture = require('../assets/nodeTexture.svg').default;
const mongodbTexture = require('../assets/mongodbTexture.svg').default;
const javascriptTexture = require('../assets/javascriptTexture.svg').default;
const javascriptTextureInvert = require('../assets/javascriptTexture-invert.svg').default;
const reduxTexture = require('../assets/reduxTexture.svg').default;

const HeroCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
  
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    mountRef.current.appendChild(renderer.domElement);
  
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

    // create materials for each face of the cube
    const materialTop = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(mongodbTexture) });
    const materialBottom = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(reduxTexture) });
    const materialFront = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(expressTexture) });
    const materialBack = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(nodeTexture) });
    const materialLeft = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(javascriptTexture) });
    const materialRight = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(reactTexture) });
    const materialLeftUpsidedown = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(javascriptTextureInvert) });
    const materialSides = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    
    // apply materials to specific faces of the cube
    const materials = [
      materialFront,    // front
      materialBack,    // back
      materialTop,      // top
      materialBottom,   // bottom
      materialRight,    // right
      materialLeft,    // left
    ];
  
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
  
    camera.position.z = 5;
  
    // add lights to the scene for 3 point lighting
    const light1 = new THREE.PointLight(0xffffff, 1, 0);
    light1.position.set(0, 0, 0);
    scene.add(light1);
  
    const light2 = new THREE.PointLight(0xffffff, 1, 0);
    light2.position.set(0, 0, 5);
    scene.add(light2);
  
    const light3 = new THREE.PointLight(0xffffff, 1, 0);
    light3.position.set(5, 0, 0);
    scene.add(light3);
  
    // Three.js animation loop
    // const animate = () => {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.002;
    //   cube.rotation.y += 0.002;
    //   cube.rotation.z -= 0.001;

      
    //   renderer.render(scene, camera);
    // };
    // animate();

    const animate = () => {
      requestAnimationFrame(animate);

      // If the cube has completed one full revolution on its y-axis, start rotating on the x-axis
      if (cube.rotation.y >= Math.PI * 2) {

        // replace JS logo with flipped version
        materials[5] = materialLeftUpsidedown;
        
        // Rotate the cube on its x-axis
        cube.rotation.x += 0.002;
        
        // if the cube has completed an x-axis rotation, reset the y-axis
        if (cube.rotation.x >= Math.PI * 2) {
          // replace JS logo with right side up version
          materials[5] = materialLeft;
          cube.rotation.y = 0;
          cube.rotation.x = 0;
        }
      }
      else{
        // Rotate the cube on its y-axis
        cube.rotation.y += 0.002;
      }
    
      renderer.render(scene, camera);
    };
    animate();    

    
  }, []);

  return (
    <div ref={mountRef}  />
  );
};

export default HeroCube;