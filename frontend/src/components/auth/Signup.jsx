import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";


const USER_API_END_POINT = "http://localhost:8000/api/v1/user";

const Signup = () => {
    const [input, setInput] = useState({
        filename: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("filename", input.filename);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/Login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto my-10">
                <form
                    onSubmit={submitHandler}
                    className="w-1/2 border border-gray-200 rounded p-4 my-10"
                >
                    <h1 className="font-bold text-xl mb-5">Sign Up</h1>
                    <div className="my-2">
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            placeholder="ex : Methsara"
                            value={input.filename}
                            name="filename"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className="my-2">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="methsara.official@gmail.com"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className="my-2">
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            placeholder="+94xx yyyyyyy"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className="my-2">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="Student"
                                    checked={input.role === 'Student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="Recruiter"
                                    checked={input.role === 'Recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className="flex items-center gap-2 ">
                            <Label>Profile</Label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full my-4">Signup</Button>
                    <span className="text-sm">Already have an account? <Link to="/Login" className="text-blue-600">Login</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Signup;