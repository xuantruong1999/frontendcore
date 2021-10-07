import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([10, 70]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Range Price   
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <div className="range-price-value">{"Min price: " + value[0]+ ' $'} <br/> {"Max price: " + value[1]+ ' $'}</div>
    </div>
  );
}