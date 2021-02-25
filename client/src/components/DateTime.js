import  React, { Fragment, useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return(
      <Fragment>
        <div>
            <h5> {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
        </div>
      </Fragment>
    );
};

export default DateTime;
