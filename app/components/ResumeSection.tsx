"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Resume Downloads" />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <FileText className="w-10 h-10 text-blue-500" />
              <h3 className="text-2xl font-semibold ml-4 dark:text-white">Senior Automation Tester</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This resume emphasizes my expertise in test automation, quality assurance, and my experience with Robot
              Framework, Selenium, and other testing tools.
            </p>
            <motion.a
              href="/automation-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Automation Resume
              <FileText className="w-4 h-4" />
            </motion.a>
          </motion.div>
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
