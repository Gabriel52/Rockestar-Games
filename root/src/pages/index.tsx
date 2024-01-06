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
      <h1 className="text-red-700">Micro-frontends Next JS </h1>
    </>
  );
}