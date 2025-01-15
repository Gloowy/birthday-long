import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-200 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <span>Contact me:</span>
          <a
            href="mailto:cherrycabm@gmail.com"
            className="inline-flex items-center gap-1.5 text-purple-600 hover:text-purple-700 transition-colors"
            aria-label="Send email to cherrycabm@gmail.com"
            tabIndex={0}
          >
            <Mail className="w-4 h-4" />
            cherrycabm@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer }; 