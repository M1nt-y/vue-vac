<template>
  <div>
    <head-title>Terms & Conditions</head-title>
    <div class="container">
      <accordion-list :accordions="terms"/>
    </div>
  </div>
</template>

<script>
import AccordionList from "@/components/AccordionList";
import HeadTitle from "@/components/HeadTitle";
export default {
  name: "TermsPage",
  components: { AccordionList, HeadTitle },
  data() {
    return {
      terms: [
        { id: 1, title: 'Please read these terms and conditions of use carefully before using this web site',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'},
        { id: 2, title: 'Modifications of the terms and conditions',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the ...'},
        { id: 3, title: 'How we work',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website.'},
        { id: 4, title: 'Authorization',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on ...'},
        { id: 5, title: 'Links',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice ...'},
        { id: 6, title: 'Minors',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such ...'},
        { id: 7, title: 'Restricted access',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued us...'},
        { id: 8, title: 'Governing law',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre webs...'},
        { id: 9, title: 'Privacy policy',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'},
        { id: 10, title: 'Personal information',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or ...'},
        { id: 11, title: 'Collecting personal information',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms ...'},
        { id: 12, title: 'Using and sharing personal information',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continue...'},
        { id: 13, title: 'Sharing your personal information',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'},
        { id: 14, title: 'Retaining your personal information',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason...'},
        { id: 15, title: 'Contacting you',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval ...'},
        { id: 16, title: 'Accessing your personal information stored by us',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other ...'},
        { id: 17, title: 'Responding to privacy concerns or complaints',
          body: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'},
      ],
    }
  },
}
</script>

<style scoped>

</style>