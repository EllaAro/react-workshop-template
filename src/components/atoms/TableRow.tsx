import {DefaultComponent} from 'types/common';

import {classNames} from 'utils';

type Props = DefaultComponent & {};

export const TableRow = (props: Props) => {
  const {className = ``,} = props;
  /*
  TODO 1.Extract the props and use them in the right place
  */
  return (
    <tr
      className={classNames(
        `hover:bg-green-50 transition-color ease-in-out duration-500`,
        className,
      )}>
    </tr>
  );
};
