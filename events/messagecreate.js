const { styleReply } = require("../personality/nonnaPersonality");

module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;

    if (message.content.toLowerCase().includes("nonna")) {
      message.reply(styleReply("Yes? Do not waste my time.", "russian"));
    }
  }
};
