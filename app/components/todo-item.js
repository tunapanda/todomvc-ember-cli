import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    toggleComplete() {
      this.toggleProperty('isCompleted');
    }
  }
});
