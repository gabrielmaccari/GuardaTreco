const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("vencemamanha")
    .setDescription("Mostra o número de contas que vencem amanhã."),

  async execute(interaction) {

    const url = `http://127.0.0.1:8000/vencem_amanha`;

    await interaction.deferReply();
    try {
      const response = await fetch(url);
      const data = await response.json();
        if (data.quantidade === undefined) {
        await interaction.editReply(
          "Não foi possível obter as contas que vencem amanhã"
        );
        return;
      }
        ;
      await interaction.editReply(
        `O total de contas que vencem amanhã é ${data.quantidade}`
      );
    } catch (error) {
        console.error("Erro ao consultar a API:", error);
      await interaction.editReply("Erro ao consultar a API.");
    }
  },
};
