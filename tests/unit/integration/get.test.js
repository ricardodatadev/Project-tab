test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://192.168.42.112:3001/api/v1/status");
  expect(response.status).toBe(200);
});
