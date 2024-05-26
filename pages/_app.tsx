import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/Main";
import DashboardLayout from "@/layouts/Dashboard";
import { useRouter } from "next/router";

const dashboardLayoutList = ["/dashboard"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return dashboardLayoutList.includes(router.pathname) ? (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  ) : (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
