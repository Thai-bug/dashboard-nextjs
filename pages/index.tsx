import MenuItem from '../components/MenuItem';
import Sidebar from '../components/Sidebar';

export default function Index() {
  return (
    <h1 className="h-screen">
      <Sidebar >
        <MenuItem>
        menu item
        </MenuItem>
      </Sidebar>
    </h1>
  );
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
