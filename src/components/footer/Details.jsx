import React from 'react'
import styled from 'styled-components'

const Card=styled.div`
    width: 250px;
    height: 120px;
    background-color: ${props=>props.theme.box};
    color: ${props=>props.theme.color};
`
const Wrapper=styled.div`
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-start;
`
const Div=styled.div`
    height: 50px;
    width: 50px;
    border: 1px solid ${props=>props.theme.color};
    display: grid;
    place-items: center;
`
const Row=styled.div`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Detail=styled.div`
    color: ${props=>props.theme.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Details = () => {
    return (
        <Wrapper>
            <Card>
                <Row>
                    <Div>
                        <i className="fas fa-solid fa-phone"></i>
                    </Div>
                    <Detail>
                        <h2>Phone:</h2>
                        <p>+91 9121566274</p>
                    </Detail>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Div>
                        <i className="fas fa-solid fa-envelope"></i>
                    </Div>
                    <Detail>
                        <h2>Gmail:</h2>
                        <p>karthik392001</p>
                    </Detail>
                </Row>
            </Card>
            
        </Wrapper>
    )
}

export default Details
