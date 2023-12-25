'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

const AnimationContext = createContext<{
	redCodeQueue: number[]
	setRedCodeQueue: Dispatch<SetStateAction<number[]>>
}>({
	redCodeQueue: [],
	setRedCodeQueue: () => {},
});

export default AnimationContext;

export const AnimationProvider = ({ children }: {children: ReactNode}) => {
	const [redCodeQueue, setRedCodeQueue] = useState<number[]>([]);

	return (
		<AnimationContext.Provider value={{ redCodeQueue, setRedCodeQueue }}>
			{children}
		</AnimationContext.Provider>
	);
};


