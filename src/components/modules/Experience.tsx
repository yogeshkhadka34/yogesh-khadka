import React from "react";

const Experience = () => {
  return (
    <section className=" mt-24 px-32">
      <h1 className="_headings">Experience</h1>

      {/* Cards Section */}
      {details.map((detail) => (
        <div key={detail.id} className="mt-8 flex flex-col gap-1 py-4">
          <h1 className="text-[1.4rem] text-gray ">
            {detail.post}{" "}
            <span className="text-primary">{`@${detail.company}`}</span>
          </h1>
          <p className="text-[0.9rem]  text-gray-600">
            {`${detail.date} | ${detail.location}`}
          </p>
          <p className="text-gray-700 text-justify max-w-[48rem] mt-2">
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
    post: "Co-founder and Chief Operating Officer",
    company: "Gaming Sansar",
    date: "November 1, 2018 - September 30, 2022 ",
    location: "Saraswatinagar Rd, Kathmandu",
    description:
      "Managed 8 team members of Gaming Sansar in achieving company visions, and handled day-to-day operations like managing inventory, digital marketing, and sales. Focused from the start on digital sales using websites and social media. Created and oversaw khelam.com, which was a gaming tournament platform. Collaborated with GGCO gaming as a  Technology partner to conduct TVS NTORQ Super Squad PUBGM Championship 2021.",
  },
  {
    id: 2,
    post: "Marketing and Operations Manager",
    company: "Adora Baby",
    date: "March 1, 2022 - September 30, 2022",
    location: "Saraswatinagar Rd, Kathmandu",
    description:
      "Led customer segmentation efforts to label customers based on their interactions and retarget them accordingly. Development of engaging content for the social media campaigns to drive brand awareness and customer engagement ",
  },
  {
    id: 3,
    post: "Lecturer",
    company: "K&K International College",
    date: "December 1, 2022 - Present",
    location: "Chhaku-bakku Marga, Kathmandu",
    description:
      "Digital Logic lecturer for first-semester students of the BCA program. Microprocessor and Computer Architecture lecturer for second-semester students. ",
  },
];

export default Experience;
