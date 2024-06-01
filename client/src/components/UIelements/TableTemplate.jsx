import React,{useState} from "react";
import {TableContainer,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material';

const TableTemplate=({columns,rows})=>{
    return (
        <>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column,index)=>(
                            <TableCell key={index}>{column.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,rowIndex)=>{
                            <TableRow key={rowIndex}>
                                {columns.map((column,colIndex)=>{
                                    const value=row[column.id];
                                return (
                                    <TableCell key={colIndex}>
                                        {
                                            column.format && typeof value==='number'
                                            ? column.format(value)
                                            : value
                                        }
                                    </TableCell>
                                );
                                })}
                            </TableRow>
                       
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}

export default TableTemplate;