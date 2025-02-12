import React from "react";
import Card from "./Card";

const CardArray = ({ robots }) => {
    const cardComponent = robots.map((user, index) => {
        return (
            <Card
                key={robots[index].id}
                id={robots[index].id}
                name={robots[index].name}
                email={robots[index].email}
            />
        )
    })
        
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardArray;