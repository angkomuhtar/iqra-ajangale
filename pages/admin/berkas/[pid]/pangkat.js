import React, { useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";
import { IoCloudUploadOutline, IoFolderOpenOutline } from "react-icons/io5";
import FileInput from "components/FileInput";

function Pangkat({ response }) {
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
                  Berkas Kenaikan Pangkat
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
                      label="Surat Pengantar Pimpinan"
                      fileValue={pegawai?.pengantar_pimpinan}
                      field="pengantar_pimpinan"
                      id={pid}
                    />
                    <FileInput
                      label="Kartu Pegawai"
                      fileValue={pegawai?.karpeg}
                      field="karpeg"
                      id={pid}
                    />
                    <FileInput
                      label="SK CPNS"
                      fileValue={pegawai?.cpns}
                      field="cpns"
                      id={pid}
                    />
                    <FileInput
                      label="SK Pangkat"
                      fileValue={pegawai?.sk_pangkat}
                      field="sk_pangkat"
                      id={pid}
                    />
                    <FileInput
                      label="SK Pengangkatan"
                      fileValue={pegawai?.pengangkatan_jabatan}
                      field="pengangkatan_jabatan"
                      id={pid}
                    />
                    <FileInput
                      label="Surat Pernyataan Pelantikan"
                      fileValue={pegawai?.penyataan_pelantikan}
                      field="penyataan_pelantikan"
                      id={pid}
                    />
                    <FileInput
                      label="Konversi NIP"
                      fileValue={pegawai?.konversi_nip}
                      field="konversi_nip"
                      id={pid}
                    />
                    <FileInput
                      label="SKP 2 Tahun Terakhir"
                      fileValue={pegawai?.skp_2tahun}
                      field="skp_2tahun"
                      id={pid}
                    />
                    <FileInput
                      label="STLUD"
                      fileValue={pegawai?.stlud}
                      field="stlud"
                      id={pid}
                    />
                    <FileInput
                      label="SK LATPIM"
                      fileValue={pegawai?.latpim}
                      field="latpim"
                      id={pid}
                    />
                    <FileInput
                      label="Ijazah & transkrip"
                      fileValue={pegawai?.ijazah_transkrip}
                      field="ijazah_transkrip"
                      id={pid}
                    />
                    <FileInput
                      label="SK Kenaikan Pangkat Pimpinan"
                      fileValue={pegawai?.kenaikan_pangkat_pimpinan}
                      field="kenaikan_pangkat_pimpinan"
                      id={pid}
                    />
                    <FileInput
                      label="Pembebasan Jabatan Fungsional"
                      fileValue={pegawai?.pembebasan_jabatan_fungsional}
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

Pangkat.layout = Admin;

export default Pangkat;
