import React, { useEffect, useState } from 'react';
//import Table from 'react-table';
import Input from './components/Input';

const TableRender = () => {
    const [data, setData] = useState([{}]);
    const [company, setCompany] = useState("");
    const [contact, setContact] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        setData([
            { company: 'Blueverse', "contact-name": "XYZ", country_name: "UK" },
            { company: 'Garudaven', "contact-name": "Chenna Reddy", country_name: "US" }
        ])
    }, []);

    const onSave = () => {
        setData([...data, { company, "contact-name": contact, country_name: country }]);
        setCompany("");
        setContact("");
        setCountry("");
    }

    return (
        <>
            <div className='row'>
                <div className='col-6 d-flex justify-content-end'>
                    <button className='btn btn-primary' style={{float: 'right'}}>+</button>
                </div>
            </div>
            <div className='row'>
                <table className='col-6' style={{ border: '1px solid black' }}>
                    <tr style={{ border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Company</th>
                        <th style={{ border: '1px solid black' }}>Contact</th>
                        <th style={{ border: '1px solid black' }}>Country</th>
                    </tr>
                    <tr style={{ border: '1px solid black' }}>
                        <td style={{ border: '1px solid black' }}>Garudaven</td>
                        <td style={{ border: '1px solid black' }}>Maria Anders</td>
                        <td style={{ border: '1px solid black' }}>Germany</td>
                    </tr>
                    <tr style={{ border: '1px solid black' }}>
                        <td style={{ border: '1px solid black' }}>Blueverse</td>
                        <td style={{ border: '1px solid black' }}>Francisco Chang</td>
                        <td style={{ border: '1px solid black' }}>Mexico</td>
                    </tr>
                    <tr style={{ border: '1px solid black' }}>
                        <td style={{ border: '1px solid black' }}>{data[0].company}</td>
                        <td style={{ border: '1px solid black' }}>{data?.[0]?.["contact-name"] || "abc"}</td>
                        <td style={{ border: '1px solid black' }}>{data && data[0].country_name || "India"}</td>
                    </tr>
                    {data.map((entry, index) => (
                        entry.company === "Garudaven" ? null : (
                            <tr style={{ border: '1px solid black' }}>
                                <td style={{ border: '1px solid black' }}>{entry.company}</td>
                                <td style={{ border: '1px solid black' }}>{entry["contact-name"]}</td>
                                <td style={{ border: '1px solid black' }}>{entry?.country_name || "India"}</td>
                            </tr>
                        )
                    ))}
                </table>
                <div className='col-6'>
                    <Input title="Company" id="company" placeholder="company name" value={company} setChangeValue={setCompany} />
                    <Input title="Contact" id="contact" placeholder="contact name" value={contact} setChangeValue={setContact} />
                    <Input title="Country" id="country" placeholder="country name" value={country} setChangeValue={setCountry} />
                    <button className='btn btn-primary' onClick={onSave}>Add</button>
                </div>
            </div>
        </>
    )
}

export default TableRender;