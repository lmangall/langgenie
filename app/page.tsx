import React from 'react';
import Link from 'next/link';

const LoveLetterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-5">
      <div className="max-w-lg mx-auto">
        {/* Adding font-bold for bold text and mb-4 for margin bottom */}
        <p className="font-bold">Why Lang Genie?</p>
        <p className="text-3xl">🧞</p>
        <p className="mb-4">Because it will leverage AI to help you be fluent in your target language.</p>
        <p>Heya,</p>
        <p>I am working on that at the moment, you can shoot me a mail at <a href="mailto:contact@frenchezleo.com" className="text-blue-500 hover:text-blue-700">contact@frenchezleo.com</a> or connect through the classic socials: <a href="https://github.com/lmangall/" className="text-blue-500 hover:text-blue-700">GitHub</a>, <a href="https://www.instagram.com/french_chez_leo/" className="text-blue-500 hover:text-blue-700">Instagram</a>, and <a href="https://www.linkedin.com/in/l-mangallon/" className="text-blue-500 hover:text-blue-700">LinkedIn</a>. Moreover, if you have an interest in language learning you might want to sign up for the newsletter to get updates on my soon to come apps (fun ones like <Link href="/loveletter"><a className="text-blue-500 hover:text-blue-700">Lang Genie Love Letter</a></Link> and more practical ones to come).</p>
        <p>you can shoot me a mail at <a href="mailto:contact@frenchezleo.com" className="text-blue-500 hover:text-blue-700">contact@frenchezleo.com</a> or connect through the classic socials:</p>
        <p><a href="https://github.com/lmangall/" className="text-blue-500 hover:text-blue-700">GitHub</a>, <a href="https://www.instagram.com/french_chez_leo/" className="text-blue-500 hover:text-blue-700">Instagram</a>, and <a href="https://www.linkedin.com/in/l-mangallon/" className="text-blue-500 hover:text-blue-700">LinkedIn</a>.</p>
        <p className="mb-4">And if you have an interest in language learning you might want to sign up for the newsletter to get updates on my soon to come apps (fun ones like <Link href="/loveletter"><a className="text-blue-500 hover:text-blue-700">Lang Genie Love Letter</a></Link> and more practical ones to come).</p>
 </div>
    </div>
  );
};

export default LoveLetterPage;
