export type StyledDimensions = {
	$top: number | string;
	$bottom: number | string;
	$left: number | string;
	$right: number | string;
	$width: number | string;
	$height: number | string;
}

export const styleProcessor = (field: keyof StyledDimensions) =>
	(x: Partial<StyledDimensions>) => {
		const key = x[field];
		return (key ?
			`${field.replace('$', '')}: ${typeof key === 'number' ? key + 'px' : key};`
			: '');
	};
