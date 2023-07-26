import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const AddUser = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = {
            name:name,
            email:email
        }
        
        axios.post("http://localhost:3000/api/add-user",formData)
        .then((res)=>{
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
            <Form 
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
                handleSubmit={handleSubmit}
            />
        </>
    );
}
 
export default AddUser;