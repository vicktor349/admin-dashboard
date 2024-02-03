import SalesTrend from "@/components/SalesTrend";
import SideNavbar from "@/components/SideNavbar";
import Head from "next/head";
export default function Home()
{
  return (
    <div>
      <Head>
        <title>Admin | Dashboard</title>
      </Head>
      <main className="font-Poppins grid grid-cols-2">
        <div className="grid-2">
          <SideNavbar />
        </div>
        <div>
          <SalesTrend />
        </div>
      </main>
    </div>
  );
}
