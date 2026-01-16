import { styles } from '../../constants/styles';
import { config } from '../../constants/config';
import { motion } from 'framer-motion';

type WordAnimationsProps = {
  text: string;
  className: string;
};

const WordAnimation: React.FC<WordAnimationsProps> = ({ text, className }) => {
  const words = text.split('');

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
    >
      <span className="hidden md:block">Hi,</span>
      <div className="flex justify-start items-start gap-3">
        I'm
        <div>
          {words.map((word: string, i: number) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-[#915EFF]">{word}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </motion.h1>
  );
};

const Hero = () => {
  return (
    <section className={`mx-auto h-[18rem] md:h-[25rem] lg:h-[30rem] xl:h-[30rem] w-full flex flex-col items-center justify-center`}>
      <div
        className={`mx-auto max-w-7xl ${styles.paddingX} flex flex-row gap-5 justify-center items-center`}
      >
        {/* <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div> */}

        <div className="flex flex-col items-center justify-center gap-3">
          <WordAnimation text={config.hero.name} className={`${styles.heroHeadText} text-white flex justify-center items-center gap-2`} />
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>{config.hero.p[0]}</p>
          <p className={`${styles.heroSubText_1} text-secondary mt-2 text-center`}>{config.hero.p[1]}</p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
