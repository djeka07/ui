import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { MouseEvent, ReactNode, FormEvent, KeyboardEvent, ChangeEvent } from 'react';
import * as _vanilla_extract_recipes from '@vanilla-extract/recipes';
import { RecipeVariants } from '@vanilla-extract/recipes';

type ForProps<T> = {
    each?: T[];
    fallback?: JSX.Element;
    className?: string;
    children: (item: T, index: number) => JSX.Element;
    keyed: ((item: T, index: number) => string) | keyof T;
};
declare const For: <T extends object>({ each, fallback, className, ...rest }: ForProps<T>) => JSX.Element | null;
declare const _default$1: typeof For;

declare const button: _vanilla_extract_recipes.RuntimeFn<{
    color: {
        light: {
            backgroundColor: "var(--light-primary-color)";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--light-primary-color)";
                };
                '&:hover': {
                    backgroundColor: "var(--main-primary-color)";
                };
            };
        };
        main: {
            backgroundColor: "var(--main-primary-color)";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--main-primary-color)";
                };
                '&:hover': {
                    backgroundColor: "var(--dark-primary-color)";
                    opacity: number;
                };
            };
        };
        dark: {
            backgroundColor: "var(--dark-primary-color)";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--dark-primary-color)";
                };
                '&:hover': {
                    backgroundColor: "var(--dark-primary-color)";
                    opacity: number;
                };
            };
        };
        'error-light': {
            backgroundColor: "var(--light-error-color)";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--light-error-color)";
                };
                '&:hover': {
                    backgroundColor: "var(--light-error-color)";
                    opacity: number;
                };
            };
        };
        error: {
            backgroundColor: "var(--main-error-color)";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--main-error-color)";
                };
                '&:hover': {
                    backgroundColor: "var(--dark-error-color)";
                    opacity: number;
                };
            };
        };
        'error-dark': {
            backgroundColor: "var(--dark-error-color)";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--dark-error-color)";
                };
                '&:hover': {
                    backgroundColor: "var(--dark-error-color)";
                    opacity: number;
                };
            };
        };
        'success-light': {
            backgroundColor: "var(--light-success-color)";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--light-success-color)";
                };
                '&:hover': {
                    backgroundColor: "var(--main-success-color)";
                    opacity: number;
                };
            };
        };
        success: {
            backgroundColor: "var(--main-success-color)";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--main-success-color)";
                };
                '&:hover': {
                    backgroundColor: "var(--dark-success-color)";
                    opacity: number;
                };
            };
        };
        'success-dark': {
            backgroundColor: "var(--dark-success-color)";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--dark-success-color)";
                };
                '&:hover': {
                    backgroundColor: "var(--main-success-color)";
                    opacity: number;
                };
            };
        };
        'warning-light': {
            backgroundColor: "var(--light-warning-color)";
            '&:focus': {
                boxShadow: string;
            };
            '&:hover': {
                backgroundColor: string;
                opacity: number;
            };
        };
        warning: {
            backgroundColor: "var(--main-warning-color)";
            '&:focus': {
                boxShadow: string;
            };
            '&:hover': {
                backgroundColor: string;
                opacity: number;
            };
        };
        'warning-dark': {
            backgroundColor: "var(--dark-warning-color)";
            '&:focus': {
                boxShadow: string;
            };
            '&:hover': {
                backgroundColor: string;
                opacity: number;
            };
        };
        'info-light': {
            backgroundColor: "var(--light-info-color)";
            '&:focus': {
                boxShadow: string;
            };
            '&:hover': {
                backgroundColor: string;
                opacity: number;
            };
        };
        info: {
            backgroundColor: "var(--main-info-color)";
            '&:focus': {
                boxShadow: string;
            };
            '&:hover': {
                backgroundColor: string;
                opacity: number;
            };
        };
        'info-dark': {
            backgroundColor: "var(--dark-info-color)";
            '&:focus': {
                boxShadow: string;
            };
            '&:hover': {
                backgroundColor: string;
                opacity: number;
            };
        };
        outlined: {
            backgroundColor: "transparent";
            border: "2px solid var(--main-text-color)";
            color: "var(--main-text-color)";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--main-primary-color)";
                };
                '&:hover': {
                    backgroundColor: "var(--dark-primary-color)";
                    color: "var(--white-common-color)";
                };
            };
        };
        transparent: {
            backgroundColor: "transparent";
            selectors: {
                '&:focus': {
                    boxShadow: "0 0 0 1px #ffffff, 0 0 0px 3px var(--main-primary-color)";
                };
                '&:hover': {
                    backgroundColor: "rgba(50, 50, 50, 0.5)";
                };
            };
        };
    };
    outlined: {
        true: {};
    };
    fullWidthMobile: {
        false: {
            width: "auto";
        };
        true: {
            width: "100%";
        };
    };
    round: {
        true: {
            [x: string]: "50%" | "40px" | {
                [x: string]: {
                    width: string;
                    height: string;
                };
            };
            borderRadius: "50%";
            width: "40px";
            height: "40px";
        };
    };
    wide: {
        true: {
            [x: string]: "100%" | {
                [x: string]: {
                    width: string;
                };
            };
            width: "100%";
        };
    };
    disabled: {
        true: {
            filter: "opacity(0.5)";
            cursor: "not-allowed";
            selectors: {
                '&:focus': {
                    boxShadow: "none";
                };
            };
        };
    };
}>;
declare const childrenRecipe: _vanilla_extract_recipes.RuntimeFn<{
    outlined: {
        true: {};
    };
    color: {
        light: {};
        main: {};
        'error-light': {};
        error: {};
        'error-dark': {};
        transparent: {};
        'success-light': {};
        success: {};
        'success-dark': {};
        'info-light': {};
        info: {};
        'info-dark': {};
        'warning-light': {};
        warning: {};
        'warning-dark': {};
    };
    size: {
        xsmall: {
            padding: number;
            fontSize: "var(--xsmall-font-size)";
        };
        small: {
            padding: "6.4px 16px";
            fontSize: "var(--small-font-size)";
        };
        normal: {
            padding: "9.4px 16px";
        };
        large: {
            padding: "13.4px 24px";
        };
    };
    direction: {
        row: {
            flexDirection: "row";
        };
        'row-reverse': {
            flexDirection: "row-reverse";
        };
        column: {
            flexDirection: "column";
        };
        'column-reverse': {
            flexDirection: "column-reverse";
        };
    };
    align: {
        'flex-start': {
            alignItems: "flex-start";
        };
        center: {
            alignItems: "center";
        };
    };
    justify: {
        'flex-start': {
            justifyContent: "flex-start";
        };
        center: {
            justifyContent: "center";
        };
    };
}>;
type ButtonVariants = RecipeVariants<typeof button>;
type ChildrenVariants = RecipeVariants<typeof childrenRecipe>;

