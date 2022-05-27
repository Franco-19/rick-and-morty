import Header from "./components/Header";
import Item from "./components/Item";
import Layout from "./components/Layout";
import ListItem from "./components/ListItem";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <ListItem>
          <Item />
        </ListItem>
        <Pagination/>
      </Layout>
    </>
  );
}

export default App;
