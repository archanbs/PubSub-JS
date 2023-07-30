export const PubSub = {
    events: {},
    subscribe: (eventName, callback) => {
        PubSub.events[eventName] = PubSub.events[eventName] || [];
        PubSub.events[eventName].push(callback);
        console.log(`Subscriber added for ${eventName}`);
    },
    unsubscribe: (eventName, callback) => {
        const eventCallbacks = PubSub.events[eventName];
        if(eventCallbacks) {
            eventCallbacks.filter((cb) => cb !== callback);
            console.log(`Subscriber removed for ${eventName}`);
        }
    },
    publish: (eventName, ...args) => {
        const eventCallbacks = PubSub.events[eventName];
        if(eventCallbacks) {
            eventCallbacks.forEach(callback => {
                console.log(...args);
                callback(...args);
            });
        }
    }
}