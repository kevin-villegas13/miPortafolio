import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { timelineData } from "@/config/education";

const config = {
  background: "rgba(128, 0, 128, 0.1)",
  color: "#fff",
  backdropFilter: "blur(4px)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
};

const EducationPage = () => {
  return (
    <>
      <motion.h2
        className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black/80 dark:text-white uppercase"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Educación
      </motion.h2>

      <VerticalTimeline animate={true}>
        {timelineData.map((item) => (
          <div key={item.id}>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={config}
              contentArrowStyle={{
                borderRight: "7px solid rgba(128, 0, 128, 0.1)",
              }}
              iconStyle={item.iconStyle}
              icon={item.icon}
            >
              <h3 className="text-xl sm:text-2xl text-black/80 font-bold vertical-timeline-element-title dark:text-white">
                {item.title}
              </h3>
              <h4 className="text-sm sm:text-base text-black/80 dark:text-white">
                {item.date}
              </h4>
              <h4 className="mb-4 font-semibold text-black/80 dark:text-white text-sm sm:text-base">
                {item.institution}
              </h4>
              <ul className="list-disc font-medium list-inside text-black/80 flex flex-col gap-2 dark:text-white text-xs sm:text-sm">
                {item.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </div>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default EducationPage;
