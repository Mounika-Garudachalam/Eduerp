import React from 'react';

import './Table.css';

export default function Table({data,columns}){
    const getCaps=(str)=>{
        return str.toUpperCase();
    };
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((head)=>(
                            <th>{getCaps(head.header)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row)=>(
                        <tr>
                            {/* <td>{row.class}</td>
                            <td>{row.section}</td>
                            <td>{row.studentcount}</td> */}
                            {columns.map(col=><td>{row[col.field]}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}