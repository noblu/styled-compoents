
import styled from "styled-components"
import Topbar from "../../Components/Topbar/Topbar"
import Menu from "../../Components/Menu/Menu"
import Backdrop from "../../Components/Backdrop/Backdrop"
import { configBox } from "../../Components/Box/tagGame"
import Boxes from "./Boxes"

const BoxImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;

function OpenNFTBox() {
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
                                    <h4>Blind boxes</h4>
                                    <BoxImg>
                                        {
                                            configBox.map((box, i) => (
                                                <Boxes key={box.id} id={box.id} title={box.title} color={box.color} src={box.img} />
                                            )
                                            )
                                        }
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

export default OpenNFTBox