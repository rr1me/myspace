import s from './CLI.module.scss';
import CLIShell from '@/app/components/molecules/CLIShell/CLIShell';
import CLITabArray from '@/app/components/molecules/CLITabArray/CLITabArray';
import CLIShellBack from '@/app/components/molecules/CLIBackShell/CLIShellBack';
import CLIBottom from '@/app/components/molecules/CLIBottom/CLIBottom';

const CLI = () => {
	return (
		<div className={s.cli}>
			<CLITabArray/>
			<div className={s.inner}>
				<CLIShell/>
				<CLIShellBack/>
			</div>

			<CLIBottom/>
		</div>
	);
};

export default CLI;
