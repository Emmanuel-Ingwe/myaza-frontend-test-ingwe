import Header from "@/components/layout/Header";
import Navigation from "../../../public/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "UIFRY | %s",
    default: "UIFRY",
  },
  description: "Transactions made easy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://",
    title: "UIFRY",
    description: "UIFRY is a platform that makes transactions easy",
    images: [
      {
        url: "/icons/logo.svg",
        width: 1200,
        height: 630,
        alt: "PAVA",
      },
    ],
    siteName: "UIFRY",
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="flex h-screen">
      <Navigation />
      <div className="w-full lg:ml-[278px] lg:w-[calc(100%-278px)]">
        <div className="">
          {/* <Header /> */}
          <Header />
        </div>
        <main className="bg-[#1D1D41] max-lg:container lg:w-full min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] py-4 lg:p-7 mt-[72px] lg:mt-0 max-lg:pb-20">
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;
