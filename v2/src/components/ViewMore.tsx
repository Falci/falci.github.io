interface Props {
  href: string;
}

export default (props: Props) => (
  <a
    {...props}
    className="text-blue-600 hover:underline pt-4 w-full text-right"
  >
    View more on Linkedin
  </a>
);
