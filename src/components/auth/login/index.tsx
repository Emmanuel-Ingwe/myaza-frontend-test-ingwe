"use client";

import Button from "@/components/global/Button";
import Checkbox from "@/components/global/Checkbox";
import Input from "@/components/global/Input";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Testimonial {
  text: string;
  author: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    text: "I’ve been using Uifry for over a year, and it’s helped simplify all my payments.",
    author: "Ali Riaz",
    location: "Singapore",
  },
  {
    text: "Uifry changed the way I handle my finances. Super intuitive and easy to use!",
    author: "Sophia Lee",
    location: "USA",
  },
  {
    text: "Best financial dashboard out there. Highly recommend!",
    author: "Carlos Mendes",
    location: "Brazil",
  },
];

const Login = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const router = useRouter();

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { errors, isValid },
    watch,
  } = methods;

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      router.push("/dashboard");
    } catch (error: any) {}
  };

  return (
    <div className="w-full bg-[#1D1D41] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-y-5">
      <main className="col-span-1 order-2 lg:order-1 flex items-center justify-center">
        <div className="space-y-4 lg:space-y-12 text-center w-full max-lg:container lg:max-w-[491px] lg:px-4">
          <div className="flex items-center justify-center">
            <Image
              src={"/images/logo-signup.svg"}
              alt="logo"
              height={50}
              width={174}
            />
          </div>
          <div className="space-y-1 lg:space-y-2">
            <h1 className="text-black-500 text-[35px] font-bold">
              Welcome back, Ali Riaz 🙇🏾‍♀️
            </h1>
            <h1 className="text-[13px] lg:text-[16px] font-normal text-[#DCD9D9]">
              Login to access your Uifry Account
            </h1>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="space-y-4 lg:space-y-6">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="E.g Aliriaz@Uifry.com"
                  rules={["required", "email"]}
                  paddingRight="pr-18"
                  width="491px"
                />

                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="********"
                  rules={["required"]}
                />
              </div>
              <div className="mt-6 flex items-center space-x-4 justify-end">
                <button className="text-[16px] text-[#DCD9D9] text-primary font-semibold">
                  I Forgot My Password!
                </button>
              </div>
              <div className="max-w-full my-11 lg:mt-12 mx-auto">
                <Button
                  type="submit"
                  disabled={!isValid}
                  className="w-full bg-[#CBC8FF] border-none text-[#1D1D41]">
                  Login
                </Button>
                <p className="text-[16px] mt-3.5">
                  Not Ali Riaz?{" "}
                  <a href="" className="underline">
                    Login To Continue
                  </a>
                </p>
              </div>
            </form>
          </FormProvider>
        </div>
      </main>

      <aside className="bg-[#141332] col-span-1 lg:order-2 py-1.5 lg:py-5 max-lg:container lg:px-0 ">
        {/* Sliding Testimonial Section */}
        <div className="max-w-xl m-15 ml-24">
          <div className="flex mb-3">
            <Image
              src="/icons/star-rating.svg"
              alt="Dashboard Preview"
              height={24}
              width={117}
              className=""
            />
          </div>
          <p className="text-3xl font-bold mb-4 transition-opacity duration-500">
            "{testimonials[index].text}"
          </p>
          <p className="text-lg font-semibold text-gray-400">
            {testimonials[index].author}
          </p>
          <p className="text-sm font-semibold text-gray-400">
            {testimonials[index].location}
          </p>
        </div>

        {/* Large Dashboard Image */}
        <div className="absolute bottom-0 right-0 w-2xl justify-center hidden lg:block">
          <Image
            src="/images/bg-image.png"
            alt="Dashboard Preview"
            height={584}
            width={919}
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </aside>
    </div>
  );
};

export default Login;
