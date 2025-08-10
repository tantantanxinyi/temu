import { getCurrentSession, loginUser, registerUser } from "@/actions/auth";
import SignUp from "@/components/auth/SignUp";
import { error } from "console";
import { redirect } from "next/navigation";
import { emit } from "process";
import React, { act } from "react";
import zod, { email } from "zod";

const SignUpSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(5)
});
const SignUpPage = async () => {
  const { user } = await getCurrentSession();

  // check if  the user is already logged in
  if (user) {
    return redirect("/");
  }

  const action = async (prevState: any, formData: FormData) => {
    "use server";
    const parsed = SignUpSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
      return {
        message: "Invalid form data"
      };
    }
    const { email, password } = parsed.data;
    const { user, error } = await registerUser(email, password);
    if (error) {
      return {
        message: error
      };
    } else if (user) {
      await loginUser(email, password);
      return redirect("/");
    }
  };

  return <SignUp action={action} />;
};

export default SignUpPage;
