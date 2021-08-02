import {ChatIcon, TrashIcon} from '@heroicons/react/outline';
import {StarIcon} from '@heroicons/react/solid';
import {TableRow, TableRowCell} from 'components/atoms';
import {Contact} from 'context/ContactsContext';
import {classNames} from 'utils';

type Props = {

}
/*
TODO: 1. Define the props type
*/

export function ContactRow(props: Props) {
  const {
  } = props;
  /*
  TODO: 1. Extract the props
  */
  return (
    <TableRow key={`TODO`}>
      <TableRowCell className="px-6">
        <StarIcon
          className={'TODO'}
          onClick={() => 'TODO'}
        />
      </TableRowCell>
      <TableRowCell font="medium">{'TODO'}</TableRowCell>
      <TableRowCell>
        <div className="w-64">{'TODO'}</div>
      </TableRowCell>
      <TableRowCell>{`TODO`}</TableRowCell>
      <TableRowCell className="flex gap-2">
        <ChatIcon className={iconClassName} onClick={() => 'TODO'} />
        <TrashIcon className={iconClassName} onClick={() => 'TODO'} />
      </TableRowCell>
    </TableRow>
  );
}

const iconClassName = `h-5 w-5 cursor-pointer hover:text-green-500 transition ease-in-out duration-700`;
