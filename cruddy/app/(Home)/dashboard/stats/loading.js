export default function Loading(){
    return(
        <div className="fixed bottom-8 right-8 flex items-center gap-3 bg-[#13131f] border border-[#2a2a3e] rounded-full px-4 py-2.5">
        <div className="w-4 h-4 rounded-full border-2 border-[#2a2a3e] border-t-indigo-500 animate-spin" />
        <span className="text-sm text-[#6b6b8a]">Loading...</span>
      </div>
    )
}