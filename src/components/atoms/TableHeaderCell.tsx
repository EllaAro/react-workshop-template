import {DefaultComponent} from 'types/common';

/*
TODO 1.Define the props
*/

type Props = DefaultComponent & {
};

export const TableHeaderCell = (props: Props) => {
  /*
  TODO 2.Extract the props and use them in the right place
  */
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    </th>
  );
};
