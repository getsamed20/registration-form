import React, { useState } from 'react';
import LogIn from './logIn'; 
import SignUp from './App';  
export default function Root() {
  const [currentView, setCurrentView] = useState('login'); 

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      {currentView === 'login' ? (
        <LogIn onNavigate={handleNavigate} />
      ) : (
        <SignUp onNavigate={handleNavigate} />
      )}
    </div>
  );
}
