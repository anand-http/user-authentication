import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });


    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const handleChange = (e) => {
        const { name, value, } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if(!formData.email || !formData.password){
            alert("All fields are required")

            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            setFormData({
               email:"",
               password:""
            })
            if (response.status === 200) {
                const { token,user } = response.data; 
                localStorage.setItem("token", token); 
                localStorage.setItem("user",JSON.stringify(user));
                alert("Login successful!");
                navigate('/')
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
            <div className="w-96 bg-gray-600 rounded-md pt-20 p-6 shadow-lg relative">
                <div className="flex items-center justify-center absolute -top-4 left-0 right-0">
                    <h2 className="text-center text-gray-700 text-2xl  mb-4 bg-cyan-500 w-48 p-3 rounded-md">
                        SIGN IN
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

                    <div className="flex justify-between text-sm text-gray-300 mb-6">
                        <label className="flex items-center text-cyan-400">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                className="mr-2"
                            />
                            Remember me
                        </label>
                        <a href="#" className="hover:underline text-cyan-400">
                            Forgot your password?
                        </a>
                    </div>

                    <div className="text-center mb-4">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="text-gray-700 bg-cyan-400 hover:bg-cyan-500 py-2 px-5 w-full rounded-lg transition"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <div className="text-center">
                    <p className="text-gray-300 text-sm">Don't have an account?</p>
                    <a href="/register" className="text-cyan-400 hover:underline">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
