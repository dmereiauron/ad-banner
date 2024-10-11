import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import footerLogoLink from "../assets/logo.png";
import { BannerWrapper } from "../styles/Banner.styles";
import SlideFirst from "./Slides/SlideFirst";
import SlideSecond from "./Slides/SlideSecond";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSetNewSlide = useCallback(() => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
  }, []);

  const firstSlide = useMemo(
    () => <SlideFirst setNewSlide={handleSetNewSlide} />,
    [handleSetNewSlide],
  );
  const secondSlide = useMemo(() => <SlideSecond />, []);

  return (
    <BannerWrapper>
      <motion.div
        style={{ display: "flex", width: "200%" }}
        initial={{ x: 0 }}
        animate={{ x: activeSlide === 0 ? 0 : "-50%" }}
        transition={{ duration: 1 }}
      >
        <div style={{ width: "50%" }}>{firstSlide}</div>
        <div style={{ width: "50%" }}>{activeSlide === 1 && secondSlide}</div>
      </motion.div>
      <div className="footer">
        <img src={footerLogoLink} alt="Footer Logo" />
      </div>
    </BannerWrapper>
  );
};

export default Banner;
