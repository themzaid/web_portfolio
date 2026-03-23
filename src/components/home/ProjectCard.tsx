import { motion } from "framer-motion";
import { ExternalLink, Code, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  codeLink?: string;
  designLink?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group flex flex-col bg-white border border-gray-200 rounded-[20px] shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] overflow-hidden"
    >
      {/* Image */}
      <div className="h-52 flex flex-col justify-center items-center scale-105">
        <img
          className="w-full h-full object-cover"
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="p-6 md:p-6 flex flex-col flex-grow">
        <h3 className="text-[22px] font-medium text-gray-800 dark:text-gray-300 dark:hover:text-white mb-1">
          {project.title}
        </h3>
        <p className="text-[14px] mb-1 tracking-wide text-gray-500 dark:text-gray-500">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-flex items-center gap-x-1.5 py-1 px-2.5 rounded-[5px] text-xs font-sans font-medium tracking-wider border bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stretched Action Buttons */}
      <div className="mt-auto flex divide-x divide-gray-200 dark:divide-gray-700 border-t border-gray-200 dark:border-gray-700">
        {project.designLink ? (
          <Button variant="outline" asChild className="w-full h-auto py-4 rounded-none border-0 ring-0 shadow-none bg-transparent dark:bg-transparent font-mono text-xs font-semibold tracking-wider hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-900 dark:text-white">
            <a
              href={project.designLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View design
              <Palette className="flex-shrink-0 w-4 h-4 ml-2" />
            </a>
          </Button>
        ) : (
          <Button variant="outline" asChild className="w-full h-auto py-4 rounded-none border-0 ring-0 shadow-none bg-transparent dark:bg-transparent font-mono text-xs font-semibold tracking-wider hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-900 dark:text-white">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View code
              <Code className="flex-shrink-0 w-4 h-4 ml-2" />
            </a>
          </Button>
        )}
        <Button variant="outline" asChild className="w-full h-auto py-4 rounded-none border-0 ring-0 shadow-none bg-transparent dark:bg-transparent font-mono text-xs font-semibold tracking-wider hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-900 dark:text-white">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
            <ExternalLink className="flex-shrink-0 w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
