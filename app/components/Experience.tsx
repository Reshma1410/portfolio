"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Mavens-i Softech Solutions",
      location: "ALSTOM - Automatic Train Supervision (International Project)",
      period: "August 2023 - Present",
      role: "Senior Associate Automation Engineer",
      responsibilities: [
        "Built and maintained a dynamic automation framework for both web and desktop applications inside a Virtual Machine environment and containerized Environment",
        "Automated workflows such as Train Initiation, Alarm Creation, UDO TSR with integration into YATE",
        "Reduced manual effort by automating 85% of test cases, improving regression testing speed by 50%",
        "Maintained and optimized test data using PostgreSQL within a containerized setup",
        "Ensured stability and quality of releases by conducting extensive API testing and managing test documentation",
        "Collaborated in daily sprints, reviews, retrospectives using Agile Scrum practices",
      ],
    },
    {
      company: "GIGSUMO",
      location: "Job Portal Project",
      period: "July 2022 - July 2023",
      role: "Software Development Engineer (Full Stack)",
      responsibilities: [
        "Developed a complete job portal using Angular, Spring Boot, Java, and Kafka for asynchronous communication",
        "Engineered REST APIs for user authentication, job listings, dashboards, and payment modules",
        "Worked cross-functionally to release new features, fix critical defects, and improve app performance",
        "API test coverage and defect tracking managed using JIRA",
        "Designed and implemented modular, scalable web application architecture",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">{exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}
