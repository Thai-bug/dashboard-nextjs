import { useState } from "react";
import Navbar from "../components/navbar";
import NavIcon from "../components/navbar/NavIcon";
import NavItem from "../components/navbar/NavItem";

import Layout from '../components/layout/Index'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
      <Layout >
        <div className="container p-2">
        hello
        </div>
      </Layout>
  )
}
