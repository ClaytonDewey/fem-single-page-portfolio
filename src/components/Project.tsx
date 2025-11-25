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
        <div className='project__buttons'>
          <a href={projectUrl} className='btn btn-primary'>
            View Project
          </a>
          <a href={projectCode} className='btn btn-primary'>
            View Code
          </a>
        </div>
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
      <div className='project__buttons'>
        <a href={projectUrl} className='btn btn-primary'>
          View Project
        </a>
        <a href={projectCode} className='btn btn-primary'>
          View Code
        </a>
      </div>
    </article>
  );
};
export default Project;
