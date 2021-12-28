/* eslint-disable react/jsx-pascal-case */
import React from 'react'

import Babbu_Banker from '../../../images/Babbu_Banker.png'
import icon from '../../../images/icon.png';

import Babbu_Doctor from '../../../images/Babbu_Doctor.png'
import B_KOL from '../../../images/B-KOL.png'
import A_KOL from '../../../images/A-KOL.png'
import Aventurine from '../../../images/Aventurine.png'
import Jasper from '../../../images/Jasper.png'
import Yooshi_Friend_Card from '../../../images/Yooshi_Friend_Card.png'
import Shiba_Friend_Card from '../../../images/Shiba_Friend_Card.png'

// eslint-disable-next-line import/named
import {Wrapper , Filter , Content ,Img,P,Span,Context,Title,SpanBottom,SpanBottomPrice, TitleText,IconImg,SpanIcon,ContentDoctor,DoctorText,SpanBottomEnd,SpanDoctorPrice,ContentB_KOL, ContentA_KOL,ContentAventurine,ContentJasper } from './styled'

function Banker() {
    return (
        <Wrapper>
            
            <Filter>
            <Content>
                <Img src={Babbu_Banker} alt=''  />
                <P>Babbu Banker(#20410)</P>
                <Span>160X</Span>
                
            </Content>
                <Context>
                    <Title>
                        <SpanBottom >Live in:</SpanBottom>
                        <SpanBottomPrice>02h:40m:35s</SpanBottomPrice>
                    </Title>
                    <Title>
                        <SpanBottom>Start Price:</SpanBottom>
                        <SpanBottom style={{color:"#0FD545"}}>≈ $15,176</SpanBottom>
                    </Title>
                    <Title>
                        <TitleText>
                            <IconImg src={icon} alt=''/>
                            <SpanIcon>$BABU</SpanIcon>
                        </TitleText>
                        <SpanBottomPrice>66,500,000</SpanBottomPrice>
                    </Title>
                </Context>
                          
            </Filter>




            <Filter>
            <ContentDoctor >
                <Img src={Babbu_Doctor} alt=''  />
                <P>Babbu Doctor(#20410)</P>
                <DoctorText>200X</DoctorText>
                
            </ContentDoctor>
                <Context>
                    <Title>
                        <SpanBottomEnd >END</SpanBottomEnd>
                        <SpanDoctorPrice>00h:00m:00s</SpanDoctorPrice>
                    </Title>
                    <Title>
                        <SpanBottom>Last Bid:</SpanBottom>
                        <SpanBottom style={{color:"#0FD545"}}>≈ $5,176</SpanBottom>
                    </Title>
                    <Title>
                        <TitleText>
                            <IconImg src={icon} alt=''/>
                            <SpanIcon>$BABU</SpanIcon>
                        </TitleText>
                        <SpanBottomPrice>6,000,000</SpanBottomPrice>
                    </Title>
                </Context>
                          
            </Filter>

        <Filter>
            
            <ContentB_KOL>
                <Img src={B_KOL} alt=''  />
                <P>Bounty B-KOL (#20410)</P>
                <Span>200X</Span>
                
            </ContentB_KOL>
                <Context>
                    <Title>
                        <SpanBottom >Live in:</SpanBottom>
                        <SpanBottomPrice>00h:00m:00s</SpanBottomPrice>
                    </Title>
                    <Title>
                        <SpanBottom>Start Price:</SpanBottom>
                        <SpanBottom style={{color:"#0FD545"}}>≈ $5,176</SpanBottom>
                    </Title>
                    <Title>
                        <TitleText>
                            <IconImg src={icon} alt=''/>
                            <SpanIcon>$BABU</SpanIcon>
                        </TitleText>
                        <SpanBottomPrice>6,000,000</SpanBottomPrice>
                    </Title>
                </Context>
                          
            </Filter>

            <Filter>
            <ContentA_KOL>
                <Img src={A_KOL} alt=''  />
                <P>Bounty A-KOL (#20410)</P>
                <Span>120X</Span>
                
            </ContentA_KOL>
                <Context>
                    <Title>
                        <SpanBottomEnd >END</SpanBottomEnd>
                        <SpanBottomPrice>00h:00m:00s</SpanBottomPrice>
                    </Title>
                    <Title>
                        <SpanBottom>Last Bid:</SpanBottom>
                        <SpanBottom style={{color:"#0FD545"}}>≈ $5,176</SpanBottom>
                    </Title>
                    <Title>
                        <TitleText>
                            <IconImg src={icon} alt=''/>
                            <SpanIcon>$BABU</SpanIcon>
                        </TitleText>
                        <SpanBottomPrice>6,000,000</SpanBottomPrice>
                    </Title>
                </Context>
                         
            </Filter>

            <Filter>
            <ContentAventurine>
                <Img src={Aventurine} alt=''  />
                <P>Aventurine Stone (#410)</P>
                <Span>200X</Span>
                
            </ContentAventurine>
                <Context>
                    <Title>
                        <SpanBottom >Live in :</SpanBottom>
                        <SpanBottomPrice>00h:00m:00s</SpanBottomPrice>
                    </Title>
                    <Title>
                        <SpanBottom>Start Price:</SpanBottom>
                        <SpanBottom style={{color:"#0FD545"}}>≈ $5,176</SpanBottom>
                    </Title>
                    <Title>
                        <TitleText>
                            <IconImg src={icon} alt=''/>
                            <SpanIcon>$BABU</SpanIcon>
                        </TitleText>
                        <SpanBottomPrice>6,000,000</SpanBottomPrice>
                    </Title>
                </Context>
                          
            </Filter>

            <Filter>
            <ContentJasper>
                <Img src={Jasper} alt=''  />
                <P>Jasper Stone (#410)</P>
                <Span>20X</Span>
                
            </ContentJasper>
                <Context>
                    <Title>
                        <SpanBottom >Live in:</SpanBottom>
                        <SpanBottomPrice>00h:00m:00s</SpanBottomPrice>
                    </Title>
                    <Title>
                        <SpanBottom>Start Price:</SpanBottom>
                        <SpanBottom style={{color:"#0FD545"}}>≈ $5,176</SpanBottom>
                    </Title>
                    <Title>
                        <TitleText>
                            <IconImg src={icon} alt=''/>
                            <SpanIcon>$BABU</SpanIcon>
                        </TitleText>
                        <SpanBottomPrice>6,000,000</SpanBottomPrice>
                    </Title>
                </Context>
                          
            </Filter>


            <Filter>
            <ContentJasper>
                <Img src={Shiba_Friend_Card} alt=''  />
                <P>Shiba Friend Card (#19)</P>
                <Span>20X</Span>
                
            </ContentJasper>
                <Context>
                    <Title>
                        <SpanBottom >Live in:</SpanBottom>
                        <SpanBottomPrice>00h:00m:00s</SpanBottomPrice>
                    </Title>
                    <Title>
                        <SpanBottom>Start Price:</SpanBottom>
                        <SpanBottom style={{color:"#0FD545"}}>≈ $5,176</SpanBottom>
                    </Title>
                    <Title>
                        <TitleText>
                            <IconImg src={icon} alt=''/>
                            <SpanIcon>$BABU</SpanIcon>
                        </TitleText>
                        <SpanBottomPrice>6,000,000</SpanBottomPrice>
                    </Title>
                </Context>
                          
            </Filter>


            <Filter>
            <ContentJasper>
                <Img src={Yooshi_Friend_Card} alt=''  />
                <P>Yooshi Friends Card (#10)</P>
                <Span>20X</Span>
                
            </ContentJasper>
                <Context>
                    <Title>
                        <SpanBottom >Live in:</SpanBottom>
                        <SpanBottomPrice>00h:00m:00s</SpanBottomPrice>
                    </Title>
                    <Title>
                        <SpanBottom>Start Price:</SpanBottom>
                        <SpanBottom style={{color:"#0FD545"}}>≈ $5,176</SpanBottom>
                    </Title>
                    <Title>
                        <TitleText>
                            <IconImg src={icon} alt=''/>
                            <SpanIcon>$BABU</SpanIcon>
                        </TitleText>
                        <SpanBottomPrice>6,000,000</SpanBottomPrice>
                    </Title>
                </Context>
                          
            </Filter>
            
        </Wrapper> 
         )
}

export default Banker

