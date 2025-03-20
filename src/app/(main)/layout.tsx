import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "PAVA | %s",
    default: "PAVA",
  },
  description: "Transactions made easy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pava.com",
    title: "PAVA",
    description: "Pava is a platform that makes transactions easy",
    images: [
      {
        url: "/icons/logo.svg",
        width: 1200,
        height: 630,
        alt: "PAVA",
      },
    ],
    siteName: "PAVA",
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
          <Header />
        </div>
        <main className="bg-white max-lg:container lg:w-full min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] py-4 lg:p-7 mt-[72px] lg:mt-0 max-lg:pb-20">
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;
