import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';
import type { BeachSummary, BeachData, WeatherData, UserPrefs } from '../types';

interface AppState {
  beaches: BeachSummary[];
  selectedSlug: string;
  homeSpot: string;
  beachData: BeachData | null;
  weatherData: WeatherData | null;
  prefs: UserPrefs;
  loading: boolean;
  error: string | null;
  selectBeach: (slug: string) => void;
  setHomeSpot: (slug: string) => void;
  updatePrefs: (prefs: UserPrefs) => void;
  refresh: () => Promise<void>;
}

const defaultPrefs: UserPrefs = {
  skill: 'intermediate',
  minWave: 1,
  maxWave: 6,
  cold: 'moderate',
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [beaches, setBeaches] = useState<BeachSummary[]>([]);
  const [selectedSlug, setSelectedSlug] = useState('wrightsville');
  const [homeSpot, setHomeSpotState] = useState('wrightsville');
  const [beachData, setBeachData] = useState<BeachData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [prefs, setPrefs] = useState<UserPrefs>(defaultPrefs);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load persisted settings on mount
  useEffect(() => {
    (async () => {
      try {
        const [storedHome, storedPrefs] = await Promise.all([
          AsyncStorage.getItem('homeSpot'),
          AsyncStorage.getItem('surfPrefs'),
        ]);
        if (storedHome) {
          setHomeSpotState(storedHome);
          setSelectedSlug(storedHome);
        }
        if (storedPrefs) setPrefs(JSON.parse(storedPrefs));
      } catch {
        // Ignore storage errors on mount
      }
    })();
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [beachesList, beach, weather] = await Promise.all([
        api.getBeaches(),
        api.getBeach(selectedSlug),
        api.getWeather(selectedSlug),
      ]);
      setBeaches(beachesList);
      setBeachData(beach);
      setWeatherData(weather);
    } catch (e: any) {
      setError(e.message || 'Failed to connect to server');
    } finally {
      setLoading(false);
    }
  }, [selectedSlug]);

  // Refresh when selected beach changes
  useEffect(() => { refresh(); }, [refresh]);

  const selectBeach = (slug: string) => setSelectedSlug(slug);

  const setHomeSpot = async (slug: string) => {
    setHomeSpotState(slug);
    await AsyncStorage.setItem('homeSpot', slug);
  };

  const updatePrefs = async (newPrefs: UserPrefs) => {
    setPrefs(newPrefs);
    await AsyncStorage.setItem('surfPrefs', JSON.stringify(newPrefs));
  };

  return (
    <AppContext.Provider value={{
      beaches, selectedSlug, homeSpot, beachData, weatherData,
      prefs, loading, error, selectBeach, setHomeSpot, updatePrefs, refresh,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
