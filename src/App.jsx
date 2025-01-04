import React , { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState(new Date());
  let [todo, SetTodo] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='maindiv' style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h3 className='mt-5'>Hey, Lets Plan Your Day</h3>
      <h5 >It's <span className='text-success'>{date.toLocaleDateString()}</span>, So what ToDo</h5>
      <span className='span-input col-md-6 col-sm-12'>
        <input className='col-10 border-0 py-2 px-2 text-center mt-5' value={todo} onChange={(e)=>SetTodo(e.target.value)} type="text" style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}} placeholder='Make ToDo'/>
        <button className='col-2 border-0 mt-5 bg-primary text-white' style={{borderTopRightRadius:5,borderBottomRightRadius:5}}>Add task</button>
      </span>

      <br />
      
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-11 col-lg-12">
            <div className="p-3 border bg-white text-dark">

              <h4 className='text-center'>ToDo</h4>
              <hr />
              
              <span style={{display:'flex'}}>
                <input type="radio" className='mx-2'/>
                Helllo
              </span>

            </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default App
