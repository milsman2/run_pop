import { ReactElement } from 'react';
import Link from 'next/link';

export function Header(): ReactElement {
  return (
    <div className="navbar bg-maroon">
      <div className="navbar-start">
        <Link className="normal-case text-xl text-slate-100" href="/">
          Run Pop
        </Link>
        <a href="https://github.com/milsman2/run_pop" className="mx-2">
          Github
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn text-slate-100" href="https://eadotechnologies.com">
          via Eado Tech.
        </a>
      </div>
    </div>
  );
}
