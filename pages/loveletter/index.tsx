"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import InputField from "../../components/InputField";
import useFetchLoveStory from "../../hooks/useFetchLoveStory";
import useTranslateText from "../../hooks/useTranslateText";
import stripHtml from "../../utils/stripHtml";
import LoveLetterBackground from "../../components/LoveLetterBackground"; // Import your SVG component
import "../../app/globals.css"; // IS IT NECESSARY TO IMPORT HERE => layout.tsx
import SettingsModal from "../../components/SettingsModal";
import AboutModal from "../../components/AboutModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchLoveStory, loveStory, error } = useFetchLoveStory();
  const [userCity, setUserCity] = useState("");
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("woman");
  const [userOrientation, setUserOrientation] = useState("a man");
  const [userTaste, setUserTaste] = useState("");
  const [userTarget, setTargetLanguage] = useState("french");
  const [isQueer, setIsQueer] = useState(false);
  const [isHot, setIsHot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRead, setIsLoadingRead] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleOpenAboutModal = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the event from bubbling if necessary
    setIsAboutModalOpen(true); // Attempt to open the About modal
    console.log("About modal state after opening:", isAboutModalOpen);
  };

  const handleOpenModal = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent click from propagating
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseAboutModal = () => {
    setIsAboutModalOpen(false);
  }

  const { translateText, translations, translationError } = useTranslateText();

  const handleTextSelection = async () => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      const text = selection.toString();
      await translateText(text);
    }
  };

  const handleEmailTranslations = () => {
    const emailBody =
      translations.map(stripHtml).join("\n").replace(/#/g, "%23") +
      "\n\n\n" +
      "If you like the app, subscribe to the newsletter (in 'About') - there's more to come,\nlove,\nLeo ❤️"; // Your message

    const subject = "My Translations";
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyNotes = async () => {
    const textToCopy = translations.map(stripHtml).join("\n");
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Translations copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("Failed to copy translations.");
    }
  };

  const readText = async (text: string) => {
    setIsLoadingRead(true);
    try {
      const response = await fetch("/api/textToSpeech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error("Failed to convert text to speech");

      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);

      // Play the audio
      const audio = new Audio(url);
      audio.play();
    } catch (error) {
      console.error("Error reading text:", error);
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  const audioRef = useRef<HTMLAudioElement>(null);
  const togglePlayPause = async () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        if (!audioRef.current.src) {
          try {
            const response = await fetch("/api/textToSpeech", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ text: loveStory }),
            });

            if (!response.ok)
              throw new Error("Failed to convert text to speech");

            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);
            audioRef.current.src = audioUrl;
          } catch (error) {
            console.error("Error fetching audio:", error);
            return;
          }
        }
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
   
<AboutModal
  isOpen={isAboutModalOpen}
  onClose={() => setIsAboutModalOpen(false)}
