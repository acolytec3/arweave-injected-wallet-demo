import React from 'react';
import './App.css';

export const App = () => {
  const openFile = () => {
    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      (tabs) => {
        console.log(tabs);
        chrome.tabs.sendMessage(tabs[0].id!, { action: 'open.wallet' });
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">Injectable Wallet</header>
      <button onClick={() => openFile()}>Load Wallet</button>
    </div>
  );
};
export default App;
