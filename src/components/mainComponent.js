import React, { useState } from 'react';
import { Label, Form, Input } from 'reactstrap';

export default function Main() {

    const [count, setCount] = useState(0)


    return (
        <>
            <div className='container mt-4'>
                <h2>Please Enter your text...</h2>
                <Form>
                    <Input type='textarea' rows='10' placeholder='Type your text here' onChange={function (text) {
                        let fulltext = text.target.value;
                        let l = fulltext.length;
                        setCount(l);
                    }} />
                    <Label className='mt-4 fs-3'>Lenght of the text is {count}</Label>
                </Form>
            </div>
        </>
    )
}
