import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';

export const App = () => {
  return (
    <section>
      <Section title="Phonebook" />
      <Form />
      <Contacts title={'Contacts'} />
    </section>
  );
};
