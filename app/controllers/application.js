import Ember from 'ember';

export default Ember.Controller.extend({
  todos: [],
  incompleteTodos: Ember.computed.filterBy('todos', 'isCompleted', false),
  
  actions: {
    createTodo(content) {
      this.get('todos').addObject(this.store.createRecord('todo', {label: content}));
    },
    destroyTodo(todo) {
      this.get('todos').removeObject(todo);
      todo.deleteRecord();
    }
  }
});
