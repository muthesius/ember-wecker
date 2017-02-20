import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            id: Date.now(),
            title: "Alarm Title",
            time: "7:00",
            on: true,
            repeated: false
        };
    },

    actions: {
        save(newAlarm) {
            this.modelFor('application').push(newAlarm);
            this.transitionTo('index');
        }
    }
});
