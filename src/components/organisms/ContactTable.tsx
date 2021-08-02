import {ContactRow} from 'components';
import {useContactNumber, useContacts} from 'hooks';
import {Button, TableHeaderCell, TableRow, TableRowCell} from '../atoms';
import {ContactRowEditable} from 'components/molecules';
import {Contact, DEFAULT_CONTACT_NUMBER} from 'context';
import {useState} from 'react';

export function ContactTable() {
  const [isAddContactView, setIsAddContactView] = useState(false);
  /*
TODO: 1. use the useState hook in order to create state for the new contact
*/

  /*
TODO 2. use the useContacts and useContactNumber hooks in order to set new contact number & extract contacts from the context
*/

  /*
  TODO 3: let's create the onFavorite function together - recieves an id and once clicked on the favorite icon the favorited contacted move to the top of the list
  Afterwards, let's update the contacts context
  */
  const onFavorite = (id: number) => {};

  /*
  TODO 4: create the onRemove function which recieves an id and removes the contact based on the id
  Afterwards, update the contacts context
  */
  const onRemove = (id: number) => {};

  /*
  TODO 4: create the onMessage function which recieves an id and messages the contact based on the id
  Afterwards, sets the contact number via context
  */
  const onMessage = (id: number) => {};


/*This is used for the ContactRowEditable component */
  // const onSubmit = (contact: Contact) => {
  //   setContacts(prevContacts =>
  //     prevContacts ? [...prevContacts, contact] : prevContacts,
  //   );
  // };

  return (
    <div className="flex flex-col ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <div>ADD THE TableRow AND TableHeaderCell COMPONENTS</div>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <div>
                  MAP THROUGH THE CONTACTS AND USE THE ContactRow component
                </div>
                {/* {contacts.map(contact => {
                  return (
                    <ContactRow
                      key={contact.id}
                      {...contact}
                      onFavorite={() => onFavorite(contact.id)}
                      onRemove={() => onRemove(contact.id)}
                      onMessage={() => onMessage(contact.id)}
                    />
                  );
                })} */}

                {/* {isAddContactView && (
                  <ContactRowEditable
                    onSubmit={onSubmit}
                    onCancel={() => setIsAddContactView(false)}
                  />
                )}
                {!isAddContactView && (
                  <TableRow>
                    <TableRowCell className="text-center" span={5}>
                      <Button
                        use="secondary"
                        type="button"
                        onClick={() => setIsAddContactView(true)}>
                        Add New Contact
                      </Button>
                    </TableRowCell>
                  </TableRow>
                )} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
