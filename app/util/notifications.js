const NotificationAPI = {

    notify: (title, message) => {
        if (!("Notification" in window)) {
            return;
        } else if (Notification.permission === 'granted') {
            var notification = genNotification(title, message);
        } else if (Notification.permission === 'denied' ||
            Notification.permission === 'default') {

            Notification.requestPermission((permission) => {
                if (permission === 'granted') {
                    var notification = genNotification(title, message);
                }
            });
        }
    },

};

function genNotification(title, message) {
    let sound = new Audio('/sounds/notification.ogg');

    sound.load();
    sound.play();

    return new Notification(title, {
        body: message,
        sound: sound,
    });
}

export default NotificationAPI;