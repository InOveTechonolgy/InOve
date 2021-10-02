import React from 'react'
import "./ServiceCard.css"
function ServiceCard({title,Ico,subtitle}) {
    return (
        <div className="services__card">
            <div className="card-body">
                <div className="card-icon"></div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <a href="#more" className="service_learn_more">Learn more.</a>
            </div>
        </div>
    )
}

export default ServiceCard
