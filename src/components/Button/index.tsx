import React, {memo} from 'react';
import {IButtonProps} from "./type";

/**
 * Component File Description
 */
const Button: React.FC<IButtonProps> = ({
                                            primary = false,
                                            size = 'medium',
                                            backgroundColor,
                                            label,
                                            adornment,
                                            ...props
                                        }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{backgroundColor}}
            {...props}
        >
            {adornment}
            {label}
        </button>
    );
};

export default memo(Button);