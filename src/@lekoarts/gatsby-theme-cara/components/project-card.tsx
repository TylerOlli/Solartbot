/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"; 
import Image from "./image"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  image: string
}

const ProjectCard = ({ title, children, bg, image }: ProjectCardProps) => {
  return(
  <Fragment>
  <div
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
    <div sx={{
        paddingTop: `30px`,
        paddingBottom: `50px`
      }}>
      <Image alt="" filename={image} />
    </div>
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
  </div>
  </Fragment>
  )
}

export default ProjectCard
