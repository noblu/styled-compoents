import React, { useState } from 'react';
import Backdrop from '../../Components/Backdrop/Backdrop';
import Menu from '../../Components/Menu/Menu';
import Topbar from '../../Components/Topbar/Topbar';
import BlackMortarBoard from './img/black-mortarboard.svg';
import WhiteMortarBoard from './img/white-mortarboard.svg';
import Cat from './img/cat.svg';
import CKol from './img/C-KOL.svg';
import Vector from './img/vector.svg';
import './bounty.css'
import styled from 'styled-components';
import { Progress } from 'reactstrap';

const Tab = styled.button`
font-size: 16px;
line-height: 17px;
letter-spacing: -0.015em;
color: #98795C;
background: #f7f6f3;
font-weight: 400;
font-weight: bold;
width:100%;
${({
    // @ts-ignore  
    active
}) =>
        active &&
        `
        height: 34px;
        background: #FFE000;
        color: #2D1B0E;
        border-radius: 8px;
        font-weight: bold;
      `}
`;

function Bounty() {
    const babbuBounty = ["BABBU Routine Bounty", "BABBU SSR Bounty"]
    const tasks = [1, 1, 1, 1]
    const [active, setActive] = useState(babbuBounty[0]);

    return (
        <div className="container-xl">
            <Backdrop />
            <Topbar />
            <div id="content">
                <div className="row g-0">
                    <Menu />
                    <div className="col bounty">
                        <div id="mainContent">
                            <div className='yellow-background' style={{ marginBottom: '2.1rem' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="aligning banner">
                                            <div className='mb-1 title'>BABBU BOUNTY NFT</div>
                                            <div className='des'>For every contribution you make to the BABBU ecosystem, you can get BOUNTY NFT, and stake NFT to earn $BABBU.</div>
                                            <div className='tutorial aligning mt-2'><img src={WhiteMortarBoard} alt="mortarBoard" />&#160;Tutorial</div>
                                        </div>
                                        <div className="aligning cat-pic">
                                            <img src={Cat} alt="" id='bounty-cat' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='aligning mb-4'>
                                <div className='gray-div aligning'>
                                    {
                                        babbuBounty.map((bountyType, i) =>
                                            //@ts-ignore
                                            <Tab key={i} active={active === bountyType} onClick={() => setActive(bountyType)}>
                                                {bountyType}
                                            </Tab>
                                        )
                                    }
                                </div>
                            </div>

                            <div>
                                {
                                    tasks.map((task, i) => (
                                        <div className='task' key={i}>
                                            <div className='title'>
                                                Celebrate $BABBU becoming the BSC October MVB Monthly Star
                                            </div>
                                            <div className='description mt-2 nude-text'>
                                                Celebrate BABBU becoming the BSC October MVB Monthly Star, share 5000 BABBU Iron Bounty
                                            </div>
                                            <div className='time'>
                                                <span className='end-time aligning'>End time</span>
                                                <span>&#160;UTC+7 Dec 30, 19:00</span>
                                            </div>
                                            <div>
                                                <div className='aligning' style={{ justifyContent: 'space-between' }}>
                                                    <span className='nude-text'>Remaining share:</span>
                                                    <span> 4,395 / <span className='nude-text'>5,000</span></span>
                                                </div>
                                                <Progress className='progress mt-2' color="custom" value={75} />
                                            </div>
                                            <hr style={{ background: '#EBE8E2' }} />
                                            <div className='nude-text'>Mission Rewards:</div>
                                            <div className='mt-3 ml-1'>
                                                <img src={CKol} alt="" />
                                                <div className='ml-2' style={{ display: 'inline-block' }}>
                                                    <div className='reward-name'>BABBU Iron Bounty NFT</div>
                                                    <div className='aligning' style={{ justifyContent: 'flex-start' }}>
                                                        <div className='details mr-1'>Amount: 1</div>
                                                        <div className='details' style={{ background: '#FDF1CC', width: '96px' }}><img src={BlackMortarBoard} alt="" />&#160;Tutorial</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='submit-task aligning mt-3'>
                                                Submit Task
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='faq'>
                                <div>
                                    <div className='headline'>
                                        <img src={Vector} alt="" /> FAQ
                                    </div>
                                    <div>
                                        <div className='question'>1.  What is BABBU Bounty NFT?</div>
                                        <div className='answer'>In BABBU Tokenomic, 10% of each $BABBU transaction amount on the blockchain will be deducted and redistributed, 3% of it will be allocated to NFT Pool. We will set up a special “BABBU Bounty Pool”, after completing BABBU Bounty, the users can get NFT rewards with corresponding HashRate, and stake NFT in the “BABBU Bounty Pool” to earn $BABBU rewards.</div>
                                        <div className='question'>2. Bounty Type</div>
                                        <div className='answer'>BABBU Bounty NFT is divided into 2 types, including “BABBU Routine Bounty NFT” and “BABBU KOL Bounty NFT”.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bounty;
