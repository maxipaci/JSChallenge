class PostObserver {
    constructor() {
        this.interfaces = [];
    }

    suscribeToPostEvent(context) {
        this.interfaces.push(context);
    }

    postEvent() {
        this.interfaces.forEach(element => {
            if (element) {
                element.onEvent();
            }
        });
    }

    desuscribeToPostEvent(context){
        this.interfaces.forEach(function(element, index, arr) {
            if(element === context){
                arr.splice(index, 1)
            }
        })
    };

    static getInstance() {
        if (!PostObserver.instace) {
            PostObserver.instace = new PostObserver();
        }
        return PostObserver.instace;
    }
}

module.exports = PostObserver;