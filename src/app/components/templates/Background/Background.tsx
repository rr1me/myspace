import s from './Background.module.scss';
import RedMovingCode from '@/app/components/organisms/RedMovingCode/RedMovingCode';
import CryptoDataChecker from '@/app/components/organisms/CryptoDataChecker/CryptoDataChecker';
import ExtendingLine from '@/app/components/atoms/ExtendingLine/ExtendingLine';
import { ExtendingLineVariant } from '@/app/components/atoms/ExtendingLine/utils';
import CLI from '@/app/components/organisms/CLI/CLI';
import TopTextLine from '@/app/components/molecules/TopTextLine/TopTextLine';

const Background = () => //fixme horizontal marquee animation(start but)
	(
		<div className={s.background}>
			<div className={s.justToSeeIt} />
			<TopTextLine/>

			<RedMovingCode />

			<ExtendingLine variant={ExtendingLineVariant.centered} color='g_separator' />

			<section className={s.bottom}>
				<CLI />
				<CryptoDataChecker />
			</section>
		</div>
	);

export default Background;
