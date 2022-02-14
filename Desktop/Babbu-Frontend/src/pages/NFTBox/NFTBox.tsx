import React, {useState} from "react";
import styled from "styled-components";
import Topbar from "../../Components/Topbar/Topbar"
import Menu from "../../Components/Menu/Menu"
import Backdrop from "../../Components/Backdrop/Backdrop"
import BoxGame from "../../Components/BoxGames/BoxGame";
import './nftBox.css';



function NFTBox() {
 
    return (
        <>
            <div className="container-xl">
            <Backdrop/>
            <Topbar />
            <div id="content">
            <div className="row g-0"> 
                        <Menu />
            <div className="col">
                <div id="mainContent">
                        <div id="gameness">
                            <BoxGame/>
                    <div>
                   
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

export default NFTBox
