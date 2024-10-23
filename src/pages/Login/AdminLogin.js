import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useCookies } from "react-cookie";
import DOMPurify from 'dompurify';
import { twMerge } from 'tailwind-merge';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Wrong from "../../assets/Vector.png";
import showToast from "../../utils/toastNotifications";
import { signIn } from "../../services/authService";
import { isEmail, isNotEmpty } from "../../utils/utils";
import { setToken } from "../../store";

const AdminLogin = () => {

    const dispatch =  useDispatch();    
    const [, setCookie] = useCookies(['token']);

    const [credentials, setCredentials] = useState({
        email: "", password: ""
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPAssword] = useState(false);

    const performSignIn = async() => {
        if(isNotEmpty(credentials.email) && isNotEmpty(credentials.password)){
            if(isEmail(credentials.email)){
                setLoading(true);
                signIn(credentials)
                .then(res => {
                    if(res.status === 200){
                        setCookie('token', res.data.accessToken, { path: '/', expires: new Date(Date.now() + 3600e3) });
                        dispatch(setToken({token: res.data.accessToken}));
                        showToast("success", "Signed in Successfully!");
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {setLoading(false)});
            }else{
                showToast("error", "Enter an Valid Email")
            }
        }else{
            showToast("error", "Fill email and the password");
        }
    }

    const submitLoginOnPressEnter = (e) => {
        if(e.key === "Enter"){
            performSignIn();
        }        
    }

    return (
        <>
            <div className="main-container flex justify-center items-center   ">
                <div className="relative w-screen  bg-studio bg-cover bg-center h-screen"></div>
                <div className="absolute w-[300px] sm:w-[485px]  bg-red-300 rounded-[22px] bg-radial shadow-custom flex justify-center items-center ">
                    <div className="absolute top-[16px] left-[264px] sm:left-[449px]">
                        <img
                            src={Wrong}
                            className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"
                            alt="wrong"
                        ></img>
                    </div>
                    <div className="flex items-center flex-col">
                        <p className="text-white  mt-[26px] font-['Jost'] font-bold text-[22px] tracking-[5px] sm:text-[44px] sm:tracking-[10px]">
                            LOGIN
                        </p>
                        <div className="w-[230px]  mt-[13px] sm:w-[414px] ">
                            <div className="text-[12px] sm:text-[22px] font-sans text-[#FFFFFF]">
                                Email
                            </div>
                            <div>
                                {" "}
                                <input
                                    type="text"
                                    className="w-full h-[22px] sm:h-[44px] bg-transparent border-[1px] border-[#705F5F] rounded-[2px] sm:rounded-[5px] mt-[3px] pl-[5px] sm:pl-[10px] text-[#ffffff] text-[10px] sm:text-[20px] "
                                    value={credentials.email}
                                    onChange={(e) => {setCredentials({...credentials, email: DOMPurify.sanitize(e.target.value)})}}
                                    onKeyDown={(e) => submitLoginOnPressEnter(e)}
                                ></input>{" "}
                            </div>

                            <div className="flex flex-row text-[12px] sm:text-[22px] font-sans text-[#FFFFFF] mt-[18px]">
                                Password
                                {showPassword && <span className="flex justify-center items-center ml-2 pt-1 text-lg"> <FaRegEyeSlash className="cursor-pointer" onClick={() => {setShowPAssword(!showPassword)}} /> </span>}
                                {!showPassword &&  <span className="flex justify-center items-center ml-2 pt-1 text-lg"> <FaRegEye className="cursor-pointer" onClick={() => {setShowPAssword(!showPassword)}} /> </span>} 
                            </div>
                            <div>
                                {" "}
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full h-[22px] sm:h-[44px] bg-transparent border-[1px] border-[#705F5F] rounded-[2px] sm:rounded-[5px] mt-[3px] pl-[5px] sm:pl-[10px] text-[#ffffff] text-[10px] sm:text-[20px] "
                                    value={credentials.password}
                                    onChange={(e) => {setCredentials({...credentials, password: DOMPurify.sanitize(e.target.value)})}}
                                    onKeyDown={(e) => submitLoginOnPressEnter(e)}
                                ></input>{" "}
                            </div>

                            <div className="mt-[3px] text-[#FD0202] sm:text-[16px] text-[10px] font-normal font-sans ">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button 
                            className={twMerge("w-[100px] h-[20px] mt-[45px] mb-[35px] rounded-[2px] sm:rounded-[5px] sm:w-[200px] sm:h-[50px] px-[2px] sm:px-[4px] flex justify-center items-center font-['Jost'] font-semibold text-[15px] sm:text-[22px] text-[#ffffff] hover:bg-none", loading ? "bg-slate-700 opacity-45" : "cursor-pointer bg-gradient-to-r from-[#720B0B] to-[#C21F3A] hover:bg-[#720B0B] ")}
                            onClick={performSignIn}
                            disabled={loading}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;