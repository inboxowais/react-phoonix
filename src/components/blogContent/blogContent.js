import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import HeroSideImage from 'components/HeroSideImage/HeroSideImage';
import { IsMobileWidth } from 'components/utils/util';
import clsx from 'clsx'
export default function BlogContent(props) {
    const { src, title, content, location, date } = props;
    const mobileWidth = IsMobileWidth()
    function frmtDate(date) {
        date = new Date(date);
        let year = date.getFullYear();
        var datePart = date.getDate();
        var month = date.getMonth() + 1;
        month = ('0' + month).slice(-2);
        datePart = ('0' + datePart).slice(-2);
        return `${year}-${month}-${datePart}`
    }
    const newDate = frmtDate(date)
    return (
        <Box borderRadius="4px" className="cursor-pointer">
            <HeroSideImage imageSrc={src && src} reverse onClick={props.onClick}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className={clsx(mobileWidth ? " text-white" : "")}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" className={clsx(mobileWidth ? " text-white" : "")}>
                            {location}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h4" className={clsx(mobileWidth ? " text-white" : "")}>
                            {date ? newDate : null}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={clsx(mobileWidth ? " text-white" : "")}>
                           
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                           
                        </Typography>
                    </Grid>
                </Grid>
            </HeroSideImage>
        </Box>
    );
}