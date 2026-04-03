import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { socialLinks } from "../constants";
import SectionWrapper from "./SectionWrapper";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xpznbvqr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#818cf8] text-sm uppercase tracking-[4px] mb-3">Get in Touch</p>
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
          <span className="gradient-text">Contact</span> Me
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-[#94a3b8] leading-relaxed">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about AI, ML, and battery technology. Feel free to reach out!
          </p>

          <div className="space-y-4">
            <ContactItem
              icon={<FaEnvelope />}
              label="Email"
              value="dharmik.patel101097@gmail.com"
              href="mailto:dharmik.patel101097@gmail.com"
            />
            <ContactItem
              icon={<FaMapMarkerAlt />}
              label="Location"
              value="Hannover, Germany"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <SocialButton href={socialLinks.github} icon={<FaGithub size={20} />} />
            <SocialButton href={socialLinks.linkedin} icon={<FaLinkedin size={20} />} />
            <SocialButton href={socialLinks.email} icon={<FaEnvelope size={20} />} />
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 space-y-5"
        >
          <div>
            <label className="text-sm text-[#94a3b8] mb-1.5 block">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a3e] border border-[#6366f1]/20 text-[#e2e8f0] text-sm focus:outline-none focus:border-[#818cf8] focus:shadow-[0_0_10px_rgba(99,102,241,0.2)] transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-[#94a3b8] mb-1.5 block">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a3e] border border-[#6366f1]/20 text-[#e2e8f0] text-sm focus:outline-none focus:border-[#818cf8] focus:shadow-[0_0_10px_rgba(99,102,241,0.2)] transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm text-[#94a3b8] mb-1.5 block">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a3e] border border-[#6366f1]/20 text-[#e2e8f0] text-sm focus:outline-none focus:border-[#818cf8] focus:shadow-[0_0_10px_rgba(99,102,241,0.2)] transition-all resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-medium text-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
          >
            {loading ? "Sending..." : success ? "Message Sent!" : "Send Message"}
          </button>
          {success && (
            <p className="text-[#06b6d4] text-sm text-center">Thanks! I&apos;ll get back to you soon.</p>
          )}
        </motion.form>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center text-[#818cf8]">
        {icon}
      </div>
      <div>
        <p className="text-xs text-[#94a3b8] uppercase tracking-wider">{label}</p>
        <p className="text-[#e2e8f0] text-sm font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:translate-x-1 transition-transform">{content}</a> : <div>{content}</div>;
}

function SocialButton({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-[#6366f1]/30 flex items-center justify-center text-[#94a3b8] hover:text-[#818cf8] hover:border-[#818cf8] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}

export default SectionWrapper(Contact, "contact");
