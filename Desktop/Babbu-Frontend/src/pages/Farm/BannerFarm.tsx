
import styled from "styled-components"
import { Image } from "../../Components/Images/Image";
import farmbanner from './img/Logo-Fram.png';
import './farm.css';

const Wrapper = styled.div`
    width: calc(100% - 15px);
    width: 814px;
    background: #FFE000;
	border-radius: 10px;
	height: 151px;
    position: relative;
    padding-left:20px;
    margin:5px 0 20px 15px;

    @media screen and (max-width: 768px) {
    background: #FFE000;
    width: 450px;
    height: auto;
    margin-left:5px;
    padding-left:0;
   
    }
    
`;

const Content = styled.div`
width:100%;
display: flex;
@media screen and (max-width:768px) {
display: block;
}
`;

const ContentLeft = styled.div`
flex: 2;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 15px;
@media screen and (max-width:768px){
    flex-direction:column;
    tex-align: center;
}
`;
const ContentRight = styled.div`
flex: 1;
margin-top: 20px;
`;

const Span = styled.span`
border: 1px solid #F6B200;
transform: rotate(90deg);
width: 58px;
margin-top: -25px; 
@media screen and (max-width:768px){
    transform: rotate(180deg);
    margin: 0;
    border: 1px solid #FAD551;
    width:93%;
}
`;

function Banner() {
    return (
        <>
            <Wrapper>
                <Content>
                    <ContentLeft>
                        <div className='banner-left'>
                            <span className="banner-money">$5,328,376</span>
                            <p className="banner-title">Total values in Farm Pool</p>
                        </div>
                        <Span></Span>
                        <div className='banner-right'>
                            <span className="banner-money" >$34,760,436</span>
                            <p className="banner-title"  >Total LP Locked</p>
                        </div>
                    </ContentLeft>
                    <ContentRight>
                        <Image className='farmbanner' src={farmbanner} />
                    </ContentRight>
                </Content>
            </Wrapper>
        </>
    )
}

export default Banner
