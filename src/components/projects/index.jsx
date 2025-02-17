'use client';
import { motion } from 'framer-motion';
import ProjectLayout from './ProjectLayout';
import { CONTAINER } from '@/common/consts';

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      initial={CONTAINER.hiddenProp}
      animate={CONTAINER.showProp}
      variants={CONTAINER}
      className="w-full max-w-auto xl:max-w-4xl mx-auto lg:px-16 md:space-y-8 space-y-6 flex flex-col items-center justify-center"
    >
      {projects.map((project, i) => (
        <ProjectLayout
          key={i}
          name={project.name}
          description={project.description}
          date={project.date}
          demoLink={project.demoLink}
        />
      ))}
    </motion.div>
  );
};
export default ProjectList;
