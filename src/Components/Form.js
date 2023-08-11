import React from 'react'
import "./Form.css";

const Form = () => {
  return (
   <>
   <div className="form">
    <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="Email" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Message</label>
       <textarea rows="6" placeholder="Type your messages here" />
       <button className='btn'>Submit</button>
    </form>
   </div>
   </>
  )
}

export default Form
