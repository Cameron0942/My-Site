import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//? IMAGES
const babby = require("../assets/babby.png");
const stoneTexture = require("../assets/stoneTexture.jpg");
const greenTexture = require("../assets/greenTexture.jpg");
const sunTexture = require("../assets/sunTexture.jpg");
const sunTextureBetter = require("../assets/sunTextureBetter.jpg");
const blueTexture = require("../assets/blueTexture.jpg");
const pinkTexture = require("../assets/pinkTexture.jpg");

const Background = () => {
  const containerRef = useRef(null);
  // const windowHeight = useState(window.innerHeight);
  // const windowWidth = useState(window.innerWidth);

  useEffect(() => {
    const container = containerRef.current;

    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#050816");

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 22);

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create lights
    const keyLight = new THREE.DirectionalLight(0xffffff, 1);
    keyLight.position.set(0.1, 0, -1);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
    fillLight.position.set(1, 1, 0);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(1, 0, -1);

    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);

    // Create cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    const sphereGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Create stars
    // for (let i = 0; i < 1800; i++) {
    //   const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    //   sphere.position.set(
    //     Math.random() * 100 - 50, // random x position between -5 and 5
    //     Math.random() * 100 - 50, // random y position between -5 and 5
    //     Math.random() * 100 - 50 // random z position between -5 and 5
    //   );
    //   scene.add(sphere);
    // }

    // Create stars with a delay
    const createStarWithDelay = (index) => {
      setTimeout(() => {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50
        );
        scene.add(sphere);
      }, index * 3); // 0.1s delay for each star
    };

    for (let i = 0; i < 1800; i++) {
      createStarWithDelay(i);
    }

    // Load the texture image
    const sphereTextureLoader = new THREE.TextureLoader();
    const sphereTexture = sphereTextureLoader.load(blueTexture);
    const sphereTexture2 = sphereTextureLoader.load(pinkTexture);
    const sphereTexture3 = sphereTextureLoader.load(greenTexture);
    // create a new material for the planets
    const planetMaterials = [
      new THREE.MeshStandardMaterial({ map: sphereTexture }),
      new THREE.MeshStandardMaterial({ map: sphereTexture2 }),
      new THREE.MeshStandardMaterial({ map: sphereTexture3 }),
      new THREE.MeshStandardMaterial({
        color: 0xff0000,
        roughness: 0.5,
        metalness: 0.5,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x00ff00,
        roughness: 0.5,
        metalness: 0.5,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        roughness: 0.5,
        metalness: 0.5,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        roughness: 0.5,
        metalness: 0.5,
      }),
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

    const sunTexture2 = sphereTextureLoader.load(sunTextureBetter);
    // create a new material for the sun
    const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture2 });

    // create a new geometry for the sun
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);

    // create the sun and add it to the scene
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // add orbit controls to the camera
    // const controls = new OrbitControls(camera, renderer.domElement);

    // animate the planets
    const animate = () => {
      requestAnimationFrame(animate);

      // make the planets orbit around the sun
      // planet relative orbit time
      const time = Date.now() * 0.0008;
      // const time2 = Date.now() * 0.00008;
      const orbitRadius = 10;

      // camera relative orbit time
      const cameraTime = Date.now() * 0.00009;
      const cameraOrbitRadius = -30;
      for (let i = 0; i < planets.length; i++) {
        const planet = planets[i];
        const orbitSpeed = (i + 1) * 0.01;

        const orbitAngle = orbitSpeed * time;
        // const orbitAngle2 = orbitSpeed * time2;

        const planetRadius = 0.5;
        const planetAngle = orbitAngle * (i + 1);
        planet.position.x =
          orbitRadius * Math.sin(orbitAngle) * Math.cos(planetAngle);
        planet.position.y =
          orbitRadius * Math.sin(orbitAngle) * Math.sin(planetAngle);
        planet.position.z = orbitRadius * Math.cos(orbitAngle);
        planet.rotation.y += 0.003;

        const cameraOrbitSpeed = (i + 1) * 0.0000000003;
        const cameraOrbitAngle = cameraOrbitSpeed * cameraTime;
        camera.position.x =
          cameraOrbitRadius *
          Math.sin(cameraOrbitAngle) *
          -Math.cos(planetAngle);
        camera.position.y =
          cameraOrbitRadius *
          -Math.sin(cameraOrbitAngle) *
          Math.sin(planetAngle);
        camera.position.z = cameraOrbitRadius * Math.cos(cameraOrbitAngle);

        camera.lookAt(0, 0, 0);

        for (let j = 0; j < i; j++) {
          const otherPlanet = planets[j];
          const distance = planet.position.distanceTo(otherPlanet.position);
          const minDistance = planetRadius + 0.5;
          if (distance < minDistance) {
            const direction = planet.position
              .clone()
              .sub(otherPlanet.position)
              .normalize();
            planet.position.add(
              direction.multiplyScalar(minDistance - distance)
            );
          }
        }
      }

      sun.rotation.y -= 0.001;

      // render the scene
      renderer.render(scene, camera);

      // update the controls
      // controls.update();
    };

    animate();

    // resize the renderer when the window size changes
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="background"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Background;
