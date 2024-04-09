"use client";

import React from 'react';
import Link from 'next/link';
import { MailSubscribe } from '../components/MailchimpSubscribe'; 

const LoveLetterPage = () => {
  return (
    <div className="flex flex-col items-center justify-left h-screen text-center p-5">
      <div className="max-w-lg mx-auto">
        {/* Adding font-bold for bold text and mb-4 for margin bottom */}
        <p className="font-bold">Why LangGenie?</p>
        <p className="text-3xl">🧞</p>
        <p className="mb-4">LangGenie will be a collection of AI apps to help master fluency while having fun.</p>
        <p className="font-bold"> Heya,</p>
        <p>As you can see I am working on that at the moment,</p>
        <p>you can shoot me a mail at <a href="mailto:contact@frenchezleo.com" className="text-blue-500 hover:text-blue-700">contact@frenchezleo.com</a> </p>
        <p>or connect through the classic socials:</p>
        <p><a href="https://github.com/lmangall/" className="text-blue-500 hover:text-blue-700">GitHub</a>, <a href="https://www.instagram.com/french_chez_leo/" className="text-blue-500 hover:text-blue-700">Instagram</a>, and <a href="https://www.linkedin.com/in/l-mangallon/" className="text-blue-500 hover:text-blue-700">LinkedIn</a>.</p>
        <p className="mt-4">And if you have an interest in language learning you might want to sign up for the newsletter to get updates on my soon to come apps (fun ones like <Link href="/loveletter"><a className="text-blue-500 hover:text-blue-700">Loveletter</a></Link> and more practical ones to come).</p>
        <MailSubscribe />
     </div>
    </div>
  );
};

export default LoveLetterPage;
