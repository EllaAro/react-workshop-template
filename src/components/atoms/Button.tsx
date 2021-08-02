import {ReactElement} from 'react';
import {DefaultComponent} from 'types/common';
import {classNames, NoopFn} from 'utils';

type ButtonUse = `primary` | `secondary` | `destructive`;
type ButtonSize = `xs` | `sm` | `md` | `lg`;
type ButtonType = `button` | `submit` | `link`;

type ButtonProps = DefaultComponent & {
  size?: ButtonSize;
  type?: ButtonType;
  use?: ButtonUse;
  href?: string;
  target?: `_blank`;
};

//TODO define the type ButtonProps

const BUTTON_SIZE: {[key in ButtonSize]: string} = {
  lg: `text-base sm:px-10 py-3`,
  md: `text-base px-4 py-2`,
  sm: `text-sm px-3 py-2 leading-4`,
  xs: `text-xs px-2.5 py-1.5`,
};

const BUTTON_COLOR: {[key in ButtonUse]: string} = {
  destructive: `text-white bg-red-600 hover:bg-red-700`,
  primary: `text-white bg-green-400 hover:bg-green-300`,
  secondary: `text-white bg-gray-400 hover:bg-gray-500`,
};

export const Button = (props: ButtonProps): ReactElement => {
  //TODO write the props the Button component recieves
  const {
    className = ``,
    children,
    use = `primary`,
    size = `xs`,
    type = `button`,
    href = ``,
    onClick = NoopFn,
    target = ``,
  } = props;
  const $className = classNames(
    buttonStyle,
    BUTTON_SIZE[size],
    BUTTON_COLOR[use],
    className,
  );

  /*
  TODO for the ContactMessageLayout create an <a> element and use the props in order to create the Button component

  FOLLOW NEXT STEP AFTER YOU'RE DONE WITH THE ContactMessage COMPONENT ! ! !
  for the ContactTable use a <button> element and conditonally render either of the options based on the given prop

  */
  return type === 'button' || type === 'submit' ? (
    <button {...{type, target, onClick}} className={$className}>
      {children}
    </button>
  ) : (
    <a {...{href, target, onClick}} className={$className}>
      {children}
    </a>
  );
};

const buttonStyle = `inline-flex items-center border border-transparent font-medium bg-opacity-100 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 justify-center`;
