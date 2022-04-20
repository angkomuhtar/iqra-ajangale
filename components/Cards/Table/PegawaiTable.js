import React from "react";
import PropTypes from "prop-types";
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

export default function PegawaiTable({ data, color }) {
  const Hapus = (id) => {
    Swal.fire({
      icon: "warning",
      title: `Hapus Data ${id}`,
      text: "Yakin Ingin Menghapus Data.?",
      showCancelButton: true,
      cancelButtonText: "Tidak",
      showConfirmButton: true,
      confirmButtonText: "Ya",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`/api/pegawai/${id}/hapus`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
    });
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-slate-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-slate-700" : "text-white")
                }
              >
                Pegawai Tables
              </h3>
            </div>
            <div className="">
              <Link href="pegawai">
                <button className="bg-blue-500 px-3 py-2 flex justify-center items-center rounded-sm text-white text-sm font-light capitalize">
                  <AiOutlinePlus className="mr-2" />
                  tambah Pegawai
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto overflow-y-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100">
                  Nama
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100">
                  KP4
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100">
                  Pensiun
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100">
                  Kenaikan Pangkat
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100">
                  Gaji Berkala
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {data == "" ? (
                <tr>
                  <td
                    colspan="6"
                    className="text-center p-2 text-sm font-semibold "
                  >
                    Tidak ada Data
                  </td>
                </tr>
              ) : (
                data.map((val, key) => (
                  <tr key={key}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <div className="h-10 w-10 relative">
                        <Image
                          src={
                            val.photo
                              ? `/berkas/${val.id}/${val.photo}`
                              : "/img/react.jpg"
                          }
                          layout="fill"
                          className=" bg-white rounded-full border "
                        ></Image>
                      </div>
                      <div className="flex flex-col">
                        <span className="ml-3 font-bold text-slate-600">
                          {val.name}
                        </span>
                        <span className="ml-3 font-light text-slate-600">
                          {val.nip}
                        </span>
                      </div>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200 min-w-[60px]">
                            <div
                              style={{ width: "60%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200 min-w-[60px]">
                            <div
                              style={{ width: "60%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200 min-w-[60px]">
                            <div
                              style={{ width: "60%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200 min-w-[60px]">
                            <div
                              style={{ width: "60%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center space-x-1">
                        <button className="border border-green-400 p-1 rounded-sm text-green-400 text-sm cursor-pointer">
                          <AiOutlineEdit />
                        </button>
                        <button
                          className="bg-red-400 p-1 rounded-sm text-white text-sm cursor-pointer"
                          onClick={() => Hapus(val.id)}
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

PegawaiTable.defaultProps = {
  color: "light",
};

PegawaiTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
