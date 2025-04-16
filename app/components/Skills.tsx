"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, GitBranch, Terminal, Layers, Cpu, Globe, Workflow } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const skills = [
  {
    icon: Workflow,
    name: "Test Automation",
    tech: "Robot Framework, Selenium, AutoIT, Postman",
    description: "Developing comprehensive test automation frameworks to ensure software quality and reliability.",
    color: "text-purple-500",
  },
  {
    icon: Layers,
    name: "Quality Assurance",
    tech: "Test Planning, Defect Management, JIRA, ALM",
    description: "Implementing robust QA processes to ensure high-quality software delivery.",
    color: "text-green-500",
  },
  {
    icon: Code,
    name: "Frontend Development",
    tech: "HTML, CSS, TypeScript, Angular 8+",
    description: "Building responsive and interactive user interfaces with Angular and modern web technologies.",
    color: "text-blue-500",
  },
  {
    icon: Server,
    name: "Backend Development",
    tech: "Java, Spring Boot, Python, Flask",
    description: "Creating robust server-side applications with focus on scalability and clean architecture.",
    color: "text-pink-500",
  },
  {
    icon: Cpu,
    name: "API Development & Testing",
    tech: "REST APIs, Kafka, Postman, RestAssured",
    description: "Designing, implementing and testing APIs for seamless data communication between systems.",
    color: "text-red-500",
  },
  {
    icon: Database,
    name: "Database Management",
    tech: "MySQL, Elasticsearch, PostgreSQL, DynamoDB",
    description: "Working with various database systems for optimal data management and test data preparation.",
    color: "text-yellow-500",
  },
  {
    icon: Layout,
    name: "UI/UX Implementation",
    tech: "Angular, Responsive Design",
    description: "Implementing intuitive and user-friendly interfaces with modern frameworks.",
    color: "text-indigo-500",
  },
  {
    icon: Terminal,
    name: "Programming Languages",
    tech: "Java, Python, TypeScript",
    description: "Proficient in multiple programming languages for versatile development and automation solutions.",
    color: "text-orange-500",
  },
  {
    icon: GitBranch,
    name: "Version Control & CI/CD",
    tech: "Git, Jenkins, Maven",
    description: "Managing code versions efficiently and implementing continuous integration pipelines.",
    color: "text-teal-500",
  },
  {
    icon: Globe,
    name: "Agile Methodologies",
    tech: "Scrum, Sprint Planning, Daily Stand-ups",
    description:
      "Working effectively in Agile environments with cross-functional teams to deliver high-quality solutions.",
    color: "text-cyan-500",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
