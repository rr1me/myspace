import s from './CLIShellBack.module.scss';
import CircleSymbolPair from '@/app/components/atoms/CircleSymbolPair/CircleSymbolPair';
import { katakana } from '@/app/components/shared/utils';

const CLIShellBack = () => {
	return (
		<div className={s.backShell}>
			<div className={s.quadroSymbols}>
				<CircleSymbolPair>
					{katakana[2]}
				</CircleSymbolPair>
				<CircleSymbolPair red>
					{katakana[14]}
				</CircleSymbolPair>
				<CircleSymbolPair>
					{'<'}
				</CircleSymbolPair>
				<CircleSymbolPair>
					¿
				</CircleSymbolPair>
			</div>
			<div className={s.shellTab}/>
		</div>
	);
};

export default CLIShellBack;
