import { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";

interface Props {
    name:string;
    age:number;
    isMarried : boolean;
}

export const User = (props:Props)=>{

    //5. accessing the state and functions sent from provider inside components by first doing useContext
const {users,addUser,updateUser,deleteUser} = useContext(UserContext);


    // setting type of useState
    const [isShowInfo, setShowInfo] = useState<boolean | null>(false)
    const [personBio,setPersonBio] = useState<string | null>(null)


    const toggleInfo = ()=>{
        setShowInfo((prev)=> !prev);
    }

    //Input taken from user : setting type for value accessed using event 
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
setPersonBio(event.target.value)  
 }

 //submit event -> accessing the type of event on submit
 const handleSubmit = (event: React.FormEvent<HTMLFormElement> )=>{
event.preventDefault();
 } 


    return(
    <div>
        {isShowInfo && (
            <>
            <p> Name : {props.name}</p> 
    <p> Age : {props.age} </p>
    <p> This person  {props.isMarried ? "is married" : "is single"} </p>
            </>
        )}
        <p>{props.name} Bio : {!personBio ? "No Bio Available" : personBio}</p>
<input onChange={handleChange} />

         <button onClick={toggleInfo}>ToggleInfo</button>



    </div>
    )
}