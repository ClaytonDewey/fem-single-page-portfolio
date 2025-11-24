import skills from '../skills';

const Skills = () => {
  return (
    <section className='skills'>
      <div className='skills__wrapper'>
        {skills.map(({ id, name, years }) => (
          <div key={id} className='skill'>
            <h2 className='skill-name'>{name}</h2>
            <p className='skill-years'>
              {years} {years === 1 ? 'Year Experience' : 'Years Experience'}
            </p>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};
export default Skills;
