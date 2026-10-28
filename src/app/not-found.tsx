import { site } from '@/content';
export default function NotFound() {
  return (
    <div className="not-found container">
      <h1>{site.ui.notFoundTitle}</h1>
      <p>{site.ui.notFoundText}</p>
      <a className="button" href="/">
        {site.ui.back}
      </a>
    </div>
  );
}
