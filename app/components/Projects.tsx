"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

interface ProjectProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink?: string
  features: string[]
}

const ProjectCard = ({ project, index }: { project: ProjectProps; index: number }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className={`flex flex-col lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"}`}>
        <div className="lg:w-1/2 relative h-64 lg:h-auto">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-contain p-4 bg-white"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4 w-full">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-purple-600/80 text-white text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-6">
          <h3 className="text-2xl font-bold mb-3 dark:text-white">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
          <ul className="mb-6 space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>

          {project.liveLink && (
            <div className="flex space-x-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "ALSTOM ATS Automation Framework (Mavensi Softech Solutions)",
      description:
        "Designed and implemented a robust and dynamic automation testing framework for web and desktop applications using Selenium inside Virtual Machine (VM) Environment. This project involved automating critical workflows for the Automatic Train Supervision system.",
      image: "/images/alstom-project.png",
      technologies: ["Python", "Robot Framework", "Selenium", "PostgreSQL"],
      features: [
        "Automated critical workflows such as Initiate Train, Remove Train, set UDO TSR, and Alarm Creation",
        "Leveraged the YATE interface for system integration",
        "Performed regression testing after every release",
        "Standardized test documentation, improving team productivity by 20%",
        "Worked in a Containerized Environment with PostgreSQL for test data storage",
      ],
    },
    {
      title: "TSB Banking Application Automation",
      description:
        "Automated key functional flows of the TSB banking application, including account creation, fund transfers, loan processing, and bill payments. This project focused on ensuring the reliability and security of critical banking operations.",
      image: "/images/tsb-project.png",
      technologies: ["Robot Framework", "Postman", "RestAssured", "JIRA"],
      features: [
        "Conducted extensive API testing using Postman and automated API workflows",
        "Validated data exchange between front-end and back-end systems",
        "Identified, logged, and tracked defects in JIRA",
        "Automated over 85% of test cases, reducing manual testing efforts",
        "Reduced regression testing time by 50% through optimized automation suites",
      ],
    },
    {
      title: "Gigsumo Job Portal(Mavensi Softech Solutions)",
      description:
        "Designed and developed a modular, scalable web application for job seekers and employers. This comprehensive job portal facilitated job postings, applications, and employer-candidate interactions.",
      image: "/images/gigsumo-project.png",
      technologies: ["Angular", "Spring Boot", "Java", "Kafka"],
      features: [
        "Implemented core workflows such as job postings, candidate applications, and employer dashboards",
        "Built and integrated RESTful APIs for user authentication, job search, and resume uploads",
        "Used Kafka for asynchronous communication between services",
        "Implemented payment modules and reporting functionality",
        "Managed defects and feature tracking using JIRA",
      ],
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Projects & Portfolio" />
        <div className="space-y-12">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} index={index} />
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 opacity-20">
        <div className="w-full h-full bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 -mb-32 -ml-32 opacity-20">
        <div className="w-full h-full bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}
