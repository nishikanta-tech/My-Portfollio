import axios from "axios";
import { useEffect,useState } from "react";

function ApiConnectivity() {

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/users")
        .then(res=>{
            console.log(res.data.users);
            setUsers(res.data.users);
        }).catch(err=>{
            console.error("Error fetching users:", err);
        })
    },[])
    return (
        <>
          <table style={{marginTop:80}} border={1} width={"100%"} cellPadding={6} cellSpacing={6} align={"center"}>
            <tr>
               <th>SI NO</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Role</th>

        </tr>
           
            {
                users.map((element, index) => {
                    return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{element.firstName}</td>
                        <td>{element.lastName}</td>
                        <td>{element.email}</td>
                        <td>{element.phone}</td>
                        <td>{element.gender}</td>
                        <td>{element.role}</td>

             </tr> 
                )
            })

        }
        
             </table>
        </>

                
    )

}
export default ApiConnectivity;