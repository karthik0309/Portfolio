import React,{useState} from 'react'
import TextInput from '../utilities/TextInput'
import styled from 'styled-components'
import Button from '../utilities/Button'
import SnackBar from '../utilities/SnakBar'

const Inputs=['Name','Email','Message']

const Wrapper=styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-start;
    
`
const Div =styled.div`
    height: 75vh;
    width: 50vw;
    min-width: 350px;
    background-color:${props=>props.theme.background};
    color: ${props=>props.theme.color};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Contact = () => {

    const [details,setDetails]=useState({
        Name:'',
        Email:'',
        Message:''
    })
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')

    const validateEmail=(email)=>{
        let regEx = /\S+@\S+\.\S+/;
        return regEx.test(email);
    }

    const handleDetails=(e)=>{
        const updatedDetail={...details}
        updatedDetail[e.target.id]=e.target.value
        setDetails(updatedDetail)
    }
    
    const handleSubmit=()=>{
        if( details.Name===''  ||
            details.Email==='' ||
            details.Message===''){
            setError('Enter all fields')
            return;
        }if(!validateEmail(details.Email)){
            setError('Enter valid email')
            return;
        }
        setSuccess('Email sent')
        setError('')
        setDetails({...details,Name:'',Email:'',Message:''})
        console.log("I came here")
        console.log(details)
    }
    return (
        <Div>
            <Wrapper>
                {error==='' ? null : <SnackBar message={error}/> }
                {success==='' ? null : <SnackBar message={success} color="success"/> }
                <h1>CONTACT ME</h1>
                {Inputs.map((ele)=>(
                    <TextInput 
                    label={ele} 
                    id={ele}
                    key={ele} 
                    onChange={e=>handleDetails(e)}
                    value={details[ele]}/>
                ))}
                <Button onClick={handleSubmit}>Submit</Button>
            </Wrapper>
        </Div>
    )
}

export default Contact
