import Ember from 'ember';

export default Ember.Controller.extend({
  todos: [],
  incompleteTodos: Ember.computed.filterBy('todos', 'isCompleted', false),

  completeTodos: Ember.computed.filterBy('todos', 'isCompleted', true),

  hasCompleted: Ember.computed.bool('completeTodos.length'),

  actions: {
    createTodo(content) {
      this.get('todos').addObject(this.store.createRecord('todo', {label: content}));
    },
    destroyTodo(todo) {
      this.get('todos').removeObject(todo);
      todo.deleteRecord();
    },
    clearCompleted() {
      this.get('todos').filterBy('isCompleted', true).forEach((todo) => {
        this.get('todos').removeObject(todo);
        todo.deleteRecord();
      });
    }
  }
});
