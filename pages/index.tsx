import { Fragment } from "react";
import { initFirebase } from "../firebase/clientApp";

function Home(): JSX.Element {
  const app = initFirebase();
  console.log(app);

  return (
    <Fragment>
      <h1>Welcome</h1>
      <main></main>
    </Fragment>
  );
}

export default Home;
