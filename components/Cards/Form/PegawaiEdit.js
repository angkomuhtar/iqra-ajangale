import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import Router, { useRouter } from "next/router";
import Swal from "sweetalert2";
import animationData from "/components/9844-loading-40-paperplane";
import Lottie from "react-lottie";
import { useForm, Controller, setValue } from "react-hook-form";
import moment from "moment";
import axios from "axios";

// components

export default function PegawaiEdit() {
  const router = useRouter();
  const { id } = router.query;
  const getData = async () => {
    fetch(`/api/pegawai/${id}/edit`)
      .then((res) => {
        return res.json();
      })
      .then((resPegawai) => {
        setPegawai(resPegawai.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [loading, setLoading] = useState(false);
  const [jabatan, setJabatan] = useState([]);
  const [pegawai, setPegawai] = useState(null);
  const [pangkat, setPangkat] = useState([]);
  const [eselon, setEselon] = useState([]);
  const [photo, setPhoto] = useState([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  useEffect(() => {
    if (pegawai) {
      reset(pegawai);
      console.log("woee");
    }
  }, [pegawai]);

  const createHandler = (data) => {
    setLoading(true);

    axios
      .post(`/api/pegawai/${id}/update`, data)

      // fetch(`/api/pegawai/${id}/update`, {
      //   method: "POST",
      //   body: [data],
      // })
      //   .then((res) => {
      //     return res.json();
      //   })
      .then((json) => {
        const { status, message } = json.data;
        console.log(json);
        Swal.fire({
          text: message,
          icon: status == "ok" ? "success" : "error",
          title: status,
          confirmButtonText: "Oke Siip",
        }).then(() => {
          if (status == "ok") Router.push("/admin");
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
    getData();
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
                          selected={moment(field.value)._d}
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
                          selected={moment(field.value)._d}
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
                          selected={moment(field.value)._d}
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
                          selected={moment(field.value)._d}
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
                    className="py-3 px-3 rounded-md bg-blue-500 text-white"
                  >
                    Simpan
                  </button>
                  <button className="py-3 px-3 rounded-md bg-red-600 text-white ml-3">
                    Batal
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
