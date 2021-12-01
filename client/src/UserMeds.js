import React from 'react';

function UserMeds({userMed}) {
const {dose} = userMed

    return (
        <>
        {/* <h4>{user}</h4> 
        <p>{medication}</p>  */}
        <p>{dose}</p>
        </>
    );
}

export default UserMeds;
