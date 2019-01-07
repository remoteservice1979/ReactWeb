import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DatePicker from '../../common/datePicker';
import { Button } from '@material-ui/core';
import  moment  from 'moment';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 */
 const tileData = [
 {
    // img: image,
     title: 'Image',
     author: 'author',
     cols: 2,
 },
 ];

function DateDiff() {
 const now = moment(new Date()); //todays date
 const end = moment("2015-12-1"); // another date
 const duration = moment.duration(now.diff(end));
 const days = duration.asDays();
 alert(days);
}
function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
     <p> Its Home </p>
     <div>
     <DatePicker />
     <DatePicker />
     <Button size="medium"  className={classes.margin}>
          Click
      </Button>
     </div>

    </div>

  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
