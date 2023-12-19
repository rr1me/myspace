import s from './CLI.module.scss';
import DataTab from '@/app/components/atoms/DataTab/DataTab';
import CLIShell from '@/app/components/molecules/CLIShell/CLIShell';
import { colorVars } from '@/app/theme';

const CLI = () => {
	return (
		<div className={s.cli}>
			<div className={s.smallTabArray}>
				{
					Array(130).fill(0).map((_, i) => (
						<div key={i} className={s.dataTabItem}>
							<DataTab sx={{ width: 2 }} key={i}/>
						</div>
					))
				}
			</div>
			<div className={s.inner}>
				<CLIShell/>
				<div className={s.backShell}>
					<div className={s.quadroSymbols}/>
					<div className={s.shellTab}/>
				</div>
			</div>

			<div className={s.nonEndingSeparator}/>

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

			<div className={s.clipPathWrapper}>
				<div className={s.clipPathLine}/>
				<div className={s.skewWrapper}>
					{Array(5).fill(0).map((_, i) => (
						<div className={s.skewed} key={i}/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CLI;
