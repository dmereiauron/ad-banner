import styled from "styled-components";
import GlobalBg from "../assets/bg.png";

export const SlideSecondStyle = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${GlobalBg});
  .title,
  .subtitle {
    img {
      width: 100%;
      height: auto;
    }
  }
  .subtitle {
    margin-top: -1.1%;
  }
  .top-images {
    min-height: 30%;
    display: flex;
    margin-top: -2%;
  }
  .top-images__img1 {
    width: 35%;
    min-width: 27%;
    margin-top: -2%;
    img {
      width: 138.5%;
      height: auto;
    }
  }

  .top-images__img2 {
    width: 25%;
    min-width: 25%;
    margin-top: 4%;
    margin-left: 2%;
    img {
      width: 84.5%;
      height: auto;
    }
  }

  .top-images__img3 {
    width: 20%;
    min-width: 15%;
    margin-top: 4%;
    margin-left: -2%;
    img {
      width: 100%;
      height: auto;
    }
  }

  .top-images__img4 {
    width: 46%;
    min-width: 37%;
    margin-left: -4%;
    margin-top: 5%;
    img {
      width: 100%;
      height: auto;
    }
  }

  .bottom-images {
    min-height: 30%;
    margin-top: -4%;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  .bottom-images__img1 {
    margin-left: -17%;
    margin-top: -13%;
    min-width: 43%;
    width: 40%;
    img {
      width: 100%;
      height: auto;
    }
  }

  .bottom-images__img2 {
    max-width: 113px;
    max-height: 75px;
    min-width: 22%;
    width: 22%;
    margin-top: 32%;
    margin-left: -15%;
    img {
      width: 100%;
      height: auto;
    }
  }

  .bottom-images__img3 {
    margin-top: -8%;
    min-width: 52%;
    width: 52%;
    img {
      width: 100%;
      height: auto;
    }
  }

  .cta {
    display: flex;
    justify-content: center;
    margin-left: -1%;
    margin-top: -1%;
    width: 100%;
    cursor: pointer;
    picture {
      display: flex;
      justify-content: center;
    }
    &:hover {
      img {
        opacity: 0.8;
        transition: opacity 0.3s ease;
      }
    }
    a {
      display: flex;
      justify-content: center;
      width: 100%;
      img {
        width: 67%;
      }
    }
  }

  .legal {
    img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (min-width: 430px) {
    .legal {
      padding-top: 1.5%;
    }
  }
`;
