import { motion } from "framer-motion";
import { memo } from "react";
import cta from "../../assets/slide1/cta.png";
import ctaWEBP from "../../assets/slide1/cta.webp";
import h1 from "../../assets/slide2/hl1.png";
import h1WEBP from "../../assets/slide2/hl1.webp";
import h2 from "../../assets/slide2/hl2.png";
import h2WEBP from "../../assets/slide2/hl2.webp";
import img1 from "../../assets/slide2/img1.png";
import img1WEBP from "../../assets/slide2/img1.webp";
import img2 from "../../assets/slide2/img2.png";
import img2WEBP from "../../assets/slide2/img2.webp";
import img3 from "../../assets/slide2/img3.png";
import img3WEBP from "../../assets/slide2/img3.webp";
import img4 from "../../assets/slide2/img4.png";
import img4WEBP from "../../assets/slide2/img4.webp";
import img5 from "../../assets/slide2/img5.png";
import img5WEBP from "../../assets/slide2/img5.webp";
import img6 from "../../assets/slide2/img6.png";
import img6WEBP from "../../assets/slide2/img6.webp";
import img7 from "../../assets/slide2/img7.png";
import img7WEBP from "../../assets/slide2/img7.webp";
import legal from "../../assets/slide2/legal.png";
import legalWEBP from "../../assets/slide2/legal.webp";
import { SlideSecondStyle } from "../../styles/SlideSecond.style";

const SecondSlide = () => {
  return (
    <SlideSecondStyle>
      <motion.div
        className="title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <picture>
          <source srcSet={h1WEBP} type="image/webp" />
          <img srcSet={h1} alt="title" />
        </picture>
      </motion.div>

      <motion.div
        className="subtitle"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <picture>
          <source srcSet={h2WEBP} type="image/webp" />
          <img srcSet={h2} alt="subtitle" />
        </picture>
      </motion.div>

      <div className="top-images">
        <motion.div
          className="top-images__img1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <picture>
            <source srcSet={img1WEBP} type="image/webp" />
            <img srcSet={img1} alt="img1" />
          </picture>
        </motion.div>
        <motion.div
          className="top-images__img2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <picture>
            <source srcSet={img2WEBP} type="image/webp" />
            <img srcSet={img2} alt="img2" />
          </picture>
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="top-images__img3"
        >
          <picture>
            <source srcSet={img3WEBP} type="image/webp" />
            <img srcSet={img3} alt="img3" />
          </picture>
        </motion.div>
        <motion.div
          className="top-images__img4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <picture>
            <source srcSet={img4WEBP} type="image/webp" />
            <img srcSet={img4} alt="img4" />
          </picture>
        </motion.div>
      </div>

      <div className="bottom-images">
        <motion.div
          className="bottom-images__img1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <picture>
            <source srcSet={img5WEBP} type="image/webp" />
            <img srcSet={img5} alt="img5" />
          </picture>
        </motion.div>
        <motion.div
          className="bottom-images__img2"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <picture>
            <source srcSet={img6WEBP} type="image/webp" />
            <img srcSet={img6} alt="img6" />
          </picture>
        </motion.div>
        <motion.div
          className="bottom-images__img3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 2.3 }}
        >
          <picture>
            <source srcSet={img7WEBP} type="image/webp" />
            <img srcSet={img7} alt="img7" />
          </picture>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="cta"
      >
        <a href="https://example.com" target="_blank">
          <picture>
            <source srcSet={ctaWEBP} type="image/webp" />
            <img srcSet={cta} alt="cta" />
          </picture>
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 2.7 }}
        className="legal"
      >
        <picture>
          <source srcSet={legalWEBP} type="image/webp" />
          <img srcSet={legal} alt="legal" />
        </picture>
      </motion.div>
    </SlideSecondStyle>
  );
};

export default memo(SecondSlide);
