import React from "react";

const Stats = () => {
  return (
    <section className="flex justify-between items-center mt-8 px-8 lg:px-32">
      {/* Stats Section */}
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-[2rem] font-bold text-primary">{stat.number}</h1>
          <p className="text-[1rem] font-semibold text-gray dark:text-white lg:text-[1.1rem]">
            {stat.name}
          </p>
        </div>
      ))}
    </section>
  );
};

const stats = [
  { id: 1, number: "6+", name: "Projects Completed" },
  { id: 2, number: "2+", name: "Clients Satisfied" },
  { id: 3, number: "1+", name: "Years of Experience" },
];

export default Stats;
