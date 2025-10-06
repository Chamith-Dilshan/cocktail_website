import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { openingHours, socials } from "../constants";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeLine
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <img
        id="f-right-leaf"
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
      />
      <img
        id="f-left-leaf"
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
      />
      <div className="content">
        <h2>You can find us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>123, Cocktail St, Mixology City</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>Email: info@mixology.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
