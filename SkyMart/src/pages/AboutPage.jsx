import { useContext, useEffect } from "react";
import PageFooter from "../components/PageFooter";
import { MyContext } from "./../context/MyContext";
import { useLocation } from "react-router";

const AboutPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { toShop } = useContext(MyContext);

  const stats = [
    { icon: "◇", value: "20K+", label: "Products" },
    { icon: "♧", value: "50K+", label: "Happy Customers" },
    { icon: "☆", value: "4.9", label: "Avg. Rating" },
    { icon: "▣", value: "99%", label: "On-time Delivery" },
  ];

  const values = [
    {
      icon: "♢",
      title: "Trust",
      description:
        "Every product is verified for quality and authenticity before listing.",
    },
    {
      icon: "♧",
      title: "Speed",
      description:
        "We obsess over delivery times so your orders arrive when promised.",
    },
    {
      icon: "♡",
      title: "Community",
      description:
        "Built around real customer feedback, not just business metrics.",
    },
    {
      icon: "☆",
      title: "Quality",
      description:
        "We curate the best — no filler, no junk, just great products.",
    },
  ];

  const team = [
    { initial: "A", name: "Aryan Shah", role: "Founder & CEO" },
    { initial: "P", name: "Priya Mehta", role: "Head of Product" },
    { initial: "R", name: "Rohan Verma", role: "Lead Engineer" },
    { initial: "S", name: "Sneha Kapoor", role: "Design Director" },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-main-color text-3xl text-black">
          ⚡
        </div>

        <h1 className="mt-7 text-4xl font-semibold sm:text-5xl">
          About <span className="text-main-color">SkyMart</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-gray-500">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-500 bg-[#111111] px-5 py-5"
            >
              <div className="text-2xl text-main-color">{stat.icon}</div>

              <h2 className="mt-3 text-2xl font-bold">{stat.value}</h2>

              <p className="mt-1 text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-gray-500 bg-[#111111] px-5 py-7 sm:px-10 sm:py-10">
          <h2 className="text-2xl font-semibold">Our Story</h2>

          <div className="mt-5 space-y-5 text-base leading-7 text-gray-500">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked ourselves:
              what if shopping online was actually
              <i> enjoyable?</i>
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across the
              country. We stock electronics, fashion, jewelry, and everyday
              essentials — all at prices that don't require a second mortgage.
            </p>

            <p>
              We're still the same team at heart; obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-semibold">
          What We Stand For
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex gap-5 rounded-2xl border border-gray-500 bg-[#111111] p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-950 text-xl text-main-color">
                {value.icon}
              </div>

              <div>
                <h3 className="font-semibold">{value.title}</h3>

                <p className="mt-2 max-w-md leading-6 text-gray-500">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-semibold">Meet the Team</h2>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-gray-500 bg-[#111111] px-5 py-5 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-main-color text-xl text-black">
                {member.initial}
              </div>

              <h3 className="mt-3 font-semibold">{member.name}</h3>

              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-12 max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl border border-lime-900 bg-[#111111] px-6 py-10 text-center">
          <h2 className="text-2xl font-semibold">Ready to shop?</h2>

          <p className="mt-3 text-gray-500">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={toShop}
            className="mt-6 rounded-xl bg-main-color px-8 py-4 font-semibold text-black"
          >
            Browse Products&nbsp; →
          </button>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default AboutPage;
