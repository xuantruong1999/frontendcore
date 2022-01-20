import styled from 'styled-components';

const BackDropStyle =styled.div`
    position: fixed;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    animation: animation-show-backdrop-fadein 0.2s linear;
    @keyframes animation-show-backdrop-fadein {
        from {
            opacity: 0;
        } 
        to {
            opacity: 1;
        }
    }

    @media screen and (min-width: 993px){
        display: none;
    }
`;

const BackDrop = props => {
    
     return  <>
        <BackDropStyle onClick={props.handleClickHamburger}>
        </BackDropStyle>
     </>
     

}

export default BackDrop;