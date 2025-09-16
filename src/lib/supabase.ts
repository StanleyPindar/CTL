import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials:', {
    url: supabaseUrl ? 'Present' : 'Missing',
    key: supabaseAnonKey ? 'Present' : 'Missing'
  });
  console.warn('Supabase will not be available - falling back to static data');
}

// Create client with fallback configuration to prevent module errors
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    },
    realtime: {
      params: {
        eventsPerSecond: 2
      }
    }
  }
);

// Export default for compatibility

// Test connection in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development' && supabase) {
  supabase.from('clinics').select('count', { count: 'exact', head: true })
    .then(({ count, error }) => {
      if (error) {
        console.error('Supabase connection test failed:', error);
      } else {
        console.log('Supabase connected successfully. Clinics count:', count);
      }
    });
}

// Test connection in production with more detailed logging
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && supabase) {
  supabase.from('clinics').select('id, name, active').limit(1)
    .then(({ data, error }) => {
      if (error) {
        console.error('Supabase production connection test failed:', error);
      } else {
        console.log('Supabase production connection successful. Sample clinic:', data?.[0]?.name || 'none');
      }
    });
}