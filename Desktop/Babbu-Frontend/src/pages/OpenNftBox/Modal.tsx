import React, { useEffect, useRef, useState } from 'react'
import './modal.css'
import { Image } from '../../Components/Images/Image'
import Loader from './Loader'
import Firework from './Firework'

export default function Modal({ isModalLoading, setisModalLoading, transactionHash }: any) {
    const [nftArray, setNftArray] = useState<any[]>([])
    const [loading, setloading] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setloading(isModalLoading)
    }, [isModalLoading])

    useEffect(() => {
        if (transactionHash) {
            // console.log({ transactionHash }, 'Tx Hash Changed');
            fetchNftData()
        }
    }, [transactionHash])

    const openModal = () => {
        if (null !== modalRef.current) {
            modalRef.current.style.display = "block";
        }
    }

    const closeModal = () => {
        if (null !== modalRef.current) {
            modalRef.current.style.display = "none";
            setisModalLoading(false)
        }
    }

    const fetchNftData = async () => {
        let fetchedArray: any = []
        await fetch(`https://testnet-api.babbu.io/box/openBox?hash=${transactionHash}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                fetchedArray.push(data)
                setloading(false)
            })
            .catch(err => {
                console.log(err)
                setloading(false)
            })
        setNftArray(fetchedArray)
        openModal()
    }

    return (
        <div>
            {/* <button id="myBtn" onClick={openModal}>Open Modal</button> */}
            {loading ? <Loader /> : null}
            <div ref={modalRef} className="modal-open-box" onClick={() => {
                // close modal when outside of modal is clicked
                closeModal();
            }}>
                <Firework />
                <div className="modal-content-open-box" onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                }}>
                    <div>
                        <div className="close-button aligning" onClick={closeModal} style={{ cursor: 'pointer', borderRadius: '4px' }}>&times;</div>
                    </div>
                    <div className='d-flex justify-content-center mb-3 ml-4'>
                        <h6 className='hello-babbu'>Hello Babbu!!!</h6>
                    </div>
                    <div>
                        <div className="row">
                            {
                                nftArray.map((nft, i) => (
                                    <div key={i} className='aligning' style={{ flexDirection: 'column', width: '100%' }}>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                            <div className="d-flex justify-content-center mb-4">
                                                <img src={nft.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center mb-4 ml-2">
                                            <h6>You have obtained your {nft.title}. (#{nft._id})</h6>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className='save-your-wallet d-flex justify-content-center mr-4'>
                                <span className='mt-1' onClick={closeModal}>Save your wallet</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
