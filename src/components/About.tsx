import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        // end: "bottom top",
        // scrub: true,
      },
    });

    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });

    scrollTimeline.from(
      ".top-grid div, .bottom-grid div",
      {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04,
      },
      "-=0.5"
    );
  }, []);

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails in Town</p>
            <h2>
              Where every sip is a story <span className="text-white">-</span>
              from the first taste to the last drop
            </h2>
          </div>

          <div className="sub-content">
            <p>
              At Mixology Haven, we believe that a great cocktail is more than
              just a drink; it's an experience. Our expert mixologists craft
              each cocktail with precision and passion, using only the finest
              ingredients to ensure every sip is a delight. Whether you're in
              the mood for a classic concoction or an innovative creation, our
              diverse menu has something to tantalize every palate. Join us for
              an unforgettable journey of flavors, where every glass tells a
              story and every visit feels like a celebration.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p>More than +20000 customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
