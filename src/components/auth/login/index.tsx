"use client";

import Button from "@/components/global/Button";
import Checkbox from "@/components/global/Checkbox";
import Input from "@/components/global/Input";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

const Login = () => {
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
    <div className="w-full bg-white min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-y-5">
      <main className="col-span-1 order-2 lg:order-1 flex items-center justify-center">
        <div className="space-y-4 lg:space-y-12 w-full max-lg:container lg:max-w-[491px] lg:px-4">
          <div className="">
            <Image src={"/icons/logo.svg"} alt="logo" height={50} width={174} />
          </div>
          <div className="space-y-1 lg:space-y-2">
            <h1 className="text-black-500 text-[35px] font-bold">Sign In</h1>
            <h1 className="text-[13px] lg:text-[15px] font-normal text-black-10">
              Welcome Back! Please enter your details
            </h1>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="space-y-4 lg:space-y-6">
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email address"
                  rules={["required", "email"]}
                  paddingRight="pr-18"
                  width="491px"
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  rules={["required"]}
                  right={
                    <div className="w-9">
                      <Image
                        src="/icons/unhide.svg"
                        alt="unhide"
                        height={24}
                        width={24}
                      />
                    </div>
                  }
                />
              </div>
              <div className="mt-6 flex items-center space-x-4 justify-between">
                <Checkbox
                  name="rememberMe"
                  id="rememberMe"
                  label="Keep me logged in"
                  labelClassName="text-sm"
                />
                <button className="text-sm text-primary font-semibold">
                  Forgot Password?
                </button>
              </div>
              <div className="max-w-full my-11 lg:mt-20 mx-auto">
                <Button type="submit" disabled={!isValid} className="w-full">
                  Sign In
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </main>
      <aside className="col-span-1 lg:order-2 py-1.5 lg:py-5 max-lg:container lg:px-10">
        <div className="relative h-[366px] lg:h-full">
          <div className="absolute w-full h-full rounded-2xl">
            <Image
              src="/images/admin-cover.png"
              alt="admin-cover"
              height={1000}
              width={1000}
              layout="fit"
              className="size-full object-cover rounded-lg bg-cover"
            />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Login;
