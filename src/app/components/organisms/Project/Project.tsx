import s from './Project.module.scss';
import { rajdhani } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';
import ProjectInfo from '@/app/components/molecules/ProjectInfo/ProjectInfo';
import ProjectTopAndInnerDecor from '@/app/components/molecules/ProjectInnerDecorations/ProjectTopAndInnerDecor';
import { ReactNode } from 'react';

const Project = ({ header, image, children: desc, backend, frontend, github }:
	{header: string, image: string, children: ReactNode,
		backend?: string[], frontend?: string[], github: string}) => {
	return (
		<section className={createClassName(s.project, rajdhani)}>
			<div className={s.decorationRow}>
				<div className={s.highDecoration} />

				<div className={s.inner}>
					<ProjectTopAndInnerDecor header={header}/>

					<img src={image} alt={header + ' image'} className={s.image} />

					<ProjectInfo backend={backend} frontend={frontend}
						desc={desc} github={github}/>
				</div>
			</div>
		</section>
	);
};

export default Project;
