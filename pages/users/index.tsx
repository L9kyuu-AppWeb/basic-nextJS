import Layout from "../../component/Layout";
import { useRouter } from "next/router";
import Styles from "../../styles/Users.module.css";

interface usersprops {
  dataUsers: Array<any>;
}

export default function Users(props: usersprops) {
  const router = useRouter();
  const { dataUsers } = props;
  console.log(dataUsers);

  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={Styles.card}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
