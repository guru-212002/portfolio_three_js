import { BallCanvas } from "../canvas";
// import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { styles } from "../../constants/styles";

const Tech = () => {
  return (
    <section className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}>
      <Header useMotion={true} {...config.sections.tech_stacks} />
      <div className="flex flex-row flex-wrap justify-center gap-5 mt-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
