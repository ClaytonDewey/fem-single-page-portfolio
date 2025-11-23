import { Project } from '.';
import projects from '../projects';

const Projects = () => {
  return (
    <section className='projects__wrapper'>
      <header className='projects__header'>
        <h2>Projects</h2>
        <a href='#contact' className='btn btn-primary'>
          Contact Me
        </a>
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
