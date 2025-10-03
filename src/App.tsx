import { useState } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
    document.body.style.overflow = "unset";
  };

  // Disable scroll during loading
  if (!showContent) {
    document.body.style.overflow = "hidden";
  }

  // Optional: Specify which videos to track
  //const criticalVideos: string[] = [];

  return (
    <>
      {/* Self-contained Loading Screen */}
      {!showContent && (
        <LoadingScreen
          onComplete={handleLoadingComplete}
          //videoSources={criticalVideos}
        />
      )}

      {/* Main Content */}
      {showContent && (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
          <NavBar />
          <Hero />
        </main>
      )}
    </>
  );
};

export default App;
