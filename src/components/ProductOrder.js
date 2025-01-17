import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import { roundedTwoDecimals } from './utils';



const styles = theme => ({
    card: {
        maxWidth: 250,
    },
    media: {
        minHeight: 150,
        marginHorizontal: 10,
    },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 32,
    },
    title: {
        textAlign: 'center'
    }

});

class ProductOrder extends Component {
    render() {
        const { classes, id, title, mainPic, order, onHandleDecBox, onHandleIncBox, onHandleRemoveBox, price } = this.props;
        const total = price * order;
        return (

            <div className="mb-3 card-product">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={mainPic}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h4" className={classes.title}>
                                {title}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h6" className={classes.title}>
                                {roundedTwoDecimals(total)} €
                            </Typography>

                        </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <div className="mx-auto">
                            <TextField value={order} style={{ width: '28px', marginTop: '7px' }} className="mr-2"></TextField>
                            <Fab size="small" color="secondary" aria-label="Add" className="mx-1">
                                <AddIcon onClick={() => onHandleIncBox(id)} />
                            </Fab>
                            <Fab size="small" aria-label="Remove" className="mx-1">
                                {(order > 1) && <RemoveIcon onClick={() => onHandleDecBox(id)} />}
                            </Fab>
                            <IconButton aria-label="Delete" onClick={() => onHandleRemoveBox(id)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

ProductOrder.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProductOrder);

