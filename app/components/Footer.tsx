"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-700 dark:text-gray-300">© {currentYear} Reshma Banu. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a
              href="https://www.linkedin.com/in/reshma-banu-p-i/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="mailto:reshureshma1410@gmail.com"
              className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
          </motion.div>
        </div>
        <div className="text-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
          © 2025 Reshma Banu — Powered by Experience & Passion for Quality.
        </div>
      </div>
    </footer>
  )
}
