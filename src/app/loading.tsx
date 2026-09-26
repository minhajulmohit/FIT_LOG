const Loading = () => {
  return (
    <div className="min-h-screen bg-[#080b12] flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <span className="loading loading-spinner loading-lg text-[#ccff00]" />

        <p className="text-slate-400 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
