import React, { useState, useEffect } from "react";
import GajiTable from "components/Cards/Table/GajiTable";
import Admin from "layouts/Admin.js";
import axios from "axios";

function Gaji({ jabatan }) {
  const getData = () => {
    axios
      .get("/api/gaji")
      .then((res) => {
        setDatalist(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "Terjadi Kesalahan Sistem",
          icon: "error",
        });
      });
  };
  const [datalist, setDatalist] = useState([]);
  useEffect(() => {
    getData();
  });

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <GajiTable data={datalist} />
        </div>
      </div>
    </>
  );
}

Gaji.layout = Admin;

export default Gaji;
