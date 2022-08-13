export default () => (
  <footer className="flex flex-col items-center print:items-end text-xs w-full mt-4 text-gray-700">
    <div className="print:hidden">
      Inspired by{' '}
      <a
        href="https://launchoice.com/"
        className="text-blue-700 hover:underline"
        target="_blank"
      >
        Launchoice
      </a>
      's{' '}
      <a
        href="https://preview.launchoice.com/personal_cv/index.html"
        className="text-blue-700 hover:underline"
        target="_blank"
      >
        Personal CV
      </a>{' '}
    </div>
    <div className="print:hidden">
      Trick: try to print this page and check how it looks.
    </div>
  </footer>
);
