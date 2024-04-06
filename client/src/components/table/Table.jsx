import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Card, CardHeader } from '@mui/material';
import TableRowsLoader from '../Loaders/TableLoader';

const MessTable = ({ data, taken, title, loading}) => {
  const dayIdx = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const mp = {'breakfast' : 0, 'lunch' : 1, 'dinner' : 2}

  return (
    <Card sx={{p:1}}>
    <CardHeader title={title}/>
    <Box sx={{ p: 3, pb: 1, mb:2}}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{backgroundColor: "lightgray", boxShadow: "1"}}>
              <TableCell>Day</TableCell>
              <TableCell>Breakfast</TableCell>
              <TableCell>Lunch</TableCell>
              <TableCell>Dinner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? <TableRowsLoader rowsNum={data.length}/> : 
            (data.map((rowData, index) => (
              <TableRow key={index}>
                <TableCell>{rowData.day ? rowData.day : dayIdx[index]}</TableCell>
                <TableCell sx={taken?.[mp['breakfast']][index] && {backgroundColor : "#ceface"}}>{rowData.breakfast}</TableCell>
                <TableCell sx={taken?.[mp['lunch']][index] && {backgroundColor : "#ceface"}}>{rowData.lunch}</TableCell>
                <TableCell sx={taken?.[mp['dinner']][index] && {backgroundColor : "#ceface"}}>{rowData.dinner}</TableCell>
              </TableRow>
            )))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Card>
  );
}

export default MessTable;