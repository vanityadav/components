import VList from "@/components/virtualization";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <h1 className="text-5xl">Hello</h1>
      <div className="flex-1 overflow-y-auto">
        <VList rowHeight={24} offset={6} newAdd={20} defaultSize={50} />
      </div>
      <h1 className="text-5xl">Hello</h1>
    </div>
  );
}
