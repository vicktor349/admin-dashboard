import TrendSales from "@/components/TrendSales";
import SideNavbar from "@/components/SideNavbar";
import Head from "next/head";
import Total from "@/components/Total";
import { TotalOrderData, TotalRefundData } from "@/data/data";


export default function Home()
{
  return (
    <div>
      <Head>
        <title>Admin | Dashboard</title>
      </Head>
      <main className="font-Poppins flex">
        <div>
          <SideNavbar />
        </div>
        <div className="mt-5 ml-24">
          <TrendSales />
        </div>
        <div className="mt-5 ml-6 grid grid-cols-2 gap-6">
          <Total src={"images/totalorder.svg"}
            alt="refund chart" data={TotalOrderData}
            stroke="#82ca9d" fill="#82ca9d"
            total="Total Order" totalNumber="350"
            profits="37.50%"
            backgroundColor="bg-[#34caa5]/10"
            textColor="text-[#34caa5]"
          />
          <Total src={"images/totalrefund.svg"}
            alt="refund chart" data={TotalRefundData}
            stroke="#ED544E" fill="#ED544E"
            total="Total Refund" totalNumber="270"
            profits="-33.33%"
            backgroundColor="bg-[#ef716c]/10"
            textColor="text-[#ef716c]"
          />
          <Total src={"images/averagesales.svg"}
            alt="refund chart" data={TotalOrderData}
            stroke="#EF716C" fill="#EF716C"
            total="Average Sales" totalNumber="1567"
            profits="-17.65%"
            backgroundColor="bg-[#ef716c]/10"
            textColor="text-[#ef716c]"
            fillColor="text-[#ef716c]"
          />
          <Total src={"images/totalincome.svg"}
            alt="refund chart" data={TotalOrderData}
            stroke="#82ca9d" fill="#82ca9d"
            total="Total Income" totalNumber="$350,000"
            profits="62.50%"
            backgroundColor="bg-[#34caa5]/10"
            textColor="text-[#34caa5]"
          />
        </div>
      </main>
    </div>
  );
}
