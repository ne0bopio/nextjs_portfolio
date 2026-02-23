"use client";

import React from 'react'
import Image from 'next/image'
import Neobop from "@/public/neobop.png"
import { motion } from "framer-motion"


export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0" id="home">
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image src={Neobop} alt="Neobop"
                    width={400}
                    height={400}
                    quality={95}
                    priority={true}
                    className='h-24 w-24 rounded-full object-cover
                    border-[0.15rem] border-white shadow-xl'
                />
                </motion.div>

                <motion.span className='absolute bottom-0 right-0 text-4xl'
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                }}
                >
                    👋🏼
                </motion.span>
            </div>
        </div>

        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium
        leading-[-1.5]! sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}

        >
            <span className=''>
                
                Hello, I&apos;m Juan Pablo {""} 
                
                <span className='font-bold'>
                    I&apos;m full-stack web developer {" "}                    
                </span>
                 with {" "}
                <span className="font-bold">
                    3 years of experience.
                </span>
                

            </span> 
        </motion.p>

        <div>
            {/* Here we will add the buttons to download cv, contact us, and visit our github and linkelin */}
        </div>
    </section>
  )
}