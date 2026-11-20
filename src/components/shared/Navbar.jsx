
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import { CiSearch } from "react-icons/ci"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const menuGroups = [
    {
      title: 'MODELS',
      links: ['BEYOND', 'MUSEUM', 'STORE']
    },
    {
      title: 'OWNERSHIP',
      links: ['CONNECTIVITY', 'CUSTOMER APP', 'CLASSICS']
    },
    {
      title: 'MOTORSPORT',
      links: ['SUPER TROFEO', 'GT3']
    }
  ]

  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at 0% 0%)',
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
    open: {
      clipPath: 'circle(150% at 0% 0%)',
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -30
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="relative w-full bg-black text-white">

      {/* VIDEO — FAQAT HOME */}
      {location.pathname === '/' && (
        <div className="fixed inset-0 z-0 h-full w-full overflow-hidden bg-black">

          <video
            key={location.pathname}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/lamborghini.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/30"></div>

          {/* HOME TEXT */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-start pb-[17vh] pl-[7.5%]">

            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <p className="mb-7 text-xl font-bold md:text-3xl">
                UNFILTERED PERFORMANCE
              </p>

              <h1
                className="text-5xl font-bold uppercase text-white md:text-8xl"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                TEMERARIO SPYDER
              </h1>
            </motion.div>

          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="relative z-50 flex w-full items-center justify-between px-10 py-6">

        {/* MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-2"
        >
          <span className="h-[2px] w-8 bg-white"></span>
          <span className="h-[2px] w-8 bg-white"></span>
        </button>

        {/* LOGO */}
        <Link to="/">
          <img
            className="w-20"
            src="https://cdn.freebiesupply.com/logos/large/2x/lamborghini-1-logo-png-transparent.png"
            alt="Lamborghini"
          />
        </Link>

        {/* SEARCH */}
        <Link to="/Search">
          <CiSearch className="text-3xl" />
        </Link>

      </nav>

      {/* MENU */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="fixed inset-0 z-[60] flex min-h-screen flex-col justify-center bg-black px-20"
      >

        {/* CLOSE BUTTON — CHAP YUQORI BURCHAK */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute left-10 top-8 text-3xl"
        >
          ✕
        </button>

        <div className="grid grid-cols-3 gap-10">

          {menuGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-6"
            >
              <h2 className="text-xl font-bold tracking-widest">
                {group.title}
              </h2>

              {group.links.map((link, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="cursor-pointer text-2xl transition hover:text-gray-400"
                >
                  {link}
                </motion.p>
              ))}
            </motion.div>
          ))}

        </div>
      </motion.div>

    </div>
  )
}

export default Navbar
