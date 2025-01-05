```javascript
import { getSession } from 'next-auth/react';

export default function MyComponent({ session }) {
  if (!session) {
    return <div>Not logged in</div>;
  }

  return <div>Logged in as {session.user.email}</div>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
```