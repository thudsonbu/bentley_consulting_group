import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles/JumbotronStyles';

function Jumbotron(props) {
    return (
        <div className={props.classes.Jumbotron}>
            <h1 className={props.classes.JumbotronTitle}>Bentley Consulting Group</h1>
        </div>
    )
}

export default withStyles(styles)(Jumbotron);