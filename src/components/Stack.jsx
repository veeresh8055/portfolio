const stackIcons = [
  { name: "HTML", src: "/images/html-min.webp" },
  { name: "CSS", src: "/images/css-min.webp" },
  { name: "JavaScript", src: "/images/js-min.webp" },
  { name: "Java", src: "/images/java-logo-1.webp" },
  { name: "Node.js", src: "/images/node-min.webp" },
  { name: "React", src: "/images/react.svg" },
  { name: "Next.js", src: "/images/nextjs.png" },
  { name: "Tailwind", src: "/images/tailwind.png" },
  { name: "Shadcn UI", src: "/images/shadcn.png" },
  { name: "Swiper", src: "/images/swiper.svg" },
  { name: "Redux", src: "/images/redux.png" },
  { name: "Express", src: "/images/express.png" },
  { name: "MongoDB", src: "/images/mongodb-min.webp" },
  { name: "MySQL", src: "/images/MySQL-min.webp" },
  { name: "GitHub", src: "/images/github-min.webp" },
  { name: "Jest", src: "/images/jest.png" },
  { name: "Zustand", src: "/images/zustand.jpeg" },
  { name: "GSAP", src: "/images/gsap-min.webp" },
  { name: "Figma", src: "/images/figma-min.webp" },
  { name: "Photoshop", src: "/images/ps-min.webp" },
  { name: "Canva", src: "/images/canva.png" },
  { name: "Premiere Pro", src: "/images/premierepro-min.png" },
  { name: "Android Studio", src: "/images/studio-min.webp" },
  { name: "Adobe XD", src: "/images/xd-min_1.webp" },
];

export default function Stack() {
  return (
    <section className="stackSection" id="stack">
      <div className="stackInner">
        <h2>Stack</h2>

        <div className="stackGrid">
          {stackIcons.map((item) => (
            <div className="stackItem" key={item.name} title={item.name}>
              <img src={item.src} alt={item.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
