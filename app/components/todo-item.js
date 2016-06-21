import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isCompleted:completed', 'isEditing:editing'],
  actions: {
    toggleComplete() {
      this.toggleProperty('isCompleted');
    },
    editTodo() {
      this.set('isEditing', true);
    },
    editingKeyDown(e) {
      this.set('label', e.target.value);
      if (e.keyCode === 13) {
        this.set('isEditing', false);
      }
    },
    doneEditing() {
     this.set('isEditing', false); 
    }
  }
});
