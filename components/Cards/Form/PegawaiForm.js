import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import Router from "next/router";
import Swal from "sweetalert2";
import animationData from "/components/9844-loading-40-paperplane";
import Lottie from "react-lottie";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";

// components

export default function PegawaiForm() {
  const [loading, setLoading] = useState(false);
  const [jabatan, setJabatan] = useState([]);
  const [pangkat, setPangkat] = useState([]);
  const [eselon, setEselon] = useState([]);
  const [photo, setPhoto] = useState([]);
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const createHandler = (data) => {
    setLoading(true);
    const formdata = new FormData();
    if (photo.length > 0) {
      formdata.append("photo", photo.item(0));
    }

    formdata.append("name", data.name);
    formdata.append("nip", data.nip);
    formdata.append(
      "gaji_berkala",
      moment(data.gaji_berkala).format("YYYY-MM-DD")
    );
    formdata.append("tgl_lahir", moment(data.tgl_lahir).format("YYYY-MM-DD"));
    formdata.append("jenkel", data.jenkel);
    formdata.append("unit_kerja", data.unit_kerja);
    formdata.append("pangkat", data.pangkat);
    formdata.append(
      "tmt_pangkat",
      moment(data.tmt_pangkat).format("YYYY-MM-DD")
    );
    formdata.append("jabatan", data.jabatan);
    formdata.append(
      "tmt_jabatan",
      moment(data.tmt_jabatan).format("YYYY-MM-DD")
    );
    formdata.append("eselon", data.eselon);
    fetch("/api/pegawai/store", {
      method: "POST",
      body: formdata,
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const { status, message } = json;
        Swal.fire({
          text: message,
          icon: status == "ok" ? "success" : "error",
          title: status,
          confirmButtonText: "Oke Siip",
        }).then(() => {
          if (status == "ok") Router.push("/admin/dashboard");
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getJabatan = async () => {
    const req = await fetch("/api/jabatan");
    const resp = await req.json();
    setJabatan(resp.data);
  };

  const getPangkat = async () => {
    const req = await fetch("/api/pangkat");
    const resp = await req.json();
    setPangkat(resp.data);
  };
  const getEselon = async () => {
    const req = await fetch("/api/eselon");
    const resp = await req.json();
    setEselon(resp.data);
  };

  useEffect(() => {
    getJabatan();
    getPangkat();
    getEselon();
  }, []);

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
          <form onSubmit={handleSubmit(createHandler)}>
            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              data Pegawai
            </h6>
            {loading ? (
              <Lottie options={defaultOptions} height={400} width={400} />
            ) : (
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
                      // required
                      type="text"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "harus diisi",
                        },
                        minLength: {
                          value: 5,
                          message: "Harus Lebih Dari 5 karakter",
                        },
                      })}
                      name="name"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                    <div className="text-xs text-red-500 mt-2">
                      {errors.name && errors.name.message}
                    </div>
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
                      {...register("nip", {
                        required: {
                          value: true,
                          message: "harus diisi",
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: "harus angka",
                        },
                        minLength: {
                          value: 8,
                          message: "Harus Lebih Dari 8 karakter",
                        },
                      })}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                    <div className="text-xs text-red-500 mt-2">
                      {errors.nip && errors.nip.message}
                    </div>
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
                      required
                      onChange={(e) => {
                        setPhoto(e.currentTarget.files);
                      }}
                      type="file"
                      name="photo"
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
                    <Controller
                      control={control}
                      name="tgl_lahir"
                      rules={{
                        required: { value: true, message: "Harus diisi" },
                      }}
                      render={({ field }) => (
                        <DatePicker
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholderText="Select date"
                          dateFormat={"yyyy-MM-dd"}
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                        />
                      )}
                    />
                    <div className="text-xs text-red-500 mt-2">
                      {errors.tgl_lahir && errors.tgl_lahir.message}
                    </div>
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
                    <select
                      {...register("jenkel", {
                        required: {
                          value: true,
                          message: "Pilih salah satu",
                        },
                      })}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="">Pilih Gender</option>
                      <option value="Laki Laki">Laki Laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                    <div className="text-xs text-red-500 mt-2">
                      {errors.jenkel && errors.jenkel.message}
                    </div>
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
                    <select
                      {...register("unit_kerja", {
                        required: {
                          value: true,
                          message: "Pilih salah satu",
                        },
                      })}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="">Pilih Unit Kerja</option>
                      <option value="1">Kantor Kecamatan Ajangale</option>
                    </select>
                    <div className="text-xs text-red-500 mt-2">
                      {errors.unit_kerja && errors.unit_kerja.message}
                    </div>
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
                    <select
                      {...register("jabatan", {
                        required: {
                          value: true,
                          message: "Pilih salah satu",
                        },
                      })}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="">Pilih Jabatan</option>
                      {jabatan.map((val, key) => (
                        <option key={key} value={val.id}>
                          {val.value}
                        </option>
                      ))}
                    </select>
                    <div className="text-xs text-red-500 mt-2">
                      {errors.jabatan && errors.jabatan.message}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-5">
                    <label
                      className="block capitalize text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      TMT Jabatan
                    </label>
                    <Controller
                      control={control}
                      name="tmt_jabatan"
                      rules={{
                        required: { value: true, message: "Harus diisi" },
                      }}
                      render={({ field }) => (
                        <DatePicker
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholderText="Select date"
                          dateFormat={"yyyy-MM-dd"}
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                        />
                      )}
                    />
                    <div className="text-xs text-red-500 mt-2">
                      {errors.tmt_jabatan && errors.tmt_jabatan.message}
                    </div>
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
                    <select
                      {...register("pangkat", {
                        required: {
                          value: true,
                          message: "Pilih salah satu",
                        },
                      })}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="">Pilih Pangkat</option>
                      {pangkat.map((val, key) => (
                        <option key={key} value={val.id}>
                          {val.value}
                        </option>
                      ))}
                    </select>
                    <div className="text-xs text-red-500 mt-2">
                      {errors.pangkat && errors.pangkat.message}
                    </div>
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
                    <Controller
                      control={control}
                      name="tmt_pangkat"
                      rules={{
                        required: { value: true, message: "Harus diisi" },
                      }}
                      render={({ field }) => (
                        <DatePicker
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholderText="Select date"
                          dateFormat={"yyyy-MM-dd"}
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                        />
                      )}
                    />
                    <div className="text-xs text-red-500 mt-2">
                      {errors.tmt_pangkat && errors.tmt_pangkat.message}
                    </div>
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
                    <select
                      {...register("eselon", {
                        required: {
                          value: true,
                          message: "Pilih salah satu",
                        },
                      })}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="">Pilih Eselon</option>
                      {eselon.map((val, key) => (
                        <option key={key} value={val.id}>
                          {val.value}
                        </option>
                      ))}
                    </select>
                    <div className="text-xs text-red-500 mt-2">
                      {errors.eselon && errors.eselon.message}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-5">
                    <label
                      className="block capitalize text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Gaji Berkala Terakhir
                    </label>
                    <Controller
                      control={control}
                      name="gaji_berkala"
                      rules={{
                        required: { value: true, message: "Harus diisi" },
                      }}
                      render={({ field }) => (
                        <DatePicker
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholderText="Select date"
                          dateFormat={"yyyy-MM-dd"}
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                        />
                      )}
                    />
                    <div className="text-xs text-red-500 mt-2">
                      {errors.gaji_berkala && errors.gaji_berkala.message}
                    </div>
                  </div>
                </div>

                <div className="w-full px-4">
                  <button
                    type="submit"
                    className="py-3 px-3 rounded-md bg-slate-500"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
