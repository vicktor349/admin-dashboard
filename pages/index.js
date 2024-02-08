import BarChart from "@/components/BarChart";
import SideNavbar from "@/components/SideNavbar";
import TrendSales from "@/components/TrendSales";
import Head from "next/head";
export default function Home()
{
  return (
    <div>
      <Head>
        <title>Admin | Dashboard</title>
      </Head>
      <main className="font-Poppins grid grid-cols-12">
        <div className="col-start-1 col-end-2">
          <SideNavbar />
        </div>
        <div className="col-start-2 col-end-8">
          <BarChart />
        </div>
      </main>
    </div>
  );
}
