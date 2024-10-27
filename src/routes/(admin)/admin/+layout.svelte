<script>
const tables = [
	{ name: "Users", path: "/admin/users", icon: "faUser" },
	{ name: "Conferences", path: "/admin/conferences", icon: "faCalendar" },
	{ name: "Talks", path: "/admin/talks", icon: "faMicrochip" },
	{ name: "Sponsors", path: "/admin/sponsors", icon: "faBuilding" },
	{ name: "Roles", path: "/admin/roles", icon: "faShield" },
];

const { children } = $props();

const icons = {
	faUser: `
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 3h6a1 1 0 010 2H6a1 1 0 010-2H2z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 16a4 4 0 011-4 4 4 0 011 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 011-4 4 4 0 011 4z"></path>
      </svg>
    `,
	faCalendar: `
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M3 21h18m-12-1v-2m0 0h-2m-6-3v-6"></path>
      </svg>
    `,
	faMicrochip: `
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 00-2 2v12a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2z"></path>
      </svg>
    `,
	faBuilding: `
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10"></path>
      </svg>
    `,
	faShield: `
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    `,
};

function getIcon(iconName) {
	return icons[iconName];
}
</script>

<div class="flex h-screen bg-gray-100">
  <!-- Sidebar -->
  <aside class="w-64 bg-gray-800">
    <div class="p-4">
      <h1 class="text-white text-xl font-semibold">Admin Panel</h1>
    </div>
    <nav class="mt-4">
      {#each tables as table}
        <a
          href={table.path}
          class="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
        >
          {@html getIcon(table.icon)}
          {table.name}
        </a>
      {/each}
    </nav>
  </aside>

  <!-- Main content -->
  <main class="flex-1 p-8 overflow-auto">
    {@render children()}
  </main>
</div>
