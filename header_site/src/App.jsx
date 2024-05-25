import { useEffect, useState } from "react";
import Background from "./components/Background/Background.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Induge", text2: "your passions" },
    { text1: "Give in to", text2: "your world" },
  ];

  const [heroCount, setHerocount] = useState(0);
  const [playStatus, setPlaystatus] = useState(false);


  useEffect(()=>{
    setInterval(() => {
      setHerocount((count)=>{return count===2?0:count+1})
    }, 3000);
  }, [])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlaystatus={setPlaystatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHerocount={setHerocount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
