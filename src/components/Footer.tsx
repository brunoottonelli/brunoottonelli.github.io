
'use client';

import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Bruno Ottonelli
          </p>
          {/*<p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>*/}
        </div>
      </div>
    </footer>
  );
}
