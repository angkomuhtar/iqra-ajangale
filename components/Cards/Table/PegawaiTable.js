import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

export default function PegawaiTable({ color }) {
  const [pegawai, setPegawai] = useState([]);
  const getData = async () => {
    const res = await fetch(`/api/pegawai`);
    const resPegawai = await res.json();
    setPegawai(resPegawai.data);
  };

  useEffect(() => {
    //   const res = await fetch(`${process.env.BASE_URL}/api/pegawai`);
    getData();
  }, []);

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
          })
          .finally(getData());
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
              <Link href="admin/pegawai">
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
              {pegawai.length < 1 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center p-2 text-sm font-semibold "
                  >
                    Tidak ada Data
                  </td>
                </tr>
              ) : (
                pegawai.map((val, key) => {
                  let gaji = Math.floor(
                    (((val.pengantar_pimpinan == null ? 0 : 1) +
                      (val.kgb == null ? 0 : 1) +
                      (val.kenaikan_pangkat == null ? 0 : 1) +
                      (val.pelantikan_terakhir == null ? 0 : 1) +
                      (val.skp_1tahun == null ? 0 : 1)) /
                      5) *
                      100
                  );
                  let kp4 = Math.floor(
                    (((val.cpns == null ? 0 : 1) +
                      (val.sk_pangkat == null ? 0 : 1) +
                      (val.npwp == null ? 0 : 1) +
                      (val.ktp == null ? 0 : 1) +
                      (val.norek == null ? 0 : 1) +
                      (val.konversi_nip == null ? 0 : 1) +
                      (val.akta_nikah == null ? 0 : 1) +
                      (val.akta_kelahiran_anak == null ? 0 : 1) +
                      (val.ket_kuliah == null ? 0 : 1)) /
                      9) *
                      100
                  );
                  let pensiun = Math.floor(
                    (((val.pengantar_pimpinan == null ? 0 : 1) +
                      (val.daftar_susunan_keluarga == null ? 0 : 1) +
                      (val.tidak_pernah_pidana == null ? 0 : 1) +
                      (val.tidak_sedang_pidana == null ? 0 : 1) +
                      (val.anak_kandung == null ? 0 : 1) +
                      (val.ket_kuliah == null ? 0 : 1) +
                      (val.cpns == null ? 0 : 1) +
                      (val.pns == null ? 0 : 1) +
                      (val.kenaikan_pangkat == null ? 0 : 1) +
                      (val.kartu_keluarga == null ? 0 : 1) +
                      (val.akta_nikah == null ? 0 : 1) +
                      (val.akta_kematian == null ? 0 : 1) +
                      (val.akta_kelahiran_anak == null ? 0 : 1) +
                      (val.skp_1tahun == null ? 0 : 1) +
                      (val.mutasi_jabatan == null ? 0 : 1) +
                      (val.photo3x4 == null ? 0 : 1)) /
                      16) *
                      100
                  );
                  let pangkat = Math.floor(
                    (((val.pengantar_pimpinan == null ? 0 : 1) +
                      (val.karpeg == null ? 0 : 1) +
                      (val.cpns == null ? 0 : 1) +
                      (val.sk_pangkat == null ? 0 : 1) +
                      (val.pengangkatan_jabatan == null ? 0 : 1) +
                      (val.penyataan_pelantikan == null ? 0 : 1) +
                      (val.konversi_nip == null ? 0 : 1) +
                      (val.skp_2tahun == null ? 0 : 1) +
                      (val.stlud == null ? 0 : 1) +
                      (val.latpim == null ? 0 : 1) +
                      (val.ijazah_transkrip == null ? 0 : 1) +
                      (val.kenaikan_pangkat_pimpinan == null ? 0 : 1) +
                      (val.pembebasan_jabatan_fungsional == null ? 0 : 1)) /
                      13) *
                      100
                  );

                  return (
                    <tr key={key}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <div className="h-10 w-10 relative">
                          <Image
                            alt=""
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
                          <span className="mr-2">{kp4}%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200 min-w-[60px]">
                              <div
                                style={{ width: `${kp4}%` }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">{pensiun}%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200 min-w-[60px]">
                              <div
                                style={{ width: `${pensiun}%` }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">{pangkat}%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200 min-w-[60px]">
                              <div
                                style={{ width: `${pangkat}%` }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">{gaji}%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200 min-w-[60px]">
                              <div
                                style={{ width: `${gaji}%` }}
                                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center space-x-1">
                          <Link href={`admin/pegawai/${val.pegawai}/edit`}>
                            <button className="border border-green-400 p-1 rounded-sm text-green-400 text-sm cursor-pointer">
                              <AiOutlineEdit />
                            </button>
                          </Link>
                          <button
                            className="bg-red-400 p-1 rounded-sm text-white text-sm cursor-pointer"
                            onClick={() => Hapus(val.id)}
                          >
                            <AiOutlineDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
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
