import React from 'react';
import classNames from 'classnames';

import styles from './Circle.less';
import {mergeStyles} from '../utils';

const size = 45;

export default class Circle extends React.Component {
    render() {
        const {item, flat, idx} = this.props;

        var status = 'Waiting';

        if (item.isActive) {
            status = 'In Progress';
        } else if (item.isDone) {
            status = 'Completed';
        }

        return (
            <div {...mergeStyles(styles, this.props.styles, {item: true})}>
                <div {...mergeStyles(styles, this.props.styles, {
                            number: true,
                            itemFlatNumber: flat,
                            activeFlatItemNumber: flat && item.isActive,
                            activeItemNumber: !flat && item.isActive,
                            doneFlatItemNumber: flat && item.isDone,
                            doneItemNumber: !flat && item.isDone
                        })}>{idx + 1}</div>
                <div {...mergeStyles(styles, this.props.styles, {labels: true})}>
                    <div {...mergeStyles(styles, this.props.styles, {text: true})}>{item.text}</div>
                    <div {...mergeStyles(styles, this.props.styles, {status: true})}>{status}</div>
                </div>
            </div>
        );
    }
}
