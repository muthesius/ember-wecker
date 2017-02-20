import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return this.modelFor('application').filter((alarm) => {
            return alarm.id == parseInt(params.id);
        }).get('firstObject');
    },

    actions: {
        save(model) {
            console.debug(model);
            this.transitionTo('index');
        }
    }
});
