const { SlashCommandBuilder } = require('discord.js');

const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

let date_1 = dayjs.tz("2023-07-03 00:00:01", "Europe/Chisinau");
let date_2 = dayjs().tz("Europe/Chisinau");

const days = (date_1, date_2) =>{
    let difference = date_1 - date_2;
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
console.log(" Mai sunt "+ days(date_1, date_2) +" zile pana la vara!");

const message = `Mai sunt **${days(date_1, date_2)} zile** pana la vara!`;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zilepanalavara')
		.setDescription('Replies with days until summer!'),
	async execute(interaction) {
		await interaction.reply(message);
	},
};