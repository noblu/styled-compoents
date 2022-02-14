import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './nftMint.css'
import Backdrop from '../../Components/Backdrop/Backdrop'
import Topbar from '../../Components/Topbar/Topbar'
import Menu from '../../Components/Menu/Menu'
import { Image } from '../../Components/Images/Image'
import babbuNftMint from './img/Babbu-Nft-Mint.png';
import BabbuAngel from './img/babbu-angel.svg'
import plusCircle from './img/Lock (Close).png'
import xMark from './img/X-Mark (Normal).png'
import { useDispatch, useSelector } from 'react-redux'
import { accountAddressSelector, nftMintSlotArraySelector } from '../../features/selectors'
import { addHashRateAndSuccessPercentageToNftSlotData, addNftToSlot, removeNftFromSlot } from '../../features/nftMintSlice'
import { pushNftToArray, removeNftFromArray } from '../../features/connectionSlice'
import Modal from './MyFamilyNftModal';
import { ethers } from 'ethers'

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
`;

const Rate = styled.div`
background: #FFD6E7;
width: 165px;
height: 27.9px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 16px;
font-weight: 800;
color: black;
`

const Probability = styled.div`
width: 362px;
height: 86px;
background: #FFFAD9;
border-radius: 16px;
display: flex;
justify-content: space-around;
align-items: center;
`

const Percentage = styled.div`
font-size: 24px;
font-weight: bold;
`

const Slot = styled.div`
width: 185px;
height: 225px;
background: #FAE1E0;
border-radius: 16px;
`

const Tab = styled.button`
font-size: 16px;
font-weight: 400;
color: #47131A;
background: #f7f6f3;
width:100%;
${({
    // @ts-ignore  
    active
}) =>
        active &&
        `
        font-size: 16px;
        height: 36px;
        background: #FFE000;
        border-radius: 8px;
        font-weight: bold;
      `}
