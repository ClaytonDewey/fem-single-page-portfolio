type ProjectProps = {
  name: string;
  thumbnail: string;
  tools: string[];
  projectUrl: string;
  projectCode: string;
};

type ProjectButtonsProps = {
  projectUrl: string;
  projectCode: string;
};

const ProjectButtons = ({ projectUrl, projectCode }: ProjectButtonsProps) => {
  return (
    <div className='project__buttons'>
      <a href={projectUrl} className='btn btn-primary'>
        View Project
      </a>
      <a href={projectCode} className='btn btn-primary'>
        View Code
      </a>
    </div>
  );
};

const Project = ({
  name,
  thumbnail,
  tools,
  projectUrl,
  projectCode,
}: ProjectProps) => {
  return (
    <article className='project'>
      <div className='project__image'>
        <img src={`./images/${thumbnail}`} alt={name} />
        <ProjectButtons projectUrl={projectUrl} projectCode={projectCode} />
      </div>
      <div className='project__info'>
        <h3>{name}</h3>
        <ul className='project__tools'>
          {tools.map((tool, index) => (
            <li className='tool' key={`${index}-${tool}`}>
              {tool}
            </li>
          ))}
        </ul>
      </div>
      <ProjectButtons projectUrl={projectUrl} projectCode={projectCode} />
    </article>
  );
};
export default Project;
