```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';

export default async function MyComponent() {
  const session = await unstable_getServerSession(authOptions);

  if (!session) {
    return <div>Not logged in</div>;
  }

  return <div>Logged in as {session.user.email}</div>;
}
```