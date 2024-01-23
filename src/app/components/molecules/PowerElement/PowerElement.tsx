import s from './PowerElement.module.scss';
import { useSpring, animated, easings } from '@react-spring/web';

const PowerElement = () => {
	const elementSprings = useSpring({
		from: {
			x: '-100%'
		},
		to: {
			x: '0'
		},
		delay: 3000,
		config:{
			easing: easings.easeInOutQuint
		}
	});

	return <animated.div style={elementSprings} className={s.wrapper}>
		<div className={s.powerElement}/>
	</animated.div>;
};

export default PowerElement;
