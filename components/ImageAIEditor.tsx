
import React, { useState } from 'react';
import { Wand2, Upload, Loader2, Download, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { editImageWithAI } from '../lib/gemini';

const ImageAIEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [mimeType, setMimeType] = useState('image/jpeg');

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setEditedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt) return;
    setLoading(true);
    try {
      const base64 = image.split(',')[1];
      const result = await editImageWithAI(base64, prompt, mimeType);
      if (result) setEditedImage(result);
    } catch (err) {
      alert("AI processing failed. Please try a different prompt.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
            <Wand2 size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">Aura Studio AI</h3>
            <p className="text-sm text-slate-500">Professional image enhancements via Gemini Flash</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {!image ? (
              <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-slate-200 rounded-[2rem] hover:bg-slate-50 transition-colors cursor-pointer group">
                <Upload className="w-10 h-10 text-slate-400 mb-4 group-hover:text-indigo-600 group-hover:scale-110 transition-all" />
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Upload Service Asset</span>
                <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
              </label>
            ) : (
              <div className="relative rounded-[2rem] overflow-hidden group">
                <img src={image} className="w-full h-auto" alt="Original" />
                <button 
                  onClick={() => setImage(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur shadow-sm rounded-full text-slate-900 hover:text-red-500 transition-colors"
                >
                  <RefreshCw size={16} />
                </button>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/40 px-4 py-2 rounded-full">Source Image</span>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">AI Edit Command</label>
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. 'Add a professional corporate filter' or 'Enhance lighting'"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all pr-12 text-sm"
                />
                <Wand2 className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
              <button
                onClick={handleEdit}
                disabled={!image || !prompt || loading}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Wand2 size={20} />}
                <span>{loading ? 'Processing Aesthetic...' : 'Execute AI Edit'}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-slate-50 rounded-[2rem] min-h-[300px] border border-slate-100 p-4">
            {editedImage ? (
              <div className="relative w-full animate-in zoom-in duration-500">
                <img src={editedImage} className="w-full rounded-[1.5rem] shadow-2xl" alt="AI Edited" />
                <a 
                  href={editedImage} 
                  download="aura-ai-edit.png"
                  className="absolute bottom-4 right-4 bg-white text-slate-900 p-3 rounded-xl shadow-lg hover:bg-indigo-600 hover:text-white transition-all flex items-center space-x-2 text-xs font-bold"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
              </div>
            ) : (
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <ImageIcon className="text-slate-200" size={32} />
                </div>
                <p className="text-slate-400 text-sm font-medium">Your AI-enhanced preview will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAIEditor;
