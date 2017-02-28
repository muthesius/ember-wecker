import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            title: "Alarm Title",
            time: "7:00",
            on: true,
            repeat: false
        };
    },

    actions: {
        save(newAlarmProperties) {
            let newAlarm = this.store.createRecord('alarm', newAlarmProperties);
            newAlarm.save().then((savedAlarm) => {
                console.log("Alarm wurde gespeichert: ", savedAlarm.get('title'));
                this.transitionTo('index');
            });
        }
    }
});
