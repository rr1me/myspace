import s from './DataMovingParts.module.scss';
import DataPart from '@/app/components/molecules/DataPart/DataPart';
import DataTab from '@/app/components/atoms/DataTab/DataTab';
import { colorVars } from '@/app/theme';
import Marquee from '@/app/components/molecules/Marquee/Marquee';

const DataMovingParts = () => {
	return (
		<div className={s.dataMovingParts}>
			<DataTab sx={{ backgroundColor: colorVars.c_addition_second_80p, width: 1 }}/>

			<div className={s.inner}>
				<Marquee horizontal sx={{ height: '100%' }} duration={8} noOverflow>
					<div className={s.movingBlock}>
						<DataPart/>
						<DataPart/>
						<DataPart/>
					</div>
				</Marquee>
			</div>
		</div>
	);
};

export default DataMovingParts;
