'use client';

import s from './Background.module.scss';
import { createPortal } from 'react-dom';
import reference from '@/app/(pages)/check/img.png';
import ExtendingLine, { ExtendingLineVariant } from '@/app/components/elements/ExtendingLine/ExtendingLine';
import Marquee from '@/app/components/elements/Marquee/Marquee';
import { useEffect, useState } from 'react';

const Background = () => {
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	},[]);

	return (
		<div className={s.background}>
			<div className={s.justToSeeIt}/>
			<ExtendingLine/>
			<p className={s.text}>{'*group_info) { if (group_info->blocks[0] != group_info->small_block) { int i; for (i = 0; i < group_info->nblocks; i++) free_page((unsigned long)group_info->blocks[i]); } kfree(group_info); } EXPORT_SYMBOL(groups_free); /* export the group_info to a user-space array */ static int groups_to_user(gid_t __user *grouplist, const struct group_info *group_info) { int i; unsigned int count = group_info->ngroups; for (i = 0; i < group_info'}</p>
			<ExtendingLine variant={ExtendingLineVariant.backward}/>

			{hydrated && <Marquee/>}

			<ExtendingLine variant={ExtendingLineVariant.centered} color='g_separator'/>
		</div>
	);
};

export default Background;

const Reference = () => createPortal(
	<div className={s.reference}>
		<img src={reference.src} className={s.img}/>
	</div>, document.body);
