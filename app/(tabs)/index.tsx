// app/(tabs)/index.tsx
import { View, Text, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../context/AppContext';
import { BeachCard } from '../../components/BeachCard';
import { colors } from '../../constants/theme';

export default function BeachesScreen() {
  const { beaches, selectedSlug, homeSpot, selectBeach, setHomeSpot, refresh, loading, error } = useApp();
  const router = useRouter();

  const handlePress = (slug: string) => {
    selectBeach(slug);
    router.push('/(tabs)/detail');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CheckMySurf</Text>
      <Text style={styles.subtitle}>NC Beach Conditions</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={beaches}
        keyExtractor={(b) => b.slug}
        renderItem={({ item }) => (
          <BeachCard
            beach={item}
            isActive={item.slug === selectedSlug}
            isHome={item.slug === homeSpot}
            onPress={() => handlePress(item.slug)}
            onStar={() => setHomeSpot(item.slug)}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} tintColor={colors.blue} />
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  title: { color: colors.text, fontSize: 28, fontWeight: '300', textAlign: 'center', marginTop: 60, letterSpacing: -0.5 },
  subtitle: { color: colors.blue, fontSize: 14, textAlign: 'center', marginTop: 4, marginBottom: 20 },
  error: { color: colors.red, textAlign: 'center', padding: 16, fontSize: 14 },
  list: { padding: 16 },
});
