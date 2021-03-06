import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  progressBarCell: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    borderBottom: `1px solid ${theme.palette.text.lightDivider}`,
  },
  progressBar: {
    backgroundColor: '#3e72c4',
    float: 'left',
    height: '100%',
    whiteSpace: 'nowrap',
  },
  progressText: {
    display: 'inline-block',
    fontSize: '1em',
    textAlign: 'right',
    verticalAlign: 'text-top',
    fontSize: '12px',
    fontWeight: 'bold',
    margin: '5px',
    whiteSpace: 'nowrap',
  }
});

export const ProgressBarCellBase = ({ value, classes, style }) => (
  <TableCell
    className={classes.progressBarCell}
    style={style}
    
  >
    <div
      className={classes.progressBar}
      style={{ width: `${value}%` }}
      title={`${value.toFixed(1)}%`}  
    >{value}</div>
  </TableCell>
);
ProgressBarCellBase.propTypes = {
  value: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  style: PropTypes.object,
};
ProgressBarCellBase.defaultProps = {
  style: {},
};

export const ProgressBarCell = withStyles(styles, { name: 'ProgressBarCell' })(ProgressBarCellBase);