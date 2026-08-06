import {
  HeartHandshake,
  ShieldCheck,
  Clock3,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Compassionate Care",
    description:
      "Experienced companions providing reliable, friendly assistance every day.",
    icon: HeartHandshake,
  },
  {
    title: "Verified Caddies",
    description:
      "Every caregiver is carefully vetted to ensure safety and trust.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Booking",
    description:
      "Book a trusted caddy in minutes with our simple booking process.",
    icon: Clock3,
  },
  {
    title: "Family Focused",
    description:
      "Keep loved ones connected with updates and peace of mind.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#20212A]">
            Why Choose GrandCaddy?
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Supporting seniors and families with trusted, modern care.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FF]">
                  <Icon size={30} className="text-[#0B5FFF]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}