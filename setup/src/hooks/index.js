import { useState } from 'react';


const [my_count, set_my__count] = useState(0);


function use_count() {
    const data = my_count + 1
    return set_my__count(data)
}

export {
    my_count, use_count
};