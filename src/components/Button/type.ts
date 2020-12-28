interface ITryObject {
    param1: string;
    param2: string;
}

export interface IButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Button adornment
     */
    adornment?: React.ReactNode;
    /**
     * Button tryObject
     */
    tryObject?: ITryObject;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}