test("Isso é 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  console.log(response);
});
