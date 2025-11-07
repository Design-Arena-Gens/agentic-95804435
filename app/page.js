'use client';

import { useState } from 'react';

const characters = [
  { name: 'OBITO', color: '#ff0000' },
  { name: 'NARUTO', color: '#ff3333' },
  { name: 'MADARA', color: '#cc0000' },
  { name: 'KAKASHI', color: '#ff4444' }
];

export default function Home() {
  const [selectedBanner, setSelectedBanner] = useState(0);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style jsx global>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 60px #ff0000; }
          50% { text-shadow: 0 0 30px #ff0000, 0 0 60px #ff0000, 0 0 90px #ff0000; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ember {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
        }
      `}</style>

      <h1 style={{
        textAlign: 'center',
        color: '#fff',
        fontSize: '48px',
        marginBottom: '40px',
        textTransform: 'uppercase',
        letterSpacing: '4px',
        animation: 'glow 2s ease-in-out infinite'
      }}>
        Epic Gaming Banners
      </h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        {characters.map((char, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedBanner(idx)}
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: selectedBanner === idx ? '#000' : '#fff',
              backgroundColor: selectedBanner === idx ? char.color : 'transparent',
              border: `2px solid ${char.color}`,
              borderRadius: '5px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              transition: 'all 0.3s ease',
              boxShadow: selectedBanner === idx ? `0 0 20px ${char.color}` : 'none'
            }}
          >
            {char.name}
          </button>
        ))}
      </div>

      <Banner character={characters[selectedBanner]} />
    </div>
  );
}

function Banner({ character }) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '1450px',
      height: '400px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '10px',
      boxShadow: `0 0 40px ${character.color}`,
      background: `radial-gradient(circle at center, ${character.color}22, #0a0000)`
    }}>
      {/* Animated background effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(90deg, transparent, #ff000008 50%, transparent 100%)',
        animation: 'pulse 3s ease-in-out infinite'
      }} />

      {/* Embers effect */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: '0',
            left: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
            backgroundColor: '#ff6600',
            borderRadius: '50%',
            boxShadow: '0 0 10px #ff6600',
            animation: `ember ${3 + Math.random() * 2}s ease-in infinite`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      {/* Lightning effects */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '2px',
            height: `${20 + Math.random() * 40}px`,
            backgroundColor: '#ff0000',
            boxShadow: '0 0 10px #ff0000',
            opacity: 0.6,
            animation: `flicker ${1 + Math.random()}s ease-in-out infinite`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}

      {/* Character silhouette */}
      <div style={{
        position: 'absolute',
        right: '10%',
        bottom: '0',
        width: '350px',
        height: '350px',
        background: `linear-gradient(180deg, transparent, ${character.color}44)`,
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
        animation: 'float 3s ease-in-out infinite'
      }} />

      {/* Glowing eyes effect */}
      <div style={{
        position: 'absolute',
        right: '25%',
        top: '30%',
        width: '30px',
        height: '30px',
        background: 'radial-gradient(circle, #ff0000, transparent)',
        borderRadius: '50%',
        boxShadow: '0 0 30px #ff0000',
        animation: 'pulse 2s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        right: '20%',
        top: '30%',
        width: '30px',
        height: '30px',
        background: 'radial-gradient(circle, #ff0000, transparent)',
        borderRadius: '50%',
        boxShadow: '0 0 30px #ff0000',
        animation: 'pulse 2s ease-in-out infinite'
      }} />

      {/* Character name - 3D metallic text */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '72px',
        fontWeight: '900',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '8px',
        textShadow: `
          2px 2px 0px #000,
          4px 4px 0px #000,
          6px 6px 0px ${character.color}99,
          8px 8px 0px ${character.color}66,
          10px 10px 20px ${character.color},
          0 0 40px ${character.color}
        `,
        animation: 'glow 2s ease-in-out infinite',
        zIndex: 10
      }}>
        {character.name}
      </div>

      {/* GAMING text */}
      <div style={{
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '48px',
        fontWeight: '900',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '12px',
        textShadow: `
          2px 2px 0px #000,
          3px 3px 0px #000,
          4px 4px 0px ${character.color}99,
          5px 5px 0px ${character.color}66,
          6px 6px 15px ${character.color},
          0 0 30px ${character.color}
        `,
        opacity: 0.9,
        zIndex: 10
      }}>
        GAMING
      </div>

      {/* Battle energy effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 80% 50%, ${character.color}33, transparent 60%)`,
        animation: 'pulse 2s ease-in-out infinite'
      }} />

      {/* Corner accent */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        opacity: 0.7,
        letterSpacing: '2px',
        textShadow: `0 0 10px ${character.color}`
      }}>
        14K ULTRA HD
      </div>

      {/* Frame accent lines */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '100px',
        height: '2px',
        backgroundColor: character.color,
        boxShadow: `0 0 10px ${character.color}`
      }} />
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '2px',
        height: '100px',
        backgroundColor: character.color,
        boxShadow: `0 0 10px ${character.color}`
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '100px',
        height: '2px',
        backgroundColor: character.color,
        boxShadow: `0 0 10px ${character.color}`
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '2px',
        height: '100px',
        backgroundColor: character.color,
        boxShadow: `0 0 10px ${character.color}`
      }} />
    </div>
  );
}
