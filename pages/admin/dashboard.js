import React from "react";
import CardTable from "components/Cards/PegawaiTable";
import Admin from "layouts/Admin.js";
import PegawaiTable from "components/Cards/PegawaiTable";

export default function Tables() {
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