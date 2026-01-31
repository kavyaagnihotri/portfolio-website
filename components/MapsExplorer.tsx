
import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Loader2, Star, ExternalLink } from 'lucide-react';
import { getNearbyLuxuryHubs } from '../lib/gemini';

const MapsExplorer: React.FC = () => {
  const [landmarks, setLandmarks] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLandmarks = () => {
    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const result = await getNearbyLuxuryHubs(pos.coords.latitude, pos.coords.longitude);
          setLandmarks(result);
        } catch (err) {
          setError("Failed to fetch prestige landmarks.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location access denied. Please enable GPS to see Aura Hubs.");
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchLandmarks();
  }, []);

  return (
    <div className="bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative shadow-[0_50px_100px_-30px_rgba(15,23,42,0.6)]">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">Location Intelligence</div>
            <h2 className="text-4xl font-serif font-bold mb-4">Discover Aura Hubs Near You</h2>
            <p className="text-slate-400 text-lg">Our elite team operates near your city's most prestigious landmarks, ensuring rapid deployment and world-class standards.</p>
          </div>
          <button 
            onClick={fetchLandmarks}
            disabled={loading}
            className="flex items-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-500 hover:text-white transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Navigation size={20} />}
            <span>Refresh Surroundings</span>
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="animate-spin text-indigo-500" size={48} />
            <p className="text-slate-500 font-medium animate-pulse">Syncing with Google Maps Grounding...</p>
          </div>
        ) : error ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
            <p className="text-slate-400 mb-6">{error}</p>
            <button onClick={fetchLandmarks} className="text-indigo-400 font-bold border-b border-indigo-400 pb-1">Retry Location Sync</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <Star className="text-yellow-500" size={20} fill="currentColor" />
                <span>AI Regional Insight</span>
              </h3>
              <p className="text-slate-300 leading-relaxed italic whitespace-pre-wrap mb-8">
                {landmarks?.text || "Find luxury hotspots near your current coordinates to see where AuraPrime is leading local services."}
              </p>
              <div className="flex flex-wrap gap-4">
                {landmarks?.sources?.map((chunk: any, i: number) => (
                  <a 
                    key={i} 
                    href={chunk.maps?.uri} 
                    target="_blank" 
                    rel="noopener"
                    className="inline-flex items-center space-x-2 bg-white/10 hover:bg-indigo-600 transition-all px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    <span>{chunk.maps?.title || "View Source"}</span>
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 border border-white/10 group hover:border-indigo-500/50 transition-all">
                <MapPin className="text-indigo-500 mb-4 group-hover:scale-125 transition-transform" size={40} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Service Coverage</span>
                <span className="text-2xl font-bold mt-2">100%</span>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 border border-white/10 group hover:border-indigo-500/50 transition-all">
                <Navigation className="text-pink-500 mb-4 group-hover:scale-125 transition-transform" size={40} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Arrival Speed</span>
                <span className="text-2xl font-bold mt-2">&lt; 30m</span>
              </div>
              <div className="col-span-2 p-8 rounded-3xl bg-indigo-600 flex items-center justify-between">
                <div>
                  <p className="text-white/80 font-bold mb-1">Your location is within our Elite Zone.</p>
                  <p className="text-white/60 text-xs">Priority dispatching is available for your coordinates.</p>
                </div>
                <div className="h-12 w-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                  <div className="h-3 w-3 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
    </div>
  );
};

export default MapsExplorer;
