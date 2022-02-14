import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: rgba(255, 255, 255, 0);
	backdrop-filter: blur(8px);
	display: none;
	opacity: 0;
	z-index: 1;
`;


 function Backdrop() {
    return (
        <>
              <Wrapper className="backdrop" />
        </>
    )
}

export default Backdrop
