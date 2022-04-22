import React from "react";

// components

import PegawaiForm from "components/Cards/Form/PegawaiForm.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

function Pegawai({ jabatan }) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-full px-4">
          <PegawaiForm />
        </div>
      </div>
    </>
  );
}

Pegawai.layout = Admin;

export default Pegawai;
