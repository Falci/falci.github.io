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

      <p>
        <small>Fun fact #1:</small>
        <br />
        This page has scored 100% on Google Lighthouse.
      </p>

      <p>
        <small>Fun fact #2:</small>
        <br />
        The PDF version of this page is the same as the print version.
      </p>

      <p>
        <small>Fun fact #3:</small>
        <br />
        This CV was generated with React but there's no Javascript after build
        😃.
      </p>
    </div>
  </Card>
);
