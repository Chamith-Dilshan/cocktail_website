import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';

const App = () => {
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
    document.body.style.overflow = 'unset';
  };

  // Disable scroll during loading
  if (!showContent) {
    document.body.style.overflow = 'hidden';
  }

  // Optional: Specify which videos to track
  const criticalVideos = [
    'videos/hero-1.mp4',
    'videos/hero-2.mp4',
    'videos/hero-3.mp4',
    'videos/hero-4.mp4',
  ];

  return (
    <>
      {/* Self-contained Loading Screen */}
      {!showContent && (
        <LoadingScreen
          onComplete={handleLoadingComplete}
          videoSources={criticalVideos}
        />
      )}

      {/* Main Content */}
      {showContent && (
        <main className='relative min-h-screen w-screen overflow-x-hidden'>
          <Hero />
        </main>
      )}
    </>
  )
}

export default App