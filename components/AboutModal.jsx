import React from 'react';
import Modal from 'react-modal';
import { MailSubscribe } from './MailchimpSubscribe'; 
import Image from 'next/image'; // Import the Image component from next/image


const customStyles = {
  content: {
    display: 'flex', // Use flexbox for content alignment
    flexDirection: 'column', // Align content vertically
    backgroundColor: 'rgba(255, 192, 203, 0.4)', // Semi-transparent pink
    backdropFilter: 'blur(5px)', // Apply a blur effect to the background
    border: '1px solid rgba(255, 255, 255, 0.1)', // Light border
    borderRadius: '12px', // Rounded corners
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  },
  overlay: {
    display: 'flex', // Flex display to center the modal box
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  },
};

const AboutModal = ({ isOpen, onClose }) => {
  // Assuming your project's 'public' directory is served at the root URL
  const techStackImages = [
    { src: "/tech_stack_picture/openai.png", alt: "OpenAI", width: 30, height: 20 },
    { src: "/tech_stack_picture/DeepL.png", alt: "Deepl", width: 25, height: 20 },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="About Modal"
      style={customStyles}
    >
      <h1 className="text-3xl">🤖 + 🧠 = 💌</h1>
      <h1 className="font-bold">There&apos;s more to come</h1>
      <h1 className="font-bold">If you learn a language stay in the loop</h1>

        <MailSubscribe />
        {/* <p className="mt-10">The tech stack (my first time with all of those) Node.js, Next.js, JavaScript, React, and Tailwind CSS.</p> */}
      {/* <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        This application integrates three APIs: OpenAI for text creation and text-to-speech functionality, and DeepL for translating text.
      </p> */}
      {/* <p style={{ textAlign: 'center' }}>There will be more language learning apps</p>
      <p style={{ textAlign: 'center', marginBottom: '10px' }}> Even</p> */}
 <a href="mailto:contact@frenchezleo.com" className="font-bold mt20 hover:text-blue-700">                      Leo ❤️</a> 
{/*       
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {techStackImages.map((image) => (
          <Image key={image.alt} src={image.src} alt={image.alt} width={image.width} height={image.height} />
        ))}
      </div> 
      */}

      <button onClick={onClose} style={{
        backgroundColor: 'rgba(255, 255, 255, 0.75)', 
        color: 'rgba(0, 0, 0, 0.7)', 
        border: '2px solid rgba(255, 0, 0, 0.5)', 
        borderRadius: '8px',
        padding: '8px 16px',
        cursor: 'pointer',
        marginTop: '40px',
      }}>
        Close
      </button>
    </Modal>
  );
};

export default AboutModal;
