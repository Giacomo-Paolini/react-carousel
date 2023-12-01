import images from "../data/store";

export default function Carousel() {
  return (
    <div className="flex items-center gap-6 max-w-[1200px]">
      <button className="p-4 bg-blue-500">Prev</button>

      <div className="relative">
        <div className="">
          <img src={images[0]} alt="" />
        </div>
        <div className="p-4 absolute bottom-0 text-white w-full bg-[rgba(80,80,80,0.5)]">
          <h1>Primo Post</h1>
        </div>
      </div>

      <button className="p-4 bg-blue-500">Next</button>

    </div>
  );
}
