"use client"

import React from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors bg-[#F4F4F4]"
      >
        <h3 className=" text-sm sm:text-sm md:text-md lg:text-lg font-semibold text-[#293E52]">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-foreground" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-muted/30">{children}</div>
      </motion.div>
    </div>
  )
}

export default AccordionItem