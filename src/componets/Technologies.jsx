import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiCypress } from "react-icons/si";
import { SiCucumber } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion";


export const Technologies = () => {
    return (
        <div className="border-b border-neutral-800  pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript1 className="text-5xl text-yellow-300" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript className="text-5xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-5xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-5xl text-green-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMysql className="text-5xl text-blue-700" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCypress className="text-5xl text-emerald-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCucumber className="text-5xl text-lime-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostman className="text-5xl text-orange-500" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