type ButtonProps = ButtonVariants & ChildrenVariants & {
    type?: 'submit' | 'button' | 'reset';
    round?: boolean;
    wide?: boolean;
    fullWidthMobile?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    isLoading?: boolean;
    children: ReactNode;
    className?: string;
    innerClass?: string;
};
declare const Button: ({ children, className, color, disabled, fullWidthMobile, innerClass, isLoading, onClick, round, outlined, direction, align, justify, size, type, wide, }: ButtonProps) => react_jsx_runtime.JSX.Element;

type Radius = {
    none: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    round: string;
};
type RadiusKeys = keyof Radius;

type TextInputProps = {
    type: string;
    name: string;
    value?: string;
    defaultValue?: string;
    full?: boolean;
    id?: string;
    autoComplete?: string;
    radius?: RadiusKeys;
    disabled?: boolean;
    readOnly?: boolean;
    backgroundColor?: 'light' | 'main' | 'dark';
    onClick?: (event: FormEvent<HTMLInputElement>) => void;
    onChange?: (event: FormEvent<HTMLInputElement>) => void;
    onBlur?: (event: FormEvent<HTMLInputElement>) => void;
    onFocus?: (event: FormEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
    className?: string;
    error?: string | undefined;
};
declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;

declare const Checkbox: React.ForwardRefExoticComponent<{
    radius?: "small" | "medium" | "large" | "xlarge" | "xxlarge" | undefined;
} & {
    value?: string;
    name?: string;
    label?: string;
    defaultChecked?: boolean;
    radius?: number;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FormEvent) => void;
    children?: JSX.Element;
    className?: string;
    error?: string;
    noErrorLabel?: boolean;
} & React.RefAttributes<HTMLInputElement>>;

