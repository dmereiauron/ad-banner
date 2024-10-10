import { motion } from 'framer-motion'
import cta from '../../assets/slide1/cta.png'
import h1 from '../../assets/slide2/hl1.png'
import h2 from '../../assets/slide2/hl2.png'
import img1 from '../../assets/slide2/img1.png'
import img2 from '../../assets/slide2/img2.png'
import img3 from '../../assets/slide2/img3.png'
import img4 from '../../assets/slide2/img4.png'
import img5 from '../../assets/slide2/img5.png'
import img6 from '../../assets/slide2/img6.png'
import img7 from '../../assets/slide2/img7.png'
import legal from '../../assets/slide2/legal.png'
import { SlideSecondStyle } from '../../styles/SlideSecond.style'

const SecondSlide = () => {
	return (
		<SlideSecondStyle>
			<motion.div
				className='title'
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.5 }}>
				<img src={h1} alt='title' />
			</motion.div>

			<motion.div
				className='subtitle'
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.8 }}>
				<img src={h2} alt='subtitle' />
			</motion.div>

			<div className='top-images'>
				<motion.div
					className='top-images__img1'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.6, delay: 0.7 }}>
					<img src={img1} alt='img1' />
				</motion.div>
				<motion.div
					className='top-images__img2'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.6, delay: 1 }}>
					<img src={img2} alt='img2' />
				</motion.div>
				<motion.div
					initial={{ scale: 0, rotate: -45 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ duration: 0.6, delay: 1.4 }}
					className='top-images__img3'>
					<img src={img3} alt='img3' />
				</motion.div>
				<motion.div
					className='top-images__img4'
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.5 }}>
					<img src={img4} alt='img4' />
				</motion.div>
			</div>

			<div className='bottom-images'>
				<motion.div
					className='bottom-images__img1'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.6, delay: 1.8 }}>
					<img src={img5} alt='img5' />
				</motion.div>
				<motion.div
					className='bottom-images__img2'
					initial={{ scale: 0, rotate: -45 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ duration: 0.8, delay: 2 }}>
					<img src={img6} alt='img6' />
				</motion.div>
				<motion.div
					className='bottom-images__img3'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.6, delay: 2.3 }}>
					<img src={img7} alt='img7' />
				</motion.div>
			</div>

			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.6, delay: 2.6 }}
				className='cta'>
				<a href='https://example.com' target='_blank'>
					<img src={cta} alt='cta' />
				</a>
			</motion.div>

			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.6, delay: 2.7 }}
				className='legal'>
				<img src={legal} alt='legal' />
			</motion.div>
		</SlideSecondStyle>
	)
}

export default SecondSlide
