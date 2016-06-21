import Ember from 'ember';

export default Ember.Controller.extend({
  todos: [],
  actions: {
    createTodo(content) {
      this.get('todos').addObject(this.store.createRecord('todo', {label: content}));
    }
  }
});
