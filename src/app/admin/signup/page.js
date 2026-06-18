"use client";
import { ModeToggle } from "@/app/components/ui/ModeToggle";
import { Outfit } from "next/font/google";
import { SimpleCheckbox } from "@/app/components/ui/SimpleCheckbox";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AdminSignUp() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div
        className={`${outfit.className}  relative z-1 bg-white p-6 dark:bg-gray-900 sm:p-0  -mt-[60px] lg:-mt-[70px] 2xl:-mt-[80px] 3xl:-mt-[90px]`}
      >
        <div className="relative flex h-screen w-full flex-col justify-center dark:bg-gray-900 sm:p-0 lg:flex-row">
          <div className=" no-scrollbar overflow-y-auto  flex w-full flex-1 flex-col lg:w-1/2  ">
            <div className="mx-auto  mb-5 w-full max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-4xl sm:pt-10">
              <Link
                className="inline-flex items-center text-sm 3xl:text-lg text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                href="/admin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12.708 5 7.5 10.208l5.208 5.209"
                  ></path>
                </svg>
                Back to dashboard
              </Link>
            </div>

            <div className="mx-auto flex w-full max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-4xl flex-1 flex-col justify-center">
              <div>
                <div className="mb-5 sm:mb-8">
                  <h1 className="text-2xl  lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-2 font-semibold text-gray-800 dark:text-white/90 sm:text-title-md">
                    Sign Up
                  </h1>

                  <p className="text-sm md:text-[16px]  xl:text-lg  text-gray-500 dark:text-gray-400">
                    Enter your email and password to sign up!
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
                    <button
                      onClick={() => signIn("google")}
                      className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-gray-100 px-7 py-3 text-sm font-normal text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
                          fill="#EB4335"
                        ></path>
                      </svg>
                      Sign up with Google
                    </button>

                    <button className="inline-flex  cursor-pointer items-center justify-center gap-3 rounded-lg bg-gray-100 px-7 py-3 text-sm font-normal text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                      <svg
                        width="21"
                        class="fill-current"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z"></path>
                      </svg>
                      Sign up with X
                    </button>
                  </div>

                  <div className="relative py-3 sm:py-5">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                    </div>

                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white p-2 text-gray-400 dark:bg-gray-900 sm:px-5 sm:py-2">
                        Or
                      </span>
                    </div>
                  </div>

                  <form>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                            First Name
                            <span className="text-[#FF725E]">*</span>
                          </label>

                          <div className="relative">
                            <input
                              id="fname"
                              placeholder="Enter your first name"
                              className="h-11 w-full rounded-lg transition-all duration-200 border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[#C9A84C] dark:border-gray-700 dark:focus:border-[#C9A84C]"
                              type="text"
                              name="fname"
                              autoComplete="first name"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-1">
                          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Last Name
                            <span className="text-[#FF725E]">*</span>
                          </label>

                          <div className="relative">
                            <input
                              id="lname"
                              placeholder="Enter your last name"
                              className="h-11 w-full rounded-lg transition-all duration-200 border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[#C9A84C] dark:border-gray-700 dark:focus:border-[#C9A84C]"
                              type="text"
                              name="lname"
                              autoComplete="last name"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                          Email <span className="text-[#FF725E]">*</span>
                        </label>

                        <div className="relative">
                          <input
                            placeholder="info@gmail.com"
                            // className="shadow-theme-xs h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                            className="h-11 w-full rounded-lg transition-all duration-200 border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[#C9A84C] dark:border-gray-700 dark:focus:border-[#C9A84C]"
                            type="email"
                            autoComplete="email"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                          Password <span className="text-[#FF725E]">*</span>
                        </label>

                        <div className="relative">
                          <div className="relative">
                            <input
                              placeholder="Enter your password"
                              className="h-11 w-full rounded-lg transition-all duration-200 border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[#C9A84C] dark:border-gray-700 dark:focus:border-[#C9A84C]"
                              type={showPassword ? "text" : "password"}
                              autoComplete="current-password"
                            />
                          </div>

                          <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 cursor-pointer"
                          >
                            {showPassword ? (
                              // Eye Open
                              <svg
                                className="fill-gray-500 dark:fill-gray-400"
                                width="20"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                class="lucide lucide-eye-icon lucide-eye"
                              >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="gray-500 dark:gray-400"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                                <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                                <path d="m2 2 20 20" />
                              </svg>
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <SimpleCheckbox />
                        </div>

                        <Link
                          className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                          href="/reset-password"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <div>
                        <button className="shadow-theme-xs inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white bg-[#FF725E] transition  hover:bg-[#FF725E]/85 cursor-pointer">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="mt-5">
                    <p className="text-center text-sm font-normal text-gray-700 dark:text-gray-400 sm:text-start">
                      Don't have an account?
                      <Link
                        className="ml-1  text-[#FF725E] transition  hover:text-[#FF725E]/85 cursor-pointer"
                        href="/admin/signin"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden  sigup_right h-full w-full items-center bg-brand-950 dark:bg-white/5 lg:grid lg:w-1/2">
            <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs absolute bottom-0 text-gray-400">
        Illustrations by
        <a href="https://storyset.com"> Storyset</a>
      </p>
    </>
  );
}
