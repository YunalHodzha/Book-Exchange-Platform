// Register.js
// import React, { useState } from 'react';
import styles from './Register.module.css'

export const Register = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Validate data and send to backend or Firebase
    // }

    return (
        <div className={styles.container}> {/* Use appropriate classnames from your CSS */}
            <h2>Register</h2>
            <form /*onSubmit={handleSubmit}*/>
                <div className={styles['form-group']}>
                    <label htmlFor="name">Name:</label>
                    {<input type="text" id="name" name="name" /* value={formData.name} onChange={handleChange} required*/ /> }
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" /*value={formData.email} onChange={handleChange} required*/ />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" /*value={formData.password} onChange={handleChange} required*/ />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" /*value={formData.confirmPassword} onChange={handleChange} required*/ />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}


