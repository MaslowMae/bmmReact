import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardProject.jsx';

export default function ProfileDetailed({ project }) {
  return (
    <div className="card">
      <CardHeader project={project} />
      <CardBody company={user.company} address={user.address} />
      <CardLink />
    </div>
  );
}