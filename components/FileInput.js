import axios from "axios";
import React, { useState } from "react";
import { IoCloudUploadOutline, IoFolderOpenOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const FileInput = ({ fileValue, field, id, label }) => {
  const sendFile = () => {
    const formData = new FormData();
    formData.append(field, data.file);
    axios.post("/api/berkas/" + id, formData).then((res) => {
      if (res.status == 200) {
        Swal.fire({
          title: "Sukses",
          text: "File Terupload",
          icon: "success",
        });
        setUpload(true);
      }
    });
  };
  const [upload, setUpload] = useState(true);
  const [data, setdata] = useState({
    file: "",
  });

  return (
    <div className="rounded-lg mb-4 bg-white">
      <div className="m-4">
        <label className="inline-block mb-2 text-gray-500 text-sm">
          {label}
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col justify-center items-center w-full h-20 border-2 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
            <div className="flex w-full items-center justify-center px-3">
              <span className="text-3xl">
                {fileValue || data.file ? (
                  <IoFolderOpenOutline />
                ) : (
                  <IoCloudUploadOutline />
                )}
              </span>
              <p className="pt-1 text-xs tracking-wider font-light text-gray-400 group-hover:text-gray-600 ml-3 ">
                {fileValue
                  ? fileValue
                  : data.file
                  ? data.file.name
                  : "Pilih File"}
              </p>
            </div>
            <input
              type="file"
              className="opacity-0 h-0"
              onChange={(e) => {
                setdata({
                  file: e.currentTarget.files[0],
                });
                setUpload(false);
              }}
            />
          </label>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded disabled:bg-slate-300"
          disabled={upload}
          onClick={(e) => {
            e.preventDefault();
            sendFile();
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileInput;
