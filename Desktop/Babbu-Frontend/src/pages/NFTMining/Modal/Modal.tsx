import React, { useEffect, useRef, useState } from 'react'
import './modal.css'
import logo from "../../../Components/Menu/img/icon-logo.svg"
import { useSelector } from 'react-redux';
import { babbuBalanceSelector } from '../../../features/selectors';
import styled from 'styled-components';

const Tab = styled.button`
font-size: 14px;
line-height: 17px;
letter-spacing: -0.015em;
color: #47131A;
background: #f7f6f3;
font-weight: 400;
width:100%;
${({
    // @ts-ignore  
    active
}) =>
        active &&
        `
        height: 34px;
        background: #FFE000;
        border-radius: 8px;
        font-weight: bold;
      `}
`;

export default function Modal({ isModalOpen, setisModalOpen, isStake }: any) {
    // const [isStake, setisStake] = useState(true)
    const [packs, setpacks] = useState(["Pack 1", "Pack 2", "Pack 3", "Pack 4",])
    const modalRef = useRef<HTMLDivElement>(null)
    const babbuBalance = useSelector(babbuBalanceSelector)
    const [active, setActive] = useState(packs[0]);

    useEffect(() => {

    }, [])

    const closeModal = () => {
        if (null !== modalRef.current) {
            modalRef.current.style.display = "none";
            setisModalOpen(false)
        }
    }

    const openModal = () => {
        if (null !== modalRef.current) {
            modalRef.current.style.display = "block";
        }
    }

    const handleApproveButton = () => {
    }

    return (
        <div>
            {isModalOpen
                ?
                <div ref={modalRef} className="modal-babbu-family-nft" onClick={closeModal}>
                    <div className="modal-content-babbu-family-nft" onClick={e => {
                        e.stopPropagation();
                    }}>
                        <div>
                            <button className="close-button aligning" style={{ fontWeight: 'normal' }} onClick={closeModal}>&times;</button>
                        </div>
                        <div className='d-flex justify-content-center mb-3 ml-4'>
                            <div style={{ color: '#47131a', fontSize: '22px' }}> <span className={isStake ? 'font-weight-bold' : ''}>Babbu Stake</span> | <span className={!isStake ? 'font-weight-bold' : ''}>Buy</span></div>
                        </div>
                        <div className='gray-div aligning' style={{ height: '40px', justifyContent: 'space-evenly' }}>
                            {
                                packs.map((pack, i) =>
                                    //@ts-ignore
                                    <Tab key={i} active={active === pack} onClick={() => setActive(pack)}>
                                        {pack}
                                    </Tab>
                                )
                            }
                        </div>

                        <div className='gray-div aligning mt-4' style={{ height: '106px' }}>
                            <div>
                                <div className='bold-text aligning mb-1'><img src={logo} alt="" style={{ width: '3rem' }} /> 66,000,000</div>
                                <div className='green-text aligning' style={{ fontSize: '15px' }}>≈ $4,324</div>
                            </div>
                        </div>
                        <div className='d-flex mt-2' style={{ justifyContent: 'space-between', fontSize: '15px' }}>
                            <a href="#" className='buy-babbu green-text'>Buy $BABU</a>
                            <span className='brown-text'>Your Balance: {babbuBalance} $BABU</span>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button className='approve-babbu' onClick={handleApproveButton}>
                                <span>Approve BABU</span>
                            </button>
                        </div>
                        <div className='mt-3' style={{ textAlign: 'center', color: '#98795C', fontSize: '12px' }}>
                            {isStake ?
                                <div>
                                    If you cancel the stake within 180 days, a certain amount of service fee will be charged, 90% of which will go into the pool and 10% will be burned.
                                    Stake less than 7 days, 10% service fee will be charged; 7 to 14 days, 8%; 14 to 30 days, 6%; 30 to 90 days, 4%; 90 to 180 days, 2%; more than 180 days, free of charge.
                                </div>
                                :
                                <div>
                                    Current HashRate = NFT HashRare * Upgrade Multiplier.
                                </div>
                            }
                        </div>
                    </div>
                </div>
                :
                <></>}
        </div>
    )
}
