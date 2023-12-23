import s from './DataPart.module.scss';
import DataTab from '@/app/components/atoms/DataTab/DataTab';
import { katakana, missingKatakana } from '@/app/components/shared/utils';
import { ReactNode } from 'react';

// todo should be a few variations of parts
const DataPart = ({ i = 0 }: {i?: 0 | 1 | 2}) =>
	(
		<div className={s.part}>
			{parts[i]}
		</div>
	);

export default DataPart;

const SmallerGap = ({ children }: {children: ReactNode}) =>
	<span className={s.triple}>
		{children}
	</span>;

const triple =
	<SmallerGap>
		<DataTab sx={{ width: 1 }}/>
		<DataTab sx={{ width: 1 }}/>
		<DataTab sx={{ width: 1 }}/>
	</SmallerGap>;

const first =
	<>
		<DataTab sx={{ width: 27 }}/>
		<DataTab sx={{ width: 3 }}/>
		{triple}
		<DataTab sx={{ width: 5 }}/>
		<DataTab sx={{ width: 70 }}/>
		<DataTab sx={{ width: 5 }}/>
	</>;

const second =
	<>
		<DataTab sx={{ width: 27 }}/>
		<DataTab sx={{ width: 1 }}/>
		<DataTab sx={{ width: 27 }}/>
		<DataTab sx={{ width: 5 }}/>
		<DataTab sx={{ width: 3 }}/>
		<div className={s.mirrorX}>
			{katakana[1]}
		</div>
		<DataTab sx={{ width: 70 }}/>
		{triple}
		<div className={s.mirrorX}>
			{katakana[27]}
		</div>
	</>;

const third =
	<>
		<DataTab sx={{ width: 10 }}/>
		<DataTab sx={{ width: 60 }}/>
		<SmallerGap>
			<DataTab sx={{ width: 3 }}/>
			<DataTab sx={{ width: 3 }}/>
			<DataTab sx={{ width: 3 }}/>
		</SmallerGap>
		<SmallerGap>
			<DataTab sx={{ width: 4 }}/>
			<DataTab sx={{ width: 4 }}/>
		</SmallerGap>
		<DataTab sx={{ width: 4 }}/>
		<div className={s.mirrorX}>
			{missingKatakana[9]}
		</div>
		<DataTab sx={{ width: 40 }}/>
		<div className={s.mirrorX}>
			{katakana[21]}
		</div>
		<DataTab sx={{ width: 20 }}/>
	</>;

const parts = [
	first,
	second,
	third
];
