
import styled from 'styled-components'

export const Content = styled.div`
height: 225px;
width: 193px;
background-color: #FEE9E8;
border-top-right-radius:16px;
border-top-left-radius:16px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-shrink: 0;
position: relative;
`
 
export const Filter = styled.div`
height: 316px;
width: 193px;
border-radius: 16px;
background-color: #F7F7F7;
`;

export const Wrapper = styled.div`
font-family: 'Sen', sans-serif;
width: 100%;
padding: 0 14px;
font-family: "Sen", sans-serif;
display: grid;
grid-template-columns: repeat(auto-fill , minmax(193px , 1fr));
gap: 14px;
margin-top: 20px;
`;

export const Img = styled.img`
margin-top: 24.5px;
margin-bottom: 20px;
object-fit: cover;
flex-shrink: 0;
/* height: 118px;
width: 128px; */
`;

export const Span = styled.span`
color: #2D1B0E;
background: linear-gradient(225deg, #FFD702 35.42%, #FFAA00 100%);
border-radius: 16px;
font-weight: 700;
font-size: 14px;
line-height: 17px;
padding: 5px 5px;
text-align: center;
position: absolute;
top: 13px;
left: 13px;
  `;



export const P = styled.p`
font-size: 14px;
font-weight: 700;
line-height: 17px;
color: #47131A;
`;
export const SpanBottom = styled.span`
font-size: 12px;
line-height: 14.5px;
color: #2D1B0E;
font-weight: 400;

`;
export const Title = styled.div`
display: flex;
width: 193px;
justify-content: space-between;
 margin-top: 10px ;
 padding: 0 14px; 
`;  

export const TitleText = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
`;

export const Context = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const IconImg = styled.img`
position: absolute;
top: -10px;
left: 0;
object-fit: cover;
flex-shrink: 0;

`;

export const SpanIcon = styled.span`
color: #2D1B0E;
font-size: 14px;
font-weight: 700;
line-height: 17px;
margin-left: 25px;
`;

export const SpanBottomPrice = styled.span`
font-size: 14px;
line-height: 17.5px;
color: #2D1B0E;
font-weight: 700;
`;


export const DoctorText = styled.span`
color: #FFFFFF;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #2D1B0E;
border-radius: 16px;
padding: 5px 7px;
font-weight: 700;
font-size: 14px;
line-height: 17px;
text-align: center;
position: absolute;
top: 13px;
left: 13px;
`;


export const SpanBottomEnd = styled.span`
background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #2D1B0E;
border-radius: 16px;
color: #FFFFFF;
padding: 0px 10px;
font-size: 14px;

`;


export const SpanDoctorPrice = styled.span`
font-size: 14px;
line-height: 17.5px;
color: #CAB6A4;
font-weight: 700;
` ;


 export const ContentDoctor = styled.div`
height: 225px;
width: 193px;
background-color: #FDF1CC;
border-top-right-radius:16px;
border-top-left-radius:16px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-shrink: 0;
position: relative;
`;

export const ContentB_KOL = styled.div`
height: 225px;
width: 193px;
background-color: #F3EDDF;
border-top-right-radius:16px;
border-top-left-radius:16px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-shrink: 0;
position: relative;
`;

export const ContentA_KOL = styled.div`
height: 225px;
width: 193px;
background-color: #F0F8DB;
border-top-right-radius:16px;
border-top-left-radius:16px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-shrink: 0;
position: relative;
`;