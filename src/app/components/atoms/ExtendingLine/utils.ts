export enum ExtendingLineVariant {
	normal,
	backward,
	centered
}

export const getVariant = (variant: ExtendingLineVariant) => {
	switch (variant){
	case ExtendingLineVariant.normal:
		return {
			from: {
				width: '0'
			},
			to: {
				width: '100%'
			}
		};
	case ExtendingLineVariant.backward:
		return {
			from: {
				left: '100%'
			},
			to: {
				left: '0'
			}
		};
	case ExtendingLineVariant.centered:
		return {
			from: {
				left: '50%',
				width: '0'
			},
			to: {
				left: '0',
				width: '100%'
			}
		};
	}
};
