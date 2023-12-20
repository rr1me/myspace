import s from './CLITabArray.module.scss';
import DataTab from '@/app/components/atoms/DataTab/DataTab';
import { colorVars } from '@/app/theme';

const CLITabArray = ({ big = false }: {big?: boolean}) => {
	return big ?
		<div className={s.bigTabArray}>
			{Array(8).fill(0).map((_, i) => (
				<DataTab key={i} sx={{
					flexGrow: 1,
					fontSize: 7,
					fontWeight: 'bold',
					textAlign: 'center',
					lineHeight: 1.75,
					letterSpacing: 1.2,
					color: colorVars.c_addition_first
				}}>
					CODE: ERROR
				</DataTab>
			))}
		</div>
		:
		<div className={s.smallTabArray}>
			{
				Array(130).fill(0).map((_, i) => (
					<div key={i} className={s.dataTabItem}>
						<DataTab sx={{ width: 2 }} key={i}/>
					</div>
				))
			}
		</div>
};

export default CLITabArray;
