import Ember from 'ember';

export default Ember.Controller.extend({
    section: Ember.computed('currentPath', {
        get() {
            let sections = this.get('currentPath').split('.');
            // return sections.get('lastObject');
            // return sections.reduce((sectionName, currentSection) => {
            //    return sectionName + " / " + currentSection;
            // });
            return sections.join(" / ");
        }
    })
});