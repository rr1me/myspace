import s from './vars.module.scss';
import { Mohave, Orbitron, Rajdhani } from 'next/font/google';

export type Colors =
	'c_main_first' |
	'c_main_second' |
	'c_main_second_2' |
	'c_main_second_as_background' |
	'c_main_third' |

	'c_main_dark' |
	'c_main_darker' |

	'c_addition_first' |
	'c_addition_first_2' |
	'c_addition_second' |
	'c_addition_second_80p' |
	'c_addition_second_50p' |

	'c_accent_gold' |

	'c_fourth_dark' |

	'c_fifth_light' |

	/////

	'g_separator' |
	'g_separator_clr_addition' |
	'g_separator_clr_addition_vertical' |
	'g_separator_nonEnding' |

	'g_separator_oneway' |
	'g_separator_oneway_vertical' |
	'g_separator_oneway_main' |
	'g_separator_oneway_main_vertical' |

	'g_cliSHell' |

	'g_additionalFirstBlueGradButton' |
	'g_blueGradButton' |
	'g_redGradButton' |
	'g_goldGradButton' |

	/////

	'e_box_shadow' |
	'main_box_shadow'

export type ColorVars = {
	[key in Colors]: string;
};
export const colorVars = {
	...s
} as ColorVars;

const otbitronFont = Orbitron({ subsets: ['latin'] });
const mohaveFont = Mohave({ weight: '500', subsets: ['latin'] });
const rajdhaniFont = Rajdhani({ weight: '500', subsets: ['latin'] });

export const orbitron = otbitronFont.className;
export const mohave = mohaveFont.className;
export const rajdhani = rajdhaniFont.className;
