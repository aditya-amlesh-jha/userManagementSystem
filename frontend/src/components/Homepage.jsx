import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../css/home.css"

const Homepage = () => {
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/")
        .then((res)=>{
            
            setUser(res.data.users)
        })
        .catch((err)=>{
            alert("Error in fetching data")
        })
    }, [])


    const handleDelete = (e,_id,index)=>{
        e.preventDefault();

        axios.delete(`http://localhost:3000/api/delete-user/${_id}`)
        .then((res)=>{
            // delete from local state
            const newUsers = user.filter((item,i)=>i!=index);
            setUser(newUsers);
        }) 
        .catch((err)=>{
            alert("Error in deleting data")
        })

    }

    useEffect(() => {
        axios
          .get(`http://localhost:3000/api/search?name=${search}`)
          .then((res) => {
            setUser(res.data.users);
          })
          .catch((err) => {
            console.log("Error in fetching data");
          });
      }, [search]);

    return (
        <>
            <div className="container mt-5 bg-white border border-primary">
                <div className="d-flex justify-content-between p-2 my-3 border border-secondary">
                    <div>
                        <Link to="/add-user" className="btn btn-primary">Add User</Link>
                    </div>
                    <div>
                        <input onChange={(e)=>{setSearch(e.target.value)}} className="form-control" type="text" placeholder="Enter name for searhing" />
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-responsive table-borderless">
                        <thead>
                            <tr className="bg-light">

                                <th scope="col" width="5%">#</th>
                                <th scope="col" width="20%">Email</th>
                                <th scope="col" width="20%">Name</th>
                                <th scope="col" width="10%">Update</th>
                                <th scope="col" className="text-end" width="10%"><span>Delete</span></th>
                            </tr>
                        </thead>
                        <tbody>

                            {user && user.length>0 &&
                                user.map((item, index) => (

                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">{item.email}</span></td>
                                            <td>{item.name}</td>
                                            <td><Link to={`/update-user/${item._id}`} className="btn btn-outline-primary"><span><i className="fa-solid fa-pen fa-2xs"></i></span></Link></td>
                                            <td className="text-end"><button onClick={(e)=>{handleDelete(e,item._id,index)}} className="btn btn-outline-danger"><span><i class="fa-solid fa-trash fa-2xs"></i></span></button></td>
                                        </tr>
                                ))

                            }
                            {   user &&
                                user.length==0 &&
                                <tr>
                                    <td colSpan="5" className="text-center">No data found</td>
                                </tr>
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Homepage;