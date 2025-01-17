
import './App.css'
import { User } from './Person'
import { UserProvider } from './UserContextProvider'

// let name:string = "Prajna"
// let age:number = 10;
// let isMarried:boolean = true;

// let age:number[] = [1,2,3,4];
// let person:any = 3;
// person = "adi"

function App() {
 
  return (
    //4.  wrapping userProvider in the App, so any children components can access them directly by doing useContext, check Person.tsx
  <UserProvider>
   <User name={"Prajna"} age={33} isMarried={true}/>
  <User name={"Adi"} age={5} isMarried={false}/>
  </UserProvider>
   )
}

export default App
