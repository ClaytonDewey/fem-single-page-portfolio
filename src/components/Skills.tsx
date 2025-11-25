import skills from '../skills';

const Skills = () => {
  return (
    <section className='skills' aria-labelledby='skills-heading'>
      <div className='skills__wrapper'>
        <h2 className='sr-only skills-heading'>Skills</h2>
        {skills.map(({ id, name, years }) => (
          <article key={id} className='skill'>
            <h3 className='skill-name'>{name}</h3>
            <p className='skill-years'>
              {years} {years === 1 ? 'Year Experience' : 'Years Experience'}
            </p>
          </article>
        ))}
      </div>
      <hr />
    </section>
  );
};
export default Skills;
