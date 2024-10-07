import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "@/components/ui/button"
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
export function ButtonLink() {
  return <Button variant="link">Link</Button>
}


const Navbar = () => {
    const user = false;
  return (
    <div className="bg-gray-400 ">
      
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
        <div>
          <h1 className="text-2xl font-bold">
            CAREER-<span className="text-red-500">CONNECT</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex gap-5 items-center font-medium ">
          <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Jobs">Jobs</Link></li>
            <li><Link to="/Browse">Browse</Link></li>
          </ul>
          {
            !user ?(
                <div className="flex items-center gap-2">
                    <Link to="/Login"><Button variant='outline'>Login</Button></Link>
                    <Link to="/Signup"><Button className ='bg-[#672bcf] hover:bg-[#310581]'>Signup</Button></Link>
                   
                     </div>
            ) : (
                <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <div className="flex gap-6">
                <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div >
                  <h4 className="font-medium">Methsara Dissanayake</h4>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                  </div>
                  <div className="flex flex-col gap-2 my-4 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2/>
                  <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut/>
                  <Button variant="link">Log Out</Button>
                  </div>
                  </div>
                  
                </PopoverContent>
              </Popover>
            )
          }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
