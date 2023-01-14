import { useState } from 'react'

import { Container } from "./styles";

export const HamburguerIcon = () => { 

    const [open, setOpen ] = useState(false);

    const toggleCrossed = () => { 
        setOpen(prev => prev ? false : true )
    }

    return (

        <Container className={open ? 'open' : ''} onClick={toggleCrossed}>
            <div className="hamburguer-top hamburguer-bar"></div>
            <div className="hamburguer-middle hamburguer-bar"></div>
            <div className="hamburguer-bottom hamburguer-bar"></div>
        </Container>

    )

}