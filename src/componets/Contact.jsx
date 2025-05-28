import { form } from "framer-motion/client";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
//import { useRef, useState } from "react";
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    //const form = useRef();
    //const [isSent, setIsSent] = useState(false);

    return (
        <div className="border-b border-neutral-900 pb-4 py-8">
            {/*contact title */}
            <section className="flex flex-col items-center justify-center py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]" id="contact">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white">Contact</h2>
                    <p className="text-gray-400 mt-4 text-lg font-semibold">
                        Si queres podes contactarme
                    </p>
                </div>
                {/* contact form */}
                <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
                    <h3 className="text-xl font-semibold text-white text-center">
                        Connect Whit Me
                    </h3>

                    <form ref={form} /* onSubmit={sendEmail} */ className="mt-4 flex flex-col space-y-4 ">
                        <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
                        <input type="text" name="user_name" placeholder="Your name" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
                        <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
                        <textarea name="message" placeholder="Message" rows="4" className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" >
                        </textarea>

                        {/*send button */}
                        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
