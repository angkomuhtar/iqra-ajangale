import React, { useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";
import { IoCloudUploadOutline, IoFolderOpenOutline } from "react-icons/io5";
import FileInput from "components/FileInput";

function Pensiun({ response }) {
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
                  Berkas kp4
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
                      label="DSK"
                      fileValue={pegawai?.daftar_susunan_keluarga}
                      field="daftar_susunan_keluarga"
                      id={pid}
                    />
                    <FileInput
                      label="Ket. Tidak Pernah Hukuman Disiplin"
                      fileValue={pegawai?.tidak_pernah_pidana}
                      field="tidak_pernah_pidana"
                      id={pid}
                    />
                    <FileInput
                      label="Ket. Tidak Sedang Hukuman Pidana"
                      fileValue={pegawai?.tidak_sedang_pidana}
                      field="tidak_sedang_pidana"
                      id={pid}
                    />
                    <FileInput
                      label="Pernyataan Anak Kandung (Materai 10.000)"
                      fileValue={pegawai?.anak_kandung}
                      field="anak_kandung"
                      id={pid}
                    />

                    <FileInput
                      label="Akta Nikah"
                      fileValue={pegawai?.ket_kuliah}
                      field="ket_kuliah"
                      id={pid}
                    />
                    <FileInput
                      label="SK CPNS"
                      fileValue={pegawai?.cpns}
                      field="cpns"
                      id={pid}
                    />

                    <FileInput
                      label="SK PNS"
                      fileValue={pegawai?.pns}
                      field="pns"
                      id={pid}
                    />
                    <FileInput
                      label="SK kenaikan pangkat"
                      fileValue={pegawai?.kenaikan_pangkat}
                      field="kenaikan_pangkat"
                      id={pid}
                    />
                    <FileInput
                      label="Kartu Keluarga"
                      fileValue={pegawai?.kartu_keluarga}
                      field="kartu_keluarga"
                      id={pid}
                    />
                    <FileInput
                      label="Akta Nikah"
                      fileValue={pegawai?.akta_nikah}
                      field="akta_nikah"
                      id={pid}
                    />
                    <FileInput
                      label="Akta Kematian"
                      fileValue={pegawai?.akta_kematian}
                      field="akta_kematian"
                      id={pid}
                    />
                    <FileInput
                      label="Akta Kelahiran Anak"
                      fileValue={pegawai?.akta_kelahiran_anak}
                      field="akta_kelahiran_anak"
                      id={pid}
                    />
                    <FileInput
                      label="SKP 1 Tahun"
                      fileValue={pegawai?.skp_1tahun}
                      field="skp_1tahun"
                      id={pid}
                    />
                    <FileInput
                      label="SK Mutasi"
                      fileValue={pegawai?.mutasi_jabatan}
                      field="mutasi_jabatan"
                      id={pid}
                    />
                    <FileInput
                      label="Pas Photo 3x4"
                      fileValue={pegawai?.photo3x4}
                      field="photo3x4"
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

Pensiun.layout = Admin;

export default Pensiun;
