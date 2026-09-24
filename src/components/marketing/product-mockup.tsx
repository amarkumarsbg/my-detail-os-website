type MockupKind = "hero" | "jobs" | "portal" | "billing" | "inventory";

export function ProductMockup({ kind = "hero" }: { kind?: MockupKind }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-slate-900/5">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-rose-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-green-400" />
        </div>
        <p className="text-[11px] font-medium text-slate-500">{titleFor(kind)}</p>
        <span className="text-[11px] font-semibold text-slate-400">MY DETAIL OS</span>
      </div>
      <div className="p-4 sm:p-5">{renderBody(kind)}</div>
    </div>
  );
}

function titleFor(kind: MockupKind) {
  switch (kind) {
    case "jobs":
      return "Job Cards";
    case "portal":
      return "Customer Portal";
    case "billing":
      return "Billing & Reports";
    case "inventory":
      return "Inventory";
    default:
      return "Workshop Overview";
  }
}

function renderBody(kind: MockupKind) {
  if (kind === "jobs") {
    return (
      <div className="space-y-3">
        {[
          { id: "JC-1042", car: "Hyundai Creta", status: "In Progress", owner: "A. Sharma" },
          { id: "JC-1041", car: "Toyota Innova", status: "Inspection", owner: "R. Iyer" },
          { id: "JC-1040", car: "Honda City", status: "Ready", owner: "M. Khan" },
        ].map((job) => (
          <div
            key={job.id}
            className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm transition-colors hover:bg-slate-50"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900">{job.car}</p>
              <p className="text-xs text-slate-500">
                {job.id} · {job.owner}
              </p>
            </div>
            <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200">
              {job.status}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "portal") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        <Panel label="Job Status" value="Detailing in progress" meta="Updated 12 min ago" />
        <Panel label="Vehicle" value="MG Hector · MH12 AB 4421" meta="Service history available" />
        <Panel label="Invoice" value="INV-2891" meta="₹4,850 · Pending" />
        <Panel label="Rewards" value="320 points" meta="Membership active" />
      </div>
    );
  }

  if (kind === "billing") {
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <Stat label="Today" value="₹42.5k" />
          <Stat label="Invoices" value="18" />
          <Stat label="Pending" value="₹8.2k" />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <p className="text-xs text-slate-500">Revenue trend</p>
          <div className="mt-3 flex h-20 items-end gap-1.5">
            {[40, 55, 48, 70, 62, 78, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-teal-500 transition-all hover:bg-teal-400"
                style={{ height: `${h}%` }}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === "inventory") {
    return (
      <div className="space-y-3">
        {[
          { name: "Ceramic Compound", stock: "12 units", tone: "ok" },
          { name: "Microfiber Cloths", stock: "Low · 4 packs", tone: "warn" },
          { name: "Interior Cleaner", stock: "28 bottles", tone: "ok" },
          { name: "Wax Sealant", stock: "Reorder soon", tone: "warn" },
        ].map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm transition-colors hover:bg-slate-50"
          >
            <p className="text-sm font-medium text-slate-900">{item.name}</p>
            <p
              className={`text-xs font-medium ${
                item.tone === "warn" ? "text-amber-600" : "text-slate-500"
              }`}
            >
              {item.stock}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <p className="text-xs text-slate-500">Today&apos;s job cards</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <Stat label="Check-in" value="6" />
            <Stat label="In Progress" value="9" />
            <Stat label="Ready" value="4" />
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <p className="text-xs text-slate-500">Recent activity</p>
          <ul className="mt-2 space-y-2 text-xs">
            <li className="rounded-md bg-slate-50 px-2 py-1.5 text-slate-700">JC-1042 moved to In Progress</li>
            <li className="rounded-md bg-slate-50 px-2 py-1.5 text-slate-700">Invoice INV-2890 collected</li>
            <li className="rounded-md bg-slate-50 px-2 py-1.5 text-slate-700">Customer portal update sent</li>
          </ul>
        </div>
      </div>
      <div className="space-y-3">
        <Panel label="Inventory" value="3 low-stock alerts" meta="Parts & consumables" />
        <Panel label="Staff on duty" value="7 active users" meta="Roles & branch access" />
        <Panel label="Customer portal" value="12 open views" meta="Status · invoices · history" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 p-2.5 ring-1 ring-slate-200 transition-colors hover:bg-slate-100">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function Panel({ label, value, meta }: { label: string; value: string; meta: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-colors hover:bg-slate-50">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-[11px] text-slate-400">{meta}</p>
    </div>
  );
}
