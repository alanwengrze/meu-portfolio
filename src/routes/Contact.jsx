import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"
import './Contact.css'
import './Animation.css'

export function Contact(){

    const contact = {
        github:'https://github.com/alanwengrze',
        instagram:'https://www.instagram.com/al.wng/',
        linkedin:'https://www.linkedin.com/in/alanwengrze/',
        email:'mailto:alanwengrzee@gmail.com'
    }

    return(
        <div className="max-w-7xl m-auto has-shown">
            <h2 className="text-center text-3xl font-semibold text-white mt-4">Minhas redes sociais</h2>
            <section className="max-w-4xl m-auto pt-8 flex flex-col gap-6 ">
                <div className="contact bg-gradient-to-l from-sky-500 to-indigo-500">
                    <p>
                        <FaGithub />
                    </p>
                    <li>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                </div>
                <div className="contact bg-gradient-to-l from-sky-500 to-indigo-500">
                    <p>
                        <FaInstagram />
                    </p>
                    <li>
                        <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                </div>
                <div className="contact bg-gradient-to-l from-sky-500 to-indigo-500">
                    <p>
                        <FaLinkedin />
                    </p>
                    <li>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                </div>
                <div className="contact bg-gradient-to-l from-sky-500 to-indigo-500">
                    <p>
                        <FaEnvelope />
                    </p>
                    <li>
                        <a href={contact.email} target="_blank" rel="noopener noreferrer">E-mail</a>
                    </li>
                </div>
            </section>
        </div>
    )
}