const services = [
  "Home Care",
  "Companionship",
  "Transport",
  "Medication Pickup",
];

export default function Services() {
  return (
    <section className="bg-[#F8F9FC] py-20">

      <h2 className="text-center text-4xl font-bold">
        Our Services
      </h2>

      <div className="mx-auto mt-14 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">

        {services.map((service) => (
          <div
            key={service}
            className="rounded-3xl bg-white p-10 shadow"
          >
            <h3 className="text-xl font-semibold">
              {service}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}