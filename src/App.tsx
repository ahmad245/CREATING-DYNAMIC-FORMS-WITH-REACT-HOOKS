import React, { useState } from 'react';
import './App.css';
import Tiket from './components/Ticket';

function App() {
  const initial={name:'',age:''};

   const [cat,setCat]= useState([{...initial}]);
   const addNewCat=()=>{
    
     const newStateCat=[...cat,{...initial}];
     setCat(newStateCat);
   }

   const removeElement=(name:string)=>{ 
       const newStateCat=cat.filter((el,i)=>el.name !== name);
       setCat((stat)=>{
        
         stat= newStateCat;
            console.log(stat);
            
         return stat;
        
       });
       console.log(cat,newStateCat);
   }

   const handleChangeCatState=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const newCatState=[...cat];   
        if(e.target.dataset.index && e.target.className){
          const indx=parseInt(e.target.dataset.index)
          const objKey=''+e.target.className
         
          if((objKey == 'age' || objKey == 'name') && e.target.value ){ 
            newCatState[indx][objKey]=e.target.value;
            setCat(newCatState);
            
          }
         
        }
   }
   console.log(cat);
   

  return (
    <div className="App">
     <form>            
      <label htmlFor="owner">Owner</label>   
      <input type="text" name="owner" id="owner" /> 
      <label htmlFor="description">Description</label> 
      <input type="text" name="description" id="description" />
      <input type="button" onClick={addNewCat} value="Add New Cat" />      
      {cat.map((el,index)=>{
       const catId = `name-${index}`;
       const ageId = `age-${index}`;
        return (
          <div key={`cat-${catId+ageId}`}>
             <label htmlFor={catId}>name</label>   
            <input value={el.name}  onChange={handleChangeCatState} data-index={index} className="name"  type="text" name={catId} id={catId} /> 
            <label  htmlFor={ageId}>age</label>   
            <input value={el.age} onChange={handleChangeCatState} data-index={index} className="age" type="text" name={ageId} id={ageId} /> 
            <button  type="button" onClick={(e)=>removeElement(el.name)} >remove</button>
          </div>
        )
      })}      
      <input type="submit" value="Submit" />        
    </form> 
    <div>
      <Tiket />
      </div>  
    </div>
  );
}


export default App;
