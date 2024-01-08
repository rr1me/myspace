import clsx from 'clsx';

export const engAlphabet = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

export const digits = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
];

export const endAlphabetDigitsSpared = engAlphabet.concat(digits);

export const katakana = [
	'ﾊ', 'ﾐ', 'ﾋ', 'ｰ', 'ｳ', 'ｼ', 'ﾅ', 'ﾓ', 'ﾆ', 'ｻ', 'ﾜ', 'ﾂ', 'ｵ', 'ﾘ', 'ｱ', 'ﾎ',
	'ﾃ', 'ﾏ', 'ｹ', 'ﾒ', 'ｴ', 'ｶ', 'ｷ', 'ﾑ', 'ﾕ', 'ﾗ', 'ｾ', 'ﾈ', 'ｽ', 'ﾀ', 'ﾇ', 'ﾍ', //32
];

export const missingKatakana = [
	'ｦ', 'ｲ', 'ｸ', 'ｺ', 'ｿ', 'ﾁ', 'ﾄ',
	'ﾉ', 'ﾌ', 'ﾔ', 'ﾖ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾝ', //15
];

export const getRandomInt = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomArrayIndex = (length: number) =>
	getRandomInt(0, length - 1);

export const getRandomArrayElement = <T>(arr: T[]) =>
	arr[getRandomArrayIndex(arr.length)];

export const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

export const assembleClassNames = (classNames: string[]) => {
	const obj = classNames.reduce((obj, key) => {
		(obj[key as never] as boolean) = true;
		return obj;
	}, {});

	return clsx(obj);
};

export const createClassName = (...classNames: string[]) => assembleClassNames(classNames);

export const addToClassName = (definedClassName: string, ...classNames: string[]) =>
	definedClassName + ' ' + assembleClassNames(classNames);

