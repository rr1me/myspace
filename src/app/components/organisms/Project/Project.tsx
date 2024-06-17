import s from './Project.module.scss';
import { rajdhani } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';
import ProjectInfo from '@/app/components/molecules/ProjectInfo/ProjectInfo';
import ProjectTopAndInnerDecor from '@/app/components/molecules/ProjectInnerDecorations/ProjectTopAndInnerDecor';
import { ReactNode } from 'react';
import { animated, easings } from '@react-spring/web';
import { useChainedSprings } from '@/app/components/shared/hooks';

const config = {
	duration: 1200,
	easing: easings.easeInOutQuint
};

const Project = (
	{
		header,
		image,
		children: desc,
		backend,
		frontend,
		github,
		pageAnimation,
		onAnimationEnd
	}:
	{
		header: string,
		image: string,
		children: ReactNode,
		backend?: string[],
		frontend?: string[],
		github: string,
		pageAnimation: boolean,
		onAnimationEnd?: () => void
	}) => {
	const [highDecorationSprings, innerSprings] = useChainedSprings([
		{ options: [{ scaleY: 0 }, { scaleY: 1 }, config], timing: 0 },
		{ options: [{ x: '-100%' }, { x: '0' }, config, onAnimationEnd], timing: 1 }
	], pageAnimation);

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
