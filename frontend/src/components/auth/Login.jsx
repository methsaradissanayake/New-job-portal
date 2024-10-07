import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { RadioGroup,} from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
        
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
    
        try{
            const res = await axios.post(`http://localhost:8000/api/v1/user/Login`,input,{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true,
            });
            if(res.data.success){
                navigate("/");
                toast.success(res.data.message);
            }
        }catch (error){
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
          <h1 className="font-bold text-xl mb-5">Login</h1>
        
          <div className="my-2">
            <Label>Email</Label>
            <Input   type="email"
                            placeholder="methsara.official@gmail.com"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
            
            />
          </div>
        
          <div className="my-2">
            <Label>Password</Label>
            <Input  type="password"
                            placeholder="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler} />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className = "flex items-center gap-4 my-5">
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
           
          </div>
          <Button type="submit" className ="w-full my-4">Login</Button>
          <span className="text-sm">Don't you have an account ? <Link to="/Signup" className="text-blue-600">Signup</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;

