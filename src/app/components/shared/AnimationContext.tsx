'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

const AnimationContext = createContext<{
	redCodeQueue: number[]
	setRedCodeQueue: Dispatch<SetStateAction<number[]>>

	preloaderVisibility: boolean
	setPreloaderVisibility: Dispatch<SetStateAction<boolean>>
}>({
	redCodeQueue: [],
	setRedCodeQueue: () => {},

	preloaderVisibility: true,
	setPreloaderVisibility: () => false,
});

export default AnimationContext;

export const AnimationProvider = ({ children }: {children: ReactNode}) => {
	const [redCodeQueue, setRedCodeQueue] = useState<number[]>([]);
	const [preloaderVisibility, setPreloaderVisibility] = useState(true);

	return (
		<AnimationContext.Provider value={{
			redCodeQueue, setRedCodeQueue,
			preloaderVisibility, setPreloaderVisibility
		}}>
			{children}
		</AnimationContext.Provider>
	);
};


