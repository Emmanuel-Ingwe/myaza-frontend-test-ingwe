"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavigationLink from "../../src/components/layout/NavigationLink";
import Image from "next/image";
import Input from "@/components/global/Input";

const Navigation = () => {
  const pathname = usePathname();

  const router = useRouter();

  const links = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: (
        <Image
          src="/icons/dashboard-icon.svg"
          alt="dashboard"
          width={20}
          height={20}
        />
      ),
    },
    {
      name: "User Management",
      to: "/userManagement",
      icon: (
        <Image
          src="/icons/shopping-bag.svg"
          alt="dashboard"
          width={20}
          height={20}
        />
      ),
    },
    {
      name: "Transactions",
      to: "/transactions",
      icon: (
        <Image
          src="/icons/bar-chart.svg"
          alt="dashboard"
          width={20}
          height={20}
        />
      ),
    },
    {
      name: "Reporting",
      to: "/reporting",
      icon: (
        <Image
          src="/icons/announcement.svg"
          alt="dashboard"
          width={20}
          height={20}
        />
      ),
    },
    {
      name: "Administrator",
      to: "/administrator",
      icon: (
        <Image
          src="/icons/announcement.svg"
          alt="dashboard"
          width={20}
          height={20}
        />
      ),
    },
    {
      name: "Settings",
      to: "/settings",
      icon: (
        <Image
          src="/icons/announcement.svg"
          alt="dashboard"
          width={20}
          height={20}
        />
      ),
    },
  ];

  return (
    <>
      <nav className="hidden bg-[#2D2B4D] lg:block w-[280px] h-screen fixed pt-5">
        <div className=" flex items-center justify-between pt-6 pl-7 pb-4">
          <Image
            src="/icons/logo-dashboard.svg"
            alt="logo"
            height={25}
            width={130}
          />
        </div>
        <Link href="/dashboard" className="flex pb-6 text-black-10 py-7 pl-6">
          Main Menu
        </Link>
        <div className="flex flex-col justify-between">
          <ul className="px-2.5 space-y-2">
            {links.map((link) => {
              return <NavigationLink key={link.name} link={link} />;
            })}
          </ul>
        </div>

        <div className="flex items-center bg-Asecondary mx-3 rounded-lg p-3 mb-14">
          <Image
            src="/icons/bitmoji.svg"
            alt="bitmoji"
            width={34}
            height={34}
          />
          <div className="justfy-center flex flex-col text-white pl-3">
            <h1 className="text-sm">John Doe</h1>
            <p className="text-xs">Admin</p>
          </div>
        </div>

        <div className="px-2.5">
          <button
            onClick={() => {
              router.push("/auth/login");
            }}
            className={cn(
              "block transition-all rounded-lg w-full text-black-10 px-4 py-3"
            )}>
            <div className="flex items-center space-x-6">
              <div className={cn("fill-white transition-all", {})}>
                <Image
                  src="/icons/logout.svg"
                  alt="logout"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-base text-status-error-100">Logout</div>
            </div>
            <div></div>
          </button>
        </div>
      </nav>
      {/* <div className='relative'>
				<nav className='lg:hidden bg-[#173E62] w-screen fixed z-50 bottom-0 left-0 right-0'>
					<div className='flex items-center space-x-8 justify-between py-2'>
						<ul className='flex items-center'>
							{mobileLinks.slice(0, 2).map((link) => {
								return <NavigationLink key={link.name} link={link} />;
							})}
						</ul>
						<ul className='flex items-center'>
							{mobileLinks.slice(2, 4).map((link) => {
								return <NavigationLink key={link.name} link={link} />;
							})}
						</ul>
					</div>
					<div className='flex justify-center items-center absolute -top-1/2 left-1/2 transform -translate-x-1/2 size-16 rounded-full bg-white'>
						<div className='flex justify-center items-center shadow-2xl border-2 border-gray-100 size-14 rounded-full'>
							<Icons.PlusIcon className='fill-primary' />
						</div>
					</div>
				</nav>
			</div> */}
    </>
  );
};

export default Navigation;
