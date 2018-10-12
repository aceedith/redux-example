import React, {Component} from 'react';

class Control extends Component {

    static defaultProps = {
        onAddition: () => console.warn('onAddition is not defined.'),
        onSubtract: () => console.warn('onSubtract is not defined.'),
        onRandomizeColor: () => console.warn('onRandomize is not defined.')
    };

    render() {
        const {onAddition, onSubtract, onRandomizeColor} = this.props;

        return (
            <div>
                <button onClick={onAddition}>+</button>
                <button onClick={onSubtract}>-</button>
                <button onClick={onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

export default Control;