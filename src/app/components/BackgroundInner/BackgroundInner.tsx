'use client';
import s from './BackgroundInner.module.scss';
import { animated, useSpring } from '@react-spring/web';

import int from './introduction.png';
import reference from './img.png';
import { createPortal } from 'react-dom';
import ExtendingLine from '@/app/components/ExtendingLine/ExtendingLine';
import MovingCode from '@/app/components/MovingCode/MovingCode';

const BackgroundInner = () => {
	// const [springs] = useSpring(() => ({
	// 	from: {
	// 		width: '0'
	// 	},
	// 	to: {
	// 		width: '100%'
	// 	},
	// 	// delay: 1000
	// }));

	// const handleClick = () => {
	// 	api.start({
	// 		from: {
	// 			x: 0,
	// 		},
	// 		to: {
	// 			x: 100,
	// 		},
	// 	});
	// };

	return (
		<div className={s.inner}>
			<div className={s.justToSeeIt}/>
			<ExtendingLine/>
			{/*<p className={s.text}>{Array(300).fill('P')}</p>*/}
			<p className={s.text}>{'*group_info) { if (group_info->blocks[0] != group_info->small_block) { int i; for (i = 0; i < group_info->nblocks; i++) free_page((unsigned long)group_info->blocks[i]); } kfree(group_info); } EXPORT_SYMBOL(groups_free); /* export the group_info to a user-space array */ static int groups_to_user(gid_t __user *grouplist, const struct group_info *group_info) { int i; unsigned int count = group_info->ngroups; for (i = 0; i < group_info'}</p>
			<ExtendingLine backward/>

			<MovingCode/>

			{/*<div className={s.checker}/>*/}
			{/*<img src={int.src} className={s.img}/>*/}
			{/*<Reference/>*/}
		</div>
	);
};

export default BackgroundInner;

const Reference = () => createPortal(
	<div className={s.reference}>
		<img src={reference.src} className={s.img}/>
	</div>, document.body)
