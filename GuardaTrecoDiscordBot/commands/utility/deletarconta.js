const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("deletarconta")
    .setDescription("Delete uma conta existente pelo seu nome.")
    .addStringOption((option) =>
      option
        .setName("nome")
        .setDescription("Nome da conta a ser deletada")
        .setRequired(true)
    ),

  async execute(interaction) {
    const nome = interaction.options.getString("nome");
    const url = `http://127.0.0.1:8000/contas?nome=${encodeURIComponent(nome)}`;

    await interaction.deferReply();
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        await interaction.editReply("Erro ao deletar conta na API.");
        return;
      }
      const result = await response.json();
      await interaction.editReply(`Conta deletada com sucesso!`);
    } catch (error) {
      console.error("Erro ao consultar a API:", error);
      await interaction.editReply("Erro ao consultar a API.");
    }
  },
};
