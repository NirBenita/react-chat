 This project is under construction 
# React Monkey 
React Monkey is a tiny project for building Dialog-Tree chat appliactions.
![react-monkey](https://cloud.githubusercontent.com/assets/2289769/24579745/abe7e5a6-1703-11e7-8061-51e0cb686245.gif)

## Running
This project is using create-react-app, and so to run it, simply:
1. Clone this project
2. `yarn start`/`npm start`

## Build your own story
The app accepts an array of "Message" objects, each containing a message to view, and a list of possible replies.
``` json
{
        id: 'what',
        // This is the id of the message, we use these to point specific messages from the conversation
        value: 'React Monkey is a tiny project for building Dialog-Tree chat appliactions.',
        // This is the content of the message to be displayed
        chain: 'monkeyIsland',
        // You can point to another message to break text down into smaller chunks
        replies: [
            // This is the repleis that will be avilable to the user
            {
                value: "Why would I need that?",
                next: "why"
            },
            {
                value: "Ah, finally!",
                next: "finally"
            }
        ]
    },
```