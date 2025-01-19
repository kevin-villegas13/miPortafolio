import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { ExperiencieProps } from "@/interface/props/experiencie.props";

const ExperiencieItems = ({
  title,
  company,
  date,
  description,
}: ExperiencieProps) => {
  return (
    <section className="flex flex-col justify-start px-4 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4 bg-white dark:bg-black shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-4 md:p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-black-500 dark:hover:border-black-400"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="flex-shrink-0 mb-4 md:mb-0"
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black dark:text-white" />
            </div>
          </motion.div>

          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-gray-800 dark:text-gray-300 font-medium mb-1 text-lg md:text-xl">
              {company}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-2">
              {date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
              {description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperiencieItems;
