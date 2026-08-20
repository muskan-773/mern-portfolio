import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import SectionWrapper from './SectionWrapper';
import { personal } from '../data/portfolio';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API_URL}/contact`, form);
      toast.success("Message sent! I'll get back to you soon 🎉");
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        'Something went wrong. Please try again.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail,  label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}` },
    { icon: MapPin,label: 'Location', value: personal.location, href: null },
  ];

  const socialInfo = [
    { icon: Github,   label: 'GitHub',   href: personal.github },
    { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin },
  ];

  return (
    <SectionWrapper id="contact">
      <h2 className="section-title">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="section-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you.</p>

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Left: info panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="card p-6 space-y-5">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Contact Info</h3>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="card p-6">
            <h3 className="font-bold text-base text-gray-900 dark:text-white mb-4">Find me online</h3>
            <div className="flex gap-3">
              {socialInfo.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all text-sm font-medium"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div className="card p-8">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Muskan Kumari"
                  autoComplete="name"
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm ${
                    errors.name
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm ${
                    errors.email
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm resize-none ${
                    errors.message
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message
                    ? <p className="text-red-500 text-xs">{errors.message}</p>
                    : <span />
                  }
                  <span className="text-xs text-gray-400">{form.message.length}/2000</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
