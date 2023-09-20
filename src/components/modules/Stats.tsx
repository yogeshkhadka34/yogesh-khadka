import React from "react";

const Stats = () => {
  return (
    <section className="flex justify-center md:justify-between gap-8 items-center mt-8 px-8 flex-wrap lg:px-32">
      {/* Stats Section */}
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-[2rem] font-bold text-primary">{stat.number}</h1>
          <p className="text-[1rem] font-medium text-gray dark:text-white lg:text-[1.1rem]">
            {stat.name}
          </p>
        </div>
      ))}
    </section>
  );
};

const stats = [
  { id: 1, number: "5+", name: "Projects Completed" },
  { id: 2, number: "2+", name: "Clients Satisfied" },
  { id: 3, number: "1", name: "Year of Experience" },
];

export default Stats;
