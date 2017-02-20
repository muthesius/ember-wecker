import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { id: 1, title: "Alarm 1", time: "17:10", on: false },
            { id: 2, title: "Unter der Woche", time: "7:00", on: true, repeated: true}
        ];
    }
});
