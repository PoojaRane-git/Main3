import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';

export default function NotFound() {
  return (
    <Section className="grid min-h-[70vh] place-items-center py-32">
      <div className="text-center">
        <p className="font-display text-7xl text-brand-600 sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
          This page took the day off.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-500">
          The page you’re looking for doesn’t exist — but the right talent always does. Let’s get you
          back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="primary" size="lg">
            Back home <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </Section>
  );
}
