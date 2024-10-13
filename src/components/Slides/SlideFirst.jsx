import { motion } from "framer-motion";
import React, { memo } from "react";
import arrow from "../../assets/slide1/arrow.png";
import arrowWEBP from "../../assets/slide1/arrow.webp";
import cta from "../../assets/slide1/cta.png";
import ctaWEBP from "../../assets/slide1/cta.webp";
import gesture from "../../assets/slide1/gesture.png";
import gestureWEBP from "../../assets/slide1/gesture.webp";
import h1 from "../../assets/slide1/hl1.png";
import h1WEBP from "../../assets/slide1/hl1.webp";
import h2 from "../../assets/slide1/hl2.png";
import h2WEBP from "../../assets/slide1/hl2.webp";
import packshots from "../../assets/slide1/packshots.png";
import packshotsWEBP from "../../assets/slide1/packshots.webp";
import sl from "../../assets/slide1/sl.png";
import slWEBP from "../../assets/slide1/sl.webp";
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
        <picture>
          <source srcSet={h1WEBP} type="image/webp" />
          <img srcSet={h1} alt="title" />
        </picture>
      </motion.div>

      <motion.div
        className="subtitle"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <picture>
          <source srcSet={h2WEBP} type="image/webp" />
          <img srcSet={h2} alt="subtitle" />
        </picture>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="products"
      >
        <picture>
          <source srcSet={packshotsWEBP} type="image/webp" />
          <img srcSet={packshots} alt="products" />
        </picture>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="sl"
      >
        <picture>
          <source srcSet={slWEBP} type="image/webp" />
          <img srcSet={sl} alt="sl" />
        </picture>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
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
          <picture>
            <source srcSet={arrowWEBP} type="image/webp" />
            <img srcSet={arrow} alt="arrow" />
          </picture>
        </motion.div>
        <motion.div
          className="gesture"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <picture>
            <source srcSet={gestureWEBP} type="image/webp" />
            <img srcSet={gesture} alt="gesture" />
          </picture>
        </motion.div>
      </motion.div>
    </SlideFirstStyle>
  );
};

export default memo(FirstSlide);
