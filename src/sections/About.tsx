import Card from '../components/Card';

export default () => (
  <Card title="About me">
    <div className="text-gray-600 flex flex-col space-y-4 text-justify print:text-left print:space-y-2">
      <p>
        I'm a passionate developer and have been working on web development in
        the last decade.
      </p>

      <p>
        I have a graduate (and post-graduate) background and have experience
        with most actual technologies such React, NodeJS, and Module Federation,
        working for one of the biggest company from Europe.
      </p>

      <p>
        With strong soft skills, I have achieved great results as a team leader,
        applying agile techniques such as scrum, code review, and TDD.
      </p>
    </div>
  </Card>
);
