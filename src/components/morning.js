import React from 'react';
function Morning() {
    const time = new Date();
    const t = time.getHours();
    const changeStyle = { color: "", };
    let wish;
    if (t >= 0 && t <= 12) {
        changeStyle.color = "red";
        wish = "Morning";
    }
    else if (t > 12 && t <= 18) {
        changeStyle.color = "green";
        wish = "Afternoon";
    }
    else {
        changeStyle.color = "blue";
        wish = "Evening";
    }
    return (<h1 className="heading" style={changeStyle}>Good {wish}</h1>);
}

export default Morning;