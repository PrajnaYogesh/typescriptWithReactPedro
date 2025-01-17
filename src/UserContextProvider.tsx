import { createContext, useEffect, useState } from "react";

//1.a) set the type of data that you will pass
export interface User {
    name:string;
    age:number;
    isMarried : boolean;
}

//1.b) This will be what will be sent inside the context. This is the type of data returned by UserContext
interface UserContextType {
    users: User[] | null;
    addUser : (user : User) => void; //this determines the type of values returned by the context.
    updateUser : (id : string) => void;
    deleteUser : (id :string) => void;
}

//1.c) we are creating the initial values for createContext
const contextInitialValues = {
    users : null,
    addUser : ()=> null,
    updateUser : () => null,
    deleteUser : ()=> null,
}


//1. this is where we create the actual context which can be used somewhere else and can access the values or update value to function
export const UserContext = createContext<UserContextType>(contextInitialValues); //passing initial value (contextInitialValues) to UserContext of type UserContextType . We defined all of them above


//2.a interface for props type, we will do this in most of the code, we need to memorize it
interface Props{
    children : React.ReactNode;
}

//2. creating the provider
export const UserProvider = (props: Props) =>{
//2.b)  passing the states,function to all children can be defined here
const [users,setUsers]= useState<User[]|null>(null);

//2.3) you can do api fetch here
useEffect(()=>{
    setUsers([{name : "Prajwal", age:39,isMarried :true}]);
},[]);


// 3.a)
const addUser = (user :User)=>null;
const updateUser = (id :string)=>null;
const deleteUser = (id :string)=>null;

//3. passing state,function to children
    return <UserContext.Provider value ={{users, addUser,updateUser,deleteUser}}> 
    {props.children}
    </UserContext.Provider>
}