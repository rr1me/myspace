import s from './CryptoDataCheckerLining.module.scss';
import Tab from '@/app/components/atoms/Tab/Tab';
import LineBreaker from '@/app/components/atoms/LineBreaker/LineBreaker';
import { LineBreakerVariant } from '@/app/components/atoms/LineBreaker/utils';

const CryptoDataCheckerLining = () => {
	return (
		<div className={s.lining}>
			<Tab sx={{ width: 282, height: 1 }}/>
			<Tab sx={{ width: 308, height: 1, left: 292 }}/>

			<Tab sx={{ width: 1, height: '100%' }}/>
			<Tab sx={{ width: 1, height: '100%', left: 60 }}/>
			<Tab sx={{ width: 1, height: '100%', left: 310 }}/>

			<LineBreaker sx={{ top: -4 }}/>
			<LineBreaker mirrored vertical sx={{ left: -4, top: 0 }}/>
			<LineBreaker vertical sx={{ left: 65 }}/>

			<LineBreaker mirrored vertical sx={{ left: -4, top: 60 }}
									 variant={LineBreakerVariant.startToEnd}/>

			<LineBreaker mirrored vertical sx={{ left: 55.9, top: 20 }}
									 variant={LineBreakerVariant.startToEnd}/>

			<LineBreaker sx={{ left: 233, top: -4 }} variant={LineBreakerVariant.startToEnd}/>

			<div className={s.square}/>
		</div>
	);
};

export default CryptoDataCheckerLining;
