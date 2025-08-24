const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("currency")
    .setDescription("Converta valores entre moedas usando uma API gratuita.")
    .addStringOption((option) =>
      option
        .setName("from")
        .setDescription("Moeda de origem (ex: USD, BRL, EUR)")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("to")
        .setDescription("Moeda de destino (ex: USD, BRL, EUR)")
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("Valor a ser convertido")
        .setRequired(true)
    ),
  async execute(interaction) {
    const from = interaction.options.getString("from").toUpperCase();
    const to = interaction.options.getString("to").toUpperCase();
    const amount = interaction.options.getNumber("amount");

    const url = `https://api.frankfurter.dev/v1/latest?base=${to}`;

    await interaction.deferReply();
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data.rates || !data.rates[from]) {
        await interaction.editReply(
          "Não foi possível obter a cotação. Verifique os códigos das moedas (ex: USD, EUR, GBP, JPY, CHF, AUD, CAD, etc)."
        );
        return;
      }
      await interaction.editReply(
        `${amount} ${from} = ${amount / data.rates[from]} ${to}`
        //   1        usd  =     1 / brl      brl
      );
    } catch (error) {
      await interaction.editReply("Erro ao consultar a API de câmbio.");
    }
  },
};
