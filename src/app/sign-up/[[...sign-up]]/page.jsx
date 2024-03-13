"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { useSignUp } from "@clerk/nextjs";
import Image from "next/image";

const signUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        email_address: email,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt="background-image"
      />

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      {!pendingVerification && (
        <form
          className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0
      md:max-w-md md:px-14"
        >
          <h1 className="text-4xl font-semibold">Sign Up</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                className="input"
                onChange={emailHandler}
              />
            </label>
            <label className="inline-block w-full">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="input"
                onChange={passwordHandler}
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-[#e50914] py-3 font-semibold"
            onClick={handleSubmit}
          >
            Sign Up
          </button>

          <div className="text-[gray]">
            Already have an account?{" "}
            <Link href="/login" className="text-white hover:underline">
              Sign in now
            </Link>
          </div>
        </form>
      )}

      {pendingVerification && (
        <form
          className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0
      md:max-w-md md:px-14"
        >
          <h1 className="text-4xl font-semibold">Verification</h1>
          <div className="space-y-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Verification Code"
              className="input"
              onChange={(e) => setCode(e.target.value)}
            />

            <button
              type="submit"
              className="w-full rounded bg-[#e50914] py-3 font-semibold"
              onClick={onPressVerify}
            >
              Sign Up
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default signUp;
