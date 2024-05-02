import React from 'react';
import ScrollNavbar from './components/ScrollNavbar';

const App = () => {
  return (
    <div>
      <ScrollNavbar /> 
      <div style={{ height: '2000px' }}> {/* Example content to allow scrolling */}
        <h1>Welcome to My Website</h1>
        <p>Scroll to see the navbar in action.</p>
      </div>
    </div>
  );
};

export default App;