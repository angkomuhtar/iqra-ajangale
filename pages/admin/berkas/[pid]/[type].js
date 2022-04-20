import React, { useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";

function Tables({ response }) {
  const [pegawai, setPegawai] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { type, pid } = router.query;
  const getData = async (id) => {
    const res = await fetch(`/api/pegawai/${id}/berkas`);
    const resPegawai = await res.json();
    setPegawai(resPegawai.data);
    console.log(resPegawai.data);
  };

  useEffect(() => {
    //   const res = await fetch(`${process.env.BASE_URL}/api/pegawai`);
    getData(pid);
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-slate-700 text-xl font-bold capitalize">
                  Berkas {type} {pegawai?.name}
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={() => {}}>
                <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
                  data Pegawai
                </h6>
                {!pegawai ? (
                  // <Lottie options={defaultOptions} height={400} width={400} />
                  <h4>tidak dapat</h4>
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
                          name="name"
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div className="text-xs text-red-500 mt-2"></div>
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
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;

export default Tables;
