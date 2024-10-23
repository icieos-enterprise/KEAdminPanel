import React, { useState, useRef } from "react";
import UploadIcon from "../../assets/AdminDashboard/admin-dashboard-uploadfilesicon.svg"; // Import SVG file for upload button
import CloseIcon from "../../assets/AdminDashboard/Admin-closeIcon.svg"; // Import SVG file for close button
import showToast from "../../utils/toastNotifications";
import { uploadClientsFile, uploadLyricsFile, uploadProductionFile } from "../../services/uploadFileService";
import { useSelector } from "react-redux";
import { capitalize } from "../../utils/utils";

const UploadPopup = (props) => {
    const auth = useSelector(state => state.auth);
    const [isOpen, setIsOpen] = useState(true);
    const fileInputRef = useRef(null); // Reference for the file input
    const [file, setFile] = useState(null);

    const closePopup = () => {
        setIsOpen(false);
    };

    const handleUploadClick = () => {
        fileInputRef.current.click(); // Trigger the file input click
    };

    if (!isOpen) {
        return null; // Don't render anything if the popup is closed
    }

    const uploadFileHandler = () => {
      if(file && 
        (file.type === "application/vnd.ms-excel" || file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") &&
        (file.name.endsWith('.xls') || file.name.endsWith('.xlsx'))
      ){
        const formData = new FormData();
        formData.append('file', file);

        if(props.type === "clients"){
          uploadClientsFile(formData, auth.token)
          .then((res) => {
            if(res.status === 201){
              showToast("success", "FIle uploaded Successfully!.")
            }else{
              showToast("error", "Something Went Wrong.")
            }
          })
          .catch(err => console.log(err))
          .finally(() => {setFile(null)});
        }
        else if(props.type === "productions"){
          uploadProductionFile(formData, auth.token)
          .then((res) => {
            if(res.status === 201){
              showToast("success", "FIle uploaded Successfully!.")
            }else{
              showToast("error", "Something Went Wrong.")
            }
          })
          .catch(err => console.log(err))
          .finally(() => {setFile(null)});
        }
        else if(props.type === "lyrics"){
          uploadLyricsFile(formData, auth.token)
          .then((res) => {
            if(res.status === 201){
              showToast("success", "FIle uploaded Successfully!.")
            }else{
              showToast("error", "Something Went Wrong.")
            }
          })
          .catch(err => console.log(err))
          .finally(() => {setFile(null)});
        }

      }else{
        showToast("error", "Upload an Excel File To Upload");
      }
    }

    return (
        <div className="inset-0 flex items-center justify-center bg-black bg-opacity-40 -mr-32 mt-5">
            <div
                className="relative bg-[#1D1D1D] bg-opacity-55 rounded-lg p-8 w-[1500px] h-[750px] shadow-md backdrop-blur-md"
                style={{
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                }}
            >
                {/* Title */}
                <h1 className="text-white font-jost text-[35px] text-left font-semibold space-x-10">
                    {props.type ? "Upload " + capitalize(props.type) + " Information" : "Upload Files"}
                </h1>

                {/* Inner Box */}
                <div className="bg-[#161616] shadow-[0px_0px_10px_#301212] mt-8 rounded-md p-4 flex flex-col w-[700px] ml-96 space-y-6 space-x-8 relative">
                    {/* Close Button */}
                    {/* <div
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={closePopup}
                    >
                        <img
                            src={CloseIcon}
                            alt="Close Icon"
                            className="w-6 h-6"
                        />
                    </div> */}

                    {/* Inner Box Title */}
                    <h2 className="text-white font-jost text-[24px] font-semibold mb-4 text-left ml-8 mt-4">
                        Upload file
                    </h2>

                    {/* Upload Box */}
                    <div className="border-2 border-dashed border-[#6D6D6D] rounded-lg flex flex-col items-center justify-center w-[610px] h-[300px] text-center relative">
                        {/* Upload SVG Button */}
                        <img
                            src={UploadIcon}
                            alt="Upload Icon"
                            className="w-[100px] h-[94px] mb-4 cursor-pointer"
                            onClick={handleUploadClick} // Trigger file input on click
                        />

                        {/* Hidden File Input */}
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }} // Hide the input
                            accept=".xls,.xlsx" // Specify accepted file types
                            onChange={(e) => {
                                const inputFile = e.target.files[0];
                                if (inputFile) {
                                    setFile(inputFile);
                                }
                            }}
                        />

                        {/* Drop Here Text */}
                        <p className="font-poppins text-[16px] text-[#6D6D6D]">
                            Drop your image here, or{" "}
                            <span
                                className="text-[#C21F3A] cursor-pointer"
                                onClick={handleUploadClick}
                            >
                                browse
                            </span>
                        </p>

                        {/* File Types Text */}
                        <p className="font-poppins text-[12px] text-[#6D6D6D] mt-2">
                            Supports: XLS, XLSX : Excel files
                        </p>

                        <p className="text-white">{file && file.name}</p>
                    </div>

                    {/* Centered Upload Button */}
                    <div className="flex justify-center">
                        <button
                            className="mt-6 py-3 text-white font-jost font-semibold text-[20px] rounded-md w-64 mb-4"
                            style={{
                                background:
                                    "linear-gradient(180deg, #C21F3A 0%, #720B0B 100%)",
                            }}
                            onClick={uploadFileHandler}
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadPopup;
