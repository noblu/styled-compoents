import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { babbuNftDataArraySelector } from '../../features/selectors';
import './myFamilyNftModal.css'
import Menu from "../../Components/Menu/Menu";
import Topbar from "../../Components/Topbar/Topbar";
import Backdrop from "../../Components/Backdrop/Backdrop";

const NftSquare = styled.div`
background-color: #F0F8DB;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid #F0F8DB;
border-radius: 15px;
flex: 0 0 25%;
max-width: 24%;
margin: 0 0.5rem 0.5rem 0;
cursor: pointer;
`;

export default function Boxyour() {
    const babbuNftDataArray = useSelector(babbuNftDataArraySelector)
    const [babbuFamilyNftArray, setbabbuFamilyNftArray] = useState<any[]>([]);
    const [isMarket, setIsMarket] = useState(0);
    useEffect(() => {
        setbabbuFamilyNftArray(babbuNftDataArray.filter(nft => nft.type === 0))
    }, [babbuNftDataArray])
    return (
    <>
      <div className="container-xl">
        <Backdrop />
        <Topbar />
        <div id="content">
          <div className="row g-0">
            <Menu />
            <div className="col">
              <div id="mainContent">
                <div id="marketAuctionPage">
                  <div className="container mb-3 my-nft">
                  
                  
                            <table>
                                <thead>
                                    <tr>
                                        <th className='name'>Name</th>
                                        <th className='id'>ID</th>
                                        <th className='hashRate'>Hashrate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        babbuFamilyNftArray.map((nft: any, i: any) => (
                                            <tr key={i}>
                                                <td>
                                                    <img src={nft.image} alt="" style={{ height: '30px' }} />
                                                    <span className='name' > {nft.title}</span>
                                                </td>
                                                <td className='id'>{nft._id < 10 ? '00' + nft._id : nft._id < 100 ? '0' + nft._id : nft._id}</td>
                                                <td className='hashRate'>{nft.hashRate}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>                           
                    <div>
                    </div>
                    </div>
                 </div> 
              </div>
            </div>
          </div>
        </div>
      </div>           
              
    </>     
    )            
}
