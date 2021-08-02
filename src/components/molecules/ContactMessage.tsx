import {useContactNumber} from 'hooks/useContactNumber';
import {SyntheticEvent, useCallback, useState} from 'react';
import {Button} from '../atoms';
import {InputGroup} from './InputGroup';

export function ContactMessage() {
  /*
  AFTER ADDING THE MESSAGE DIV :
  use the useState hook for updating the message on change. the useState hook re-renders the component once the defined
  state is changed
  */

  /*
  use the  useContactNumber hook for the Context
  */

  /*
  AFTER using the useState hook :
  create handleMessageChange function and use setMessage in order to set the new message content
  */

  /*
  AFTER importing useContactNumber :
  copy the whatsappHref const from the reference
  */



  /* AFTER importing useContactNumber :
  create two functions onChangePrefix and onChangeNumber in order to set the new number and perfix
  */

  return (
    <form action="#" className="sm:mx-auto sm:max-w-lg sm:flex flex-col gap-2">
      <div className="flex gap-2">
        <div>ADD THE InputGroup COMPONENT INSTEAD OF THIS DIV</div>
        <div>ADD THE Button COMPONENT INSTEAD OF THIS DIV</div>
      </div>
      <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600 bg-white">
        <label
          htmlFor="message"
          className="block text-xs font-medium text-gray-900">
          Message
        </label>
        <textarea
          rows={5}
          name="TODO"
          id="TODO"
          value="TODO"
          onChange={() => 'TODO'}
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
          placeholder="Insert your message"
        />
      </div>
    </form>
  );
}

const DEFAULT_MESSAGE = ``;
const WHATSAPP_API_SEND_IL_NUMBER = `https://wa.me/972`;
