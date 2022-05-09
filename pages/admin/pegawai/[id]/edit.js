import React from "react";

// layout for page

import Admin from "layouts/Admin.js";
import PegawaiEdit from "components/Cards/Form/PegawaiEdit";

function Pegawai({ jabatan }) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-full px-4">
          <PegawaiEdit />
        </div>
      </div>
    </>
  );
}

Pegawai.layout = Admin;

export default Pegawai;
