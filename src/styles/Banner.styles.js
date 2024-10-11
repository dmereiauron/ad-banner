import { motion } from "framer-motion";
import styled from "styled-components";
export const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  min-width: 320px;
  min-height: 480px;
  max-width: 640px;
  max-height: 960px;

  .slides-wrapper {
    display: flex;
    width: 200%;
  }

  .slide {
    width: 50%;
  }

  .footer {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const SlideContainer = styled(motion.div)`
  height: 100%;
`;

export const SlideButton = styled.button`
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
`;
