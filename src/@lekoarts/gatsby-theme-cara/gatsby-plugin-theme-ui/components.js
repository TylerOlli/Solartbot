import * as React from "react"
import ProjectCard from "../components/project-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children, data, image, ...props }) => (
    <ProjectCard {...props} link={link} title={title} bg={bg} data={data} image={image}>
      {children}
    </ProjectCard>
  ),
}

export default components
