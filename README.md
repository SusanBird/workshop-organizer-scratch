## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## Data model / schema / table definition

### workshops

-   topic
-   id
-   user_id

### participants

-   name
-   id
-   workshop_id
-   user_id

## Auth

-   in template already

## workshops-list page

-   dynamic list of different workshops
-   each one also contains a list of participants who belong to that workshop

## create-participant page

-   form

### events

-   on submit
    -   get the data from the form
    -   use the data to create a new participant
-   on load
    -   get data from both tables
    -   create dropdown
-   on load
    -   get workshops, render & append

### functions

-   getWorkshops
    -   all workshops
    -   plus all participants and their columns too
-   getParticipant
    -   from table, by their user id
-   createParticipant
    -   create new participant with name and workshop choice
-   editParticipant
    -   update participant workshop choice and name
-   renderWorkshop
    -   create elements for workshop
    -   name it by topic
    -   append
    -   participant link
