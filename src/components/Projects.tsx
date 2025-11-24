import { Project, ScrollButton } from '.';
import projects from '../projects';

const Projects = () => {
  return (
    <section className='projects__wrapper'>
      <header className='projects__header'>
        <h2>Projects</h2>
        <ScrollButton text='Contact Me' />
      </header>
      <div className='projects__body'>
        {projects.map(
          ({ id, name, tools, thumbnail, projectUrl, projectCode }) => (
            <Project
              key={id}
              name={name}
              tools={tools}
              thumbnail={thumbnail}
              projectUrl={projectUrl}
              projectCode={projectCode}
            />
          )
        )}
      </div>
    </section>
  );
};
export default Projects;
