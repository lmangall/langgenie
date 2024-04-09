import React from 'react';
import Link from 'next/link'; 

const LoveLetterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-5">
      <div className="max-w-lg mx-auto">
        <p>Lang Genie uses AI to help you be fluent in your target language.</p>
        <p>Heya,</p>
        <p>I am working on that at the moment, you can shoot me a mail at <a href="mailto:contact@frenchezleo.com" className="text-blue-500 hover:text-blue-700">contact@frenchezleo.com</a> or follow/reach out with the classic socials: my <a href="https://github.com/lmangall/" className="text-blue-500 hover:text-blue-700">GitHub</a>, <a href="https://www.instagram.com/french_chez_leo/" className="text-blue-500 hover:text-blue-700">Instagram</a>, and <a href="https://www.linkedin.com/in/l-mangallon/" className="text-blue-500 hover:text-blue-700">LinkedIn</a>. Moreover, if you have an interest in language learning you might want to sign up for the newsletter to get updates on my soon to come apps (fun ones like <Link href="/loveletter"><a className="text-blue-500 hover:text-blue-700">Lang Genie Love Letter</a></Link> and more practical ones to come).</p>
      </div>
    </div>
  );
};

export default LoveLetterPage;
