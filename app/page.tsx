// Assuming this file is a TypeScript file (.tsx extension)
import React, { CSSProperties } from 'react';
// Import your components or write your page content here

const LoveLetterPage = () => {
  // Define the style object for centering content using CSSProperties for type checking
  const centerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div style={centerStyle}>
      {/* Your page content */}
      <p>Lang Genie uses AI to help you be fluent in your target language.</p>
      <p>Heya,</p>
      <p>I am working on that at the moment, you can shoot me a mail at contact@frenchezleo.com or follow/reach out with the classic socials: my GitHub (https://github.com/lmangall/), Instagram (https://www.instagram.com/french_chez_leo/), and LinkedIn (https://www.linkedin.com/in/l-mangallon/). Moreover, if you have an interest in language learning you might want to sign up for the newsletter to get updates on my soon to come apps (fun ones like https://langgenie.xyz/loveletter and more practical ones to come).</p>
    </div>
  );
};

export default LoveLetterPage;
