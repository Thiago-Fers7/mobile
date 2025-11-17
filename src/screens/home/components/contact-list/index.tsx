import { ErrorBoundary } from "@components/ErrorBoundary";
import { getContacts } from "@services/requests/contacts/getContacts";
import { Suspense } from "react";

import { ContactsListError } from "./error";
import { List } from "./list";

const getContactsPromise = getContacts();

export function ContactList() {
  return (
    <Suspense fallback={<ContactsListError />}>
      <ErrorBoundary fallback={<ContactsListError />}>
        <List getContactsPromise={getContactsPromise} />
      </ErrorBoundary>
    </Suspense>
  );
}
