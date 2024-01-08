import s from './Project.module.scss';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import restyle, { applyProps } from '@/app/components/shared/restyle';
import { colorVars, rajdhani } from '@/app/theme';
import SkillBlockToChange from '@/app/components/molecules/SkillBlock/SkillBlock';
import { createClassName } from '@/app/components/shared/utils';
import { ComponentProps } from 'react';
import Button from '@/app/components/atoms/Button/Button';

const SkillBlock = applyProps<Pick<ComponentProps<typeof SkillBlockToChange>, 'data'>>(SkillBlockToChange, {
	headerSx: { fontSize: 16 },
	innerSx: { fontSize: 14, gap: 4 },
	wrapperSx: { marginTop: 0 },
	nonAdaptive: true,
	rotateTab: true,
	specifyTabColor: colorVars.g_separator_oneway_vertical
});

const Tab = restyle(TabToChange, {
	backgroundColor: colorVars.c_main_second,
});

const Project = ({ image, children: desc }: {image: string, children: string}) => {
	return (
		<section className={createClassName(s.project, rajdhani)}>
			<div className={s.decorationRow}>
				<div className={s.highDecoration} />

				<div className={s.inner}>
					<div className={s.bottomBorderTab}/>
					<div className={s.rightBorderTab}/>
					<div className={s.leftBorderTab}/>

					<div className={s.title}>
						<h2>Sketch service</h2>
						<div className={s.titleTab} />
					</div>

					<img src={image} className={s.image} />

					<div className={s.info}>
						<div className={s.techs}>
							<SkillBlock
								data={{
									header: 'backend', content: [
										'node js',
										'nest js',
										'peer js',
										'socket io',
									],
								}}
							/>
							<SkillBlock
								data={{
									header: 'frontend', content: [
										'typescript',
										'react',
										'redux toolkit',
										'socket io',
										'peer js',
										'simplebar',
										'react-colorful',
									],
								}} />
						</div>

						<div className={s.gradSep} />

						<div className={s.bottom}>
							<p className={s.desc}>
								{desc}
							</p>
							<div className={s.btnWrapper}>
								<Button anotherColorVariation>
									Github
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
