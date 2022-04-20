import React, { useEffect } from "react";
import Admin from "layouts/Admin.js";
import Kp4Table from "components/Cards/Table/Kp4Table";
import { useRouter } from "next/router";

function Tables({ response }) {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Kp4Table data={response.data} />
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
