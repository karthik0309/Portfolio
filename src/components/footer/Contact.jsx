import React,{useState} from 'react'
import TextInput from '../utilities/TextInput'
import styled from 'styled-components'
import SnackBar from '../utilities/SnakBar'
import emailjs from 'emailjs-com';

const Inputs=['name','email','message']

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
const Form=styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 60vh;
`

const InputSubmit=styled.input`
    border: none;
    background: transparent;
    outline: none;
    height: 40px;
    border: 2px solid #874ef5;
    width: 180px;
    color: #874ef5;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background: #874ef5;
        color: white;
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
`
const Contact = () => {

    const [details,setDetails]=useState({
        name:'',
        email:'',
        message:''
    })
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')


    const handleDetails=(e)=>{
        const updatedDetail={...details}
        updatedDetail[e.target.id]=e.target.value
        setDetails(updatedDetail)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSuccess('')
        setError('')
        if( details.name===''  ||
            details.email==='' ||
            details.message===''){
            setError('Enter all fields')
            return;
        }

        console.log(details)
        

        emailjs.send("service_3dky5b9","template_318o2sr",{
            subject: details.email,
            from_name: details.name,
            message_html: details.message,
        },
        'user_qN12zWEADv1B0QIq55QDf');
        
        setSuccess('Email sent')
        setError('')
        setDetails({...details,name:'',email:'',message:''})
    }
    return (
        <Div>
            <Wrapper>
                {error==='' ? null : <SnackBar message={error} show={true}/> }
                {success==='' ? null : <SnackBar message={success} color="success" show={true}/> }
                <h1>CONTACT ME</h1>
                <Form onSubmit={e=>handleSubmit(e)}>
                {Inputs.map((ele)=>(
                    <TextInput 
                    label={ele} 
                    id={ele}
                    key={ele} 
                    onChange={e=>handleDetails(e)}
                    value={details[ele]}
                    name={ele}/>
                ))}
                <InputSubmit type="submit" onClick={handleSubmit} value="Submit"></InputSubmit>
                </Form>
            </Wrapper>
        </Div>
    )
}

export default Contact
