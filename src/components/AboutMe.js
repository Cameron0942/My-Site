//? REACT
import React, { useState, useEffect } from 'react';

const AboutMe = () => {
    const [isBottom, setIsBottom] = useState(false);
  
    useEffect(() => {
        //* Hides overlay when at bottom of the screen
        function handleScroll() {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
    
            if (scrollPosition + windowHeight >= documentHeight) {
            setIsBottom(true);
            } else {
            setIsBottom(false);
            }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, []);
  
    
    return (
        <>
        <div id='fade-underlayID' className='fade-underlay' style={{height: '145vh', margin: '0 0 0 0', textAlign: 'center', textShadow: '1px 1px black', background: isBottom ? '' : 'linear-gradient(to top, rgba(255, 255, 255, 0) 15%, #19376D 75%)'}}>
            <div style={{width: '75ch', margin: '0 auto', paddingTop: 60}}>
                <h1 style={{color: '#F7F7F7', textShadow: '1px 1px black', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '10px', textDecorationColor: '#ba2649'}}>About Me</h1>
                <p style={{color: '#F7F7F7', marginTop: 20, fontSize: '1.3rem'}}>
                    My name is Cameron. I'm a fullstack web developer based in Nevada. I'm passionate about cutting-edge, pixel-perfect, responsive user interfaces, and dynamic user experiences.
                </p>
                <p style={{color: '#F7F7F7', marginTop: 20, fontSize: '1.3rem'}}>
                    My enthusiasm for web development began when I found myself hacking together a local web dashboard — at that time, I didn't imagine that tinkering with <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b> could get this far, yet it turned out to be much more than that!
                </p>
                <p style={{color: '#F7F7F7', marginTop: 20, fontSize: '1.3rem'}}>
                    Nowadays, I don't keep hacking around with HTML, CSS and JavaScript anymore — my focus now is to develop things for the real world by using them! And of course <b>React</b>, <b>Node.js</b>, <b>Express.js</b>, and many other frameworks and libraries that I work with every day.
                </p>
            </div>
        </div>
        </>
    );
};

export default AboutMe;
