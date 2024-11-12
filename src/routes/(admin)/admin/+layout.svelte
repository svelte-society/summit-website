<script>
const tables = [
	{ name: "Users", path: "/admin/users", icon: "faUser" },
	{ name: "Conferences", path: "/admin/conferences", icon: "faCalendar" },
	{ name: "Talks", path: "/admin/talks", icon: "faMicrochip" },
	{ name: "Sponsors", path: "/admin/sponsors", icon: "faBuilding" },
	{ name: "Roles", path: "/admin/roles", icon: "faShield" },
];

let { data, children } = $props();
</script>

<div class="flex h-screen bg-gray-100">
  <!-- Sidebar -->
  <aside class="w-64 bg-gray-800">
    <div class="p-4">
      <h1 class="text-white text-xl font-semibold">Admin Panel</h1>
    </div>
    <nav class="mt-4">
      {#each data.tables as table}
        <a
          href="/admin/{table}"
          class="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
        >
          <span class=capitalize>{table}</span>
        </a>
      {/each}
    </nav>
  </aside>

  <!-- Main content -->
  <main class="flex-1 p-8 overflow-auto">
    {@render children()}
  </main>
</div>
