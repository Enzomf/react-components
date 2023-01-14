import styled from "styled-components";


const Container = styled.div`
    width: 35px;
    height: 25px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 99999;
    overflow: hidden;

    .hamburguer-bar { 
        width: 100%;
        height: 3px;
        background-color: #0096db;
    }

    .hamburguer-bottom {
        position: absolute;
        bottom: 0;
    }

    .hamburguer-top {
        position: absolute;
        top: 0;
    }

    &.open {


        .hamburguer-top {
            transform: translateY(11px) rotateZ(45deg);
        }

        .hamburguer-bottom {
            transform: translateY(-11px) rotateZ(-45deg);
        }

        .hamburguer-middle {
           transform: translateX(100px);
        }


    }

`


export { Container }