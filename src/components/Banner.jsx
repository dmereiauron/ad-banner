import { motion } from 'framer-motion'
import { useState } from 'react'
import footerLogoLink from '../assets/logo.png'
import { BannerWrapper } from '../styles/Banner.styles'
import SlideFirst from './Slides/SlideFirst'
import SlideSecond from './Slides/SlideSecond'

const Banner = () => {
	const [activeSlide, setActiveSlide] = useState(0)

	return (
		<BannerWrapper>
			<motion.div
				style={{ display: 'flex', width: '200%' }}
				initial={{ x: 0 }}
				animate={{ x: activeSlide === 0 ? 0 : '-50%' }}
				transition={{ duration: 1 }}>
				<div style={{ width: '50%' }}>
					<SlideFirst setNewSlide={() => setActiveSlide(1)} />
				</div>
				<div style={{ width: '50%' }}>
					{activeSlide === 1 && <SlideSecond />}
				</div>
			</motion.div>
			<div className='footer'>
				<img src={footerLogoLink} alt='Footer logo' />
			</div>
		</BannerWrapper>
	)
}

export default Banner
