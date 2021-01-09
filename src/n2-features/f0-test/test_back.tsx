import React, {useEffect, useState} from 'react';
import {getTimeAPI} from '../../n1-main/m3-dal/api';



type TestBackType = {}

const TestBack: React.FC<TestBackType> = () => {
    const [time, setTime] = useState(Date.now())
    const [ping, setPing] = useState(0)

    useEffect(() => {
        getTimeAPI(time.toString())
            .then(res => {
                console.log(res)
                setTime(time)
                setPing(res.data.ping)
            })
    }, [time])

    return <div>
        <p>Test Time Request : {time}</p>
        <p>Test Ping Request : {ping}</p>
    </div>
};



export default TestBack;