import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import footerLogoLink from "../assets/logo.png";
import footerLogoLinkWEBP from "../assets/logo.webp";
import { BannerWrapper } from "../styles/Banner.styles";
import SlideFirst from "./Slides/SlideFirst";
import SlideSecond from "./Slides/SlideSecond";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSetNewSlide = useCallback(() => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
  }, []);

  return (
    <BannerWrapper>
      <motion.div
        className="slides-wrapper"
        initial={{ x: 0 }}
        animate={{ x: activeSlide === 0 ? 0 : "-50%" }}
        transition={{ duration: 1 }}
      >
        <div className="slide">
          <SlideFirst setNewSlide={handleSetNewSlide} />
        </div>
        <div className="slide">{activeSlide === 1 && <SlideSecond />}</div>
      </motion.div>
      <div className="footer">
        <picture>
          <source srcSet={footerLogoLinkWEBP} type="image/webp" />
          <img srcSet={footerLogoLink} alt="Footer Logo" />
        </picture>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
