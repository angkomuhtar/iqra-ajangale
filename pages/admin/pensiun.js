import React, { useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import Kp4Table from "components/Cards/Table/PensiunTable";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

function Tables({ response }) {
  const [datalist, setDatalist] = useState([]);

  const getData = () => {
    axios
      .get("/api/kp4")
      .then((res) => {
        setDatalist(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "Terjadi Kesalahan Sistem",
          icon: "error",
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Kp4Table data={datalist} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.BASE_URL}/api/kp4`);
  const Pegawai = await res.json();
  // console.log("data", res);
  // Pass data to the page via props
  return { props: { response: Pegawai } };
}

Tables.layout = Admin;

export default Tables;
