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
      Hi, I'm{' '}
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
    </motion.h1>
  );
};

const Hero = () => {
  return (
    <section className={`relative mx-auto h-[20rem] md:h-[30rem] w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <WordAnimation text={config.hero.name} className={`${styles.heroHeadText} text-white`} />
          {/* <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1> */}
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>{config.hero.p[0]}</p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
