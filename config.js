import {
	watchFile,
	unwatchFile
} from 'fs'
import chalk from 'chalk'
import {
	fileURLToPath
} from 'url'

global.owner = [
	//  ['6281234288573'],
	//['12546153210'],
	//['62895368900456'],
	['14318136969', 'Sam kira kun', true]
	// [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
	// name: 'https://website'
	nrtm: 'https://nurutomo.herokuapp.com',
	ghst: 'https://ghostui-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
	// 'https://website': 'apikey'
	'https://ghostui-api.herokuapp.com': 'apikey mu'
}

// Sticker WM
global.packname = 'SamBot'
global.author = 'Sam'
global.nomorown = '14318136969'
global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
	emoticon(string) {
		string = string.toLowerCase()
		let emot = {
			level: '🧬',
			limit: '🌌',
			health: '❤️',
			exp: '✉️',
			money: '💵',
			potion: '🥤',
			diamond: '💎',
			common: '📦',
			uncommon: '🎁',
			mythic: '🗳️',
			legendary: '🗃️',
			pet: '🎁',
			trash: '🗑',
			armor: '🥼',
			sword: '⚔️',
			wood: '🪵',
			rock: '🪨',
			string: '🕸️',
			horse: '🐎',
			cat: '🐈',
			dog: '🐕',
			fox: '🦊',
			petFood: '🍖',
			iron: '⛓️',
			gold: '👑',
			emerald: '💚'
		}
		let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
		if (!results.length) return ''
		else return emot[results[0][0]]
	}
}


let file = fileURLToPath(
	import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})