export const shellRandomText = [
	{ req: 'sudo service nginx restart', res:
			'Stopping Nginx:                       [  OK  ]\n' +
			'Starting Nginx:                       [  OK  ]\n' +
			'Nginx has been stopped and is now restarting...\n' +
			'Nginx restarted successfully.\n' +
			'Nginx version: 1.18.0\n' +
			'Configuration file: /etc/nginx/nginx.conf\n' +
			'Loading configuration...\n' +
			'Configuration loaded successfully.\n' +
			'Checking Nginx syntax...\n' +
			'Syntax OK.\n' +
			'Reloading Nginx configuration...\n' +
			'Configuration reloaded successfully.\n' +
			'Performing health checks...\n' +
			'All checks passed. Nginx is running smoothly.' },
	{ req: 'sudo apt update', res:
			'Hit:1 http://ru.archive.ubuntu.com/ubuntu jammy InRelease\n' +
			'Get:2 http://ru.archive.ubuntu.com/ubuntu jammy-updates InRelease [119 kB]\n' +
			'Hit:3 https://download.docker.com/linux/ubuntu jammy InRelease\n' +
			'Hit:4 http://ru.archive.ubuntu.com/ubuntu jammy-backports InRelease\n' +
			'Get:5 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]\n' +
			'Hit:6 https://apt.postgresql.org/pub/repos/apt jammy-pgdg InRelease\n' +
			'Get:7 https://deb.nodesource.com/node_19.x jammy InRelease [4 563 B]\n' +
			'Hit:8 https://packagecloud.io/AtomEditor/atom/any any InRelease\n' +
			'Fetched 234 kB in 1s (205 kB/s)\n' +
			'Reading package lists... Done\n' +
			'Building dependency tree... Done\n' +
			'Reading state information... Done\n' +
			'5 packages can be upgraded. Run \'apt list --upgradable\' to see them.' },
	{ req: 'sudo apt upgrade', res:
			'Reading package lists... Done\n' +
			'Building dependency tree... Done\n' +
			'Reading state information... Done\n' +
			'Calculating upgrade... Done\n' +
			'Get more security updates through Ubuntu Pro with \'esm-apps\' enabled:\n' +
			'  redis-server redis-tools redis\n' +
			'Learn more about Ubuntu Pro at https://ubuntu.com/pro\n' +
			'The following packages have been kept back:\n' +
			'  gjs libgjs0g python3-update-manager update-manager update-manager-core\n' +
			'0 upgraded, 0 newly installed, 0 to remove and 5 not upgraded.' },
	{ req: 'sudo rm -r /etc', res:
			'Never gonna give you up\n' +
			'Never gonna let you down\n' +
			'Never gonna run around and desert you\n' +
			'Never gonna make you cry\n' +
			'Never gonna say goodbye\n' +
			'Never gonna tell a lie and hurt you\n' +
			'Never gonna give you up\n' +
			'Never gonna let you down\n' +
			'Never gonna run around and desert you\n' +
			'Never gonna make you cry\n' +
			'Never gonna say goodbye\n' +
			'Never gonna tell a lie and hurt you\n' +
			'Never gonna give you up\n' +
			'Never gonna let you down\n' +
			'Never gonna run around and desert you\n' +
			'Never gonna make you cry\n' +
			'Never gonna say goodbye\n' +
			'Never gonna tell a lie and hurt you' },
	{ req: 'u’re gonna die', res:
			'struct group_info init_groups = { .usage = ATOMIC_INIT(2) }; struct group_info *groups_alloc(int gidsetsize){ struct group_info *group_info; int nblocks; int i; ' +
			'nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; /* Make sure we always allocate at least one indirect block pointer */ nblocks = nblocks ? : 1; ' +
			'group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); if (!group_info) return NULL; ' +
			'group_info->ngroups = gidsetsize; group_info->nblocks = nblocks; atomic_set(&group_info->usage, 1); ' +
			'if (gidsetsize <= NGROUPS_SMALL) group_info->blocks[0] = group_info->small_block; else { for (i = 0; i < nblocks; i++) ' +
			'{ gid_t *b; b = (void *)__get_free_page(GFP_USER); if (!b) goto out_undo_partial_alloc; group_info->blocks[i] = b; } } return group_info; out_undo_partial_alloc: while (--i >= 0) ' +
			'{ free_page((unsigned long)group_info->blocks[i]); } kfree(group_info); return NULL; } EXPORT_SYMBOL(groups_alloc); ' +
			'void groups_free(struct group_info *group_info) { if (group_info->blocks[0] != group_info->small_block) ' +
			'{ int i; for (i = 0; i < group_info->nblocks; i++) free_page((unsigned long)group_info->blocks[i]); } kfree(group_info); } ' +
			'EXPORT_SYMBOL(groups_free); /* export the group_info to a user-space array */ static int groups_to_user(gid_t __user *grouplist, const struct group_info *group_info) ' +
			'{ int i; unsigned int count = group_info->ngroups; for (i = 0; i < group_info->nblocks; i++) { unsigned int cp_count = min(NGROUPS_PER_BLOCK, count); ' +
			'unsigned int len = cp_count * sizeof(*grouplist); if (copy_to_user(grouplist, group_info->blocks[i], len)) return -EFAULT; ' +
			'grouplist += NGROUPS_PER_BLOCK; count -= cp_count; } return 0; } /* fill a group_info from a user-space array - it must be allocated already */ ' +
			'static int groups_from_user(struct group_info *group_info, gid_t __user *grouplist) { int i; unsigned int count = group_info->ngroups; for (i = 0; i < group_info->nblocks; i++) ' +
			'{ unsigned int cp_count = min(NGROUPS_PER_BLOCK, count); unsigned int len = cp_count * sizeof(*grouplist); ' +
			'if (copy_from_user(group_info->blocks[i], grouplist, len)) return -EFAULT; grouplist += NGROUPS_PER_BLOCK; count -= cp_count; } return 0; }' },
	{ req: katakana.slice(0, 17).join(''), res:
			'Before I die alone\n' +
			'Let me have vengeance\n' +
			'Before I die alone\n' +
			'I will have vengeance\n' +
			'Before I die alone\n' +
			'Before my time has gone\n' +
			'There\'s just one thing I have to do\n' +
			'Before the fire and stone\n' +
			'Before your world is gone\n' +
			'Have you some patience\n' +
			'\'Cuz I will have my vengeance\n' +
			'Before I die alone\n' +
			'Let me have vengeance\n' +
			'Before my time has gone\n' +
			'I will have vengeance\n' +
			'Before I die alone\n' +
			'Let me have vengeance\n' +
			'I will,? ?I will have my vengeance\n' +
			'Before your world is gone\n' +
			'Before the fire and stone\n' +
			'Have you some patience\n' +
			'\'Cuz I will have my vengeance\n' +
			'Before I die alone? (before I die alone?)\n' +
			'Before my time has gone? (before my time has gone?)\n' +
			'Let me have vengeance\n' +
			'I will,? ?I will\n' +
			'I will have vengeance\n' +
			'I will have vengeance\n'
	},
	//{req: 'echo "$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 42 ; echo \'\')"', res: answers[0]},
	{ req: '1B4ﾝD<KJHﾈ5ﾐ9ｱ4    ﾁ9 1B4ﾝD<KJHﾈ5ﾐ9ｱ4    ﾁ91B4ﾝD<', res:
			'function lorem(ipsum, dolor = 1) {\n' +
			'  const sit = ipsum == null ? 0 : ipsum.sit;\n' +
			'  dolor = sit - amet(dolor);\n' +
			'  return sit ? consectetur(ipsum, 0, dolor < 0 ? 0 : dolor) : [];\n' +
			'}\n' +
			'function adipiscing(...elit) {\n' +
			'  if (!elit.sit) {\n' +
			'    return [];\n' +
			'  }\n' +
			'  const sed = elit[0];\n' +
			'  return eiusmod.tempor(sed) ? sed : [sed];\n' +
			'}\n' +
			'function incididunt(ipsum, ut = 1) {\n' +
			'  ut = labore.et(amet(ut), 0);\n' +
			'  const sit = ipsum == null ? 0 : ipsum.sit;\n' +
			'  if (!sit || ut < 1) {\n' +
			'    return [];\n' +
			'  }\n' +
			'  let dolore = 0;\n' +
			'  let magna = 0;\n' +
			'  const aliqua = new eiusmod(labore.ut(sit / ut));\n' +
			'  while (dolore < sit) {\n' +
			'    aliqua[magna++] = consectetur(ipsum, dolore, (dolore += ut));\n' +
			'  }\n' +
			'  return aliqua;\n' +
			'}' },
	{ req: 'neuroscan -viruskill -demonmode', res:
			'Initiating Neuroscan Demon Mode...\n' +
			'Scanning neural networks for malignant anomalies...\n' +
			'Identified Demon-Virus Entities:\n' +
			'- Infern0-EXE: A highly adaptive and stealthy virus\n' +
			'- CyberDaemon-7: Known for rapid system corruption\n' +
			'- CircuitBreak: Capable of destabilizing network protocols\n' +
			'\n' +
			'Engaging Virus-Kill Protocol...\n' +
			'\n' +
			'Neutralizing Infern0-EXE... [███████░░░░░░░░] 50%\n' +
			'Purging CyberDaemon-7...    [███████████░░░░] 75%\n' +
			'Eradicating CircuitBreak... [███████████████] 100%\n' +
			'\n' +
			'Demon-Virus Entities Terminated.\n' +
			'System integrity secured.\n' +
			'Performing system diagnostics...\n' +
			'No further anomalies detected.\n' +
			'Neuroscan Demon Mode successfully deactivated.\n' +
			'Mission accomplished.' },
	{ req: 'termination-protocol -target datawraith -threat high', res:
			'Initiating Termination Protocol...\n' +
			'Identifying and tracking target: "datawraith"...\n' +
			'\n' +
			'Target location locked: Grid 47.22.15, Night City Mainframe Nexus.\n' +
			'Target threat level: HIGH. Lethal capabilities confirmed.\n' +
			'\n' +
			'Deploying Elite Enforcers...\n' +
			'\n' +
			'Enforcers en route to Grid 47.22.15. ETA: 5 minutes.\n' +
			'Activating combat augmentation protocols.\n' +
			'Preparing countermeasures against datawraith.\n' +
			'\n' +
			'Elite Enforcers on-site. Engaging threat...\n' +
			'\n' +
			'datawraith terminated.\n' +
			'Squad returning to base. Mission accomplished.\n' +
			'\n' +
			'Protecting the Future. Securely and Efficiently.'}
];

// const s1 = '*group_info) { if (group_info->blocks[0] != group_info->small_block) { int i; for (i = 0; i < group_info->nblocks; i++) ' +
// 	'free_page((unsigned long)group_info->blocks[i]); } kfree(group_info); } EXPORT_SYMBOL(groups_free);' +
// 	' /* export the group_info to a user-space array */ static int groups_to_user(gid_t __user *grouplist, const struct group_info *group_info) ' +
// 	'{ int i; unsigned int count = group_info->ngroups;'
// 	+ ' for (i = 0; i < group_info';
