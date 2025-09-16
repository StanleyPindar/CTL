import { useState, useEffect, useCallback, useMemo } from 'react';
import { optimizedClinicService } from '../services/optimizedClinicService';
import type { FullClinicProfile } from '../types/clinic';
import { useDebounce } from './useDebounce';

export const useOptimizedClinics = () => {
  const [clinics, setClinics] = useState<FullClinicProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClinics = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('useOptimizedClinics: Fetching clinics...');
      
      // Fetch from Supabase via optimized service
      const data = await optimizedClinicService.getAllClinics();
      
      console.log('useOptimizedClinics: Received', data.length, 'clinics');
      setClinics(data);
    } catch (err) {
      console.error('useOptimizedClinics: Error fetching clinics:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch clinics');
      setClinics([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClinics();
  }, [fetchClinics]);

  const retry = useCallback(() => {
    fetchClinics();
  }, [fetchClinics]);

  return { clinics, isLoading, error, retry };
};

const useOptimizedClinic = (id: string) => {
  const [clinic, setClinic] = useState<FullClinicProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClinic = useCallback(async () => {
    if (!id) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await optimizedClinicService.getClinicById(id);
      setClinic(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch clinic');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchClinic();
  }, [fetchClinic]);

  return { clinic, loading, error };
};

export const useClinicSearch = (clinics: FullClinicProfile[], searchTerm: string) => {
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredClinics = useMemo(() => {
    if (!debouncedSearchTerm) return clinics;

    const searchLower = debouncedSearchTerm.toLowerCase();
    
    return clinics.filter(clinic => {
      const name = clinic.overview?.name?.toLowerCase() || '';
      const description = clinic.overview?.description?.toLowerCase() || '';
      const specialties = clinic.services?.specialties?.join(' ').toLowerCase() || '';
      const conditions = clinic.services?.conditions?.join(' ').toLowerCase() || '';
      
      return name.includes(searchLower) ||
             description.includes(searchLower) ||
             specialties.includes(searchLower) ||
             conditions.includes(searchLower);
    });
  }, [clinics, debouncedSearchTerm]);

  return filteredClinics;
};