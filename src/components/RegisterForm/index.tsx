"use client";

import { passwordRegister } from "@/app/actions";
import { SocialLogins } from "../SocialLogins";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      if (formData.get("name") === "") {
        setError("Name is required");
        return;
      }

      if (formData.get("email") === "") {
        setError("Email is required");
        return;
      }

      if (formData.get("password") === "") {
        setError("Password is required");
        return;
      }

      const response = await passwordRegister(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/account");
      }
    } catch (e) {
      setError("Credentials are incorrect");
      console.error(e);
    }
  }

  return (
    <div className="mt-10 max-w-xl mx-auto p-4">
      <Card className="p-10 flex flex-col justify-center items-center gap-4">
        <form className="flex flex-col items-center " onSubmit={onSubmit}>
          <div className="my-2">
            <label htmlFor="name">Name</label>
            <Input type="text" name="name" id="name" />
          </div>

          <div className="my-2">
            <label htmlFor="email">Email Address</label>
            <Input type="email" name="email" id="email" />
          </div>

          <div className="my-2">
            <label htmlFor="password">Password</label>
            <Input type="password" name="password" id="password" />
          </div>

          <Button type="submit" variant="default">
            Sign Up
          </Button>
        </form>
        {error ? <div className="text-xl text-red-500">{error}</div> : null}
        <div className="flex gap-4 w-full justify-center mt-10">
          <SocialLogins />
          <Link href="/login">
            <Button type="button" variant="secondary">
              Sign In
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};
