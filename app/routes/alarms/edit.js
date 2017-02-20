import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return {
            id: params.id,
            title: "Alarm 1",
            time: "17:10",
            on: false,
            repeated: false
        };
    },

    actions: {
        save(model) {
            console.debug(model);
            this.transitionTo('index');
        }
    }
});
