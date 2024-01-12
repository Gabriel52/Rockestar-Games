import { HomeScreen } from "@src/modules/HomeScreen";
import dynamic from "next/dynamic";

const Header = dynamic(
  () => import("design/component/Header").then((m) => m.Header),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <Header />
      <HomeScreen />
    </>
  );
}