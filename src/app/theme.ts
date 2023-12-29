import s from './vars.module.scss';

export type Colors =
	'c_main_first' |
	'c_main_second' |
	'c_main_second_2' |
	'c_main_third' |
	'c_main_dark' |
	'c_addition_first' |
	'c_addition_first_2' |
	'c_addition_second' |
	'c_addition_second_80p' |
	'c_addition_second_50p' |
	'c_accent_gold' |

	/////

	'g_separator' |
	'g_separator_clr_addition' |
	'g_separator_clr_addition_vertical' |
	'g_separator_nonEnding' |
	'g_separator_oneway' |
	'g_separator_oneway_vertical' |

	'g_cliSHell' |

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
