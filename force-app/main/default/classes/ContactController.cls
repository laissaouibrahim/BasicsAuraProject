public with sharing class ContactController { 
        @AuraEnabled(cacheable=true)
        public static List<Contact> getContacts() {
            throw new AuraHandledException('TECHNICAL ISSUE : Forced error');
            /* return [
                SELECT FirstName, LastName, Email
                FROM Contact
                WITH SECURITY_ENFORCED
                ORDER BY FirstName
            ];  */
}
}