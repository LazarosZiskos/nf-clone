"use client";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [code, setCode] = useState();
  const { isLoaded, signUp, setActive } = useSignUp();

  const handleSubmit = () => {};

  const router = useRouter();
  return <div>sign-up page</div>;
}
