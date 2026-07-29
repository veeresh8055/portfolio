import { AppleHelloEffectEnglish } from "./apple-hello-effect-english";

export default function AboutMe() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-5 sm:py-10 lg:px-7">
      <div className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-sm sm:p-8">
        <AppleHelloEffectEnglish
          className="mb-5 h-fit w-36 text-foreground sm:w-44"
          aria-label="Hello"
        />

        <div className="max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          <p>
            Hi, I&apos;m a <strong className="font-semibold text-foreground">MERN Stack Developer</strong>{" "}
            passionate about building modern, scalable, and user-centric web applications. I have a strong foundation in{" "}
            <strong className="font-semibold text-foreground">Data Structures and Algorithms</strong>, solving problems using{" "}
            <strong className="font-semibold text-foreground">Java</strong> and{" "}
            <strong className="font-semibold text-foreground">JavaScript</strong>.
          </p>
          <p>
            I enjoy creating clean, responsive, and intuitive user interfaces while exploring{" "}
            <strong className="font-semibold text-foreground">design engineering</strong> to bridge the gap between design and development. I focus on writing clean, maintainable, and scalable code, optimizing performance, and following industry best practices.
          </p>
          <p>
            I&apos;m continuously learning new technologies, building real-world projects, and improving my problem-solving skills to create impactful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
