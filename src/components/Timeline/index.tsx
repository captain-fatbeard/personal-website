'use client';

import { motion } from 'framer-motion';

interface Event {
  title: string;
  text: string;
  present?: boolean;
  year: string;
}

interface Props {
  events: Array<Event>;
}

export function Timeline({ events }: Props) {
  return (
    <div className="relative my-8">
      {events.map((event, index) => (
        <div key={event.title} className="mb-4 flex gap-6">
          <div className="relative flex w-36 flex-shrink-0 flex-col pl-10 pt-8 text-sm font-semibold text-blue-400">
            <div
              className={`absolute left-3 top-8 z-10 h-5 w-5 rounded-full border-3 ${
                event.present
                  ? 'animate-pulse-slow border-blue-400 bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-400/60'
                  : 'border-blue-400 bg-slate-800'
              }`}
            >
              {event.present && (
                <div className="absolute inset-1 rounded-full border-2 border-slate-800" />
              )}
            </div>
            {index !== events.length - 1 && (
              <div className="absolute left-5 top-14 h-full w-0.5 bg-gradient-to-b from-blue-400 to-blue-400/30" />
            )}
            <div className="absolute left-8 top-10 right-0 border-b-2 border-blue-400/30" />
            <span>{event.year}</span>
          </div>

          <motion.div
            whileHover={{ x: 8 }}
            className="flex-1 rounded-xl border border-blue-500/20 bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-black/30"
          >
            <h2 className="mb-3 text-xl font-semibold text-blue-400">{event.title}</h2>
            <p className="m-0 leading-relaxed text-slate-300">{event.text}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
