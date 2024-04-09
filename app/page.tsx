// pages/loveletter/index.tsx
import React from 'react';
// Import your components or write your page content here

const LoveLetterPage = () => {
  // Define the style object for centering content
  const centerStyle = {
    display: 'flex', // Use Flexbox for layout
    // flexDirection: 'column', // Stack children vertically
    alignItems: 'center', // Center children horizontally in the container
    justifyContent: 'center', // Center children vertically in the container
    height: '100vh', // Full height of the viewport
    textAlign: 'center', // Center text within each child component
    padding: '20px', // Add space around the content
  };

  // Return the JSX for the component
  return (
    <div style={centerStyle}>
      {/* Page content starts here */}
      <p>
        Lang Genie uses AI to help you be fluent in your target language.
      </p>
      <p>
        Heya,
      </p>
      <p>
        I am working on that at the moment, you can shoot me a mail at contact@frenchezleo.com or follow/reach out with the classic socials: my GitHub (https://github.com/lmangall/), Instagram (https://www.instagram.com/french_chez_leo/), and LinkedIn (https://www.linkedin.com/in/l-mangallon/). Moreover, if you have an interest in language learning you might want to sign up for the newsletter to get updates on my soon to come apps (fun ones like https://langgenie.xyz/loveletter and more practical ones to come).
      </p>
      {/* Page content ends here */}
    </div>
  );
};

export default LoveLetterPage;
