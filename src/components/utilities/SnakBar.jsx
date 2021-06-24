import React,{useState} from 'react'
import styled  from 'styled-components'

const colors={
    danger:'#ff4444',
    success:'#00C851'
}

const Snack=styled.div`
    min-width: 200px;
    max-width: fit-content;
    height: 40px;
    border-radius: 12px;
    background-color: ${props=>props.color==="success" ? colors.success :colors.danger};
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2%;
    color: white;
    font-weight: bold;
    font-size: larger;
    position: relative;
    left: calc(85vw - 200px);
    z-index: 10;
    animation: animate 500ms ease-out;
    @keyframes animate{
        0%{transform:translateX(150%)}
        100%{transform:translateX(0%)}
    }
    @media(max-width:450px){
        margin: 4%;
        left: calc(65vw - 200px);
    }
`
const Cross=styled.p`
    transform:rotate(45deg);
    cursor: pointer;
    position: absolute;
    right: 0;
    margin: 8%;
    &:hover{
        opacity: 0.8;
    }
`
const SnakBar = ({message,color,show}) => {
    const [showSnackBar, setShowSnackBar] = useState(show)

    const handleClick=()=>{
        setShowSnackBar(false)
    }
    return (
       <div>
           {showSnackBar &&  
            <Snack color={color}>
                <p>{message}</p>
                <Cross onClick={handleClick}>+</Cross>
            </Snack>
            }
       </div>
    )
}

export default SnakBar


