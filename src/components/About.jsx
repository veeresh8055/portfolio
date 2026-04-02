import locationIcon from "../assets/svg/location.svg";
import phoneIcon from "../assets/svg/phone.svg";
import linkIcon from "../assets/svg/link.svg";
import mailIcon from "../assets/svg/mail.svg";
import genderIcon from "../assets/svg/gender.svg";

export default function About() {
  const aboutOne = [
    { icon: locationIcon, alt: "Location", text: "Gadag, Karnataka" },
    { icon: phoneIcon, alt: "Phone", text: "+91 11222 33330" },
    { icon: linkIcon, alt: "Website", text: "veeresh.me" },
  ];

  const aboutTwo = [
    { icon: locationIcon, alt: "Timezone", text: "IST (UTC+05:30)" },
    { icon: mailIcon, alt: "Email", text: "veereshchared@gmail.com" },
    { icon: genderIcon, alt: "Pronouns", text: "he/him" },
  ];

  return (
    <section className="about">
      <div className="aboutInner">
        <h2>About</h2>
        <p className="aboutLead">
          I enjoy building modern web experiences with clean visuals, smooth
          interactions, and thoughtful details.
        </p>

        <div className="aboutContent">
          <div className="aboutCol">
            {aboutOne.map((item) => (
              <p className="aboutItem" key={item.text}>
                <img src={item.icon} alt={item.alt} />
                <span>{item.text}</span>
              </p>
            ))}
          </div>

          <div className="aboutCol">
            {aboutTwo.map((item) => (
              <p className="aboutItem" key={item.text}>
                <img src={item.icon} alt={item.alt} />
                <span>{item.text}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
