"use client";

import { passwordLogin } from "@/app/actions";
import { SocialLogins } from "../SocialLogins";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    try {
      const formData = new FormData(event.currentTarget);

      if (formData.get("email") === "") {
        setError("Email is required");
        return;
      }

      if (formData.get("password") === "") {
        setError("Password is required");
        return;
      }

      const response = await passwordLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/account");
      }
      /* eslint-disable @typescript-eslint/no-explicit-any */
    } catch (e: any) {
      setError("Credentials are incorrect");
      console.error(e);
    }
  }

  return (
    <div className=" mt-10 max-w-xl mx-auto p-4">
      <Card className="flex flex-col justify-center items-center gap-4 p-10">
        <form className="flex flex-col items-center" onSubmit={onSubmit}>
          <div className="my-2">
            <label htmlFor="email">Email Address</label>
            <Input type="email" name="email" id="email" />
          </div>

          <div className="my-2">
            <label htmlFor="password">Password</label>
            <Input type="password" name="password" id="password" />
          </div>

          <Button type="submit" variant="default">
            Sign In
          </Button>
        </form>
        {error ? <div className="text-xl text-red-500">{error}</div> : null}
        <div className="flex gap-4 w-full justify-center mt-10">
          <SocialLogins />
          <Link href="/register">
            <Button type="button" variant="secondary">
              Sign Up
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};
