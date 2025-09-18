import React, { useState } from "react";
import Confetti from "react-confetti";
import BirthdayMessage from "./components/BirthdayMessage";
import Slideshow from "./components/Slideshow";
import OpenButton from "./components/OpenButton";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100 flex items-center justify-center relative overflow-hidden">
      <Confetti recycle={true} numberOfPieces={200} gravity={0.2} />

      {!showMessage && !showSlideshow && (
        <OpenButton onOpen={() => setShowMessage(true)} />
      )}

      {showMessage && !showSlideshow && (
        <BirthdayMessage onNext={() => setShowSlideshow(true)} />
      )}

      {showSlideshow && <Slideshow />}
    </div>
  );
}

export default App;