import React from "react";

// components

import GajiTable from "components/Cards/GajiTable";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

function Gaji({ jabatan }) {
  console.log(jabatan);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-full px-4">
          <GajiTable />
        </div>
      </div>
    </>
  );
}

Gaji.layout = Admin;

export default Pegawai;
