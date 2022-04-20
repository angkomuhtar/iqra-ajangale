import React, { useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import PegawaiTable from "components/Cards/Table/PegawaiTable";
import { useRouter } from "next/router";

function Tables({ response }) {
  const [pegawai, setPegawai] = useState([]);
  const getData = async () => {
    const res = await fetch(`/api/pegawai`);
    const resPegawai = await res.json();
    // console.log(resPegawai);
    setPegawai(resPegawai.data);
  };

  useEffect(() => {
    //   const res = await fetch(`${process.env.BASE_URL}/api/pegawai`);
    getData();
  });

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <PegawaiTable data={pegawai} />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;

export default Tables;
