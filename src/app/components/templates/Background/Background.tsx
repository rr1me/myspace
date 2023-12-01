import s from './Background.module.scss';
import RedMovingCode from '@/app/components/organisms/RedMovingCode/RedMovingCode';
import CryptoDataChecker from '@/app/components/organisms/CryptoDataChecker/CryptoDataChecker';
import Marquee from '../../molecules/Marquee/Marquee';
import ExtendingLine from '@/app/components/atoms/ExtendingLine/ExtendingLine';
import { ExtendingLineVariant } from '@/app/components/atoms/ExtendingLine/utils';

const Background = () => //fixme horizontal marquee animation(start but)
	(
		<div className={s.background}>
			<div className={s.justToSeeIt} />
			<ExtendingLine />
			<Marquee horizontal>
				<p className={s.text}>{'*group_info) { if (group_info->blocks[0] != group_info->small_block) { int i; for (i = 0; i < group_info->nblocks; i++) free_page((unsigned long)group_info->blocks[i]); } kfree(group_info); } EXPORT_SYMBOL(groups_free); /* export the group_info to a user-space array */ static int groups_to_user(gid_t __user *grouplist, const struct group_info *group_info) { int i; unsigned int count = group_info->ngroups; for (i = 0; i < group_info'}</p>
			</Marquee>
			<ExtendingLine variant={ExtendingLineVariant.backward} />

			<RedMovingCode />

			<ExtendingLine variant={ExtendingLineVariant.centered} color='g_separator' />

			<div className={s.bottom}>
				<CryptoDataChecker />
			</div>
		</div>
	);

export default Background;
