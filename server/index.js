const express = require("express");
const { json } = require("body-parser");
const port = 3000;
const mc = require(`${__dirname}/controllers/messages_controller`);

const app = express();

app.use(json());
app.use(express.static(`${__dirname}/../public/build`));

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);

app.get(messagesBaseUrl, mc.read);

app.put(`${messagesBaseUrl}/:id`, mc.update);

app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(port, () => console.log(`Server listening on port ${port}`));
