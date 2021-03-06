import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Team from "../components/team"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={6}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2.5} />
      <About offset={3} factor={2} />
      <Team offset={4} factor={1.25} />
      <Contact offset={5} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
