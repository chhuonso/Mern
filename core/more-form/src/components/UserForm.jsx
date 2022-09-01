import React, { useState } from 'react';


const UserForm = props => {
    const [firstname, setFirstName] = useState("");
    const [errorFirstName, setErrorFirstName] = useState("");
    
    const [lastname, setLastName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    

    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

// creating a User
    // const newUser = { firstname, lastname, email, password, confirmPassword };
    // const createUser = (e) => {
    //     e.preventDefault();
    //     console.log("Welcome", newUser);
    // };


// first name Error Handler
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2){ 
            setErrorFirstName("First name is required!");
        } else {
            setErrorFirstName("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2){ 
            setErrorLastName("Last name is required!");
        } else {
            setErrorLastName("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5){ 
            setErrorEmail("Email must be 5 characters");
        } else {
            setErrorEmail("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8){ 
            setErrorPassword("Password must be 8 characters");
        } else {
            setErrorPassword("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password){ 
            setErrorConfirmPassword("Password Doesn't MATCH!");
        } else {
            setErrorConfirmPassword("");
        }
    }


    return(
    <>

        <fieldset>
            <legend>Sign Up</legend>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" onChange={ handleFirstName }/>
                    {
                        errorFirstName ?
                            <p style={{ color: 'red' }}>{ errorFirstName }</p> :
                            ''
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" onChange={ handleLastName }/>
                    {
                        errorLastName ?
                            <p style={{ color: 'red' }}>{ errorLastName }</p> :
                            ''
                    }
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" onChange={ handleEmail }/>
                    {
                        errorEmail ?
                            <p style={{ color: 'red' }}>{ errorEmail }</p> :
                            ''
                    }
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={ handlePassword }/>
                    {
                        errorPassword ?
                            <p style={{ color: 'red' }}>{ errorPassword }</p> :
                            ''
                    }
                </div>
                <div>
                    <label htmlFor="confrimPassword">Confirm Password:</label>
                    <input type="password" name="confirmPassword" onChange={ handleConfirmPassword }/>
                    {
                        errorConfirmPassword ?
                            <p style={{ color: 'red' }}>{ errorConfirmPassword }</p> :
                            ''
                    }
                </div> 
                <input type="submit" value="Create User"/>
            </form>
        </fieldset>
        {/* <fieldset>
            <legend>Your Form Data</legend>
            <p>First Name: {newUser.firstname}</p>
            <p>Last Name: {newUser.lastname}</p>
            <p>Email: {newUser.email}</p>
            <p>Password: {newUser.password}</p>
            <p>Confirm Password: {newUser.confirmPassword}</p>
        </fieldset> */}
    </>
    );

}
export default UserForm;

