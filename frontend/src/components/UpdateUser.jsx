import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const UpdateUser = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    useEffect(()=>{
        // fetch data from server using id
        axios.get(`http://localhost:3000/api/get-user/${id}`)
        .then((res)=>{
            const {name,email} = res.data.user;
            setName(name);
            setEmail(email);
        })
        .catch((err)=>{
            alert("Error in fetching data")
        })

    },[])

    const handleSubmit = (e)=>{
        // send data to server for update
        e.preventDefault();
        axios.put(`http://localhost:3000/api/update-user/${id}`,{
            name:name,
            email:email
        })
        .then((res)=>{
            navigate("/")
        })
        .catch((err)=>{
            alert("Error in updating data")
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
 
export default UpdateUser;
