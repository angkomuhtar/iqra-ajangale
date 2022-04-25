import React, { useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";
import { IoCloudUploadOutline, IoFolderOpenOutline } from "react-icons/io5";
import FileInput from "components/FileInput";

function Kp4({ response }) {
  const [pegawai, setPegawai] = useState([]);
  const [pangkat, setPangkat] = useState({
    pengantar_pimpinan: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { type, pid } = router.query;
  const getData = async (id) => {
    const res = await fetch(`/api/pegawai/${id}/berkas`);
    const resPegawai = await res.json();
    setPegawai(resPegawai.data);
  };

  useEffect(() => {
    //   const res = await fetch(`${process.env.BASE_URL}/api/pegawai`);
    getData(pid);
  }, [pid]);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="flex justify-between">
                <h6 className="text-slate-700 text-xl font-bold capitalize">
                  Berkas Gaji Berkala
                  <p className="text-sm font-light mt-">{pegawai?.name}</p>
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
                  <div className="grid grid-cols-3 gap-2">
                    <FileInput
                      label="Surat Pengatar Pimpinan"
                      fileValue={pegawai?.pengantar_pimpinan}
                      field="pengantar_pimpinan"
                      id={pid}
                    />
                    <FileInput
                      label="KGB"
                      fileValue={pegawai?.kgb}
                      field="kgb"
                      id={pid}
                    />
                    <FileInput
                      label="SK Kenaikan Pangkat"
                      fileValue={pegawai?.kenaikan_pangkat}
                      field="kenaikan_pangkat"
                      id={pid}
                    />
                    <FileInput
                      label="SK Pelantikan Terakhir"
                      fileValue={pegawai?.pelantikan_terakhir}
                      field="pelantikan_terakhir"
                      id={pid}
                    />
                    <FileInput
                      label="SKP 1 Tahun Terakhir"
                      fileValue={pegawai?.skp_1tahun}
                      field="skp_1tahun"
                      id={pid}
                    />
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

Kp4.layout = Admin;

export default Kp4;
