-- CommandCenter MVP Supabase schema
-- Run this in Supabase SQL Editor.

create extension if not exists "uuid-ossp";

create table if not exists public.clients (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  location_count integer default 0,
  annual_spend numeric default 0,
  risk_level text default 'Medium',
  created_at timestamptz default now()
);

create table if not exists public.user_profiles (
  id uuid primary key default uuid_generate_v4(),
  auth_user_id uuid,
  full_name text not null,
  email text unique not null,
  role text not null default 'client_user',
  client_id uuid references public.clients(id) on delete set null,
  created_at timestamptz default now()
);

create table if not exists public.locations (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.clients(id) on delete cascade,
  name text not null,
  address text,
  city text,
  state text,
  zip text,
  risk_score integer default 0,
  heat_status text default 'Stable',
  created_at timestamptz default now()
);

create table if not exists public.vendors (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  primary_trade text,
  score integer default 80,
  response_time text,
  completion_rate text,
  rework_rate text,
  cost_variance text,
  status text default 'Good',
  created_at timestamptz default now()
);

create table if not exists public.assets (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.clients(id) on delete cascade,
  location_id uuid references public.locations(id) on delete cascade,
  asset_tag text,
  name text not null,
  make text,
  model text,
  age_years integer default 0,
  condition text default 'Good',
  recent_service text,
  last_service_date date,
  current_repair_quote numeric default 0,
  recommendation text generated always as (
    case when age_years >= 14 and current_repair_quote > 8000 then 'Replace' else 'Repair' end
  ) stored,
  created_at timestamptz default now()
);

create table if not exists public.work_orders (
  id uuid primary key default uuid_generate_v4(),
  wo_number text unique not null,
  client_id uuid references public.clients(id) on delete cascade,
  location_id uuid references public.locations(id) on delete set null,
  vendor_id uuid references public.vendors(id) on delete set null,
  trade text,
  priority text default 'P2',
  status text default 'Open',
  owner text,
  description text,
  next_action text,
  estimated_cost numeric default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.proposals (
  id uuid primary key default uuid_generate_v4(),
  proposal_number text unique not null,
  client_id uuid references public.clients(id) on delete cascade,
  work_order_id uuid references public.work_orders(id) on delete set null,
  title text not null,
  amount numeric default 0,
  status text default 'Drafting',
  blocker text,
  margin text,
  created_at timestamptz default now()
);

create table if not exists public.ai_insights (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.clients(id) on delete cascade,
  insight_type text not null,
  title text not null,
  body text not null,
  severity text default 'Medium',
  created_at timestamptz default now()
);

alter table public.clients enable row level security;
alter table public.user_profiles enable row level security;
alter table public.locations enable row level security;
alter table public.vendors enable row level security;
alter table public.assets enable row level security;
alter table public.work_orders enable row level security;
alter table public.proposals enable row level security;
alter table public.ai_insights enable row level security;

-- MVP permissive read policies for demo use. Tighten before live customer data.
create policy "demo read clients" on public.clients for select using (true);
create policy "demo read profiles" on public.user_profiles for select using (true);
create policy "demo read locations" on public.locations for select using (true);
create policy "demo read vendors" on public.vendors for select using (true);
create policy "demo read assets" on public.assets for select using (true);
create policy "demo read work_orders" on public.work_orders for select using (true);
create policy "demo read proposals" on public.proposals for select using (true);
create policy "demo read ai_insights" on public.ai_insights for select using (true);
