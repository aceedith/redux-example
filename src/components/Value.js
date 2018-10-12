import React, {Component} from 'react';

class Value extends Component {

    static defaultProps = {
        number: -1
    };

    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

export default Value;