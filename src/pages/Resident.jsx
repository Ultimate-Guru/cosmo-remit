 /* eslint-disable no-unused-vars */  
import React, { useState } from 'react';  
import UploadImg from '../assets/img/Upload.png';  
import UploadTxt from "../assets/img/Resident.png";  
import UpImg from '../assets/img/document-upload.png';

const Upload = () => {  
  const [selectedFile, setSelectedFile] = useState(null);  

  // Handle file selection
  const handleFileChange = (event) => {  
    const file = event.target.files[0];  
    if (file) {  
      setSelectedFile(file);  
    }  
  };  

  // Handle drag and drop
  const handleDrop = (event) => {  
    event.preventDefault();  
    const file = event.dataTransfer.files[0];  
    if (file) {  
      setSelectedFile(file);
    }  
  };  

  // Prevent default drag behaviors
  const handleDragOver = (event) => {  
    event.preventDefault();  
  };  

  return (  
    <div className='flex flex-col items-center justify-center gap-5 py-5 bg-white px-4'>  
      <img src={UploadImg} className='w-7/12' alt="Upload Icon" />  
      <img src={UploadTxt} className='mt-6 max-w-full' alt="Upload Text" />  
        
      <div className='flex flex-col items-center w-full mt-5 gap-5'>  
        <div 
          className='flex flex-col border-dashed border-2 rounded-md border-gray-300 p-9 text-center w-full max-w-md' 
          onDrop={handleDrop} 
          onDragOver={handleDragOver}
        >  
          <img src={UpImg} className='w-7 mb-8 ml-40' alt="Upload Document" />
          <p><span className='font-bold text-red-600'>Click to Upload</span> or drag and drop</p>  
          <p>(Max. file size: 25 MB)</p>  
          <input 
            type="file" 
            accept="*/*"
            className="hidden"
            onChange={handleFileChange} 
            id="file-upload"
          />
          <label 
            htmlFor="file-upload" 
            className="mt-4 cursor-pointer text-blue-600 underline">
            Choose a file
          </label>
          {selectedFile && (
            <p className="mt-2 text-green-600">Selected file: {selectedFile.name}</p>
          )}
        </div>  
          <button type="submit" className="bg-red-600 text-white font-semibold rounded py-2 md:w-48">Next</button>  
      </div>  
    </div>  
  );  
}  

export default Upload;