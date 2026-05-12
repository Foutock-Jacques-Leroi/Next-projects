import Link from "next/link";

export const metadata = {
  title: "Dashboard – Cruddy",
  description: "Overview of your user management system.",
};


export default function Dashboard() {
  return (
    <>
<div class="bg-slate-50 text-slate-900">

  <div class="flex min-h-screen">
    <aside class="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col sticky top-0 h-screen">
      <div class="p-6">
        <span class="font-syne font-extrabold text-2xl tracking-tighter">
          Crud<span class="text-emerald-500">dy</span>
        </span>
      </div>
      
      <nav class="flex-1 px-4 space-y-1">
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-medium transition-colors">
          <i class="ti ti-smart-home text-lg"></i>
          <span class="text-sm">Dashboard</span>
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <i class="ti ti-users text-lg"></i>
          <Link href={"/"} class="text-sm">User Directory</Link>
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <i class="ti ti-chart-pie text-lg"></i>
          <span class="text-sm">Analytics</span>
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <i class="ti ti-settings text-lg"></i>
          <span class="text-sm">Settings</span>
        </a>
      </nav>

      <div class="p-4 border-t border-slate-100">
        <div class="flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-100">
          <div class="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">JL</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold truncate">Jacques Leroi</p>
            <p class="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Admin</p>
          </div>
        </div>
      </div>
    </aside>

    <main class="flex-1 flex flex-col min-w-0">
      <header class="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20">
        <div class="flex items-center gap-4">
          <button class="md:hidden text-slate-600"><i class="ti ti-menu-2 text-2xl"></i></button>
          <h1 class="font-bold text-lg tracking-tight">Overview</h1>
        </div>
        <div class="flex items-center gap-3">
          <button class="p-2 text-slate-400 hover:text-slate-600 transition-colors"><i class="ti ti-bell text-xl"></i></button>
          <Link href="/users/addUser" class="bg-slate-900 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm flex items-center gap-2">
            <i class="ti ti-plus text-base"></i> Add New User
          </Link>
        </div>
      </header>

      <div class="p-8 max-w-7xl mx-auto w-full">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex justify-between items-start mb-4">
              <div class="p-2 bg-emerald-50 rounded-lg text-emerald-600"><i class="ti ti-users text-xl"></i></div>
              <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+12.5%</span>
            </div>
            <p class="text-sm text-slate-500 font-medium">Total Users</p>
            <h3 class="text-2xl font-bold tracking-tight mt-1">1,284</h3>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex justify-between items-start mb-4">
              <div class="p-2 bg-blue-50 rounded-lg text-blue-600"><i class="ti ti-user-check text-xl"></i></div>
              <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">+3%</span>
            </div>
            <p class="text-sm text-slate-500 font-medium">Active Users</p>
            <h3 class="text-2xl font-bold tracking-tight mt-1">742</h3>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex justify-between items-start mb-4">
              <div class="p-2 bg-orange-50 rounded-lg text-orange-600"><i class="ti ti-clock text-xl"></i></div>
              <span class="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">Stable</span>
            </div>
            <p class="text-sm text-slate-500 font-medium">Pending Approvals</p>
            <h3 class="text-2xl font-bold tracking-tight mt-1">18</h3>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex justify-between items-start mb-4">
              <div class="p-2 bg-purple-50 rounded-lg text-purple-600"><i class="ti ti-database text-xl"></i></div>
              <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Healthy</span>
            </div>
            <p class="text-sm text-slate-500 font-medium">DB Status</p>
            <h3 class="text-2xl font-bold tracking-tight mt-1">99.9%</h3>
          </div>
        </div>

        <div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div class="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 class="font-bold text-slate-800 text-lg font-syne">Recent Users</h2>
            <div class="flex gap-2">
              <div class="relative">
                <i class="ti ti-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input type="text" placeholder="Search..." class="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all w-full sm:w-64"/>
              </div>
            </div>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-50/50 text-slate-500 text-[11px] uppercase tracking-widest font-bold">
                  <th class="px-6 py-4">User Details</th>
                  <th class="px-6 py-4">Role & Occupation</th>
                  <th class="px-6 py-4">Status</th>
                  <th class="px-6 py-4">Join Date</th>
                  <th class="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50/50 transition-colors group">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs font-syne">JL</div>
                      <div>
                        <p class="text-sm font-bold text-slate-700">Jacques Leroi</p>
                        <p class="text-xs text-slate-400">jacques@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-sm text-slate-600 font-medium">Lead Engineer</p>
                    <p class="text-xs text-slate-400 italic">28 yrs old</p>
                  </td>
                  <td class="px-6 py-4">
                    <span class="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">Married</span>
                  </td>
                  <td class="px-6 py-4 text-sm text-slate-500">Oct 24, 2025</td>
                  <td class="px-6 py-4 text-right">
                    <div class="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button title="Edit" class="p-2 hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600 transition-colors"><i class="ti ti-edit text-lg"></i></button>
                      <button title="Delete" class="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-600 transition-colors"><i class="ti ti-trash text-lg"></i></button>
                    </div>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50 transition-colors group">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-syne">AM</div>
                      <div>
                        <p class="text-sm font-bold text-slate-700">Amara Mbeki</p>
                        <p class="text-xs text-slate-400">amara@design.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-sm text-slate-600 font-medium">UX Designer</p>
                    <p class="text-xs text-slate-400 italic">34 yrs old</p>
                  </td>
                  <td class="px-6 py-4">
                    <span class="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200">Single</span>
                  </td>
                  <td class="px-6 py-4 text-sm text-slate-500">Nov 12, 2025</td>
                  <td class="px-6 py-4 text-right">
                    <div class="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button title="Edit" class="p-2 hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600 transition-colors"><i class="ti ti-edit text-lg"></i></button>
                      <button title="Delete" class="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-600 transition-colors"><i class="ti ti-trash text-lg"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
            <span class="text-xs text-slate-500 font-medium">Showing 1-2 of 1,284 users</span>
            <div class="flex gap-2">
              <button class="px-3 py-1 border border-slate-200 rounded-md bg-white text-xs font-bold hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>Previous</button>
              <button class="px-3 py-1 border border-slate-200 rounded-md bg-white text-xs font-bold hover:bg-slate-50 transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div> 
</div>
    </>
  );
}