`;

const MintingRule = styled.div`
background: #F7F7F7;
border-radius: 16px;
margin-top: 26px;
`

const AddToMint = styled.div`
cursor: pointer;
`

const CloseButton = styled.img`
align-self: flex-end;
margin-right: 0.8rem;
cursor: pointer;
`

const BabbuTitle = styled.div`
font-size: 13px;
font-weight: bold;
color: #583A1E;
`

function NFTMint() {
    const dispatch = useDispatch()
    const typeAngel = ["Babbu Angel", "Friends Card", "Bounty Card"]
    const [active, setActive] = useState(typeAngel[0]);
    const [isModalOpen, setisModalOpen] = useState(false);
    const [probability, setprobability] = useState(0);

    const slotArray = useSelector(nftMintSlotArraySelector)
    const accountAddress = useSelector(accountAddressSelector)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const nftContract = new ethers.Contract(import.meta.env.VITE_BABBU_NFT as string, import.meta.env.VITE_BABBU_NFT_ABI as string, signer);
    const stakePoolContract = new ethers.Contract(import.meta.env.VITE_BABBU_STAKE_POOL_ADDRESS as string, import.meta.env.VITE_BABBU_STAKE_POOL_ABI as string, signer);

    useEffect(() => {
        getStakedTokenIds()
    }, [accountAddress])

    useEffect(() => {
        getProbability()
    }, [slotArray])

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', async (accounts: any) => {
                window.location.reload();
            })
        }
    }, [])

    const addNftToMint = async (data: any) => {
        // check approved or not
        await nftContract.getApproved(data._id)
            .then(async (res: any) => {
                console.log(res, 'approved to this address')
                // if not yet approved:
                if (res !== import.meta.env.VITE_BABBU_STAKE_POOL_ADDRESS) {
                    await nftContract.approve(import.meta.env.VITE_BABBU_STAKE_POOL_ADDRESS as string, data._id)
                        .then(async (res: any) => {
                            await res.wait()
                            console.log(res, 'success')
                            stakeNftToNft(data)
                        })
                        .catch((err: any) => console.log(err))
                } else {
                    stakeNftToNft(data)
                }
            })
            .catch((err: any) => console.log(err))
    }

    const stakeNftToNft = (data: any) => {
        stakePoolContract.stakeNftToNft(data._id)
            .then(async (res: any) => {
                await res.wait()
                dispatch(addNftToSlot(data))
                // remove NFT from store
                dispatch(removeNftFromArray(data))
            })
            .catch((err: any) => console.log(err))
    }

    const getDate = async (nftId: number) => {
        let date = new Date
        await stakePoolContract.getStakedReleaseAt(accountAddress, nftId)
            .then((res: any) => {
                const millisecond = Number(res) * 1000
                date = new Date(millisecond)
            })
            .catch((err: any) => console.log(err, 'err'))
        return date
    }

    const unmintNft = async (data: any, index: number) => {
        const releaseDate = await getDate(data._id)
        const now = new Date
        // Check if nft is able to unstake/unmint or not:
        if (now.getTime() < releaseDate.getTime()) {
            alert(`You cannot unstake at the momment.\nYour nft release time is:\n${releaseDate}`)
        } else {
            dispatch(removeNftFromSlot(index))
            dispatch(pushNftToArray(data))
        }
    }

    const openModal = () => {
        setisModalOpen(true)
    }

    const getRewardRatePercentage = async (nftHashRate: number) => {
        let MAX_HASHRATE = 0
        let totalHashrate = 0
        let totalMinted = 0
        let averageHashrate = 0
        await stakePoolContract.MAX_HASHRATE()
            .then((res: any) => {
                MAX_HASHRATE = Number(res)
                // console.log(MAX_HASHRATE, 'MAX_HASHRATE 1')
            })
            .catch((err: any) => console.log(err))
        await nftContract.totalHashrate()
            .then((res: any) => {
                totalHashrate = Number(res)
                // console.log(totalHashrate, 'totalHashrate 2')
            })
            .catch((err: any) => console.log(err))
        await nftContract.totalMinted()
            .then((res: any) => {
                totalMinted = Number(res)
                // console.log(totalMinted, 'totalMinted 3')
            })
            .catch((err: any) => console.log(err))
        averageHashrate = totalHashrate / totalMinted
        const singleNftRewardRate = (MAX_HASHRATE / 2) + (nftHashRate - averageHashrate)
        const nftSuccessPercentage = singleNftRewardRate / MAX_HASHRATE * 100
        return nftSuccessPercentage
    }

    const getStakedTokenIds = async () => {
        let array: number[] = []
        if (accountAddress) {
            await stakePoolContract.getStakedTokenIds(accountAddress)
                .then((res: any) => {
                    res.forEach(async (e: any) => {
                        const id = Number(e)
                        let percentage = 0
                        array.push(id)
                        const hashRate = Number(await nftContract.getHashrate(id))
                        percentage = await getRewardRatePercentage(hashRate)
                        const arr = [id, hashRate, percentage]
                        dispatch(addHashRateAndSuccessPercentageToNftSlotData(arr))
                    });
                })
                .catch((err: any) => console.log(err))
            getNftData(array)
        }
    }

    const getProbability = () => {
        let divideBy = 5
        let stakedNftAmount = 0
        let sum = 0
        slotArray.map((stakedNft: any) => {
            if (stakedNft) {
                divideBy -= 1
                stakedNftAmount += 1
                sum += stakedNft.successPercentage
            }
        })
        if (stakedNftAmount && sum) {
            setprobability((sum / stakedNftAmount) / divideBy)
        }
    }

    const getNftData = async (nftIdArray: any) => {
        const idArrayToStringed = '[' + nftIdArray.toString() + ']'
        await fetch(`https://testnet-api.babbu.io/nft?ids=${idArrayToStringed}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.data);
                data.data.forEach((e: any) => {
                    dispatch(addNftToSlot(e))
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const mintNft = () => {
        stakePoolContract.receiveNftStakeReward(accountAddress)
            .then((res: any) => {
                console.log(res)
            })
            .catch((err: any) => {
                alert(err.data.message)
            })
    }

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
                                <div className='ml-1'>
                                    <Modal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} addNftToMint={addNftToMint} />
                                    <Wrapper >
                                        <Image src={babbuNftMint} />
                                    </Wrapper>
                                    <div className='aligning'>
                                        <div className='gray-div aligning' style={{ height: '44px', justifyContent: 'space-evenly', width: '469px' }}>
                                            {
                                                typeAngel.map((type, i) =>
                                                    //@ts-ignore
                                                    <Tab key={i} active={active === type} onClick={() => setActive(type)}>
                                                        {type}
                                                    </Tab>
                                                )
                                            }
                                        </div>
                                    </div>
                                    {/* NFT MINT */}
                                    <div className="nft-mint mt-4">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6 left-column mt-3">
                                                    <div className='babbu-angel-pink-background'>
                                                        <div className='aligning'>
                                                            <img src={BabbuAngel} alt="" style={{ height: '90%', width: '90%' }} />
                                                        </div>
                                                        <div className='aligning' style={{ justifyContent: 'space-evenly' }}>
                                                            <Rate>Total supply: 1,000</Rate>
                                                            <Rate>Minting Hashrate: 600</Rate>
                                                        </div>
                                                    </div>
                                                    <div className='under-babbu-angel mt-2 mb-2' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '90px' }}>
                                                        <div style={{ fontSize: '18px', color: 'black' }}><b>Babbu Angel</b> Limited Edition</div>
                                                        <div className='brown-text' style={{ fontSize: '12px' }}>The Limited Edition Babbu Angel NFT with 600 hashrate is now online, come and mint it. <a href="#" className='buy-babbu green-text'>More info</a> </div>
                                                    </div>
                                                    <Probability>
                                                        <div>
                                                            <div className='black-text' style={{ fontSize: '12px' }}>Probability</div>
                                                            <Percentage className='green-text'>{Math.round(probability * 100) / 100}%</Percentage>
                                                        </div>
                                                        <div>
                                                            <div style={{ fontSize: '12px' }}>Remaining Amount:</div>
                                                            <Percentage style={{ color: '#F6B200' }}>0/1000</Percentage>
                                                        </div>
                                                    </Probability>
                                                </div>
                                                <div className="col-6 right-column mt-3">
                                                    <div className="row aligning" style={{ justifyContent: 'space-evenly' }}>
                                                        {slotArray.map((data: any, index: any) =>
                                                            data
                                                                ?
                                                                <Slot className='mb-3 aligning' style={{ flexDirection: 'column', justifyContent: 'space-around' }} key={index}>
                                                                    <CloseButton src={xMark} alt="closeButton" onClick={() => unmintNft(data, index)} />
                                                                    <img src={data.image} alt={data.title} style={{ width: 'auto', height: '113.57px' }} />
                                                                    <BabbuTitle >{data.title} (#{data._id})</BabbuTitle>
                                                                </Slot>
                                                                :
                                                                <Slot className='mb-3 aligning' style={{ flexDirection: 'column' }} key={index}>
                                                                    <AddToMint onClick={openModal}>
                                                                        <img src={plusCircle} alt="" />
                                                                    </AddToMint>
                                                                    <BabbuTitle className='mt-2' style={{ fontSize: '14px' }}>Please select NFT</BabbuTitle>
                                                                </Slot>
                                                        )}
                                                    </div>
                                                    <div className='mint-quota aligning' onClick={() => mintNft()}>
                                                        Mint Nft
                                                    </div>
                                                    <div className='aligning brown-text' style={{ marginTop: '0.8rem', fontSize: '12px' }}>
                                                        Need to pay:&#160;<b className='green-text'>150,000,000</b>&#160;BABU
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* NFT MINT */}

                                    {/* MINTING DETAILS */}
                                    <div className='mt-3' style={{ fontSize: '28px' }}>Minting Details</div>
                                    <table className='mt-2' id='minting-details'>
                                        <thead>
                                            <tr>
                                                <th>NFT</th>
                                                <th>Hashrate</th>
                                                <th>%Success</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                slotArray.map((nft: any, i: number) => (
                                                    nft ?
                                                        <tr key={i}>
                                                            <td><img src={nft.image} alt="" /> <span>{nft.title}</span></td>
                                                            <td>{nft.hashRate}</td>
                                                            <td>{Math.round(nft.successPercentage * 100) / 100}%</td>
                                                        </tr>
                                                        : null
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    {/* MINTING DETAILS */}

                                    {/* MINTING RULES */}
                                    <MintingRule>
                                        <div style={{ padding: '23px 62px 10px 30px', lineHeight: '21.66px' }}>
                                            <h6>Minting Rules</h6>
                                            <ol>
                                                <li>The Minting event of Babbu Angel NFT with 600 HashRate is online. You can cast Babbu Angel NFT with 4 Babbu Family NFTs;</li>
                                                <li>Minting may succeed or fail. Adding NFT to the Mint Pool can increase the success rate of casting, and different types of NFTs increase the success rate of casting differently: Farmer 6%，Chef 8%，Doctor 12%，Banker 24%;</li>
                                                <li>Example: Fill the minting pool with 4 Miner NFTs, then the minting success probability at this time is: 7% * 4 = 28%;</li>
                                                <li>If the minting is successful, the user will get Angel NFT, and all NFTs in the minting pool will be destroyed;</li>
                                                <li>If the minting fails, a random NFT in the minting pool will be burned</li>
                                            </ol>
                                        </div>
                                    </MintingRule>
                                    {/* MINTING RULES */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NFTMint
