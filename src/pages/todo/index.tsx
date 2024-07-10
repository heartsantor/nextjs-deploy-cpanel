import { GetStaticProps } from 'next';
import Link from 'next/link';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
};

const TodoListPage = ({ todos }: Props) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link href={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await res.json();

  return {
    props: {
      todos,
    },
  };
};

export default TodoListPage;