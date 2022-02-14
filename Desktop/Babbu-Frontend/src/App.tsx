import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NFTMint from './pages/NFTMint/NFTMint';
// import BoxGame from './Components/BoxGames/BoxGame';
import NFTBox from "./pages/NFTBox/NFTBox";
import Home from "./pages/Home/Home";
import Market from "./pages/Market/Market";
import GameBases from "./pages/GameBases/GameBases";
import About from "./pages/About/About";
import GamePlay from "./pages/Gameplay/GamePlay";
import OpenNFTBox from "./pages/OpenNftBox/OpenNFTBox";
import BabbuFamilyNFT from "./pages/NFTMining/BabbuFamilyNFT/BabbuFamilyNFT";
import Farm from "./pages/Farm/Farm";
import MarketDetail from "./pages/Market/MarketDetail";
import Bounty from "./pages/Bounty/Bounty";
import Community from "./pages/Community/Community";
import Boxyour from "./pages/BoxYour/Boxyour";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/babbu-family-nft-mining" element={<BabbuFamilyNFT />} />
          <Route path="/gamebase" element={<GameBases />} />
          <Route path="/box" element={<NFTBox />} />
          <Route path="/open-nft-box" element={<OpenNFTBox />} />
          <Route path="/babbu-nft/nft-mint" element={<NFTMint />} />
          <Route path="/box-your" element={<Boxyour/>}/>  
          <Route path="/market-auction" element={<Market />} />
          <Route path="/market-auction/detail/:id" element={<MarketDetail />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/about" element={<About />} />
          <Route path="/gameplay" element={<GamePlay />} />
          <Route path="/bounty" element={<Bounty />} />
          <Route path="/community" element={<Community />} />
          
          {/* <Route path="/market" element={<Market />} />  */}
          {/* <Route exact strict path="/auctions" component={Auctions} /> */}
          {/* <Route exact strict path="/market" component={Market} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
