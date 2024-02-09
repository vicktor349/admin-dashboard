import BarChart from "@/components/BarChart";
import SideNavbar from "@/components/SideNavbar";
import Head from "next/head";
export default function Home()
{
  return (
    <div>
      <Head>
        <title>Admin | Dashboard</title>
      </Head>
      <main className="font-Poppins grid grid-cols-28">
        <div className="col-start-1 col-end-2">
          <SideNavbar />
        </div>
        <div className="col-start-2 col-end-8 mt-5">
          <BarChart />
        </div>
      </main>
    </div>
  );
}
