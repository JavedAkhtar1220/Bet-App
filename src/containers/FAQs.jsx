import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BorderLinearProgress from '../components/BorderLinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
        fontFamily: 'Poppins',
    },
    paragraph: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: 'Poppins',
    }
}));

const FAQs = () => {

    const classes = useStyles();

    return (
        <div className="row mt-5">
            <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
                <h1 className="signup_title text-center mt-5 mb-5">FAQs</h1>
                <div className="mt-3 mb-5">
                    <p>If you have any question will be helped here</p>
                    <BorderLinearProgress variant="determinate" value={60} />
                </div>
                <div>
                    <div className="mb-3">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>How can I predict Score?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.paragraph}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                        </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="mb-3">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>How can I predict Score?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.paragraph}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                        </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="mb-3">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>How can I predict Score?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.paragraph}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                        </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="mb-3">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>How can I predict Score?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.paragraph}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                        </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="mb-3">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>How can I predict Score?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.paragraph}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                        </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FAQs;