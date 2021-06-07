import { LightningElement, wire } from 'lwc';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'text' },
    { label: 'First name', fieldName: FIRSTNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Last name', fieldName: LASTNAME_FIELD.fieldApiName, type: 'text' }
];

export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts; 
    
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}