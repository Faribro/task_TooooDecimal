export default function handler(req, res) {
  const { page = 1, pageSize = 10 } = req.query;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  // Fetch data from your data source
  const data = fetchData(startIndex, endIndex);

  res.status(200).json({ data });
}
