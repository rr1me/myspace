import s from './SkillColumn.module.scss';
import SkillBlock from '@/app/components/molecules/SkillBlock/SkillBlock';
import clsx from 'clsx';
import { animated } from '@react-spring/web';
import { Springs } from '@/app/components/molecules/ExperienceBlock/ExperienceBlock';

export type SkillData = {
	header: string;
	content: (SkillData | string)[]
}

const SkillColumn = ({ header, children,
	horizontalTabSprings, headerSprings, innerSprings }:
	{header: string, children: SkillData[],
		horizontalTabSprings: Springs, headerSprings: Springs, innerSprings: Springs}) => {

	return (
		<section className={s.skill}>
			<div className={s.headerWrapper}>
				<animated.h2 style={headerSprings} className={s.header}>{header}</animated.h2>
			</div>
			<animated.div style={horizontalTabSprings} className={s.tab}/>
			<div className={s.innerWrapper}>
				<animated.div style={innerSprings} className={clsx({
					[s.inner]: true,
					[s.misc]: header === 'miscellaneous'
				})}>
					{children.map((x, i) => (
						<SkillBlock key={i} data={x} />
					))}
				</animated.div>
			</div>
		</section>
	);
};

export default SkillColumn;
