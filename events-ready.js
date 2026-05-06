const { checkNews } = require("../services/newsService");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`Nonna is online as ${client.user.tag}`);

    checkNews(client);
    setInterval(() => checkNews(client), 10 * 60 * 1000);
  }
};