/>
      <LoveLetterBackground />
      <div className="grid  grid-cols-2 w-2/3 gap-4 content-center  m-auto p-24 justify-center ">
        <div className="p-6 backdrop-blur-sm bg-white bg-opacity-40 rounded-lg border border-1 rgba(255, 255, 255, 0.1) h-[80vh]">
          <div className="logo-container-2">
            <a
              href="https://frenchezleo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/love_letter_logo.png"
                alt="Frenchez Leo Logo"
                width={500}
                height={50}
                priority
                layout="responsive"
                className="logo"
              />
            </a>
          </div>
          <p className="mb-4 font-semibold">
            An AI powered tool to get some luv while learning a foreign language
            🧠.
          </p>
          {/* Settings Modal */}
          <SettingsModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            userGender={userGender}
            setUserGender={setUserGender}
            userOrientation={userOrientation}
            setUserOrientation={setUserOrientation}
            userTaste={userTaste}
            setUserTaste={setUserTaste}
            userTarget={userTarget}
            setTargetLanguage={setTargetLanguage}
            isQueer={isQueer}
            setIsQueer={setIsQueer}
            isHot={isHot}
            setIsHot={setIsHot}
          />
          <div className="flex flex-row space-x-4 ">
            <InputField
              placeholder="Enter your city."
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
            />
            <InputField
              placeholder="Enter your name."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <button
            onClick={handleOpenModal}
            // className="mb-4 h-10 w-full bg-gray-50 bg-opacity-50  text-slate-400 rounded hover:bg-opacity-60 mt-4"
            className="mb-4 h-10 mt-2 w-full bg-white/75 text-slate-400 font-bold rounded shadow-sm transition duration-150 border border-2 hover:border-red-500"

          >
            Settings
          </button>
          <div
            className="bg-white w-full h-full max-h-80 bg-opacity-40 p-4 text-base font-normal rounded-lg shadow-sm resize-none overflow-auto"
            aria-readonly="true"
            onMouseUp={handleTextSelection}
          >
            {loveStory || (
              <span className="text-grey">
                Fill the fields and click on the button to get your love letter
                💌
              </span>
            )}
          </div>
          <div className="flex justify-between gap-2">
            <button
              onClick={() => {
                setIsLoading(true); // Trigger loading state
                fetchLoveStory(
                  userCity,
                  userName,
                  userGender,
                  userOrientation,
                  userTaste,
                  userTarget,
                  isQueer,
                  isHot
                ).finally(() => setIsLoading(false)); // Reset loading state
              }}
              className="w-full mt-2 bg-white/75 py-2 text-red-500 font-bold rounded shadow-sm transition duration-150 border border-2 hover:border-red-500"
            >
              {isLoading && (
                <div className="spinner"></div> // Spinner appears next to the text
              )}
              Generate {/* Text remains visible */}
            </button>
            <button
              onClick={() => readText(loveStory)}
              className="w-full mt-2 bg-white/75 py-2 text-red-500 font-bold rounded shadow-sm transition duration-150 border border-2 hover:border-red-500"
            >
              {isLoadingRead && (
                <div className="spinner"></div> // Spinner appears next to the text
              )}
              Read Text
            </button>
          </div>
          {/* 
          <audio id="audioPlayer" src="" hidden></audio>{" "}
          <button onClick={togglePlayPause}>Pause button WIP</button>

  */}
        </div>
        {/* New column with two rows */}
        <div className="flex flex-col top-[10%] backdrop-blur-sm bg-white-300/30 space-y-4">
          {/* right column*/}
          <div className="p-6 backdrop-blur-sm bg-white bg-opacity-40 rounded-lg border border-1 rgba(255, 255, 255, 0.1) h-[80vh]">
            <div className="mb-4 bg-white w-full h-5/6 bg-opacity-40 p-2 text-base font-normal rounded-lg shadow-sm resize-none overflow-auto">
              <div>
                {translations.length > 0 ? (
                  <div>
                    {translations.map((translation, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: translation }}
                      />
                    ))}
                    {translationError && (
                      <p className="text-red-500">{translationError}</p>
                    )}
                  </div>
                ) : (
                  <div>
                    {
                      <span className="text-grey">
                        Select or highlight text from the love letter to see its
                        translation appear 👇 here 👇. You can learn the
                        vocabulary or email it to yourself for future review 🚀
                      </span>
                    }
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <button
                onClick={handleCopyNotes}
                className="w-full mt-2 bg-white/75 py-2 text-red-500 font-bold rounded shadow-sm transition duration-150 border border-2 hover:border-red-500"
              >
                Copy Translations
              </button>
              <button
                onClick={handleEmailTranslations}
                className="w-full mt-2 bg-white/75 py-2 text-red-500 font-bold rounded shadow-sm transition duration-150 border border-2 hover:border-red-500"
              >
                Email Translations
              </button>
            </div>
          </div>
        </div>


        </div>
        <div className="flex justify-center items-end fixed bottom-0 left-0 right-0 p-4">
  <button
    onClick={handleOpenAboutModal} // Make sure this function is defined to handle opening the About modal
    
    className="w-16 h-16 bg-white/80 text-red-500 font-bold rounded-full shadow-sm transition duration-150 border-2 border-red-500 hover:border-white mb-4"
  >
    <span className="spin-emoji block text-xl">❤️</span>
  </button>
</div>

      </div>
  );
}
