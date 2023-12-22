import s from './CLIShell.module.scss';
import LiningWrapper from '@/app/components/atoms/LiningWrapper/LiningWrapper';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import restyle from '@/app/components/shared/restyle';
import { colorVars } from '@/app/theme';
import CLIShellInteraction from '@/app/components/molecules/CLIShellInteraction/CLIShellInteraction';

const Tab = restyle(TabToChange, {
	background: colorVars.g_separator_oneway,
});

const CLIShell = () =>
	(
		<div className={s.shell}>
			<LiningWrapper>
				<Tab sx={{ width: 400, height: 1 }} />
				<Tab sx={{ width: 120, height: 1, rotate: '90deg', transformOrigin: '0 0' }} />
				<Tab sx={{ width: 120, height: 1, rotate: '270deg', transformOrigin: '100% 0', right: 0 }} />
				<Tab sx={{ width: 400, height: 1, bottom: 0, right: 0, rotate: '180deg' }} />
			</LiningWrapper>

			<CLIShellInteraction/>
		</div>
	);

export default CLIShell;
