const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cadastrarconta")
    .setDescription("Cadastra uma nova conta.")
    .addStringOption((option) =>
      option.setName("nome").setDescription("Nome da conta").setRequired(true)
    )
    .addNumberOption((option) =>
      option.setName("valor")
    .setDescription("Valor")
    .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("data")
        .setDescription("Data (FORMATO: AAAA-MM-DD)")
        .setRequired(true)
    ),

  async execute(interaction) {
    const url = `http://127.0.0.1:8000/contas`;
    const valor = interaction.options.getNumber("valor");
    const data = interaction.options.getString("data");
    const nome = interaction.options.getString("nome");

    await interaction.deferReply();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor, data, nome }),
      });

      if (!response.ok) {
        await interaction.editReply("Erro ao cadastrar conta na API.");
        return;
      }
      const result = await response.json();
      await interaction.editReply(
        `Conta cadastrada com sucesso! ID: ${result.id}`
      );
    } catch (error) {
      console.error("Erro ao consultar a API:", error);
      await interaction.editReply("Erro ao consultar a API.");
    }
  },
};