declare const wrapper: _vanilla_extract_recipes.RuntimeFn<{
    padding: {
        none: {
            padding: number;
        };
        small: {
            padding: number;
        };
        medium: {
            padding: number;
        };
        large: {
            padding: number;
        };
        xlarge: {
            padding: number;
        };
    };
    boxShadow: {
        true: {
            boxShadow: "var(--main-box-shadow)";
        };
    };
    background: {
        light: {
            backgroundColor: "var(--light-background-color)";
        };
        main: {
            backgroundColor: "var(--main-background-color)";
        };
        dark: {
            backgroundColor: "var(--dark-background-color)";
        };
    };
    radius: {
        none: {
            borderRadius: "0px";
        };
        small: {
            borderRadius: "var(--small-border-radius)";
        };
        medium: {
            borderRadius: "var(--medium-border-radius)";
        };
        large: {
            borderRadius: "var(--large-border-radius)";
        };
        xlarge: {
            borderRadius: "var(--xlarge-border-radius)";
        };
        xxlarge: {
            borderRadius: "var(--xxlarge-border-radius)";
        };
        round: {
            borderRadius: "var(--round-border-radius)";
        };
    };
}>;
declare const svg: _vanilla_extract_recipes.RuntimeFn<{
    size: {
        xxxsmall: {
            width: number;
            height: number;
        };
        xxsmall: {
            width: number;
            height: number;
        };
        xsmall: {
            width: number;
            height: number;
        };
        small: {
            width: number;
            height: number;
        };
        normal: {
            width: number;
            height: number;
        };
        medium: {
            width: number;
            height: number;
        };
        large: {
            width: number;
            height: number;
        };
        xlarge: {
            width: number;
            height: number;
        };
        xxlarge: {
            width: number;
            height: number;
        };
        xxxlarge: {
            width: number;
            height: number;
        };
    };
    color: {
        menu: {
            fill: "#afafaf";
        };
        input: {
            fill: "var(--main-input-color)";
        };
        white: {
            fill: "var(--white-common-color)";
        };
        grey100: {
            fill: "var(--100-grey-color)";
        };
        grey200: {
            fill: "var(--200-grey-color)";
        };
        grey300: {
            fill: "var(--300-grey-color)";
        };
        grey400: {
            fill: "var(--400-grey-color)";
        };
        grey500: {
            fill: "var(--500-grey-color)";
        };
        grey600: {
            fill: "var(--600-grey-color)";
        };
        grey700: {
            fill: "var(--700-grey-color)";
        };
        grey800: {
            fill: "var(--800-grey-color)";
        };
        grey900: {
            fill: "var(--900-grey-color)";
        };
        black: {
            fill: "var(--common-black-color)";
        };
        heading: {
            fill: "var(--main-heading-color)";
        };
        'success-light': {
            fill: "var(--light-success-color)";
        };
        success: {
            fill: "var(--main-success-color)";
        };
        'success-dark': {
            fill: "var(--dark-success-color)";
        };
        'error-light': {
            fill: "var(--light-error-color)";
        };
        error: {
            fill: "var(--main-error-color)";
        };
        'error-dark': {
            fill: "var(--dark-error-color)";
        };
    };
    cursor: {
        pointer: {
            cursor: "pointer";
        };
    };
}>;
type WrapperStyleVariants = RecipeVariants<typeof wrapper>;
type SvgStyleVariants = RecipeVariants<typeof svg>;

