import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'


function About() {
    const [my_count, set_my__count] = useState(0);


    function my_function() {
        const data = my_count + 1
        return set_my__count(data)
    }


    return (
        <div>
            <span>my_count = {my_count}</span>
            <br />
            <Button onClick={my_function} variant="primary">Click</Button>
        </div>
    );
}


export default About;