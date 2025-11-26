type ProjectProps = {
  name: string;
  thumbnail: string;
  tools: string[];
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
  const projectNameId = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <article className='project'>
      <div className='project__image'>
        <img src={`./images/${thumbnail}`} alt={name} />
        <div className='project__buttons-overlay'>
          <a href={projectUrl} className='btn btn-primary'>
            View Project
            <span className='sr-only'>{name}</span>
          </a>
          <a href={projectCode} className='btn btn-primary'>
            View Code
            <span className='sr-only'>for {name}</span>
          </a>
        </div>
      </div>
      {/* Test comment */}
      <div className='project__info'>
        <h3>{name}</h3>
        <h4 id={`${projectNameId}-tools-used`} className='sr-only'>
          Tools used in the project
        </h4>
        <ul
          className='project__tools'
          aria-labelledby={`${projectNameId}-tools-used`}>
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
