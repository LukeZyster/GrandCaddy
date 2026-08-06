import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl items-center justify-between px-10 py-24">
      <div className="max-w-xl">

        <h1 className="text-6xl font-bold leading-tight">
          Caring Made
          <span className="text-[#0B5FFF]"> Simple.</span>
        </h1>

        <p className="mt-8 text-lg text-gray-500">
          Connecting families with trusted companions who provide
          care, support and peace of mind.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="rounded-full bg-[#0B5FFF] px-8 py-4 text-white">
            Get Started
          </button>

          <button className="rounded-full border px-8 py-4">
            Learn More
          </button>

        </div>

      </div>

      <img
        src={hero}
        className="w-[500px]"
        alt="GrandCaddy"
      />
    </section>
  );
}