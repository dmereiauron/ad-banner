import styled from 'styled-components'
import GlobalBg from '../assets/bg.png'

export const SlideFirstStyle = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${GlobalBg});
	padding-top: 5%;
	padding-bottom: 7%;
	position: relative;
	.title,
	.subtitle,
	.products,
	.sl,
	.buttons {
		img {
			width: 100%;
			height: auto;
		}
	}
	.subtitle {
		padding-top: 1%;
	}
	.products {
		padding-top: 4%;
	}
	.sl {
		padding-top: 1%;
	}
	.cta {
		display: flex;
		justify-content: center;
		padding-top: 3%;
		margin-left: -1%;
		width: 100%;
		cursor: pointer;
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
	.arrow {
		cursor: pointer;
		&:hover {
			img {
				opacity: 0.8;
				transition: opacity 0.3s ease;
			}
		}
	}
	.gesture {
		position: relative;
		right: -34%;
		bottom: 13%;
		img {
			width: 51%;
		}
	}
	.buttons {
		position: absolute;
		right: 1%;
		bottom: 10%;
		width: 28%;
	}
`
