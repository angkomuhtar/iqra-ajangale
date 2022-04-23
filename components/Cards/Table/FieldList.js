import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import { MdCloudDownload } from "react-icons/md";
import Link from "next/link";

const FieldList = ({ data }) => {
  return (
    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <div className="flex items-center justify-center">
        <span className="mr-2 text-lg text-red-700">
          {data == null ? (
            <BsFillXCircleFill />
          ) : (
            <a
              href={`/berkas/56/${data}`}
              target="_blank"
              className="flex justify-center items-center"
            >
              <MdCloudDownload />{" "}
              <span className="ml-2 text-xs font-light">lihat</span>
            </a>
          )}
        </span>
      </div>
    </td>
  );
};

export default FieldList;
