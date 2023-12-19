import s from './DataPart.module.scss';
import DataTab from '@/app/components/atoms/DataTab/DataTab';

//todo should be a few variations of parts
const DataPart = () => {
	return <First/>;
};

export default DataPart;

const First = () => (
	<div className={s.part}>
		<DataTab sx={{ width: 27 }}/>
		<DataTab sx={{ width: 3 }}/>
		<span className={s.triple}>
			<DataTab sx={{ width: 1 }}/>
			<DataTab sx={{ width: 1 }}/>
			<DataTab sx={{ width: 1 }}/>
		</span>
		<DataTab sx={{ width: 5 }}/>
		<DataTab sx={{ width: 70 }}/>
		<DataTab sx={{ width: 5 }}/>
	</div>
);
