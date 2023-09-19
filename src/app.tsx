//components
// import { Container } from "./components/Container";
// import { Column as Col } from "./components/Column";
// import { Button } from "./button-cva";
import Greet from "./component_Typescript/Greet";
import PersonList from "./component_Typescript/PersonList";
import { Status } from "./component_Typescript/Status";
import Header from "./component_Typescript/Header";
import Oscar from "./component_Typescript/Oscar";
import Button from "./Button";
import Container from "./component_Typescript/Container";

const nameList = [
  {
    first: "Clark",
    last: "Kent"
  },
  {
    first: "Clouk",
    last: "Gtat"
  },
  {
    first: "Teth",
    last: "Malone"
  },
  {
    first: "Sober",
    last: "Bayam"
  }
]


function App() {
  return (
    <>
      {/* <Container title="Buttons on steroids with CVA">
        <Col title="Regular">
          <Button>Add product</Button>
          <Button size="slim">Add product (slim)</Button>
          <Button size="large">Add product (large)</Button>
          <Button disabled>Add product (disabled)</Button>
          <Button modifier="outline">Add product (outline)</Button>
          <Button modifier="plain">Add product (plain)</Button>
          <Button modifier="plain" size="large">
            Add product (large, plain)
          </Button>
          <Button loading>Add product</Button>
        </Col>
        <Col title="Monochrome">
          <Button variant="monochrome">Add product</Button>
          <Button variant="monochrome" size="slim">
            Add product (slim)
          </Button>
          <Button variant="monochrome" size="large">
            Add product (large)
          </Button>
          <Button variant="monochrome" disabled>
            Add product (disabled)
          </Button>
          <Button variant="monochrome" modifier="outline">
            Add product (outline)
          </Button>
          <Button variant="monochrome" modifier="plain">
            Add product (plain)
          </Button>
          <Button variant="monochrome" loading>
            Add product
          </Button>
        </Col>
        <Col title="Primary">
          <Button variant="primary">Add product</Button>
          <Button variant="primary" size="slim">
            Add product (slim)
          </Button>
          <Button variant="primary" size="large">
            Add product (large)
          </Button>
          <Button variant="primary" disabled>
            Add product (disabled)
          </Button>
          <Button variant="primary" modifier="outline">
            Add product (outline)
          </Button>
          <Button variant="primary" modifier="plain">
            Add product (plain)
          </Button>
          <Button variant="primary" loading>
            Add Product
          </Button>
        </Col>
        <Col title="Destructive">
          <Button variant="destructive">Add product</Button>
          <Button variant="destructive" size="slim">
            Add product (slim)
          </Button>
          <Button variant="destructive" size="large">
            Add product (large)
          </Button>
          <Button variant="destructive" disabled>
            Add product (disabled)
          </Button>
          <Button variant="destructive" modifier="outline">
            Add product (outline)
          </Button>
          <Button variant="destructive" modifier="plain">
            Add product (plain)
          </Button>
          <Button variant="destructive" loading>
            Add product
          </Button>
        </Col>

        <Col title="Other">
          <Button>Not full width as comparisson</Button>
          <Button fullWidth>Add product full width</Button>
        </Col>
      </Container> */}
      <Greet name={"Pelumi"} age={13} isLoggin={false} />
      <PersonList names={nameList} />
      <Status status="error"/>
     <Oscar> <Header>
          Place oooo
      </Header></Oscar>
      <Button  handleClick = {(event,id)=> console.log("eee",event,id)}/>
    <Container styles={{padding : "2rem", display : "flex"}}></Container>
    </>
  );
}

export default App;
