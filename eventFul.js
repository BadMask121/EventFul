const EventFul = {
    //custom event dispatcher
    EventDispatcher: () => {
        // Create custom wrappers with nicer names

        this.off = window.removeEventListener.bind(window);
        this.on = window.addEventListener.bind(window);
        this.trigger = function(eventName, data) {
            if (!eventName) return;
            var e = new CustomEvent(eventName, { "detail": data });
            window.dispatchEvent(e);
        }
    },


    //registering listeners
    registerListener: (event, callback) => {
        EventFul.main.evt.on(event, callback);
        return EventFul.main.evt;
    },


    //trigger an action
    triggerEvent: (event, data = null) => {
        EventFul.main.evt.trigger(event, data);
        return EventFul.main.evt;
    },


    //trigger to our events
    trigger: function(event, data) {
        switch (event) {
            case 'authorization':
                registerListener(event, auth) //demo use
                break;
            case 'wsocketMessage':
                registerListener(event, useWebSocketMessage(data)) //demo use
                break;
            default:
                console.log({ error: "Invalid Event" });
                break;
        }

        triggerEvent(event, data);
    },


    main: () => {
        let evt = new EventDispatcher

        return {
            evt
        }
    }

}