const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/",
    label: "twitter.com",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    label: "github.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    label: "linkedin.com",
  },
];

export default function Social() {
  return (
    <section className="socialSection" id="social">
      <div className="socialInner">
        <h2>Social</h2>

        <div className="socialGrid">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              className="socialCard"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="socialName">{item.name}</span>
              <span className="socialMeta">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
