"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type LoginErrors = {
  name?: string
  email?: string
  password?: string
}

export default function LoginModal() {
  const [modalLogin, setModalLogin] = useState(true)
  const [loginDone, setLoginDone] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [loginErr, setLoginErr] = useState<LoginErrors>({})

  const closeModal = () => {
    setModalLogin(false)
  }

  const toggleLoginMode = () => {
    setIsRegister((prev) => !prev)
    setLoginErr({})
  }

  const handleChange = (field: keyof typeof login, value: string) => {
    setLogin((prev) => ({
      ...prev,
      [field]: value,
    }))

    setLoginErr((prev) => ({
      ...prev,
      [field]: undefined,
    }))
  }

  const submitLogin = () => {
    const errors: LoginErrors = {}

    if (isRegister && !login.name.trim()) {
      errors.name = "Full name is required."
    }

    if (!login.email.trim()) {
      errors.email = "Email or phone is required."
    }

    if (!login.password.trim()) {
      errors.password = "Password is required."
    }

    if (Object.keys(errors).length > 0) {
      setLoginErr(errors)
      return
    }

    setLoginErr({})
    setLoginDone(true)
  }

  if (!modalLogin) {
    return null
  }

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div>
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="relative bg-[#0F4C3A] px-8 py-7">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={closeModal}
            className="absolute right-6 top-[22px] h-[34px] w-[34px] rounded-full
                       bg-white/[0.12] text-white hover:bg-white/[0.2] hover:text-white"
            aria-label="Close"
          >
            ×
          </Button>

          <span
            className="text-2xl font-extrabold tracking-[-1px] text-white"
            style={{ fontFamily: "MuseoModerno" }}
          >
            TMO
          </span>

          <h3
            className="mt-2.5 text-2xl font-bold text-white"
            style={{ fontFamily: "MuseoModerno" }}
          >
            {isRegister ? "Create your account" : "Welcome back"}
          </h3>
        </div>

        {/* Success state */}
        {loginDone && (
          <div className="px-9 py-[46px] text-center">
            <div className="mx-auto mb-[22px] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#3CB371] text-4xl">
              ✓
            </div>

            <h3
              className="mb-3 text-2xl font-bold text-[#0F4C3A]"
              style={{ fontFamily: "MuseoModerno" }}
            >
              {isRegister ? "Account created!" : "Login successful!"}
            </h3>

            <p
              className="mb-[26px] text-base text-[#41514A]"
              style={{ fontFamily: "Urbanist" }}
            >
              Welcome back to your TMO dashboard.
            </p>

            <Button
              type="button"
              onClick={closeModal}
              className="rounded-xl bg-[#FBC02D] px-7 py-3.5 font-bold text-[#0A1F18]
                         hover:bg-[#ffce4d]"
              style={{ fontFamily: "Urbanist" }}
            >
              Continue
            </Button>
          </div>
        )}

        {/* Form */}
        {!loginDone && (
          <div className="flex flex-col gap-4 px-8 pb-8 pt-[30px]">
            {/* Name */}
            {isRegister && (
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="name"
                  className="text-[13px] font-semibold"
                  style={{ fontFamily: "Urbanist" }}
                >
                  Full Name
                </Label>

                <Input
                  id="name"
                  value={login.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your name"
                  className={`h-auto rounded-[11px] border-[1.5px] bg-white px-[15px] py-[13px]
                    text-[15px] outline-none focus-visible:ring-0 ${loginErr.name
                      ? "border-[#D14343]"
                      : "border-[#d6ded9] focus:border-[#0F4C3A]"
                    }`}
                  style={{ fontFamily: "Urbanist" }}
                />

                {loginErr.name && (
                  <span
                    className="text-[12.5px] text-[#D14343]"
                    style={{ fontFamily: "Urbanist" }}
                  >
                    {loginErr.name}
                  </span>
                )}
              </div>
            )}

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="email"
                className="text-[13px] font-semibold"
                style={{ fontFamily: "Urbanist" }}
              >
                Email or Phone
              </Label>

              <Input
                id="email"
                value={login.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@email.com"
                className={`h-auto rounded-[11px] border-[1.5px] bg-white px-[15px] py-[13px]
                  text-[15px] outline-none focus-visible:ring-0 ${loginErr.email
                    ? "border-[#D14343]"
                    : "border-[#d6ded9] focus:border-[#0F4C3A]"
                  }`}
                style={{ fontFamily: "Urbanist" }}
              />

              {loginErr.email && (
                <span
                  className="text-[12.5px] text-[#D14343]"
                  style={{ fontFamily: "Urbanist" }}
                >
                  {loginErr.email}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="password"
                className="text-[13px] font-semibold"
                style={{ fontFamily: "Urbanist" }}
              >
                Password
              </Label>

              <Input
                id="password"
                type="password"
                value={login.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="••••••••"
                className={`h-auto rounded-[11px] border-[1.5px] bg-white px-[15px] py-[13px]
                  text-[15px] outline-none focus-visible:ring-0 ${loginErr.password
                    ? "border-[#D14343]"
                    : "border-[#d6ded9] focus:border-[#0F4C3A]"
                  }`}
                style={{ fontFamily: "Urbanist" }}
              />

              {loginErr.password && (
                <span
                  className="text-[12.5px] text-[#D14343]"
                  style={{ fontFamily: "Urbanist" }}
                >
                  {loginErr.password}
                </span>
              )}
            </div>

            {/* Submit */}
            <Button
              type="button"
              onClick={submitLogin}
              className="mt-1 h-auto rounded-[13px] bg-[#FBC02D] px-4 py-4 text-base
                         font-bold text-[#0A1F18] hover:bg-[#ffce4d]"
              style={{ fontFamily: "Urbanist" }}
            >
              {isRegister ? "Create Account" : "Login"}
            </Button>

            {/* Toggle */}
            <p
              className="mt-1 text-center text-[13.5px] text-[#5B6B63]"
              style={{ fontFamily: "Urbanist" }}
            >
              {isRegister
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={toggleLoginMode}
                className="font-bold text-[#0F4C3A] hover:underline"
              >
                {isRegister ? "Login" : "Register"}
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
