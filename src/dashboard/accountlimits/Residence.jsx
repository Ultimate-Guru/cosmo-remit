/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import BackArrow from "../../assets/img/bx_arrow-back.png";
import UpImg from "../../assets/img/document-upload.png";

const Resident = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    // Function to handle file input change
    const handeFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(URL.createObjectURL(file));
        }
    }

    // Function to trigger file input click when the circle is clicked
    const handleImgClick = () => {
        fileInputRef.current.click();
    }

  return (
    <div className='bg-neutral-100 h-screen flex flex-col justify-center items-center p-6'>
        {/* Back Arrow */}
        <div className='absolute top-5 left-0 ml-5'>
            <img src={BackArrow} alt="BackArrow" className='w-8 cursor-pointer' />
        </div>

        {/* Main Content */}
        <div className='text-center mt-10'>
            <h1 className='text-2xl font-extrabold'>Upload proof of residence</h1>
            <p className='text-gray-500 mt-2'>You are required to upload a proof of   residence to proceed</p>

            {/* Upload Box */}
            <div className='mt-10 border-dashed border-2 rounded-md border-gray-300 p-9 text-center w-full max-w-lg' onClick={handleImgClick}>
                <img src={ selectedFile || UpImg} alt="Upload Document" className='w-8 mx-auto mb-6' />
                <p>
                    <span className='font-bold text-red-600 cursor-pointer text-sm'>Click to upload</span> or drag and drop
                </p>
                <p className='text-sm text-gray-400'>(Max. file size: 25 MB)</p>

                {/* Hidden file input */}
                <input type="file" accept='*/*' capture='user' onChange={handeFileChange} ref={fileInputRef} className='hidden' id=
                'file-upload' />
            </div>

            {/* Next Button */}
            <button className='bg-red-600 text-white font-semibold rounded-md w-52 py-3 px-16 mt-20 disabled:bg-gray-300'>
                Next
            </button>
        </div>
    </div>
  )
}

export default Resident;