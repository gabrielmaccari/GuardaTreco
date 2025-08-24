const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("listarcontas")
    .setDescription("Lista todas as contas cadastradas."),

  async execute(interaction) {

    const url = `http://127.0.0.1:8000/contas`;

    await interaction.deferReply();
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data[0]) {
        await interaction.editReply(
          "Não foi possível obter as contas"
        );
        return;
      }
        let contas = "";
        data.forEach((conta) => {
          contas += `- Nome: ${conta.nome} | Data: ${conta.data} | R$${conta.valor.toFixed(2)}\n`;
        });
      await interaction.editReply(
        `Contas cadastradas:\n${contas}`
      );
    } catch (error) {
        console.error("Erro ao consultar a API:", error);
      await interaction.editReply("Erro ao consultar a API.");
    }
  },
};
