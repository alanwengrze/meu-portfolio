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
        <div className="max-w-7xl m-auto has-shown min-h-screen  flex flex-col items-center justify-center">
            <h2 className="h2-contact text-center text-3xl font-medium mt-4">Minhas redes sociais</h2>
            <section className="max-w-2xl m-auto h-full rounded-md pt-8 mt-6 flex flex-wrap gap-6 bg-transparent">
                <div className="contact shadow-lg ">
                    <p>
                        <FaGithub />
                    </p>
                    <li>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                </div>
                <div className="contact shadow-lg">
                    <p>
                        <FaInstagram />
                    </p>
                    <li>
                        <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                </div>
                <div className="contact shadow-lg">
                    <p>
                        <FaLinkedin />
                    </p>
                    <li>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                </div>
                <div className="contact shadow-lg">
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