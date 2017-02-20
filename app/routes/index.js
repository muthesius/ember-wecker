import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { title: "Alarm 1", time: "17:10", on: false },
            { title: "Unter der Woche", time: "7:00", on: true, repeated: true}
        ];
    }
});
