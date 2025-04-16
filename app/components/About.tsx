"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "Automation",
      description: "Robot Framework, Selenium, AutoIT, API Testing",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend",
      description: "Angular 8+, HTML, CSS, TypeScript",
    },
    {
      icon: <Server className="w-8 h-8 text-pink-500" />,
      title: "Backend",
      description: "Spring Boot, Java, Python, Kafka",
    },
    {
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      title: "Database",
      description: "MySQL, Elasticsearch, PostgreSQL, DynamoDB",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm Reshma Banu, a Senior Test Engineer at Mavens-i Softech Solutions with over 3 years of cross-domain
              experience in automation testing and full-stack development. At Mavens-i, I'm currently assigned to the
              ALSTOM international project, where I lead automation testing initiatives, crafting frameworks for both
              web and desktop applications inside complex virtual environments and containerized Environment .
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              My career blends both deep automation knowledge (Robot Framework, Selenium, REST APIs) and hands-on
              development using Angular, Spring Boot, and Kafka. Whether it's building reusable automation components or
              collaborating in Agile sprints, I'm committed to delivering fast, scalable, and reliable systems.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}
