import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Web3 from 'web3';
import logo from "../../images/Logo.png";
import Group from '../../images/Group.png'
import iconRight from '../../images/iconRight.png'

const Wrapper = styled.div`
 margin: 0;
 width: 428px;
 height: 78px;
 font-family: "Sen", sans-serif;
  `;

 const ContentRight = styled.div`
 display: flex;
 align-items: center;
 `;

 const ContentLeft = styled.div`
 display: flex;
 align-items: center;
 `;

 const Content = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 `;

 const Logo = styled.img`
 margin-bottom: 7px;
 object-fit: cover;
 `;

 const ImgLeft = styled.img`
 margin: 0 14px;
 object-fit: cover;
 `;
 const ImgRight = styled.img`
 margin: 18px 14px 18px 17px;
 object-fit: cover;
 `;

const Button = styled.button`
border-radius: 6px;
background-color: #FFE000;
color: #47131A;
font-size: 13px;
line-height: 16px;
padding: 7px 7px;
border: none;
outline: none;
`
const HeaderBabbu = () => {
     const [address, setAddress] = useState<any>('')
     const web3 = new Web3(Web3.givenProvider);

     useEffect(() => {
    // @ts-ignore
    window.ethereum.on('accountsChanged', async (accounts) => {
      if (accounts.length > 0){
        setAddress(accounts[0]);
      }
    });
  }, []);

    return (
        <Wrapper>
         <Content>
                <ContentLeft>
                    <ImgLeft src= {Group} alt='' />
                        <Logo src={logo} alt=""/>   
                </ContentLeft> 
                <ContentRight>
                <Button
                          onClick={() => {
                            if (window.ethereum) {
                              try {
                                // @ts-ignore
                                window.ethereum.enable().then(async () => {
                                  // eslint-disable-next-line @typescript-eslint/no-shadow
                                  const address = await web3.eth.getAccounts();
                                        setAddress(address[0]);
                                })
                              } catch (e) {
                                console.log(e)
                              }
                            }
                          }}
                  >
                    {address.length > 0 ? `${address.slice(0, 4)  }...${ address.slice(address.length - 4, address.length)}` : "Connect Wallet"}
                </Button>
                <ImgRight src={iconRight} alt='' />
                </ContentRight>  
          </Content>       
         </Wrapper>  
    )
}

export default HeaderBabbu
