function status(request, response) {
  response.status(200).send({ chave: "Acima da média" });
}

export default status;
