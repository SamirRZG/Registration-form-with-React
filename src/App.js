import React, { useState } from "react";

const App = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const[submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }
  return (
    <div class="form-container">
    <form class="register-form" onSubmit={handleSubmit}>
      {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
      
      <input
        onChange={handleFirstNameInputChange}
        value={values.firstName}
        id="first-name"
        class="form-field"
        type="text"
        placeholder="First Name"
        name="firstName"/>
        {submitted && !values.firstName ?<span>Please enter your first name</span>: null}
    
      <input
        onChange={handleLastNameInputChange}
        value={values.lastName}
        id="last-name"
        class="form-field"
        type="text"
        placeholder="Last Name"
        name="lastName"/>
        {submitted && !values.lastName ?<span>Please enter your last name</span>: null}
    
      <input
        onChange={handleEmailInputChange}
        value={values.email}
        id="email"
        class="form-field"
        type="text"
        placeholder="Email"
        name="email"/>
        {submitted && !values.email ?<span>Please enter your email</span>: null}
    
      <button class="form-field" type="submit">
        Register
      </button>
    </form>
  </div>
);
  
}

export default App;