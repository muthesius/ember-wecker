import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return this.store.findRecord('alarm', params.id);
    },

    // Generic Rollback for dirty models
    deactivate() {
        let model = this.get('currentModel');
        if (model.get('hasDirtyAttributes')) {
            model.rollbackAttributes();
        }
    },

    actions: {
        save() {
            let model = this.get('currentModel');
            model.save().then(() => this.transitionTo('index'));
        }
    }
});
