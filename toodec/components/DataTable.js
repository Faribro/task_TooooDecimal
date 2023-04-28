import { useState, useEffect } from "react";
import Pagination from "./Pagination";
const DataTable = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.example.com/data?_page=1&_limit=10");
      const data = await res.json();
      setRecords(data);
    };
    fetchData();
  }, []);

  const handlePageChange = async (pageNumber) => {
    const res = await fetch(
      `https://api.example.com/data?_page=${pageNumber}&_limit=10`
    );
    const data = await res.json();
    setRecords(data);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination handlePageChange={handlePageChange} />
    </div>
  );
};

export default DataTable;