type IconNames = 'AlertCircle' | 'AlertCircleOctagon' | 'AlertTriangle' | 'Close' | 'CloseCircle' | 'Down' | 'Edit' | 'Home' | 'Layers' | 'Left' | 'Logout' | 'Menu' | 'Message' | 'Moon' | 'Plus' | 'Repeat' | 'Right' | 'Rotate' | 'Send' | 'Server' | 'Settings' | 'Slash' | 'Sun' | 'SunMoon' | 'Trash' | 'Up' | 'Upload' | 'User' | 'UserError' | 'UserPlus' | 'UserSuccess' | 'Users';

type IconProps = SvgStyleVariants & {
    title?: string;
    name: IconNames;
    wrapperClass?: string;
    className?: string;
    onClick?: () => void;
};
declare const Icon: ({ background, radius, boxShadow, wrapperClass, padding, ...props }: IconProps & WrapperStyleVariants) => react_jsx_runtime.JSX.Element;

declare const actionButton: _vanilla_extract_recipes.RuntimeFn<{
    color: {
        transparent: {
            backgroundColor: "transparent";
        };
        light: {
            backgroundColor: "var(--light-bqckground-color)";
        };
        main: {
            backgroundColor: "var(--main-bqckground-color)";
        };
        dark: {
            backgroundColor: "var(--dark-bqckground-color)";
        };
    };
}>;
type ActionButtonStyleVariant = RecipeVariants<typeof actionButton>;

type ActionButtonProps = Pick<ButtonProps, 'children' | 'className' | 'disabled' | 'isLoading' | 'onClick'> & ActionButtonStyleVariant & {
    description?: string;
    iconName?: IconProps['name'];
};
declare const ActionButton: ({ children, className, description, disabled, color, iconName, isLoading, onClick, }: ActionButtonProps) => react_jsx_runtime.JSX.Element;

declare const message: _vanilla_extract_recipes.RuntimeFn<{
    type: {
        error: {
            backgroundColor: "var(--light-error-color)";
            color: "var(--dark-error-color)";
        };
        success: {
            backgroundColor: "var(--light-success-color)";
            color: "var(--dark-success-color)";
        };
        warning: {
            backgroundColor: "var(--light-warning-color)";
            color: "var(--dark-warning-color)";
        };
        info: {
            backgroundColor: "var(--light-info-color)";
            color: "var(--dark-info-color)";
        };
    };
}>;
type MessageVariants = RecipeVariants<typeof message>;

type MessageProps = MessageVariants & {
    icon?: IconNames;
    iconSize?: IconProps['size'];
    children: ReactNode | ReactNode[];
    show?: boolean;
    wrapperClass?: string;
    margin?: {
        bottom?: number;
        top?: number;
        left?: number;
        right?: number;
    };
    className?: string;
};
declare const Message: ({ show, margin, wrapperClass, icon, className, iconSize, children, type, }: MessageProps) => react_jsx_runtime.JSX.Element;

declare const root: _vanilla_extract_recipes.RuntimeFn<{
    margin: {
        no: {
            margin: number;
        };
        small: {
            margin: "0 10px";
        };
        normal: {
            margin: "2px 20px";
        };
        large: {
            margin: "4px 30px";
        };
    };
    size: {
        xsmall: {
            width: number;
            height: number;
        };
        small: {
            width: number;
            height: number;
        };
        normal: {
            width: number;
            height: number;
        };
        large: {
            width: number;
            height: number;
        };
    };
}>;
declare const rotate: _vanilla_extract_recipes.RuntimeFn<{
    size: {
        xsmall: {
            width: number;
            height: number;
        };
        small: {
            width: number;
            height: number;
        };
        normal: {
            width: number;
            height: number;
        };
        large: {
            width: number;
            height: number;
        };
    };
    color: {
        light: {
            borderColor: "var(--light-text-color) transparent transparent transparent";
        };
        main: {
            borderColor: "var(--main-text-color) transparent transparent transparent";
        };
        dark: {
            borderColor: "var(--dark-text-color) transparent transparent transparent";
        };
        success: {
            borderColor: "var(--dark-success-color) transparent transparent transparent";
        };
        error: {
            borderColor: "var(--dark-error-color) transparent transparent transparent";
        };
    };
}>;
type SpinnerVariants = RecipeVariants<typeof rotate>;
type RootVariants = RecipeVariants<typeof root>;

