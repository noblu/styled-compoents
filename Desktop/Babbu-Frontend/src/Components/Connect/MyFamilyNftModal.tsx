import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { babbuNftDataArraySelector } from '../../features/selectors';
import './myFamilyNftModal.css'

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

export default function Modal({ isModalOpen, setisModalOpen, addNftToMint }: any) {
    const modalRef = useRef<HTMLDivElement>(null)
    const babbuNftDataArray = useSelector(babbuNftDataArraySelector)
    const [babbuFamilyNftArray, setbabbuFamilyNftArray] = useState<any[]>([]);
    const [isMarket, setIsMarket] = useState(0);
    useEffect(() => {
        setbabbuFamilyNftArray(babbuNftDataArray.filter(nft => nft.type === 0))
    }, [babbuNftDataArray])

    const closeModal = () => {
        if (null !== modalRef.current) {
            modalRef.current.style.display = "none";
            setisModalOpen(false)
        }
    }

   

    return (
        <div>
            {isModalOpen
                ?
                <div ref={modalRef} className="modal-nft-list" onClick={() => {
                    // close modal when outside of modal is clicked
                    closeModal();
                }}>
                    <div className="modal-content-nft-list" onClick={e => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }}>
                        <div>
                            <div className="close-button aligning" onClick={closeModal} style={{ cursor: 'pointer', borderRadius: '4px' }}>&times;</div>
                        </div>
                        <div className='d-flex justify-content-center mb-3 ml-4'>
                            <h6 className='my-nft-title'>My NFT</h6>
                        </div>
                        {/* <div className='container'>
                            <div className="row aligning">
                                {babbuFamilyNftDataArray.map((nft, i) => (
                                    <NftSquare className="" key={i} onClick={() => addNftToMint(nft)}>
                                        <img src={nft.image} alt="" />
                                        <div className=''>{nft.title} (#{nft._id})</div>
                                    </NftSquare>
                                ))}
                            </div>
                        </div> */}
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
                                                    <span className='name' onClick={() => addNftToMint(nft)}> {nft.title}</span>
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
                :
                <></>}
        </div>
    )
}
