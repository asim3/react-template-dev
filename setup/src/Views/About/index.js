import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import styles from './index.module.css';


function About() {
    const [my_count, set_my__count] = useState(0);
    // TODO: move my_function to ./src/hooks/counter.js
    // onClick = { () => counter(my_count, set_my__count) }

    function my_function() {
        const data = my_count + 1
        return set_my__count(data)
    }


    return (
        <div>
            <span className={styles.my_css}>my_count = {my_count}</span>
            <br />
            <Button onClick={my_function} variant="primary">Click</Button>
        </div>
    );
}


export default About;