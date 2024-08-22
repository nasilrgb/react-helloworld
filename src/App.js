
// import React from 'react';
// import './App.css';

// function App() {
//   const handleClick = () => {
//     fetch('http://internal-k8s-csv3stag-devopste-a8c91d3b2d-1771359278.ap-south-1.elb.amazonaws.com/devops-testapp/service1')
//       .then(response => response.text())  // Use .text() if the response is plain text
//       .then(data => console.log(data))
//       .catch(error => console.error('Error:', error));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello, World!</h1>
//         <button onClick={handleClick}>Call ALB</button>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [responseText, setResponseText] = useState('');

  const handleClick = () => {
    fetch('http://internal-k8s-csv3stag-devopste-a8c91d3b2d-1771359278.ap-south-1.elb.amazonaws.com/devops-testapp/service1')
      .then(response => response.text())  // Use .text() if the response is plain text
      .then(data => setResponseText(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <button onClick={handleClick}>Call ALB</button>
        <p>{responseText}</p> {/* Display the response here */}
      </header>
    </div>
  );
}

export default App;
