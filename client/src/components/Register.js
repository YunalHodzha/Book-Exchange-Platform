import style from './Register.module.css';



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
        <div >
            <h2>Register</h2>
            <form /*onSubmit={handleSubmit}*/>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name"/*value={formData.name} onChange={handleChange} required*/ />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" /*value={formData.email} onChange={handleChange} required */ />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" /*value={formData.password} onChange={handleChange} required*/ />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" /*value={formData.confirmPassword} onChange={handleChange} required*/ />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}