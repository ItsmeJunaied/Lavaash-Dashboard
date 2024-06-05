import ECommerce from "../components/Dashboard/E-commerce";
import DefaultLayout from "../components/Layouts/DefaultLayout";

export const metadata = {
  title:
    "Lavaash Dashboard",
  description: "Lavaash Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
