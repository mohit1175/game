import React, { useState } from 'react';

function FC24Calculator() {
  const [scores, setScores] = useState([]);
  const [manualInput, setManualInput] = useState({
    playerName: '',
    goalsScored: 0,
    assists: 0,
    cleanSheet: false,
  });

  const calculateFC24Score = (goalsScored, assists, cleanSheet) => {
    const goalPoints = goalsScored * 3;
    const assistPoints = assists * 2;
    const cleanSheetPoints = cleanSheet ? 5 : 0;
    return goalPoints + assistPoints + cleanSheetPoints;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split('\n');
      const calculatedScores = rows
        .filter(row => row.trim())
        .map(row => {
          const [playerName, goalsScored, assists, cleanSheet] = row.split(',');
          return {
            playerName: playerName.trim(),
            goalsScored: parseInt(goalsScored),
            assists: parseInt(assists),
            cleanSheet: cleanSheet.trim().toLowerCase() === 'true',
            totalScore: calculateFC24Score(
              parseInt(goalsScored),
              parseInt(assists),
              cleanSheet.trim().toLowerCase() === 'true'
            )
          };
        });
      setScores(calculatedScores);
    };

    reader.readAsText(file);
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    const newScore = {
      ...manualInput,
      totalScore: calculateFC24Score(
        manualInput.goalsScored,
        manualInput.assists,
        manualInput.cleanSheet
      ),
    };
    setScores([...scores, newScore]);
    setManualInput({
      playerName: '',
      goalsScored: 0,
      assists: 0,
      cleanSheet: false,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/30 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">FC24 SCORE MATRIX</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-cyan-300 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            Upload CSV Data
          </h3>
          <label className="block">
            <span className="sr-only">Choose CSV file</span>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="block w-full text-cyan-400 
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-cyan-500/10 file:text-cyan-400
                hover:file:bg-cyan-500/20
                file:cursor-pointer file:transition-all
                border border-cyan-500/30 rounded-lg
                cursor-pointer"
            />
          </label>
          <p className="text-sm text-cyan-400/60 mt-2">
            CSV format: PlayerName, GoalsScored, Assists, CleanSheet(true/false)
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-cyan-300 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Manual Input
          </h3>
          <form onSubmit={handleManualSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Player Name"
              className="w-full p-3 rounded-lg bg-black/30 border border-cyan-500/30 text-cyan-400 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400 transition-all"
              value={manualInput.playerName}
              onChange={(e) =>
                setManualInput({ ...manualInput, playerName: e.target.value })
              }
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Goals Scored"
                className="w-full p-3 rounded-lg bg-black/30 border border-cyan-500/30 text-cyan-400 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400 transition-all"
                value={manualInput.goalsScored}
                onChange={(e) =>
                  setManualInput({
                    ...manualInput,
                    goalsScored: parseInt(e.target.value) || 0,
                  })
                }
              />
              <input
                type="number"
                placeholder="Assists"
                className="w-full p-3 rounded-lg bg-black/30 border border-cyan-500/30 text-cyan-400 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400 transition-all"
                value={manualInput.assists}
                onChange={(e) =>
                  setManualInput({
                    ...manualInput,
                    assists: parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
            <div className="flex items-center space-x-2 p-3 rounded-lg bg-black/30 border border-cyan-500/30">
              <input
                type="checkbox"
                className="w-5 h-5 rounded text-cyan-500 border-cyan-500/30 focus:ring-cyan-500"
                checked={manualInput.cleanSheet}
                onChange={(e) =>
                  setManualInput({
                    ...manualInput,
                    cleanSheet: e.target.checked,
                  })
                }
              />
              <label className="text-cyan-400">Clean Sheet</label>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              ADD SCORE
            </button>
          </form>
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/30 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-cyan-400">LEADERBOARD</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyan-500/30">
                <th className="p-3 text-left text-cyan-300">Player Name</th>
                <th className="p-3 text-left text-cyan-300">Goals</th>
                <th className="p-3 text-left text-cyan-300">Assists</th>
                <th className="p-3 text-left text-cyan-300">Clean Sheet</th>
                <th className="p-3 text-left text-cyan-300">Total Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index} className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-all">
                  <td className="p-3 text-cyan-400">{score.playerName}</td>
                  <td className="p-3 text-cyan-400">{score.goalsScored}</td>
                  <td className="p-3 text-cyan-400">{score.assists}</td>
                  <td className="p-3 text-cyan-400">{score.cleanSheet ? 'Yes' : 'No'}</td>
                  <td className="p-3 text-cyan-400 font-bold">{score.totalScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FC24Calculator; 