import React, {Component} from 'react';
// import {bindActionCreators} from 'react';
import {connect} from 'react-redux';

import Value from './Value';
import Control from './Control';
import * as actions from '../actions';


class Counter extends Component {

    setRandomColor = () => {
        const color = [
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200)
        ];

        this.props.handleSetColor(color);
    };

    render() {
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };

        return (
            <div style={style}>
                {/* If you do not use react-redux,
                <Value number={this.props.store.getState().counter.number}/>*/}
                <Value number={this.props.number}/>
                <Control
                    onAddition={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // The state is from reducers
    return {
        number: state.counter.number,
        color: state.ui.color
    }
};


// Below is called props in this.
const mapDispatchToProps = (dispatch) => {
    // This is for auto mapping by function names of actions.
    // return bindActionCreators();

    return {
        handleIncrement: () => {
            dispatch(actions.increment())
        },
        handleDecrement: () => {
            dispatch(actions.decrement())
        },
        handleSetColor: (color) => {
            dispatch(actions.setColor(color))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);