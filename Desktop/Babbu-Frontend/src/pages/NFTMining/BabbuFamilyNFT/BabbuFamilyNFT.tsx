import React, { useState } from "react";
import Topbar from "../../../Components/Topbar/Topbar"
import Menu from "../../../Components/Menu/Menu"
import Backdrop from "../../../Components/Backdrop/Backdrop"
import logo from "../../../Components/Menu/img/icon-logo.svg"
import './babbuFamilyNFT.css'
import { Image } from '../../../Components/Images/Image';
import banker from '../../../Components/Auction/img/nft-babbu-banker.png'
import plusCircle from './img/plus-circle.svg'
import lockIcon from './img/lock-icon.svg'
import Modal from '../Modal/Modal'

function BabbuFamilyNFT() {
    const [unlockSlot, setunlockSlot] = useState([1, 2, 3, 4, 5, 6])
    const [isModalOpen, setisModalOpen] = useState(false)
    const [unlockIndex, setunlockIndex] = useState(0);
    const [isStake, setisStake] = useState(false)

    const handleStakeNft = () => {
        setisStake(true)
        setisModalOpen(true)
    }

    const handleUpgradeNft = () => {
        setisStake(false)
        setisModalOpen(true)
        // setunlockIndex(index)
    }

    return (
        <>
            <div className="container-xl">
                <Backdrop />
                <Topbar />
                <div id="content">
                    <div className="row g-0">
                        <Menu />
                        <Modal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} isStake={isStake}/>
                        <div className="col">
                            <div id="mainContent1">
                                {/* YELLOW */}
                                <div className="yellow-background">
                                    <div className="total-mining-pool">
                                        <div className="col-6 aligning" style={{ height: '151px' }}>
                                            <div>
                                                <div>
                                                    <span className="brown-text">Total Mining Pool ($BABU)</span> = $19,116,212
                                                </div>
                                                <div className="bold-text brown-text">
                                                    26,732,853,647
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6"></div>
                                    </div>
                                </div>
                                {/* YELLOW */}

                                {/* POOL INFO */}
                                <div className="pool-info">
                                    <div className="container">
                                        <div className="aligning">
                                            <div>
                                                <div className="brown-text aligning mt-4">BABBU NFT MINING POOL</div>
                                                <div className="bold-text aligning"><img src={logo} alt="" style={{ width: '3rem' }} /> 8,561,317,352</div>
                                                <div className="aligning mt-1 mb-3"><span style={{ color: '#98795C' }}>Remaining prize pool</span> <span className="green-text">&#160;≈ $18,801,674</span></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="left-col">
                                                    <div className="s-title">Total Staked Amount</div>
                                                    <div className="med-weight-text">3,171,950</div>
                                                </div>
                                                <div className="left-col">
                                                    <div className="s-title">Total Staked Hashrate</div>
                                                    <div className="med-weight-text">9,648</div>
                                                </div>
                                                <div className="left-col">
                                                    <div className="s-title">1000 Mining HashRate/24H to get</div>
                                                    <div className="d-flex align-items-center">
                                                        <img src={logo} alt="" style={{ width: '1.5rem' }} /> <span className="med-weight-text">23,410,901</span><span className="green-text">&#160;≈ $49.04</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="right-col">
                                                    <div className="s-title">My Staked Amount</div>
                                                    <div className="med-weight-text">1</div>
                                                </div>
                                                <div className="right-col">
                                                    <div className="s-title">My Mining HashRate</div>
                                                    <div className="med-weight-text">8,586</div>
                                                </div>
                                                <div className="right-col">
                                                    <div className="s-title">$BABU</div>
                                                    <div className="harvest-babbu-mining">
                                                        <div className="d-flex align-items-center">
                                                            <img src={logo} alt="" style={{ width: '1.5rem' }} /> <span className="med-weight-text">4,395</span><span className="green-text">&#160;≈ $102</span>
                                                        </div>
                                                        <button className="harvest-button mr-4">Harvest</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* POOL INFO */}

                                {/* NFT MINING */}
                                <div className="nft-mining mb-3">
                                    <div className="listNft">
                                        <div className="row">
                                            {/* FROM HERE */}
                                            <div className="col-xl-3 col-lg-4 col-6">
                                                <div className="item">
                                                    <div className="top bg-soft-pink">
                                                        <span className="percent badge md rounded bg-yellow-grad">100x</span>
                                                        <Image style={{ marginBottom: '20px' }} src={banker} alt="" />
                                                    </div>
                                                    <div className="bottom">
                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                            <div style={{ fontSize: '14px', lineHeight: '17px', fontWeight: 'bold' }}>Babbu Banker (#666)</div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div style={{ fontSize: '12px', lineHeight: '14px' }}>Position HashRate:</div>
                                                            <div className="fw-bold" style={{ fontSize: '14px', lineHeight: '17px', fontWeight: 'bold' }}>200</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="buttons aligning">
                                                    <button className="unstake-button aligning">Unstake</button>
                                                    <button className="upgrade-button aligning" onClick={() => handleUpgradeNft()}>Upgrade</button>
                                                </div>
                                            </div>
                                            {/* TO HERE */}

                                            {/* FROM HERE */}
                                            <div className="col-xl-3 col-lg-4 col-6">
                                                <div className="item" >
                                                    <div className="top bg-soft-green" style={{ cursor: 'pointer' }} onClick={handleStakeNft}>
                                                        <Image style={{ marginBottom: '13.24px' }} src={plusCircle} alt="" />
                                                        <div style={{ marginBottom: '37.86px' }}>ADD NFT</div>
                                                    </div>
                                                    <div className="bottom" style={{ paddingTop: '27px', paddingBottom: '27px' }}>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div style={{ fontSize: '12px', lineHeight: '14px' }}>Position HashRate:</div>
                                                            <div className="fw-bold" style={{ fontSize: '14px', lineHeight: '17px', fontWeight: 'bold' }}>0</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="buttons aligning">
                                                    <div className="unstake-button aligning" onClick={handleStakeNft}>Stake</div>
                                                    <button className="upgrade-button" onClick={() => handleUpgradeNft()}>Upgrade</button>
                                                </div>
                                            </div>
                                            {/* TO HERE */}

                                            {/* FROM HERE */}
                                            {
                                                unlockSlot.map((e, i) =>
                                                    <div className="col-xl-3 col-lg-4 col-6" key={i}>
                                                        <div className="item">
                                                            <div className="top bg-purple" style={{ cursor: 'pointer' }}>
                                                                <Image style={{ marginBottom: '13.24px' }} src={lockIcon} alt="" />
                                                                <div style={{ marginBottom: '17px' }}> <div>UNLOCK</div> ADD CRYSTAL STONE</div>
                                                            </div>
                                                            <div className="bottom" style={{ paddingTop: '27px', paddingBottom: '27px' }}>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <div style={{ fontSize: '12px', lineHeight: '14px' }}>Position HashRate:</div>
                                                                    <div className="fw-bold" style={{ fontSize: '14px', lineHeight: '17px', fontWeight: 'bold' }}>0</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="buttons aligning">
                                                            <button className="unlock-position-button aligning bg-purple">Unlock Position</button>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            {/* TO HERE */}
                                        </div>
                                    </div>
                                </div>
                                {/* NFT MINING */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BabbuFamilyNFT
