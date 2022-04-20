import React, { useState, useEffect } from "react";
import Link from "next/link";
import Auth from "layouts/Auth.js";
import Swal from "sweetalert2";
import Router from "next/router";
import animationData from "/components/9844-loading-40-paperplane";
import Lottie from "react-lottie";

export default function Login() {
  const [field, setField] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const formHandler = async () => {
    if (field.username == "" || field.password == "") {
      Swal.fire({
        text: "Data Belum Lengkap",
        title: "Info",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      setLoading(true);
      fetch("api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(field),
      })
        .then((res) => {
          if (!res.ok) {
            if (res.status == 401) {
              Swal.fire({
                text: "Pengguna Tidak Ditemukan",
                title: "Perhatian",
                icon: "warning",
                timer: 2000,
                showConfirmButton: false,
              });
            }
          } else {
            Router.push("/admin/dashboard");
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        {loading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                <div className="rounded-t mb-0 p-3 flex justify-center bg-slate-500">
                  <div className="btn-wrapper text-center">
                    <img className="mr-1 w-[12rem]" src="/img/brand/iqra.png" />
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10">
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        onChange={(e) => {
                          setField({
                            ...field,
                            username: e.target.value,
                          });
                        }}
                        type="text"
                        value={field.username}
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Username"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        onChange={(e) => {
                          setField({
                            ...field,
                            password: e.target.value,
                          });
                        }}
                        value={field.password}
                        type="password"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        onClick={() => formHandler()}
                        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Login.layout = Auth;
