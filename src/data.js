import { nanoid } from "nanoid/non-secure";

const tasks = {
  'Pending': [
    { id: nanoid(),
      isChecked: false,
      description: 'Buy Groceries',
    },
    {
      id: nanoid(),
      isChecked: false,
      description: 'Read a book',
    },
    {
      id: nanoid(),
      isChecked: false,
      description: 'Finish Project Report',
    },
    {
      id: nanoid(),
      isChecked: false,
      description: 'Workout for 30 minutes',
    },
    {
      id: nanoid(),
      isChecked: false,
      description: 'Call the bank',
    },
    {
      id: nanoid(),
      isChecked: false,
      description: 'Plan weekend trip',
    },
    {
      id: nanoid(),
      isChecked: false,
      description: 'Clean the house',
    },
  ],
  'Completed': [
    {
      id: nanoid(),
      isChecked: true,
      description: 'Attend team meeting',
    },
    {
      id: nanoid(),
      isChecked: true,
      description: 'Learn React',
    },
    {
      id: nanoid(),
      isChecked: true,
      description: 'Submit Taxes',
    },
  ],
};

// { id: 1, description: 'Buy groceries', completed: false },
// { id: 2, description: 'Read a book', completed: false },
// { id: 3, description: 'Finish project report', completed: false },
// { id: 4, description: 'Workout for 30 minutes', completed: false },
// { id: 5, description: 'Call the bank', completed: false },
// { id: 6, description: 'Plan weekend trip', completed: false },
// { id: 7, description: 'Clean the house', completed: false },
// { id: 8, description: 'Attend team meeting', completed: true },
// { id: 9, description: 'Learn React', completed: true },
// { id: 10, description: 'Submit taxes', completed: true },
export default tasks;