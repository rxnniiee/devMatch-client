This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Client side for devMatch

To run the project:
```bash
npm start
```

## **Things to keep in mind:**

- Redux is used for state that is shared between components
- Internal state is used for state that is needed only for that specific component
- Main headers on pages are h3

## Redux state structure

```js
state: {
    employee: {
        profile: {
            id: number,
        },
        gueue: [
            {
                OpenPositionId: number
            }... 
        ],
        matches: [
            {
                companyId: number,
                chat: [
                    {
                        senderId: number,
                        message: string,
                        date: Date
                    }, ...
                ]
            }, ...
        ],
    },
    employer: {
        profile: {
            id: number
        },
        openPositions: [
            {
                positionId: number,
                queue: [
                    {
                        employeeId: number
                    }...
                ]
                matches: [
                    {
                        userId: number,
                        chat: [
                            {
                                senderId: number,
                                message: string,
                                date: Date
                            }, ...
                        ]
                    }, ...
                ]
            }
        ]
    }
}
```
