import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
<div class="min-h-screen bg-slate-50 font-dm text-slate-900">
  <nav class="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
    <span class="font-syne font-extrabold text-xl tracking-tighter">
      Crud<span class="text-brand">dy</span>
    </span>
    <div class="flex items-center gap-6">
      <Link href={"/dashboard"} class="text-sm text-slate-500 cursor-pointer">Dashboard</Link>
      <Link href={"/users"} class="text-sm text-slate-500 cursor-pointer">Users</Link>
      <Link href={"/users"} class="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
        Go to Users ↗
      </Link>
    </div>
  </nav>

  <div class="max-w-2xl mx-auto pt-20 pb-12 px-8 text-center">
    <div class="inline-flex items-center gap-2 bg-brand-light text-brand-dark rounded-full px-3.5 py-1 text-xs font-medium mb-6">
      <span class="w-1.5 h-1.5 bg-brand rounded-full"></span>
      User management, simplified
    </div>
    <h1 class="font-syne text-5xl md:text-[52px] font-extrabold leading-none tracking-tight mb-5">
      Manage your <br />
      <span class="text-brand italic not-italic">users</span> with ease
    </h1>
    <p class="text-slate-500 leading-relaxed font-light mb-8 text-base">
      Cruddy gives you a clean, fast interface to create, view, edit, and delete users — all connected to your MongoDB database in real time.
    </p>
    <div class="flex flex-wrap justify-center gap-3">
      <button class="bg-slate-900 text-white px-7 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
        <i class="ti ti-users"></i> View all users
      </button>
      <button class="bg-white text-slate-900 border border-slate-200 px-7 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors">
        <i class="ti ti-plus"></i> Add a user
      </button>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-3 max-w-[640px] mx-auto px-8 mb-12">
    <div class="bg-white border border-slate-200 p-5 rounded-2xl text-center">
      <span class="block font-syne text-3xl font-bold tracking-tight">128</span>
      <span class="text-[12px] text-slate-500 mt-0.5">Total users</span>
    </div>
    <div class="bg-white border border-slate-200 p-5 rounded-2xl text-center">
      <span class="block font-syne text-3xl font-bold tracking-tight">94</span>
      <span class="text-[12px] text-slate-500 mt-0.5">Married</span>
    </div>
    <div class="bg-white border border-slate-200 p-5 rounded-2xl text-center">
      <span class="block font-syne text-3xl font-bold tracking-tight">12</span>
      <span class="text-[12px] text-slate-500 mt-0.5">Added this week</span>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[800px] mx-auto px-8 mb-16">
    <div class="bg-white border border-slate-200 p-6 rounded-2xl">
      <div class="w-9 h-9 bg-brand-light rounded-lg flex items-center justify-center mb-4 text-brand-dark">
        <i class="ti ti-list-search text-lg"></i>
      </div>
      <h3 class="font-syne font-bold text-[15px] mb-1.5 tracking-tight">Browse users</h3>
      <p class="text-[13px] text-slate-500 leading-relaxed">View all users in a clean list with quick access to profiles.</p>
    </div>
    <div class="bg-white border border-slate-200 p-6 rounded-2xl">
      <div class="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-700">
        <i class="ti ti-edit text-lg"></i>
      </div>
      <h3 class="font-syne font-bold text-[15px] mb-1.5 tracking-tight">Edit profiles</h3>
      <p class="text-[13px] text-slate-500 leading-relaxed">Update details with instant MongoDB sync.</p>
    </div>
    <div class="bg-white border border-slate-200 p-6 rounded-2xl">
      <div class="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-orange-700">
        <i class="ti ti-trash text-lg"></i>
      </div>
      <h3 class="font-syne font-bold text-[15px] mb-1.5 tracking-tight">Delete users</h3>
      <p class="text-[13px] text-slate-500 leading-relaxed">Remove users safely with confirmation prompts.</p>
    </div>
  </div>

  <div class="max-w-[640px] mx-auto px-8">
    <p class="text-[11px] uppercase tracking-[2px] text-slate-500 font-medium mb-4">Recent users</p>
    <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div class="flex items-center gap-3 px-5 py-4 border-b border-slate-100 last:border-0">
        <div class="w-9 h-9 bg-brand-light text-brand-dark rounded-full flex items-center justify-center font-syne font-medium text-sm">JL</div>
        <div class="flex-1">
          <p class="text-sm font-medium">Jacques Leroi</p>
          <p class="text-xs text-slate-500">Engineer · 28 yrs</p>
        </div>
        <span class="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-brand-light text-brand-dark">Married</span>
        <div class="flex gap-1.5">
          <button class="w-7 h-7 border border-slate-200 rounded-md flex items-center justify-center text-slate-400 hover:bg-slate-50"><i class="ti ti-edit"></i></button>
          <button class="w-7 h-7 border border-slate-200 rounded-md flex items-center justify-center text-slate-400 hover:bg-slate-50"><i class="ti ti-trash"></i></button>
        </div>
      </div>
      </div>
  </div>

  <footer class="text-center py-12 mt-16 border-t border-slate-200 text-sm text-slate-500">
    Built with ❤️ by <strong class="font-syne font-bold text-slate-900">Jacques Leroi</strong> · Powered by Next.js & MongoDB
  </footer>
</div>
    </>
  );
}
