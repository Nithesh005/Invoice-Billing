import React from 'react';
import { styled, useTheme } from '@mui/system';
import { Container, TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

const StyledPaper = styled(Paper)({
    padding: '20px',
    margin: '20px',
});

const InvoiceGenerator = () => {
    const theme = useTheme();
    const customerNames = ['INVOICE', 'ORDER NUMBER', 'INVOICE DATE'];

    // content for table
    const [rows, setRows] = useState([
        { id: 1, col1: '', col2: '', col3: '', col4: '', col5: '' },
    ]);

    const addRow = () => {
        const newRow = { id: rows.length + 1, col1: '', col2: '', col3: '', col4: '', col5: '' };
        setRows([...rows, newRow]);
    };

    const deleteRow = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id);
        setRows(updatedRows);
    };
    const handleInputChange = (id, column, value) => {
        const updatedRows = rows.map((row) =>
            row.id === id ? { ...row, [column]: value } : row
        );
        setRows(updatedRows);
    };
    return (
        <div className='innercontent'>
            <StyledPaper elevation={3}>
                <Typography variant="h5" align="center" gutterBottom>
                    Add Invoice
                </Typography>
                <form>
                    <Grid container spacing={2} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {customerNames.map((customerName, index) => (
                            <React.Fragment key={index}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" align="left">
                                        {customerName}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label={customerName} />
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>

                </form>
            </StyledPaper>
            {/* Table content */}
            <StyledPaper>
                <div className="addrow" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' , padding:'0.5rem'}}>
                    <Button onClick={addRow} variant="contained" color="primary">
                        Add Row
                    </Button>
                </div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Column 1</TableCell>
                                <TableCell>Column 2</TableCell>
                                <TableCell>Column 3</TableCell>
                                <TableCell>Column 4</TableCell>
                                <TableCell>Column 5</TableCell>
                                <TableCell>Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <TextField
                                            value={row.col1}
                                            onChange={(e) => handleInputChange(row.id, 'col1', e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            value={row.col2}
                                            onChange={(e) => handleInputChange(row.id, 'col2', e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            value={row.col3}
                                            onChange={(e) => handleInputChange(row.id, 'col3', e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            value={row.col4}
                                            onChange={(e) => handleInputChange(row.id, 'col4', e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            value={row.col5}
                                            onChange={(e) => handleInputChange(row.id, 'col5', e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => deleteRow(row.id)} color="secondary">
                                            Delete Row
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </StyledPaper>

            <br /><br /><br /><br />




            <footer>
                <Grid container justifyContent="space-between" alignItems="center" style={{ width: "80%" }}>
                    <Grid item>
                        <Button variant="outlined" color="primary">
                            Save as Draft
                        </Button>
                        <Button variant="contained" color="primary" style={{ marginLeft: theme.spacing(2) }}>
                            Save
                        </Button>
                        <Button variant="outlined" color="secondary" style={{ marginLeft: theme.spacing(2) }}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item>
                        <div>
                            <Typography variant="body1" display="inline" style={{ marginRight: theme.spacing(2) }}>
                                Total Amount: $1000
                            </Typography>
                            <Typography variant="body1" display="inline">
                                Total Quantity: 10
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </footer>


        </div>
    );
};

export default InvoiceGenerator;
