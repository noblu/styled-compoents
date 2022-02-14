
import styled from "styled-components"
import Topbar from "../../Components/Topbar/Topbar"
import Menu from "../../Components/Menu/Menu"
import Backdrop from "../../Components/Backdrop/Backdrop"
import Banner from "./BannerGameBase"
import Gamesyou from "../../Components/Gamesyou/Gamesyou"
import { ButtonClick } from "../../Components/Button/Button"
import { configOpenBox } from "../../Components/Box/tagGame"
import { Image } from "../../Components/Images/Image"

const Span = styled.span``;
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


const BoxImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;

const Wrapper = styled.div`
flex: 1;

`

function GameBases() {
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
                                <div id="gameness" className="ml-3">
                                    <Banner />
                                    <Gamesyou />
                                    <h4>Blind box</h4>
                                    <span>Use BNB/BABU to draw Babbu NFT, Friends Card, Crystal</span>
                                    <ButtonClick />
                                    <BoxImg>
                                        {
                                            configOpenBox.map((item, id) => (
                                                //@ts-ignore
                                                <AppWrapper key={item.id} color={item.color} onClick={() => ClickBox(id)}>
                                                    <Wrapper>
                                                        <p>Phase 1: Dec-16 12:00 PM +UTC</p>
                                                        <Span >{item.title}</Span>
                                                        <p>Start time:<span>DD : HH : MM : SS</span></p>
                                                    </Wrapper>

                                                    <Image style={{ width: '135px', height: '123px', marginBottom: '10px' }} src={item.img} />

                                                </AppWrapper>
                                            )
                                            )}
                                    </BoxImg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default GameBases
