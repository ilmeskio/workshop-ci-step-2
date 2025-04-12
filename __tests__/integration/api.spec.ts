import { addTodo, completeTodo, deleteTodo, editTodo, getAllTodos, uncompleteTodo } from '@/api';
import { expect, test} from '@jest/globals';

test('GET all TODOs', async () => {
  const actual = await getAllTodos();
  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: 1
    },
    {
      id: "2",
      text: "Test 2",
      done: false,
      priority: 2
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: 3
    }
  ]);
});

test('add a TODO', async () => {
  await addTodo({
    id: "4",
    text: "Test 4",
    priority: 1
  });
  await addTodo({
    id: "5",
    text: "Test 5",
  });
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: 1
    },
    {
      id: "2",
      text: "Test 2",
      done: false,
      priority: 2
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: 3
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: 1
    },
    {
      id: "5",
      text: "Test 5",
      done: false,
      priority: 2
    }
  ]);
});

test('edit a TODO', async () => {
  await editTodo({
    id: "2",
    text: "Test 2 edited",
      priority: 1
  });
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: 1
    },
    {
      id: "2",
      text: "Test 2 edited",
      done: false,
      priority: 1
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: 3
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: 1
    },
      {
      id: "5",
      text: "Test 5",
      done: false,
      priority: 2
    }
  ]);
});

test('delete a TODO', async () => {

  await deleteTodo('2');
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: 1
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: 3
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: 1
    },
      {
      id: "5",
      text: "Test 5",
      done: false,
      priority: 2
    }
  ]);
});

test('complete a TODO', async () => {
  await completeTodo("3");
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: 1
    },
    {
      id: "3",
      text: "Test 3",
      done: true,
      priority: 3
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: 1
    },
      {
      id: "5",
      text: "Test 5",
      done: false,
      priority: 2
    }
  ]);
});

test('uncomplete a TODO', async () => {
  await uncompleteTodo("3");
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: 1
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: 3
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: 1
    },
      {
      id: "5",
      text: "Test 5",
      done: false,
      priority: 2
    }
  ]);
});