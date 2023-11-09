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
        <div className={styles.registerContainer}> {/* Use appropriate classnames from your CSS */}
            <h2 className={styles.registerTitle}>Register</h2>
            <form /*onSubmit={handleSubmit}*/>
                <div className={styles.registerFormGroup}>
                    <label className={styles.registerLabel} htmlFor="name">Name:</label>
                    {<input className={styles.registerInput} type="text" id="name" name="name" /* value={formData.name} onChange={handleChange} required*/ />}
                </div>
                <div className={styles.registerFormGroup}>
                    <label className={styles.registerLabel} htmlFor="email">Email:</label>
                    <input className={styles.registerInput} type="email" id="email" name="email" /*value={formData.email} onChange={handleChange} required*/ />
                </div>
                <div className={styles.registerFormGroup}>
                    <label className={styles.registerLabel} htmlFor="password">Password:</label>
                    <input className={styles.registerInput} type="password" id="password" name="password" /*value={formData.password} onChange={handleChange} required*/ />
                </div>
                <div className={styles.registerFormGroup}>
                    <label className={styles.registerLabel} htmlFor="confirmPassword">Confirm Password:</label>
                    <input className={styles.registerInput} type="password" id="confirmPassword" name="confirmPassword" /*value={formData.confirmPassword} onChange={handleChange} required*/ />
                </div>
                <button className={styles.registerButton} type="submit">Register</button>
            </form>
        </div>
    );
}


