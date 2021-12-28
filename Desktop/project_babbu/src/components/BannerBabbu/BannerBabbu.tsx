import React from 'react'
import BannerTop from '../../images/banner.png';
import { Wrapper, Img, Content, Span} from './styled';

function Banner() {
    return (
        <Wrapper>
            <Img src={BannerTop} alt=''  />
            <Content>
                <Span style={{backgroundColor: "#F6B200"}}/>
                <Span style={{backgroundColor: "#CAB6A4"}}/>
                <Span style={{backgroundColor: "#CAB6A4"}}/>
                <Span style={{backgroundColor: "#CAB6A4"}}/>
            </Content>
            
        </Wrapper>
    )
}

export default Banner
