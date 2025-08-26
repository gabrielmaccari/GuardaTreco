const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("total")
    .setDescription("Mostra o total de todas as contas cadastradas."),

  async execute(interaction) {

    const url = `http://127.0.0.1:8000/total`;

    await interaction.deferReply();
    try {
      const response = await fetch(url);
      const data = await response.json();
        if (data.total === undefined) {
        await interaction.editReply(
          "Não foi possível obter as somas das contas"
        );
        return;
      }
        ;
      await interaction.editReply(
        `O valor total das contas cadastradas é R$${data.total.toFixed(2)}`
      );
    } catch (error) {
        console.error("Erro ao consultar a API:", error);
      await interaction.editReply("Erro ao consultar a API.");
    }
  },
};
