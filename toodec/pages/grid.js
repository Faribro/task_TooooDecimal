import useSWR from "swr";

function DataGrid() {
  const { data, error } = useSWR("/api/data?page=1&pageSize=10");

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading data...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            <td>{item.column3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataGrid;
