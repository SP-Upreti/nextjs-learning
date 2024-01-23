import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h2><span className="font-bold text-4xl">Learning Next js</span></h2>
      <div className="w-full py-4">
      <h2>1. Static route path - <span className="font-bold">/staticroute</span></h2>
      <p  className="pb-4 px-4">To get the page name we use params.foldername  </p>
        <h2>2. Dynamic route path - <span className="font-bold">/[routeName]</span></h2>
      </div>
    </main>
  );
}
