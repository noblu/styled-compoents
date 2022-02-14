import styled from 'styled-components';
import iconLayer from './img/icon-layer.svg'
import iconNext from './img/icon-next.svg'
import iconJasper from './img/Jasper.svg'
import iconBabbuBnb from './img/babbu-bnb.svg'
import iconBabbufarm from './img/Babu-farm.svg'
import './farm.css';
const Strong = styled.strong`
color:${({ color }) => color};
font-size: 14px;
@media screen and (max-width:768px){
    font-size: 13px;
}
`;

const Filter = styled.div`
background: linear-gradient(225deg, #FFD702 35.42%, #FFAA00 100%);
border-radius: 16px;
width: 111px;
height:18px;
display: flex;
align-items: center;
justify-content: center;

`
const Context = styled.div`
display: flex;
flex-direction: column;
margin-left:10px;
`
const Button = styled.button`
background: linear-gradient(225deg, ${({ w }) => w} 35.42%, ${({ h }) => h} 100%);
border-radius: 12px;
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #47131A;
width: 93px;
height: 36px;
`
const WrapperSpan = styled.div`
border: 1px solid #EBE8E2;
flex: none;
order: 1;
flex-grow: 0;
margin: 19px 19px;
width: 362px;
@media screen and (max-width:768px) {
    width: 98%;
    margin: 19px 2px;
  
}
`
const AllFilter = styled.div`
width:362px;
display: flex;
justify-content: space-between;
margin: 19px 19px;
@media screen and (max-with:768px) {
width: 362px;
}
`
const FilterMain = styled.div`
width: 362px;
height: 103px;
background: rgba(235, 232, 226,0.5);
border-radius: 16px;
display: flex;
justify-content: space-around;
align-items: center;
margin: 19px 19px;
`
const Span = styled.span`
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 29px;
letter-spacing: -0.015em;
color: #000000;
`

function Farmbabbu() {

    return (
        <div className='wrapper'>
            <div className="wrapper-babbu">
                <div className="wrapper-top">
                    <div className="wrapper-top-icon">
                        <img src={iconBabbufarm} />
                        <span className='wrapper-top-money'>403,260</span>
                    </div>
                    <span className='wrapper-pool'>Remaining in pool (BABU) ≈<Strong color='#0FD545'>$3,503,665</Strong></span>
                </div>
                <WrapperSpan></WrapperSpan>
                <div className="Wrapper-main">
                    <div className="babbu-bnb">
                        <img src={iconBabbuBnb} />
                        <Context>
                            <span className='babbu-busd'>$BABU/$BUSD</span>
                            <Filter>
                                <img src={iconLayer} />
                                <span className='stone-boost'>STONE BOOST</span>
                                <img src={iconNext} />
                            </Filter>
                        </Context>
                    </div>

                    <img src={iconJasper} />
                </div>
            </div>
            <FilterMain>
                <div className="babbu-farm-left">
                    <span className='babbu-money'> 484.97%</span>
                    <span className='babbu-title'>APR</span>
                </div>
                <div className="babbu-farm-right">
                    <span className='babbu-farm-title'>$BABU</span>
                    <span className='babbu-title'>Earn</span>
                </div>
            </FilterMain>
            <AllFilter>
                <div className="babbu-farm-bottom-right">
                    <span className='wrapper-pool'>Harvest (BABU)</span>
                    <Span className='wrapper-pool-money'> 8.22<Strong color=' #0FD545'> ≈ $71.34</Strong></Span>
                </div>
                <Button w='#FFD702' h='#FFAA00'>Harvest</Button>
            </AllFilter>
            <AllFilter>
                <div className="babbu-farm-bottom-right">
                    <span className='wrapper-pool'>Staked (BABU/BUSD) <Strong color='#F6B200'>Unstake</Strong></span>
                    <Span>2,845.41<Strong color=' #0FD545'> ≈ $18929.26</Strong></Span>
                </div>
                <Button w='#0FD545' h='#018E27'>Stake</Button>
            </AllFilter>



        </div>

    )
}

export default Farmbabbu;