type SpinnerProps = SpinnerVariants & RootVariants;
declare const Spinner: (props: SpinnerProps) => react_jsx_runtime.JSX.Element;

type SwitchProps<T> = {
    children: JSX.Element | JSX.Element[];
    expression: T;
    fallback?: ReactNode;
};
type MatchProps<T> = {
    when: T;
    children: ReactNode | ReactNode[];
};
declare const Match: {
    <T>({ children }: MatchProps<T>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const _default: React.MemoExoticComponent<(<T>({ children, expression, fallback }: SwitchProps<T>) => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<ReactNode> | null)>;

declare const typography: _vanilla_extract_recipes.RuntimeFn<{
    color: {
        grey100: {
            color: "var(--100-grey-color)";
        };
        grey200: {
            color: "var(--200-grey-color)";
        };
        grey300: {
            color: "var(--300-grey-color)";
        };
        grey400: {
            color: "var(--400-grey-color)";
        };
        grey500: {
            color: "var(--500-grey-color)";
        };
        grey600: {
            color: "var(--600-grey-color)";
        };
        grey700: {
            color: "var(--700-grey-color)";
        };
        grey800: {
            color: "var(--800-grey-color)";
        };
        grey900: {
            color: "var(--900-grey-color)";
        };
        'success-light': {
            color: "var(--light-success-color)";
        };
        success: {
            color: "var(--main-success-color)";
        };
        'success-dark': {
            color: "var(--dark-success-color)";
        };
        menu: {
            color: "#afafaf";
        };
        'heading-light': {
            color: "var(--light-heading-color)";
        };
        heading: {
            color: "var(--heading-color)";
        };
        'heading-dark': {
            color: "var(--dark-heading-color)";
        };
        'error-light': {
            color: "var(--light-error-color)";
        };
        error: {
            color: "var(--main-error-color)";
        };
        'error-dark': {
            color: "var(--dark-error-color)";
        };
        'link-light': {
            color: "var(--light-link-color)";
        };
        link: {
            color: "var(--main-link-color)";
        };
        'link-dark': {
            color: "var(--main-link-color)";
        };
        'text-light': {
            color: "var(--light-text-color)";
        };
        text: {
            color: "var(--main-text-color)";
        };
        'text-dark': {
            color: "var(--dark-text-color)";
        };
        inherit: {
            color: "inherit";
        };
    };
    element: {
        h1: {
            color: "var(--main-heading-color)";
        };
        h2: {
            color: "var(--main-heading-color)";
        };
        h3: {
            color: "var(--main-heading-color)";
        };
        h4: {
            color: "var(--main-heading-color)";
        };
        h5: {
            color: "var(--main-heading-color)";
        };
        h6: {
            color: "var(--main-heading-color)";
        };
        body: {
            color: "var(--main-text-color)";
        };
        caption: {
            color: "var(--main-text-color)";
        };
        label: {
            color: "var(--main-text-color)";
        };
        p: {
            color: "var(--main-text-color)";
        };
        span: {
            color: "var(--main-text-color)";
        };
        div: {
            color: "var(--main-text-color)";
        };
    };
    size: {
        xsmall: {
            fontSize: "var(--xsmall-font-size)";
        };
        small: {
            fontSize: "var(--small-font-size)";
        };
        normal: {
            fontSize: "var(--normal-font-size)";
        };
        medium: {
            fontSize: "var(--medium-font-size)";
        };
        large: {
            fontSize: "var(--large-font-size)";
        };
        xlarge: {
            fontSize: "var(--xlarge-font-size)";
        };
        xxlarge: {
            fontSize: "var(--xxlarge-font-size)";
        };
        xxxlarge: {
            fontSize: "var(--xxxlarge-font-size)";
        };
        hero: {
            fontSize: "var(--hero-font-size)";
        };
    };
    marginTop: {
        small: {
            [x: string]: number | {
                [x: string]: {
                    marginTop: number;
                };
            };
            marginTop: number;
        };
        medium: {
            [x: string]: number | {
                [x: string]: {
                    marginTop: number;
                };
            };
            marginTop: number;
        };
        large: {
            [x: string]: number | {
                [x: string]: {
                    marginTop: number;
                };
            };
            marginTop: number;
        };
    };
    marginRight: {
        small: {
            [x: string]: number | {
                [x: string]: {
                    marginRight: number;
                };
            };
            marginRight: number;
        };
        medium: {
            [x: string]: number | {
                [x: string]: {
                    marginRight: number;
                };
            };
            marginRight: number;
        };
        large: {
            [x: string]: number | {
                [x: string]: {
                    marginRight: number;
                };
            };
            marginRight: number;
        };
    };
    marginBottom: {
        small: {
            [x: string]: number | {
                [x: string]: {
                    marginBottom: number;
                };
            };
            marginBottom: number;
        };
        medium: {
            [x: string]: number | {
                [x: string]: {
                    marginBottom: number;
                };
            };
            marginBottom: number;
        };
        large: {
            [x: string]: number | {
                [x: string]: {
                    marginBottom: number;
                };
            };
            marginBottom: number;
        };
    };
    marginLeft: {
        small: {
            [x: string]: number | {
                [x: string]: {
                    marginLeft: number;
                };
            };
            marginLeft: number;
        };
        medium: {
            [x: string]: number | {
                [x: string]: {
                    marginLeft: number;
                };
            };
            marginLeft: number;
        };
        large: {
            [x: string]: number | {
                [x: string]: {
                    marginLeft: number;
                };
            };
            marginLeft: number;
        };
    };
    weight: {
        light: {
            fontWeight: "var(--light-font-weight)";
        };
        regular: {
            fontWeight: "var(--regular-font-weight)";
        };
        bold: {
            fontWeight: "var(--bold-font-weight)";
        };
    };
    align: {
        right: {
            textAlign: "right";
        };
        center: {
            textAlign: "center";
        };
    };
    fontStyle: {
        italic: {
            fontStyle: "italic";
        };
        oblique: {
            fontStyle: "oblique";
        };
    };
    transform: {
        inherit: {
            textTransform: "inherit";
        };
        capitalize: {
            textTransform: "capitalize";
        };
        lowercase: {
            textTransform: "lowercase";
        };
        uppercase: {
            textTransform: "uppercase";
        };
    };
    wordBreak: {
        breakAll: {
            wordBreak: "break-all";
        };
        breakWord: {
            wordBreak: "break-word";
        };
    };
    cursor: {
        pointer: {
            cursor: "pointer";
        };
    };
}>;
type TypographyVariants = Omit<NonNullable<RecipeVariants<typeof typography>>, 'element'>;

type Variant = 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label' | 'p' | 'span';
type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label' | 'p' | 'span' | 'div';
type TypographyProps = TypographyVariants & {
    as?: Element;
    variant?: Variant;
    className?: string;
    onClick?: () => void;
    children: ReactNode;
};
declare const Typography: ({ children, align, as, className, fontStyle, color, onClick, marginBottom, marginLeft, marginRight, marginTop, size, transform, variant, weight, wordBreak, }: TypographyProps) => React.DetailedReactHTMLElement<{
    className: string;
    children: ReactNode;
}, HTMLElement>;

export { ActionButton, Button, Checkbox, _default$1 as For, Icon, Match, Message, Spinner, _default as Switch, TextInput, Typography };
