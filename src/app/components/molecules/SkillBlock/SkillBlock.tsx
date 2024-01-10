import s from './SkillBlock.module.scss';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import restyle from '@/app/components/shared/restyle';
import { colorVars } from '@/app/theme';
import { SkillData } from '@/app/components/organisms/SkillColumn/SkillColumn';
import clsx from 'clsx';

const Tab = restyle(TabToChange, {
	width: 1,
	position: 'relative'
});

const SkillBlock = ({ data, nestLevel = 0, specifyTabColor,
	rotateTab, nonAdaptive, classNames
}: {data: SkillData, nestLevel?: number, specifyTabColor?: string,
		rotateTab?: boolean, nonAdaptive?: boolean,
		classNames?: Partial<Record<'block' | 'header' | 'wrapper' | 'inner', string>>
	}) => {
	const blockClassNames = clsx({
		[s.skillBlock]: true,
		...(classNames ? {
			[classNames!.block!]: !!classNames?.block
		} : {})
	});
	const headerClassNames = clsx({
		[s.header]: true,
		...(classNames ? {
			[classNames!.header!]: !!classNames?.header
		} : {})
	});
	const wrapperClassNames = clsx({
		[s.contentWrapper]: true,
		[s.adaptiveContentWrapper]: !nonAdaptive,
		...(classNames ? {
			[classNames!.wrapper!]: !!classNames?.wrapper
		} : {})
	});
	const innerClassNames = clsx({
		[s.inner]: true,
		[s.adaptiveInner]: nonAdaptive,
		...(classNames ? {
			[classNames!.inner!]: !!classNames?.inner
		} : {})
	});

	return (
		<div className={blockClassNames}>
			<h3 className={headerClassNames}>{data.header}</h3>
			<div className={wrapperClassNames}>
				<Tab sx={{
					background: !specifyTabColor ?
						nestLevel % 2 === 0 ? colorVars.c_main_first : colorVars.c_addition_second
						:
						specifyTabColor,
					rotate: rotateTab ? '180deg' : undefined
				}}/>
				<div className={s.content}>
					<div className={innerClassNames}>
						{data.content.map((x, i) => {
							if (typeof x === 'object')
								return <SkillBlock data={x} key={i} nestLevel={nestLevel + 1}/>;
							return <div key={i}>{x}</div>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillBlock;
