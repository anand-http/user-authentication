import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    
    const [formData, setFormData] = useState({
        name: "",
        dateOfBirth: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if(!formData.name ||  !formData.email || !formData.dateOfBirth || !formData.password){
            alert("All fields are required")
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:5000/api/register', formData);
            setFormData({
                name: "",
                dateOfBirth: "",
                email: "",
                password: ""
            });
    
            if (response.status === 201) {
                const { token ,newUser} = response.data; 

                localStorage.setItem("token", token); 
                localStorage.setItem("user", JSON.stringify(newUser)); 
                alert("Registration successful!");
                navigate('/');
            } else {
                alert(response.data.message || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error:", error);
    
            if (error.response) {
                alert(error.response.data.message || "Server error. Please try again.");
            } else {
                alert("An unexpected error occurred. Please try again.");
            }
        }
    };
    

    return (
        <div className="flex items-center justify-center bg-cyan-300 h-screen">
            <div className="w-96 bg-gray-600 rounded-md pt-16 p-6 shadow-lg relative">
                <div className="flex items-center justify-center absolute -top-4 left-0 right-0">
                    <h2 className="text-center text-gray-700 text-2xl mb-4 bg-cyan-500 w-48 p-3 rounded-md">
                        SIGN UP
                    </h2>
                </div>

                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        <img className="rounded-full" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="avatar" />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            className="outline-none w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            className="outline-none w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            placeholder="Date of Birth"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            className="outline-none w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </div>

                    <div className="mb-4 flex items-center relative">
                        <input
                            className="outline-none w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="ml-2 outline-none absolute right-4 top-0 bottom-0 text-white"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-cyan-400 hover:bg-cyan-500 text-gray-700 py-2 px-5 w-full rounded-lg transition"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <p className="text-gray-300 text-sm">Already have an account?</p>
                    <a href="/login" className="text-cyan-400 hover:underline">
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
