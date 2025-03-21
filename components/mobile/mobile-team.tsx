"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

// Simplified team data with direct image paths
const mobileTeamMembers = [
  {
    id: 1,
    name: "Manish Kumar S",
    role: "Team Lead | Full Stack Developer",
    image: "/assets/images/team 1.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Balaji Gunasekaran",
    role: "Swift Developer",
    image: "/assets/images/Team 3.JPG",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Prasana Shanmugham",
    role: "Flutter Developer",
    image: "/assets/images/team 4.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Santhosh Paramasivam",
    role: "Android Studio Kotlin Developer",
    image: "/assets/images/team 2.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Davis Nicholson",
    role: "Tester",
    image: "/assets/images/Team 5.jpeg",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/davis-nicholsona/",
  },
  {
    id: 6,
    name: "Fiyaz",
    role: "Tester",
    image: "/assets/images/team 6.jpeg",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com",
  },
]

// Simplified Team Card
const MobileTeamCard = ({ member, index }: { member: (typeof mobileTeamMembers)[0]; index: number }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-full mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-[#1A1A1A] border border-[#333] rounded-xl overflow-hidden">
        <div className="flex items-center p-4">
          {/* Simple Image with fallback background */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mr-4 border-2 border-[#333] bg-[#222] flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#222] to-black"
              style={{
                backgroundImage: `url('${member.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <span className="relative z-10 text-[#CCFF00] text-2xl font-bold opacity-0">
              {member.name.charAt(0)}
            </span>
          </div>
          
          {/* Info */}
          <div className="flex-1">
            <h3 className="font-monument text-white text-lg font-bold">{member.name}</h3>
            <p className="text-gray-400 text-sm mb-3">{member.role}</p>
            
            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#CCFF00] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#CCFF00] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function MobileTeam() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#121212] px-5 py-16"
      id="team"
    >
      <div className="mx-auto max-w-md">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="font-monument text-3xl font-bold text-white mb-3">
            Meet Our <span className="text-[#CCFF00]">Team</span>
          </h2>
          <p className="text-base text-[#888888]">
            The creative minds behind our revolutionary app.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="space-y-4">
          {mobileTeamMembers.map((member, index) => (
            <MobileTeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -right-[150px] top-1/4 h-[300px] w-[300px] rounded-full bg-[#CCFF00]/5 blur-[100px]"></div>
    </section>
  )
} 