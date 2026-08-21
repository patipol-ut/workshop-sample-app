import { getGreeting } from '../lib/greeting';

export default function Page() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '3rem', maxWidth: 640 }}>
      <h1>Deployed with Git, GitHub & Jenkins</h1>
      <p>
        This is the Sample Application built during the Git / GitHub / Jenkins
        workshop. Every time a change is merged into <code>main</code>, Jenkins
        rebuilds this page and redeploys it to this container.
      </p>
      <h1>Hello, Jenkins!</h1>
    </main>
  );
}
