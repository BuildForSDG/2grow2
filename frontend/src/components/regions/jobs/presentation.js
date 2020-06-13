import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      flexGrow: 1,
      marginBottom: '25%',
      fontWeight: "bold",
      backgroundColor: theme.palette.background.paper,
      color: '#1D1753',
      fontFamily: `'Raleway', sans-serif`
    }
  }));

const Presentation = () => {
    const classes = useStyles();


    return (
        <Grid container spacing={2} className={classes.root}>



        </Grid>)
}

export default Presentation;