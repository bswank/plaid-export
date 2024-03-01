/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error: any = useRouteError();

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">{error.code}</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Oops!</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {error.message}
        </p>
        <div>
          <code>
            <pre className="text-left whitespace-pre-wrap">{error.stack}</pre>
          </code>
        </div>
      </div>
    </main>
  );
}
