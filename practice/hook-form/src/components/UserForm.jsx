import React, { useState } from 'react';


const UserForm = props => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const newUser = { firstname, lastname, email, password, confirmPassword };
    const createUser = (e) => {
        e.preventDefault();
        console.log("Welcome", newUser);
    };
    return(
    <>
        <fieldset>
            <legend>Sign Up</legend>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="confrimPassword">Confirm Password:</label>
                    <input type="password" name="confirmPassword" onChange={ (e) => setConfirmPassword((e.target.value))}/>
                </div>
                <input type="submit" value="Create User"/>
            </form>
        </fieldset>
        <fieldset>
            <legend>Your Form Data</legend>
            <p>First Name: {newUser.firstname}</p>
            <p>Last Name: {newUser.lastname}</p>
            <p>Email: {newUser.email}</p>
            <p>Password: {newUser.password}</p>
            <p>Confirm Password: {newUser.confirmPassword}</p>
        </fieldset>
    </>
    );

}
export default UserForm;

