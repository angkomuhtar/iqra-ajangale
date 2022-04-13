import React, { useState } from "react";
import DatePicker from "react-datepicker";

// components

export default function PegawaiForm() {
  const [field, setfield] = useState({
    name: "",
    nip: "",
    photo: "",
    tgl_lahir: new Date(),
    jenkel: "",
    jabatan: "",
    tmt_jabatan: new Date(),
    pangkat: "",
    tmt_pangkat: new Date(),
    unit_kerja: "",
    eselon: "",
    gaji_berkala: new Date(),
  });
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold capitalize">
              tambah pegawai
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    NIP
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Photo
                  </label>
                  <input
                    type="file"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Tanggal Lahir
                  </label>
                  <DatePicker
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    selected={field.tgl_lahir}
                    onChange={(date) => setfield({ ...field, tgl_lahir: date })}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Jenis Kelamin
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Unit Kerja
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Jabatan
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    TMT jabatan
                  </label>
                  <DatePicker
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    selected={field.tmt_jabatan}
                    onChange={(date) =>
                      setfield({ ...field, tmt_jabatan: date })
                    }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pangkat
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    TMT Pangkat
                  </label>
                  <DatePicker
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    selected={field.tmt_pangkat}
                    onChange={(date) =>
                      setfield({ ...field, tmt_pangkat: date })
                    }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    eselon
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-5">
                  <label
                    className="block capitalize text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Gaji Berkala
                  </label>
                  <DatePicker
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    selected={field.gaji_berkala}
                    onChange={(date) =>
                      setfield({ ...field, gaji_berkala: date })
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
