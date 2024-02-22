'use client'

import React, { useState } from "react";
import Link from "next/link";

const Parlays = () => {
  const teams = [
    "Toronto Raptors",
    "Atlanta Hawks",
    "Cleveland Cavaliers",
    "Philadelphia 76ers",
    "Miami Heat",
    "New Orleans Pelicans",
    "Washington Wizards",
    "Oklahoma City Thunder",
    "Los Angeles JV Team",
    "Memphis Grizzlies",
    "Phoenix Suns",
    "Houston Rockets",
    "Denver Nuggets",
    "Portland Trail Blazers",
    "Charlotte Hornets",
    "Golden State Warriors",
    "Milwaukee Bucks",
    "Minnesota Timberwolves",
    "San Antonio Spurs",
    "Los Angeles Lakers",
  ];

  const todayGames = [
    "Toronto Raptors vs. Atlanta Hawks, Today, 4:30 PM",
    "Cleveland Cavaliers vs. Philadelphia 76ers, Today, 4:30 PM",
    "Miami Heat vs. New Orleans Pelicans, Today, 5:00 PM",
    "Washington Wizards vs. Oklahoma City Thunder, Today, 5:00 PM",
    "Los Angeles JV Team vs. Memphis Grizzlies, Today, 5:00 PM",
    "Phoenix Suns vs. Houston Rockets, Today, 5:00 PM",
    "Denver Nuggets vs. Portland Trail Blazers, Today, 7:00 PM",
    "Charlotte Hornets vs. Golden State Warriors, Today, 7:00 PM",
    "Milwaukee Bucks vs. Minnesota Timberwolves, Today, 7:00 PM",
    "San Antonio Spurs vs. Los Angeles Lakers, Today, 7:00 PM",
  ];

  const feb24Games = [
    "Orlando Magic vs. Detroit Pistons, Saturday, February 24, 2024, 5:00 PM",
    "Boston Celtics vs. New York Knicks, Saturday, February 24, 2024, 5:30 PM",
    "Brooklyn Nets vs. Minnesota Timberwolves, Saturday, February 24, 2024, 6:00 PM",
  ];

  const [selectedBets, setSelectedBets] = useState([]);

  const handleBetSelection = (team, game, betType) => {
    const newBet = { team, game, betType };
    setSelectedBets((prevBets) => [...prevBets, newBet]);
  };

  const buttonStyle = {
    margin: "0 10px",
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#ecf0f1",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(148, 0, 211, 0.5)",
    transition: "box-shadow 0.3s ease-in-out",
    fontFamily: 'Proxima Nova, sans-serif',
  };

  const styles = {
    backgroundColor: "#000",
    color: "#ecf0f1",
    fontFamily: "Proxima Nova, sans-serif",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(148, 0, 211, 0.8)",
    animation: "fadeIn 0.5s ease-in-out",
    overflow: "hidden",
  };

  const headingStyles = {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#9400d3",
    fontFamily: 'Proxima Nova, sans-serif',
  };

  return (
    <div style={styles}>
      <h1 style={headingStyles}>PICKS</h1>

      <div>
        <h2 style={{ fontSize: "24px", borderBottom: "2px solid #34495e", paddingBottom: "10px", fontWeight: "bold" }}>Today</h2>
        {todayGames.map((game, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "20px" }}>{game}</h2>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
              <div>
                <button onClick={() => handleBetSelection("HomeTeam", game, "OverCalls")} style={buttonStyle}>
                  Over Calls
                </button>
                <button onClick={() => handleBetSelection("HomeTeam", game, "UnderCalls")} style={buttonStyle}>
                  Under Calls
                </button>
              </div>
              <div>
                <button onClick={() => handleBetSelection("HomeTeam", game, "OverCorrectCalls")} style={buttonStyle}>
                  Over Correct Calls
                </button>
                <button onClick={() => handleBetSelection("HomeTeam", game, "UnderCorrectCalls")} style={buttonStyle}>
                  Under Correct Calls
                </button>
              </div>
              <div>
                <button onClick={() => handleBetSelection("HomeTeam", game, "OverIncorrectCalls")} style={buttonStyle}>
                  Over Incorrect Calls
                </button>
                <button onClick={() => handleBetSelection("HomeTeam", game, "UnderIncorrectCalls")} style={buttonStyle}>
                  Under Incorrect Calls
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 style={{ fontSize: "24px", marginTop: "30px", fontWeight: "bold" }}>February 24, 2024</h2>
        {feb24Games.map((game, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "20px" }}>{game}</h2>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
              <div>
                <button onClick={() => handleBetSelection("HomeTeam", game, "OverCalls")} style={buttonStyle}>
                  Over Calls
                </button>
                <button onClick={() => handleBetSelection("HomeTeam", game, "UnderCalls")} style={buttonStyle}>
                  Under Calls
                </button>
              </div>
              <div>
                <button onClick={() => handleBetSelection("HomeTeam", game, "OverCorrectCalls")} style={buttonStyle}>
                  Over Correct Calls
                </button>
                <button onClick={() => handleBetSelection("HomeTeam", game, "UnderCorrectCalls")} style={buttonStyle}>
                  Under Correct Calls
                </button>
              </div>
              <div>
                <button onClick={() => handleBetSelection("HomeTeam", game, "OverIncorrectCalls")} style={buttonStyle}>
                  Over Incorrect Calls
                </button>
                <button onClick={() => handleBetSelection("HomeTeam", game, "UnderIncorrectCalls")} style={buttonStyle}>
                  Under Incorrect Calls
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 style={{ fontSize: "24px", marginTop: "30px", color: "#9400d3", fontWeight: "bold" }}>Selected Bets:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {selectedBets.map((bet, index) => (
            <li key={index} style={{ marginBottom: "10px", fontSize: "18px" }}>
              {`${bet.team} - ${bet.game} - ${bet.betType}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Parlays;
