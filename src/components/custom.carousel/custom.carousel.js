import './product.carousel.scss'
import React, { useState } from 'react'
import { CardMedia, Typography, IconButton } from '@material-ui/core'
import clsx from 'clsx';
//import { useTheme } from '@material-ui/core/styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IsMobileWidth } from 'components/utils/util'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

export default function CustomCarousel(props) {
    const [state, setState] = useState({
        dialogIsOpen: false,
        markAsFavourite: false
    })

    const mobileWidth = IsMobileWidth()
    return (
        <div id="product-carousel">
            <div className={!mobileWidth ? "px-5" : ""} style={!mobileWidth ?{ width: window.innerWidth - 200, margin: "auto" } : {width:"100%"}}>
                {/* <div className="ml-2"><Typography variant="h4">Flash Deals</Typography></div> */}
                <Carousel
                    responsive={responsive}
                    customLeftArrow={
                        <IconButton className="position-absolute left-arrow-calc" >
                            <ChevronLeftIcon style={{ fontSize: "50px", color: "black" }} />
                        </IconButton>
                    }
                    customRightArrow={
                        <IconButton className="position-absolute right-arrow-calc">
                            <ChevronRightIcon style={{ fontSize: "50px", color: "black" }} />
                        </IconButton>
                    }
                >
                    {
                        props.children
                    }
                </Carousel>
            </div>
        </div>
    )
}