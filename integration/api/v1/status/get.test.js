test("Isso é 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  // 👇 ISSO é a asserção de verdade:
  expect(response.status).toBe(200);

  const body = await response.json();
  expect(body).toEqual({ chave: "Acima da média" });
});
