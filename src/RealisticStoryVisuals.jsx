import { useEffect, useState } from 'react';

const BURGER_IMAGES = [
  './images/story/burger/stage1.jpg',
  './images/story/burger/stage2.jpg',
  './images/story/burger/stage3.jpg',
  './images/story/burger/stage4.jpg',
  './images/story/burger/stage5.jpg',
];

const JUICE_IMAGES = [
  './images/story/juice/stage1.jpg',
  './images/story/juice/stage2.jpg',
  './images/story/juice/stage3.jpg',
  './images/story/juice/stage4.jpg',
  './images/story/juice/stage5.jpg',
];

export default function RealisticStoryVisuals() {
  const [burgerStep, setBurgerStep] = useState(0);
  const [juiceStep, setJuiceStep] = useState(0);

  // Smooth cyclic assembly loop for burger (left)
  useEffect(() => {
    const bTimer = setInterval(() => {
      setBurgerStep((prev) => (prev + 1) % BURGER_IMAGES.length);
    }, 1800);
    return () => clearInterval(bTimer);
  }, []);

  // Smooth cyclic flow loop for juice (right)
  useEffect(() => {
    const jTimer = setInterval(() => {
      setJuiceStep((prev) => (prev + 1) % JUICE_IMAGES.length);
    }, 1800);
    return () => clearInterval(jTimer);
  }, []);

  return (
    <div className="story-dual-visuals">
      {/* LEFT: Burger assembly showcase with realistic reference frames */}
      <div className="story-showcase-card">
        <div className="craft-stage-viewer">
          {BURGER_IMAGES.map((src, idx) => (
            <div
              key={src}
              className={`stage-frame ${idx === burgerStep ? 'active' : ''} ${
                idx < burgerStep ? 'passed' : ''
              }`}
            >
              <img
                src={src}
                alt="Burger assembly stage"
                className="stage-img"
              />
            </div>
          ))}
          <div className="craft-cinema-overlay" />
        </div>
      </div>

      {/* RIGHT: Juice preparation showcase with realistic reference frames */}
      <div className="story-showcase-card">
        <div className="craft-stage-viewer">
          {JUICE_IMAGES.map((src, idx) => (
            <div
              key={src}
              className={`stage-frame ${idx === juiceStep ? 'active' : ''} ${
                idx < juiceStep ? 'passed' : ''
              }`}
            >
              <img
                src={src}
                alt="Fruit juice preparation stage"
                className="stage-img"
              />
            </div>
          ))}
          <div className="craft-cinema-overlay" />
        </div>
      </div>
    </div>
  );
}
