import React, { useState } from 'react';
import BGMICalculator from './components/BGMICalculator';
import FC24Calculator from './components/FC24Calculator';

function App() {
  const [activeGame, setActiveGame] = useState('bgmi');

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Base Background */}
      <div className="fixed inset-0 bg-black" />

      {/* Enhanced Background Gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-cyber-purple/30 to-black opacity-60" />
      <div className="fixed inset-0 bg-gradient-radial from-cyber-blue/10 via-transparent to-transparent opacity-40" />

      {/* Cyberpunk Grid with Animation */}
      <div className="fixed inset-0 bg-cyber-grid bg-[length:12px_12px] sm:bg-cyber opacity-30 animate-grid-flow" />

      {/* Dynamic Glow Effects */}
      <div className="fixed inset-0 bg-gradient-to-r from-cyber-blue/5 via-cyber-purple/5 to-cyber-pink/5 animate-pulse-slow" />

      {/* Floating Elements with Enhanced Positioning and Animations */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top Left Group */}
        <div className="absolute top-32 left-16 w-40 h-40 md:w-56 md:h-56 animate-float-slow group">
          <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <img 
            src="/controller-icon.png" 
            alt="Gaming Icon" 
            className="w-full h-full object-contain opacity-75 brightness-200 filter drop-shadow-[0_0_12px_rgba(0,243,255,0.7)] group-hover:scale-110 transition-transform duration-300" 
            style={{ filter: 'invert(100%) drop-shadow(0 0 12px rgba(0, 243, 255, 0.7))' }}
          />
        </div>
        
        {/* Top Right Group */}
        <div className="absolute top-48 right-20 w-36 h-36 md:w-48 md:h-48 animate-float-delayed group">
          <div className="absolute inset-0 bg-cyber-purple/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <img 
            src="/headset-icon.png" 
            alt="Gaming Icon" 
            className="w-full h-full object-contain opacity-75 brightness-200 filter drop-shadow-[0_0_12px_rgba(128,0,255,0.7)] group-hover:scale-110 transition-transform duration-300" 
            style={{ filter: 'invert(100%) drop-shadow(0 0 12px rgba(128, 0, 255, 0.7))' }}
          />
        </div>
        
        {/* Middle Elements with Larger Size */}
        <div className="absolute top-1/2 left-24 w-48 h-48 md:w-64 md:h-64 animate-float group">
          <div className="absolute inset-0 bg-cyber-pink/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <img 
            src="/keyboard-icon.png" 
            alt="Gaming Icon" 
            className="w-full h-full object-contain opacity-75 brightness-200 filter drop-shadow-[0_0_12px_rgba(255,0,255,0.7)] group-hover:scale-110 transition-transform duration-300" 
            style={{ filter: 'invert(100%) drop-shadow(0 0 12px rgba(255, 0, 255, 0.7))' }}
          />
        </div>
        
        <div className="absolute top-1/2 right-24 w-48 h-48 md:w-64 md:h-64 animate-float-slow group">
          <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <img 
            src="/mouse-icon.png" 
            alt="Gaming Icon" 
            className="w-full h-full object-contain opacity-100 brightness-200 filter drop-shadow-[0_0_12px_rgba(0,243,255,0.7)] group-hover:scale-110 transition-transform duration-300" 
            style={{ filter: 'invert(100%) drop-shadow(0 0 12px rgba(0, 243, 255, 0.7))' }}
          />
        </div>
        
        {/* Bottom Elements */}
        <div className="absolute bottom-40 left-20 w-44 h-44 md:w-56 md:h-56 animate-float group">
          <div className="absolute inset-0 bg-cyber-purple/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <img 
            src="/ps5-icon.png" 
            alt="Gaming Icon" 
            className="w-full h-full object-contain opacity-75 brightness-200 filter drop-shadow-[0_0_12px_rgba(128,0,255,0.7)] group-hover:scale-110 transition-transform duration-300" 
            style={{ filter: 'invert(100%) drop-shadow(0 0 12px rgba(128, 0, 255, 0.7))' }}
          />
        </div>
        
        <div className="absolute bottom-48 right-24 w-44 h-44 md:w-56 md:h-56 animate-float-delayed group">
          <div className="absolute inset-0 bg-cyber-pink/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <img 
            src="/joystick-icon.png" 
            alt="Gaming Icon" 
            className="w-full h-full object-contain opacity-75 brightness-200 filter drop-shadow-[0_0_12px_rgba(255,0,255,0.7)] group-hover:scale-110 transition-transform duration-300" 
            style={{ filter: 'invert(100%) drop-shadow(0 0 12px rgba(255, 0, 255, 0.7))' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <header className="bg-black/80 backdrop-blur-xl border-b border-cyber-blue/20">
          <div className="container mx-auto py-6 px-4">
            <div className="flex items-center justify-between">
              {/* Enhanced Logo Section */}
              <div className="flex items-center gap-6 group">
                <div className="relative">
                  <img 
                    src="/techspark-logo.png" 
                    alt="TechSpark Logo" 
                    className="w-16 h-16 animate-pulse-slow group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-cyber-blue/30 rounded-full filter blur-xl animate-pulse-slow"></div>
                </div>
                <p className="text-cyber-blue text-lg tracking-[0.3em] font-tech whitespace-nowrap group-hover:text-cyber-pink transition-colors duration-300">
                  TECHSPARK'25
                </p>
              </div>

              {/* Enhanced Title */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <h1 className="text-4xl md:text-5xl font-bold font-tech text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink animate-text-shine hover:scale-105 transition-transform duration-300">
                  CYBER GAMING HUB
                </h1>
              </div>

              <div className="w-[180px]"></div>
            </div>
          </div>
        </header>

        {/* Enhanced Main Content */}
        <main className="container mx-auto p-4">
          <div className="flex justify-center space-x-8 mb-8 mt-6">
            {/* Enhanced Buttons */}
            <button
              className={`px-10 py-4 rounded-lg font-bold font-tech transition-all duration-300 border-2 ${
                activeGame === 'bgmi'
                  ? 'bg-cyber-blue border-cyber-blue text-black shadow-lg shadow-cyber-blue/50 scale-105'
                  : 'bg-transparent border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-105'
              }`}
              onClick={() => setActiveGame('bgmi')}
            >
              <span className="flex items-center gap-3 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                BGMI
              </span>
            </button>
            <button
              className={`px-10 py-4 rounded-lg font-bold font-tech transition-all duration-300 border-2 ${
                activeGame === 'fc24'
                  ? 'bg-cyber-blue border-cyber-blue text-black shadow-lg shadow-cyber-blue/50 scale-105'
                  : 'bg-transparent border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-105'
              }`}
              onClick={() => setActiveGame('fc24')}
            >
              <span className="flex items-center gap-3 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                FC24
              </span>
            </button>
          </div>

          <div className="transition-all duration-500 ease-in-out">
            {activeGame === 'bgmi' ? <BGMICalculator /> : <FC24Calculator />}
          </div>
        </main>
      </div>

      {/* Enhanced Corner Accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-cyber-blue/40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-cyber-blue/40 animate-pulse"></div>
    </div>
  );
}

export default App; 