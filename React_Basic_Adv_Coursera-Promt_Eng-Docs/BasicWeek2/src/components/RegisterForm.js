import { useState } from 'react'; 

export default function RegisterForm(){
    const [form, setForm] = useState({
        firstName: "Luke",
        lastName: "Jones",
        email: "lukeJones@sculpture.com"
    });

    return(
      <>
        <label>
          First Name:{' '}
          <input
            value={form.firstName}
            onChange={e => {
              setForm({
                ...form,
                firstName: e.target.value  
              })    
            }}   
          />
        </label>
        <br /> <br />
        <label>
          Last Name:{' '}
          <input
            value={form.lastName}
            onChange={e => {
              setForm({
                ...form,
                lastName: e.target.value  
              })    
            }}   
          />
        </label>
        <br /> <br />
        <label>
          Email:{' '}
          <input
            value={form.email}
            onChange={e => {
              setForm({
                ...form,
                email: e.target.value  
              })    
            }}   
          />
        </label>
        <br /> <br />
        <p>
          {form.firstName}{' '} 
          {form.lastName}{' '} 
          ({form.email})         
        </p>
      </>
    )   
}