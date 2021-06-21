import React,{useState} from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 3%;
    cursor: pointer;
    z-index: 10;
    display: ${props=>props.showScroll ? 'flex' : 'none'};
    background-color: whitesmoke;
    height: 50px;
    width: 50px;
    display:flex ;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 8px;
    box-shadow: 5px 10px 8px #8888;
    &:hover{
        color: #874ef5;
    }
`

const ScrollToTop = () => {

    const [showScroll,setShowScroll]=useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 50){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 50){
          setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div>
            {showScroll && 
            <Wrapper showScroll={showScroll} onClick={scrollTop}>
                <i class="fas fa-solid fa-caret-up fa-2x"></i>
            </Wrapper>}
        </div>
    )
}

export default ScrollToTop
