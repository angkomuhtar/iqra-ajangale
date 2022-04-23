import React, { useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import PegawaiTable from "components/Cards/Table/PegawaiTable";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { verifyToken } from "lib/auth";

export async function getServerSideProps(ctx) {
  const token = getCookie("token");
  await verifyToken(ctx);
  return {
    props: {
      token: "tets",
    },
  };
}

function Tables({ response }) {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <PegawaiTable />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;

export default Tables;
