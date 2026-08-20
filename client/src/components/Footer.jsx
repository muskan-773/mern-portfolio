import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-scroll';
import { personal, navLinks } from '../data/portfolio';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <span className="text-xl font-extrabold gradient-text">{personal.name}</span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
              Full-Stack MERN Developer — building secure, production-grade web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    smooth
                    duration={500}
                    offset={-70}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-3">
              {[
                { href: personal.github,              icon: Github,   label: 'GitHub'   },
                { href: personal.linkedin,            icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`,   icon: Mail,     label: 'Email'    },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400 fill-red-400" /> using MERN Stack
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
