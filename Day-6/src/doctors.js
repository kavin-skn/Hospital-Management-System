import React from 'react';

const Doctors = () => {
  // Doctor details
  const doctors = [
    {
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, tortor nec fermentum tristique, neque lorem consectetur lectus.'
    },
    {
      name: 'Dr. Jane Smith',
      specialty: 'Pediatrics',
      bio: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Mauris a aliquet orci, id suscipit sapien.'
    },
    {
      name: 'Dr. Michael Johnson',
      specialty: 'Dermatology',
      bio: 'Aenean volutpat ante in eros faucibus commodo. Ut malesuada orci non neque euismod, id dignissim ligula vulputate. Curabitur vehicula congue sem id luctus.'
    },
    {
      name: 'Dr. Emily Davis',
      specialty: 'Internal Medicine',
      bio: 'In hac habitasse platea dictumst. Mauris et malesuada nulla. Integer suscipit sagittis felis, sed bibendum tellus fringilla in. Nulla consectetur turpis in sem tristique.'
    },
    {
      name: 'Dr. Sophia Anderson',
      specialty: 'Ophthalmology',
      bio: 'Sed finibus consequat neque eget vestibulum. Vestibulum a purus id velit vestibulum bibendum vel in turpis. Nulla at tincidunt ex. Aliquam auctor diam nec ipsum rhoncus.'
    },
    {
      name: 'Dr. David Wilson',
      specialty: 'Orthopedic Surgery',
      bio: 'Vestibulum id imperdiet nulla, vitae luctus dui. Fusce ac ante ante. Nunc non ex dui. Nam laoreet tortor ac fringilla dignissim.'
    },
    {
      name: 'Dr. Olivia Thompson',
      specialty: 'Gynecology',
      bio: 'Mauris eu fringilla orci, et aliquet est. Quisque sit amet ligula facilisis, ultricies felis vitae, commodo orci. Duis et enim id mi consequat auctor.'
    },
    {
      name: 'Dr. William Roberts',
      specialty: 'Neurology',
      bio: 'Fusce eu rhoncus ante. Ut ullamcorper turpis eget sem consectetur consequat. Nulla eleifend interdum enim, id pharetra lectus aliquet eu.'
    },
    {
      name: 'Dr. Elizabeth Brown',
      specialty: 'Endocrinology',
      bio: 'Integer varius neque vel tincidunt eleifend. Mauris vel magna sed ligula lobortis finibus. Aliquam feugiat maximus nisi sed volutpat.'
    }
  ];

  return (
    <div>
      <h2>Our Doctors</h2>
      <div className="doctor-list">
        {doctors.map((doctor, index) => (
          <div className="doctor" key={index}>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <p>{doctor.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
