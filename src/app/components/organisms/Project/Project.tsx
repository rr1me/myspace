import s from './Project.module.scss';
import { rajdhani } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';
import ProjectInfo from '@/app/components/molecules/ProjectInfo/ProjectInfo';
import ProjectTopAndInnerDecor from '@/app/components/molecules/ProjectInnerDecorations/ProjectTopAndInnerDecor';
import { ReactNode } from 'react';
import { animated, easings, useChain, useSpring, useSpringRef } from '@react-spring/web';

const config = {
	duration: 1200,
	easing: easings.easeInOutQuint
};

const Project = ({ header, image, children: desc, backend, frontend, github,
	pageAnimation, onAnimationEnd }:
	{header: string, image: string, children: ReactNode,
		backend?: string[], frontend?: string[], github: string,
		pageAnimation: boolean, onAnimationEnd?: () => void}) => {

	let highDecorationSprings, innerSprings;
	if (pageAnimation){
		const highDecorationSpringRef = useSpringRef();
		highDecorationSprings = useSpring({
			ref: highDecorationSpringRef,
			from: {
				scaleY: 0
			},
			to: {
				scaleY: 1
			},
			config
		});
		const innerSpringsSpringRef = useSpringRef();
		innerSprings = useSpring({
			ref: innerSpringsSpringRef,
			from: {
				x: '-100%'
			},
			to: {
				x: '0'
			},
			config,
			onRest: onAnimationEnd
		});
		useChain([highDecorationSpringRef, innerSpringsSpringRef], [0, 1]);
	}

	return (
		<section className={createClassName(s.project, rajdhani)}>
			<div className={s.decorationRow}>
				<animated.div style={highDecorationSprings} className={s.highDecoration} />

				<div className={s.innerWrapper}>
					<animated.div style={innerSprings} className={s.inner}>
						<ProjectTopAndInnerDecor header={header}/>

						<img src={image} alt={header + ' image'} className={s.image} />

						<ProjectInfo backend={backend} frontend={frontend}
							desc={desc} github={github}/>
					</animated.div>
				</div>
			</div>
		</section>
	);
};

export default Project;
