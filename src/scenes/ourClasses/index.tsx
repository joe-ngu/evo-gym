import { ClassType, SelectedPage } from "@/shared/types";
import CalisthenicsGraphic from "@/assets/calisthenics.jpg";
import OlympicWeightGraphic from "@/assets/olympic_weightlifting.jpg";
import WeightTrainingGraphic from "@/assets/weight_training.jpg";
import TennisGraphic from "@/assets/tennis.jpg";
import SoccerGraphic from "@/assets/soccer.jpg";
import VolleyballGraphic from "@/assets/volleyball.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Calisthenics Classes",
    description:
      "Work with trainers to develop muscle memory in the toughest calisthenics movements. Train the planche, lever, muscle-up and evolve into a bodyweight master.",
    image: CalisthenicsGraphic,
  },
  {
    name: "Olympic Weightlifting Classes",
    description:
      "Train at the elite level and learn real skills used at the Olympics such as the snatch, power clean, and front squat.",
    image: OlympicWeightGraphic,
  },
  {
    name: "Weight Training Classes",
    description:
      "Develop a toned physique and stay fit through the reliable and timeless method of lifting weights.",
    image: WeightTrainingGraphic,
  },
  {
    name: "Tennis Classes",
    image: TennisGraphic,
  },
  {
    name: "Soccer Classes",
    image: SoccerGraphic,
  },
  {
    name: "Volleyball Classes",
    image: VolleyballGraphic,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-white md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Whether you prefer to journey together in a group or to train one
              on one with our instructors, we offer a variety of different
              classes to meet your needs. Our classes are tailored to your
              needs, from training in the weightroom to hone your olympic
              weightlifting skills to acquiring new skills that will make you a
              competitive volleyball player.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
