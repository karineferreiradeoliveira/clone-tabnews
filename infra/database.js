import { Client } from "pg";

async function query(queryObejct) {
  const client = new Client();
  await client.connect();
  const result = await client.query(queryObejct);
  await client.end();
  return result;
}
export default {
  query: query,
};
