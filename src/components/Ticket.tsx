import * as React from 'react';
import { useState } from 'react';

const Tiket=()=>{
    const initialNumberOfTicket=1;
    const ticketFields={tiketName:'',userEmail:''};

    const [count,setCount]= useState(initialNumberOfTicket);

    const [tikets,setTikets]=useState([{...ticketFields}]);

  const  onSelectchange=(e:any)=>{
         setCount(e.target.value);
         let oldState=[{...ticketFields}];
         Array.from({length:e.target.value -1}).forEach((el)=>{
             oldState.push({...ticketFields})
         })
         setTikets(oldState)
  }
  const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      let oldstate=[...tikets];
      let dataIndex=e.target.getAttribute('data-index');
      let className=''+e.target.className;

      if(dataIndex && (className == 'tiketName' || className == 'userEmail')){
        oldstate[parseInt(dataIndex)][className]=e.target.value
      }
      setTikets(oldstate);
  }

  const removeElement=(e:any,index:number)=>{
      let oldeState=[...tikets].filter((el,indx)=> indx !== index )
      setTikets(oldeState);

  }
    return(
        <div>
            <div>
                <select onChange={onSelectchange} name="numberTiket" id=""  >
                    {Array.from({length:5},(_,i)=>i+1).map((el)=>{
                        return (
                            <option key={el} value={el} >{el}</option>
                        )
                    })}
                </select>
            </div>

            <div>
                {tikets.map((el,inx)=>{
                    return (
                        <div style={{display:'flex'}} key={`index-${inx}`}>
                            <input data-index={inx} className="tiketName" onChange={handleNameChange} type="text" value={el.tiketName}/>
                            <input data-index={inx} className="userEmail" onChange={handleNameChange} type="text"  value={el.userEmail} />

                            <button type="button" onClick={(e)=>removeElement(e,inx)} ></button>
                        </div>
                    )
                })}
            </div>
            

        </div>
    )
}

export default Tiket;