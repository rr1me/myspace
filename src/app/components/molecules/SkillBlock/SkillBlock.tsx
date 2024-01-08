import s from './SkillBlock.module.scss';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import restyle from '@/app/components/shared/restyle';
import { colorVars } from '@/app/theme';
import { SkillData } from '@/app/components/organisms/SkillColumn/SkillColumn';
import clsx from 'clsx';
import { CSSObject } from 'styled-components';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const Tab = restyle(TabToChange, {
	width: 1,
	position: 'relative'
});

const SkillBlock = ({ data, nestLevel = 0, specifyTabColor, rotateTab,
	nonAdaptive, headerSx, innerSx, wrapperSx }:
	{data: SkillData, nestLevel?: number, specifyTabColor?: string, rotateTab?: boolean,
		nonAdaptive?: boolean, headerSx?: CSSObject, innerSx?: CSSObject, wrapperSx?: CSSObject}) => {
	return (
		<div className={s.skillBlock}>
			<SxSC as='h3' $sx={headerSx} className={s.header}>{data.header}</SxSC>
			<SxSC $sx={wrapperSx} className={clsx({
				[s.contentWrapper]: true,
				[s.adaptiveContentWrapper]: !nonAdaptive
			})}>
				<Tab sx={{
					background: !specifyTabColor ?
						nestLevel % 2 === 0 ? colorVars.c_main_first : colorVars.c_addition_second
						:
						specifyTabColor,
					rotate: rotateTab ? '180deg' : undefined
				}}/>
				<div className={s.content}>
					<SxSC $sx={innerSx} className={clsx({
						[s.inner]: true,
						[s.adaptiveInner]: nonAdaptive
					})}>
						{data.content.map((x, i) => {
							if (typeof x === 'object')
								return <SkillBlock data={x} key={i} nestLevel={nestLevel + 1}/>;
							return <div key={i}>{x}</div>;
						})}
					</SxSC>
				</div>
			</SxSC>
		</div>
	);
};

export default SkillBlock;
