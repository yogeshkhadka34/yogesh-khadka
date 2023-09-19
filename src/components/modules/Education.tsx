import React from "react";

const Education = () => {
  return (
    <section className=" _spacing">
      <h1 className="_headings">Education</h1>

      {/* Cards Section */}
      {details.map((detail) => (
        <div key={detail.id} className="mt-8 flex flex-col gap-1 py-4">
          <h1 className="text-[1.4rem] text-gray dark:text-light">
            {detail.rank}{" "}
          </h1>
          <p className="text-[0.9rem]  text-gray-600 dark:text-light">
            {`${detail.date} | ${detail.name}`}
          </p>
          <p className="text-gray-700 text-justify max-w-[48rem] mt-2 dark:text-cream">
            {detail.description}
          </p>
        </div>
      ))}
    </section>
  );
};

const details = [
  {
    id: 1,
    rank: "Bachelor in Electronics and Communication Engineering",
    name: "Institute of Engineering, Thapathali Campus",
    date: "Oct 2016 - July 2021 ",
    description: "Graduated with First Division",
  },
];

export default Education;
