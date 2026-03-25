import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function SocialLinks() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/UyiTheAI/Capstone-Project",
      icon: <Github className="h-6 w-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/omoruyi-oredia-758860179",
      icon: <Linkedin className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/omariii.0/",
      icon: <Instagram className="h-6 w-6" />,
    },
    {
      name: "Email",
      url: "mailto:hello@example.com", // Placeholder, user didn't provide email
      icon: <Mail className="h-6 w-6" />,
    },
  ];

  return (
    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
      {links.map((link) => (
        <li key={link.name} className="shrink-0 text-xs">
          <a
            className="block hover:text-primary transition-colors hover:-translate-y-1 transform duration-200 text-secondary"
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${link.name} (opens in a new tab)`}
          >
            <span className="sr-only">{link.name}</span>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
