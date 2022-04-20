import React from "react";
import PropTypes from "prop-types";
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BsFillXCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { MdCloudDownload } from "react-icons/md";

// components

import Link from "next/link";
import Image from "next/image";
import FieldList from "./FieldList";

export default function PensiunTable({ data, color }) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-slate-700">
                Berkas Pensiun
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto overflow-y-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  Nama
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  Pengantar Pimpinan
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  DSK
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  Per. Tidak Indisiplin
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  Per. Tidak Sedang Pidana
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  Per. Anak Kandung (Materai 10.000)
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  Ket. Kuliah Anak
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  SK CPNS
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  SK PNS
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  SK Kenaikan Pangkat
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  Kartu Keluarga
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  AKTA Nikah
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  Akta Kematian
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  Akta Kelahiran Anak
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  SKP 1 Tahun
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  SK Mutasi
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  pas PHOTO 3X4
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, key) => (
                <tr key={key}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <div className="h-10 w-10 relative">
                      <Image
                        src={val.photo ? val.photo : "/img/react.jpg"}
                        layout="fill"
                        className=" bg-white rounded-full border "
                      ></Image>
                    </div>
                    <div className="flex flex-col">
                      <span className="ml-3 font-bold text-slate-600">
                        {val.nama}
                      </span>
                      <span className="ml-3 font-light text-slate-600">
                        {val.nip}
                      </span>
                    </div>
                  </th>
                  <FieldList data={val.pengantar_pimpinan} />
                  <FieldList data={val.dafta_susunan_keluarga} />
                  <FieldList data={val.tidak_pernah_pidana} />
                  <FieldList data={val.tidak_sedang_pidana} />
                  <FieldList data={val.anak_kandung} />
                  <FieldList data={val.ket_kuliah} />
                  <FieldList data={val.cpns} />
                  <FieldList data={val.pns} />
                  <FieldList data={val.kenaikan_pangkat} />
                  <FieldList data={val.kartu_keluarga} />
                  <FieldList data={val.akta_nikah} />
                  <FieldList data={val.akta_kematian} />
                  <FieldList data={val.akta_kelahiran_anak} />
                  <FieldList data={val.skp_1tahun} />
                  <FieldList data={val.mutasi_jabatan} />
                  <FieldList data={val.photo3x4} />

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center justify-center space-x-1">
                      <button className="bg-green-400 p-2 rounded-sm text-white text-sm cursor-pointer flex items-center">
                        <AiOutlineEdit />
                        <span className="text-xs ml-2">update</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
