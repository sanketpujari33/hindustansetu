import { motion } from 'framer-motion';
import HINDUSTANSETULOGO from '../../assets/HINDUSTANSETULOGO.svg';

export default function Loader() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1, 1.2, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
                className="relative w-24 h-24" // Adjust the size as needed
            >
                <img
                    src={HINDUSTANSETULOGO}
                    alt="HINDUSTANSETU Logo"
                    className="absolute inset-0 w-full h-full object-contain" // Ensures the logo fits the container
                />
            </motion.div>
        </div>
    );
}


export function LoaderSecond() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
    )
}