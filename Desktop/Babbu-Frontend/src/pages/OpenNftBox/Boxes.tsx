import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Image } from "../../Components/Images/Image"
import './boxes.css';
import Modal from './Modal';

const AppWrapper = styled.div`
height: 158px;
width: 829px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 16px;
background-color:${({ color }) => color};
object-fit: cover;
margin: 10px  20px;
padding: 0 20px
`;

const Wrapper = styled.div`
flex: 1;
`

export default function Boxes({ title, id, color, src }: { title: string, id: number, color: string, src: string }) {
    const [boxAmount, setboxAmount] = useState(0)
    const [boxOpenQuantity, setboxOpenQuantity] = useState(0)
    const [isLoading, setisLoading] = useState(false)
    const [isModalLoading, setisModalLoading] = useState(false)
    const [nftReceiveIdArray, setNftReceiveIdArray] = useState<number[]>([])
    const [errorText, setErrorText] = useState('')
    const [transactionHash, settransactionHash] = useState('')

    useEffect(() => {
        getBoxAmount(id)
    }, [])

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('chainChanged', (chainId: any) => {
                if (chainId === '0x61') {
                    getBoxAmount(id)
                } else {
                    setboxAmount(0);
                }
            })
        }
    }, [])

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', async (accounts: any) => {
                if (accounts) {
                    getBoxAmount(id)
                }
            })
        }
    }, [])

    const getBoxAmount = async (boxId: any) => {
        setisLoading(true)
        const accounts = await (window as any).ethereum.request({ method: "eth_accounts" });
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const signer = provider.getSigner();

        let contract = new ethers.Contract(import.meta.env.VITE_BABBU_NFT as string, import.meta.env.VITE_BABBU_NFT_ABI as string, signer);

        contract.blindBox(boxId, accounts[0])
            .then((res: any) => {
                setboxAmount(Number(res._hex))
                setisLoading(false)
                setboxOpenQuantity(0)
            })
            .catch((err: any) => {
                console.log(err)
                setisLoading(false)
            })
    }

    const handleBoxOpenQuantityChange = (e: any) => {
        setboxOpenQuantity(e.target.value)
    }

    const handleOpenBoxButton = async (type: number) => {
        if (boxAmount > 0) {
            setErrorText('')
            setisModalLoading(true)
            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const signer = provider.getSigner();
            let contract = new ethers.Contract(import.meta.env.VITE_BABBU_NFT as string, import.meta.env.VITE_BABBU_NFT_ABI as string, signer);
            let resultArray: any = []
    
            await contract.openBlindBoxAndAward(type, 1)
                .then(async (res: any) => {
                    console.log({ res })
                    const resWait = await res.wait()
                    settransactionHash(res.hash)
                    console.log({ resWait })
                    settransactionHash(resWait.transactionHash)
                    getBoxAmount(type)
                })
                .catch((err: any) => {
                    console.log(err)
                    setErrorText(err.message)
                    setisModalLoading(false)
                })
        } else {
            alert('Please buy some box first.')
        }
    }
    return (
        <div>
            <AppWrapper color={color}>
                <Wrapper>
                    <span >{title}</span>
                    <div>Amount:
                        {isLoading ? <span className="loader" id={'loading_' + id}></span> : <span id={'amount_box_' + id}> {boxAmount}</span>}
                    </div>
                </Wrapper>
                <Modal isModalLoading={isModalLoading} setisModalLoading={setisModalLoading} transactionHash={transactionHash} />
                <Wrapper>
                    <div className='errorText'>{errorText}</div>
                </Wrapper>
                <Image style={{ width: '135px', height: '123px', marginBottom: '10px' }} src={src} />
                <button style={{ color: 'black' }} onClick={() => { handleOpenBoxButton(id) }}>Open Box</button>
            </AppWrapper>
        </div>
    )
}
