import Proteomics from "../../../../../data/Proteomics_data.json";
import DataGrid from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Table() {
  return (
    <div>
      <TableContainer>
        <DataGrid>
          <TableHead>
            <TableRow>
              <TableCell>Accesion Number</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Proteomics.map((list, index) => (
              <TableRow key={index}>
                <TableCell>{list}</TableCell>
                <TableCell>{list.Description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </DataGrid>
      </TableContainer>
    </div>
  );
}

export default Table;
