class HD {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJCETED = 'rejected';

    constructor(executor) {
        this.status = HD.PENDING;
        this.value = null;
        this.callbacks = []
        // this!!!!!!!!!!!!!
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(value) {
        if (this.status == HD.PENDING) {
            this.status = HD.FULFILLED
            this.value = value
            console.log("ok");
            this.callbacks.map(callback => {
                callback.onFulfilled(value)
            })
        }

    }
    reject(reason) {

        if (this.status == HD.PENDING) {
            this.status = HD.REJCETED
            this.value = reason
            this.callbacks.map(callback => {
                callback.onRejected(reason)
            })
            console.log("not ok");
        }
    }

    then(onFulfilled, onRejected) {
        if (typeof onFulfilled !== "function") {
            onFulfilled = () => { };
        }
        if (typeof onRejected !== "function") {
            onFulfilled = () => { };
        }

        if (this.status === HD.PENDING) {
            console.log('pending');
            this.callbacks.push({
                onFulfilled,
                onRejected
            });
        }
        if (this.status === HD.FULFILLED) {
            setTimeout(() => {
                try {
                    onFulfilled(this.value)
                } catch (error) {
                    onRejected(error)
                }
            })
        }


        if (this.status === HD.REJCETED) {
            setTimeout(() => {
                try {
                    onRejected(this.value)
                } catch (error) {
                    onRejected(error)
                }
            })

        }



    }

}

// new Promise((resolve, reject) => {

// })