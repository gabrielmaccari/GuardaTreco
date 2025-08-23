const { SlashCommandBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("calcular")
    .setDescription("Calcule seus numeros!")
    .addNumberOption((option) =>
      option.setName("input-1").setDescription("The input to echo back"))
	.addNumberOption((option) =>
      option.setName("input-2").setDescription("The input to echo back"))
	.addStringOption((option) =>
      option.setName("operacao").setDescription("The input to echo back")),


  async execute(interaction) {
	const input1 = interaction.options.getNumber("input-1");
	const input2 = interaction.options.getNumber("input-2");
	const operacao = interaction.options.getString("operacao");
	if (operacao === "soma") {
		await interaction.reply(`O resultado é ${input1 + input2}`);
	    }
	else if (operacao === "subtracao") {
		await interaction.reply(`O resultado é ${input1 - input2}`);
	    }
	else if (operacao === "multiplicacao") {
		await interaction.reply(`O resultado é ${input1 * input2}`);
		}
	else if (operacao === "divisao") {
		await interaction.reply(`O resultado é ${input1 / input2}`);
	}

  },
};
