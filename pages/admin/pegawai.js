import React from "react";

// components

import PegawaiForm from "components/Cards/PegawaiForm.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Pegawai() {
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
