import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='blogs'>
      <h3>Difference between authorization and authentication?</h3>
      <p><strong>Ans:</strong> The process of verifying someones identity is the authentication. It involves checking the users id and password with the database and identifying the user. On the other hand, authorization involves verifying the specific applications, files and data the user has access to.</p>
      <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
      <p><strong>Ans:</strong> Firebase is a very fast authentication service provided by Google. It also includes database and hosting. It is a professional product offered by Google. Therefore, it is very reliable, up to date and well maintained. It also makes the work of developers easy because otherwise the developers have to develop authentication system by themselves and that is a lot of work. Most importantly that would not be as safe as firebase. Because it is maintained by many engineers working full time. The other options would contain using PHP, MYSQL authentication library.</p>

      <h3>What other services does firebase provide other than authentication?</h3>
      <p><strong>Ans: </strong>Firebase also provides hosting services, monitoring services and customer engagement services. Firebase build products include serverless, secure apps at global scale. Store app data in the cloud, sync data across online and retrieve it with expressive queries. For the monitoring part it includes google analytics built in. And for the engagement part it contains understanding customers to better support and retain them. Run experiments to test ideas and uncover new insights.</p>
    </div>
  );
};

export default Blogs;