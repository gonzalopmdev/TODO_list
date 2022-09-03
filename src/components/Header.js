import React from "react";
import { Header as Head, Icon } from "semantic-ui-react";
// importamos Header as Head para que no de conflicto
const Header = () => {
  return (
    <div className="header">
      <Head as="h1" icon textAlign="center" color="violet">
        <Icon inverted color="violet" name="list alternate outline" circular />
        <Head.Content>Listado de tareas</Head.Content>
      </Head>
    </div>
  );
};

export default Header;
