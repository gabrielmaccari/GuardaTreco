const { SlashCommandBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("calcular")
    .setDescription("Performs a calculation")
    .addNumberOption((option) =>
      option
        .setName("input-1")
        .setDescription("First number")
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("input-2")
        .setDescription("Second number")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("operacao")
        .setRequired(true)
        .setDescription("Operation")
        .addChoices(
          { name: "Soma", value: "soma" },
          { name: "Subtração", value: "subtracao" },
          { name: "Multiplicação", value: "multiplicacao" },
          { name: "Divisão", value: "divisao" }
        )
    ),
  async execute(interaction) {
    const input1 = interaction.options.getNumber("input-1");
    const input2 = interaction.options.getNumber("input-2");
    const operacao = interaction.options.getString("operacao");

	let resultado;
	if (operacao === "soma") {
	  resultado = input1 + input2;
	} else if (operacao === "subtracao") {
	  resultado = input1 - input2;
	} else if (operacao === "multiplicacao") {
	  resultado = input1 * input2;
	} else if (operacao === "divisao") {
	  resultado = input1 / input2;
	}
	await interaction.reply(`O resultado de ${input1} ${operacao} ${input2} é ${resultado}`);
  },
};
