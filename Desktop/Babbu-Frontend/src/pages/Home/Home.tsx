
import Menu from '../../Components/Menu/Menu';
import Topbar from '../../Components/Topbar/Topbar';
import Banner from '../../Components/Banner/Banner';
import Overview from '../../Components/Overview/Overview' ;
import './home.css';
import Gamesbase from '../../Components/Gamesbase/Gamesbase';
import Gamesyou from '../../Components/Gamesyou/Gamesyou';
import Community from '../../Components/Community/Community';
import Auction from '../../Components/Auction/Auction';
import Sale from '../../Components/Sale/Sale';
import Backdrop from '../../Components/Backdrop/Backdrop';


function Home() {
    return (
    <>
        <div className="container-xl">
            <Backdrop/>
            <Topbar/>
            <div id="content">
            <div className="row g-0">
                <Menu/>
             <div className="col">
                <div id="mainContent">
                <div id="homepage">
                    <Banner/>
                    <Overview/>
                    <Gamesbase/>
                    <Gamesyou/>
                    <Community/>
                    <Auction/>
                    <Sale/>
                  </div>
                  </div>
                </div>    
                </div>
            </div>
        </div>
                 
     </>    
       
   
    )
}

export default Home
