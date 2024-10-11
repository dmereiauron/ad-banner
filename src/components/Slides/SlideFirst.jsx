import { motion } from "framer-motion";
import arrow from "../../assets/slide1/arrow.png";
import cta from "../../assets/slide1/cta.png";
import gesture from "../../assets/slide1/gesture.png";
import h1 from "../../assets/slide1/hl1.png";
import h2 from "../../assets/slide1/hl2.png";
import packshots from "../../assets/slide1/packshots.png";
import sl from "../../assets/slide1/sl.png";
import { SlideFirstStyle } from "../../styles/SlideFirst.style";

const FirstSlide = ({ setNewSlide }) => {
  return (
    <SlideFirstStyle>
      <motion.div
        className="title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={h1} alt="title" />
      </motion.div>

      <motion.div
        className="subtitle"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src={h2} alt="subtitle" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="products"
      >
        <img src={packshots} alt="products" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="sl"
      >
        <img src={sl} alt="sl" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="cta"
      >
        <a href="https://example.com" target="_blank">
          <img src={cta} alt="cta" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="buttons"
      >
        <motion.div
          className="arrow"
          onClick={() => setNewSlide()}
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <img src={arrow} alt="arrow" />
        </motion.div>
        <motion.div
          className="gesture"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <img src={gesture} alt="gesture" />
        </motion.div>
      </motion.div>
    </SlideFirstStyle>
  );
};

export default FirstSlide;
