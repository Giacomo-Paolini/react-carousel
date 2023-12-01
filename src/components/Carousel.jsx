import images from "../data/store";

export default function Carousel() {
  return (
    <div className="flex flex-row max-w-[1200px] bg-red-400">
      <button>Prev</button>

      <div className="">
        <div className="">
          <img src={images[0]} alt="" />
        </div>
      </div>

      <button>Next</button>
    </div>
  );
}
