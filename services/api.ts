// services/api.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_API_URL } from '../constants/config';
import type { BeachSummary, BeachData, WeatherData } from '../types';

async function getBaseUrl(): Promise<string> {
  const stored = await AsyncStorage.getItem('apiUrl');
  return stored || DEFAULT_API_URL;
}

async function fetchJson<T>(path: string): Promise<T> {
  const base = await getBaseUrl();
  const res = await fetch(`${base}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export const api = {
  getBeaches: () => fetchJson<BeachSummary[]>('/api/beaches'),
  getBeach: (slug: string) => fetchJson<BeachData>(`/api/beach/${slug}`),
  getWeather: (slug: string) => fetchJson<WeatherData>(`/api/weather/${slug}`),
};
