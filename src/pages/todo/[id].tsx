import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
};

const TodoPage = ({ todo }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todo Item</h1>
      <p>
        <strong>ID:</strong> {todo.id}
      </p>
      <p>
        <strong>Title:</strong> {todo.title}
      </p>
      <p>
        <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
      </p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params?.id}`
  );
  const todo: Todo = await res.json();

  return {
    props: {
      todo,
    },
  };
};

export default TodoPage;
