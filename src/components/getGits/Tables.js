import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiTypography: {
      // Name of the rule
      colorInherit: {
        // Some CSS
        color: 'white',
      },
    },
    MuiSelect:{
      root:{
        color:'white'
      },
      icon:{
        color:'white'
      }
    },
    MuiIconButton:{
      label:{
        color:'white'
      }
    }
  },
});

const useStyles1 = makeStyles((theme) => ({
   root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
   },
}));

function TablePaginationActions(props) {
   const classes = useStyles1();
   const theme = useTheme();
   const { count, page, rowsPerPage, onChangePage } = props;

   const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
   };

   const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
   };

   const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
   };

   const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
   };

   return (
      <div className={classes.root}>
         <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="first page"
         >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
         </IconButton>
         <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
         </IconButton>
         <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
         >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
         </IconButton>
         <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
         >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
         </IconButton>
      </div>
   );
}

TablePaginationActions.propTypes = {
   count: PropTypes.number.isRequired,
   onChangePage: PropTypes.func.isRequired,
   page: PropTypes.number.isRequired,
   rowsPerPage: PropTypes.number.isRequired,
};

function createData (name, description) {
  return {name, description}
}

const useStyles2 = makeStyles({
   table: {
      minWidth: 300,
   },
});

function CustomPaginationActionsTable(props) {

  // const rows = [
    // createData('Oreo', 437, 18.0),
  // ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const rows = props.gitRepos.data

  console.log(rows);

   const classes = useStyles2();
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(5);

   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   return (
      <TableContainer style={{background:'transparent'}} component={Paper}>
         <Table className={classes.table} aria-label="custom pagination table">
            <TableBody  >
               {(rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
               ).map((row) => (
                  <TableRow  key={row.name}>
                     <TableCell style = {{color:'white'}} component="th" scope="row">
                        {row.name}
                     </TableCell>
                     <TableCell style={{ color:'white' }} align="left">
                        {row.description}
                     </TableCell>
                  </TableRow>
               ))}

               {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                     <TableCell colSpan={6} />
                  </TableRow>
               )}
            </TableBody>
            {/*

            <TableFooter>
               <TableRow style={{color:'white'}}>
               <ThemeProvider theme={theme}>
                  <TablePagination
                     rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                     colSpan={3}
                     count={rows.length}
                     rowsPerPage={rowsPerPage}
                     rowsPerPageOptions={[5]}
                     page={page}
                     SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                     }}
                     onChangePage={handleChangePage}
                     onChangeRowsPerPage={handleChangeRowsPerPage}
                     ActionsComponent={TablePaginationActions}
                  />
              </ThemeProvider>
              </TableRow>
            </TableFooter>
            */}
         </Table>
      </TableContainer>
   );
}

const mapStateToProps = (state, ownProps) => {
   return {
      gitRepos: state.gitRepos
   }
}

export default connect(mapStateToProps)(CustomPaginationActionsTable)
