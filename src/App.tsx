
import './App.css'
import { Person } from './Person'

// let name:string = "Prajna"
// let age:number = 10;
// let isMarried:boolean = true;

// let age:number[] = [1,2,3,4];
// let person:any = 3;
// person = "adi"

function App() {
 
  return (
  <>
   <Person name={"Prajna"} age={33} isMarried={true}/>
  <Person name={"Adi"} age={5} isMarried={false}/>
  </>
   )
}

export default App
