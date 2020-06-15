import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Presentation = ({data,handleClose,handleClickOpen})=> {
  const classes = useStyles();

  const rows = data;


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Job ID</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Employer ID</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Date Loaded</StyledTableCell>
            <StyledTableCell align="right">Date Filled</StyledTableCell>
            <StyledTableCell align="right">Expiry Date</StyledTableCell>
            <StyledTableCell align="right">Total Applicants</StyledTableCell>
            <StyledTableCell align="right">successful JobSeeker ID</StyledTableCell>




          </TableRow>
        </TableHead>
        <TableBody>

          {rows.map((row) => (
            <StyledTableRow key={row.Id}>
              <StyledTableCell component="th" scope="row">
                <a href="#" onClick={handleClickOpen}>{row.Id}</a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.employerID}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.dateLoaded}</StyledTableCell>
              <StyledTableCell align="right">{row.dateFilled}</StyledTableCell>

              <StyledTableCell align="right">{row.expiryDate}</StyledTableCell>
              <StyledTableCell align="right">{row.totalApplicants}</StyledTableCell>
              <StyledTableCell align="right">{row.successfulJobSeekerID}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Presentation