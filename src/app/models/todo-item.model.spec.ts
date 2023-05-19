import { TodoItem } from './todo-item.model';

describe('TodoItem', () => {
   it('should create an instance', () => {
     expect(new TodoItem(0, "Schedule appointment with Dcotor", "05/12/2021", false)).toBeTruthy();
   });
});
