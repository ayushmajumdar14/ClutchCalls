'use client'

import React from "react";
import { useSpring} from 'react-spring';


const OurStory = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const containerStyle = {
    backgroundColor: '#1a1a1a', // Dark black background
    color: '#ffffff', // White text
    padding: '50px',
    textAlign: 'center',
  };

  const storyContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const headingStyle = {
    color: '#7a32e5', // Purple color
  };

  const paragraphStyle = {
    marginBottom: '20px',
    lineHeight: '1.5',
    fontSize: '16px',
  };

  return (
    <div style={{ ...containerStyle, ...fadeIn }}>
      <div style={storyContainerStyle}>
        <h1 style={headingStyle}>Welcome to ClutchCalls</h1>
        <p style={paragraphStyle}>
          Where the thrilling world of NBA refereeing takes center stage in a unique and exhilarating way.
        </p>
        <p style={paragraphStyle}>
          Our journey began with a passion for the game and a desire to add an extra layer of excitement to the NBA experience.
          Here's the story of how ClutchCalls came to life.
        </p>

        <h2 style={headingStyle}>Inception and Passion for the Game</h2>
        <p style={paragraphStyle}>
          Our story kicks off with a group of avid NBA fans who found themselves engrossed not just in the incredible plays on the court, but also in the pivotal role referees play in the game.
          Recognizing the potential for a new and innovative approach to sports betting, the idea of ClutchCalls was born.
        </p>

        <h2 style={headingStyle}>Assembling a Team of Experts</h2>
        <p style={paragraphStyle}>
          To bring this vision to life, we assembled a team of experts in data science, machine learning, and front-end development.
          The journey began with the meticulous task of collecting and analyzing data on NBA referees, including their historical performance, tendencies, and the dynamics of their calls.
        </p>

        {/* ... (continue with the rest of your story) */}

        <h2 style={headingStyle}>Join the ClutchCalls Community</h2>
        <p style={paragraphStyle}>
          Today, ClutchCalls stands as a testament to innovation and passion in the world of sports betting.
          We invite you to join us on this exciting journey, where the unpredictable nature of referee calls meets cutting-edge technology, creating an unparalleled experience for every NBA fan and betting enthusiast.
        </p>

        <h2 style={headingStyle}>Welcome to ClutchCalls</h2>
        <p style={paragraphStyle}>
          Where the game is not just on the court; it's in every call made by the referees.
          Get ready to experience the adrenaline, make your predictions, and embrace the Clutch spirit with us!
        </p>
      </div>
    </div>
  );
};

export default OurStory;