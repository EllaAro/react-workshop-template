import {useCallback, useEffect, useState} from 'react';
import {classNames, NoopFn} from 'utils';

type InputProps = {
  className?: string;
  innerRef?: {current: null | HTMLInputElement};
  onBlur?: () => void;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  placeholder?: string;
  role?: string;
  type?: string;
  value?: string;
  name?: string;
  maxLength?: number;
};
//TODO 1. define the type InputProps

export const Input = ({
  className = ``,
  innerRef,
  onChange = NoopFn,
  value = ``,
  maxLength = Infinity,
  ...props
}: InputProps): React.ReactElement => {
  //TODO 2. define what props the Input component recieves
  const [inputValue, setInputValue] = useState(value);
  //TODO 3. create state and use it for...?

  //4.Create an onChange function for the input
  const $onChange = useCallback(
    ({currentTarget: {value}}) => {
      if (value.length <= maxLength) {
        setInputValue(value);
      }
    },
    [maxLength],
  );

  //TODO 5. Add one useEffect for whenever inner inputValue is changed and use the created onChange for it.
  useEffect(() => {
    onChange(inputValue);
  }, [onChange, inputValue]);

  //TODO 6. Add second useEffect for ???????
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  //TODO 7. Use the props for the <input> element with the right parameters (our props,className,ref,onChange,value)
  return (
    <input
      {...{...props}}
      className={classNames(`px-3 py-2`, className)}
      ref={innerRef}
      onChange={$onChange}
      value={inputValue}
    />
  );
};
