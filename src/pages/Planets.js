import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const PlanetarySystem = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // create a new scene
    const scene = new THREE.Scene();

    // create a new camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 15;

    // create a new renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);

    // add the renderer to the mount point
    mount.appendChild(renderer.domElement);

    // create a new material for the planets
    const planetMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5, metalness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0.5, metalness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x0000ff, roughness: 0.5, metalness: 0.5 }),
    ];

    // create a new geometry for the planets
    const planetGeometry = new THREE.SphereGeometry(1, 32, 32);

    // create 3 planets and add them to the scene
    const planets = [];
    for (let i = 0; i < 3; i++) {
      const planet = new THREE.Mesh(planetGeometry, planetMaterials[i]);
      planet.position.x = Math.sin((i / 3) * Math.PI * 2) * 5;
      planet.position.y = Math.cos((i / 3) * Math.PI * 2) * 5;
      scene.add(planet);
      planets.push(planet);
    }

    // create a new material for the sun
    const sunMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00, roughness: 1, metalness: 0, });

    // create a new geometry for the sun
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);

    // create the sun and add it to the scene
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // create a point light and add it to the scene
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
    directionalLight.position.set( 1, 1, 0 );
    scene.add( directionalLight );

    const directionalLight2 = new THREE.DirectionalLight( "#4c4c00", 0.3 );
    directionalLight2.position.set( -1, -1, -1 );
    scene.add( directionalLight2 );

    const directionalLight3 = new THREE.DirectionalLight( "#4c4c00", 0.5);
    directionalLight3.position.set( -1, -1, 0 );
    scene.add( directionalLight3 );

    // add orbit controls to the camera
    const controls = new OrbitControls(camera, renderer.domElement);

    // animate the planets
    const animate = () => {
      requestAnimationFrame(animate);

      // make the planets orbit around the sun
      const time = Date.now() * 0.0001;
      for (let i = 0; i < planets.length; i++) {
        const planet = planets[i];
        planet.position.x = Math.sin((i / 3) * Math.PI * 2 + time ) * 5;
        planet.position.y = Math.cos((i / 3) * Math.PI * 2 + time) * 5;
        planet.position.z = Math.tan((i / 3) * Math.PI * 2 + time) * 5;
      }

      // render the scene
      renderer.render(scene, camera);
      // update the controls
      controls.update();
    };

    animate();

    // resize the renderer when the window size changes
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return(
    <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
  );
};

export default PlanetarySystem;
