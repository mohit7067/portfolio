import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { images } from "../../constants";

const skills = [
  {
    name: "Html",
    icon: images.html,
  },
  {
    name: "Css",
    icon: images.css,
  },
  {
    name: "Javascript",
    icon: images.javascript,
  },
  {
    name: "Sass",
    icon: images.sass,
  },
  {
    name: "React",
    icon: images.react,
  },
  {
    name: "Redux",
    icon: images.redux,
  },
  {
    name: "Chakra UI",
    icon: images.chakra,
  },
  {
    name: "Material UI",
    icon: images.mu5,
  },
  {
    name: "Node JS",
    icon: images.node,
  },
  {
    name: "Express",
    icon: images.express,
  },
  {
    name: "Mongo DB",
    icon: images.mongo,
  },
  {
    name: "Mongoose",
    icon: images.mongoose,
  },
  {
    name: "Git",
    icon: images.git,
  },
  {
    name: "Postman",
    icon: images.postman,
  },
];

const experiences = [
  {
    year: "2021-2022",
    works: [
      {
        name: "Full Stack Web Developer",
        company: "Ewheelie Electro Universe Pvt Ltd",
        desc: "As a Full Stack Developer at Ewheelie Electro Universe Pvt Ltd, I've been actively involved in designing and developing dynamic web applications using the MERN (MongoDB, Express.js, React, Node.js) stack. Collaborating within cross-functional teams, I've contributed to seamless user experiences through responsive front-end design and efficient back-end architecture. My role encompasses RESTful API development, database management with MongoDB, and ensuring application security through user authentication mechanisms. This experience continues to strengthen my skills in the MERN stack and my ability to deliver high-quality, impactful solutions.",
      },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text" style={{ marginBottom: "1rem" }}>
        Skills <span> & </span> Experiences
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}>
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}>
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <p className="p-text">{work.desc}</p>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
