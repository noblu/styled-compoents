import styled from "styled-components";

export const Image = (props: { [x: string]: any;  }) => {
  const {
    
    ...otherProps
  } = props;

  return (

    <img  {...otherProps} />
  );
}





export const Box = styled.div`
width: 180px;
heigh:210px;
background: ${({ color }) => color};
border-radius:16px;
display: flex;
align-items: center;
justify-content: center;
`;


export const Gird = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
gap: 1rem;
`

export const H2 = styled.h2`
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 29px;
color: #000000;
padding-top:5px;
`;

export const Button = styled.button`
color: #2D1B0E ;
border-radius: 8px;
border: none;
outlines:none;
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
text-align: center;
padding: 10px 25px;
background:#FFE000;
cursor:pointer;
&: hover {
  opacity: 0.7;
}
`;