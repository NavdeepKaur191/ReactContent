# Challenge - https://chat.openai.com/

1. Prompt ChatGPT to create a pseudo language to create HTML forms

2. If you like the suggestions, 
use the pseudo language to create a form.
Ask for adjustments if necessary. 
If the language is too complicated, reprompt
with an instruction to keep it simple. 

## Prompt
Create a pseudo language that will help me quickly describe
to you how to provide sample code and styles for an HTML form.
Respond with a template I can use, as well as a sample element. 

FORM:
   - ACTION: [URL]
   - METHOD: [GET/POST/PUT/DELETE]
   - INPUTS:
     * TYPE: [text/password/email/checkbox/radio...]
       LABEL: [Label text]
       ATTRIBUTES:
         - [Attribute Name]: [Attribute Value]
       STYLES:
         - [CSS Property]: [CSS Value]
     ...
   - BUTTON:
     * TEXT: [Button text]
     * TYPE: [submit/reset/button]
     * STYLES:
         - [CSS Property]: [CSS Value]
   - STYLES:
     * [CSS Property]: [CSS Value]
     
FORM:
   - ACTION: /submitForm
   - METHOD: POST
   - INPUTS:
     * TYPE: text
       LABEL: Username
       ATTRIBUTES:
         - name: username
         - required: true
       STYLES:
         - width: 200px
     * TYPE: password
       LABEL: Password
       ATTRIBUTES:
         - name: password
       STYLES:
         - width: 200px
   - BUTTON:
     * TEXT: Submit
     * TYPE: submit
     * STYLES:
         - background-color: blue
         - color: white
   - STYLES:
     * border: 1px solid gray
     * padding: 10px

