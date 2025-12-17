import { Heart } from 'lucide-react';

export default function App() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex flex-1 items-center justify-center">
                <h1 className="text-center text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
                    Chicken Babana
                </h1>
            </main>
            <footer className="border-t border-border py-6">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                    © 2025. Built with <Heart className="inline h-4 w-4 fill-red-500 text-red-500" />{' '}
                    using{' '}
                    <a
                        href="https://caffeine.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                    >
                        caffeine.ai
                    </a>
                    .
                </div>
            </footer>
        </div>
    );
}
