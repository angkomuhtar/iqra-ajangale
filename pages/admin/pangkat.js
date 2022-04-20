import React, { useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import PangkatTable from "components/Cards/Table/PangkatTable";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

function Tables({ response }) {
  const getData = () => {
    axios
      .get("/api/pangkat")
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
          <PangkatTable data={datalist} />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;

export default Tables;
