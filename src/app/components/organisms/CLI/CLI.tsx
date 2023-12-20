import s from './CLI.module.scss';
import CLIShell from '@/app/components/molecules/CLIShell/CLIShell';
import CLITabArray from '@/app/components/molecules/CLITabArray/CLITabArray';
import CLIShellBack from '@/app/components/molecules/CLIBackShell/CLIShellBack';

const CLI = () => {
	return (
		<div className={s.cli}>
			<CLITabArray/>
			<div className={s.inner}>
				<CLIShell/>
				<CLIShellBack/>
			</div>

			<div className={s.nonEndingSeparator}/>

			<CLITabArray big/>

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
