import React from 'react'
import Wrong from "../../assets/Vector.png"



const AdminLogin = () => {
    
  
    return (
      <>
        <div className="main-container flex justify-center items-center   ">
        <div className="relative w-screen  bg-studio bg-cover bg-center h-screen "></div>
        
            <div className="absolute w-[300px] sm:w-[485px]  bg-red-300 rounded-[22px] bg-radial shadow-custom flex justify-center items-center ">
                <div className="absolute top-[16px] left-[264px] sm:left-[449px]">
                    <img src={Wrong} className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" alt="wrong"></img>
                </div>
                <div className="flex items-center flex-col ">
                    <p className="text-white  mt-[26px] font-['Jost'] font-bold text-[22px] tracking-[5px] sm:text-[44px] sm:tracking-[10px]">LOGIN</p>
                    <div className="w-[230px]  mt-[13px] sm:w-[414px] ">
                        
                        <div className="text-[12px] sm:text-[22px] font-sans text-[#FFFFFF]">Email</div>
                        <div> <input type="text" className="w-full h-[22px] sm:h-[44px] bg-transparent border-[1px] border-[#705F5F] rounded-[2px] sm:rounded-[5px] mt-[3px] pl-[5px] sm:pl-[10px] text-[#ffffff] text-[10px] sm:text-[20px] "></input> </div>

                        <div className="text-[12px] sm:text-[22px] font-sans text-[#FFFFFF] mt-[18px]">Password</div>
                        <div> <input type="password" className="w-full h-[22px] sm:h-[44px] bg-transparent border-[1px] border-[#705F5F] rounded-[2px] sm:rounded-[5px] mt-[3px] pl-[5px] sm:pl-[10px] text-[#ffffff] text-[10px] sm:text-[20px] "></input> </div>

                        <div className="mt-[3px] text-[#FD0202] sm:text-[16px] text-[10px] font-normal font-sans "><a href="#">Forgot Password?</a></div>

                    </div>
                        <button className="w-[100px] h-[20px] bg-gradient-to-r from-[#720B0B] to-[#C21F3A] mt-[45px] mb-[35px] rounded-[2px] sm:rounded-[5px] sm:w-[200px] sm:h-[50px] px-[2px] sm:px-[4px] flex justify-center items-center font-['Jost'] font-semibold text-[15px] sm:text-[22px] text-[#ffffff] hover:bg-none hover:bg-[#720B0B]">Sign In</button>
                </div>
                </div>
            </div>
       
      </>
    );
  };
  
  export default AdminLogin;

