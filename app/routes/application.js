import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        deleteAlarm(alarm) {
            alarm.destroyRecord();
            this.transitionTo('index');
        }
    }
});