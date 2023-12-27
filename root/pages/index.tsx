import dynamic from "next/dynamic";

const Header = dynamic(
  () => import("home/modules/Home").then((m) => m.Header),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <h1>Micro-frontends Next JS </h1>

      <Header />
    </>
  );
}