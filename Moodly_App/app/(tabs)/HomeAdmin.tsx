import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ProgressChart, LineChart } from 'react-native-chart-kit'; // Assure-toi que tu as bien `LineChart` aussi
import { Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function Dashboard() {
  // Données pour le graphique linéaire de l'humeur
  const data = {
    labels: ['LUN', 'MAR', 'MER', 'JEU', 'VEN'],
    datasets: [
      {
        data: [0.4, 0.6, 0.9, 0.7, 0.5], // Humeur sur la semaine
      },
    ],
  };

  // Configuration des graphiques
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optionnel, par défaut 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optionnel
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Vue d'ensemble</Text>
        <FontAwesome5 name="ellipsis-h" size={24} color="white" />
      </View>

      {/* Section Humeur */}
      <View style={styles.section}>
        <View style={styles.moodContainer}>
          {/* Graphique circulaire pour l'humeur */}
          <ProgressChart
            data={{ data: [0.83] }} // 83% d'humeur positive
            width={150}
            height={150}
            strokeWidth={12}
            radius={50}
            chartConfig={chartConfig}
            hideLegend={true}
          />
          <Text style={styles.moodText}>83%</Text>
          <Text style={styles.moodLabel}>Positive</Text>
        </View>

        {/* Emojis et pourcentages */}
        <View style={styles.emojisContainer}>
          <View style={styles.emojiRow}>
            <Text style={styles.emoji}>😀</Text>
            <Text style={styles.emojiPercentage}>100%</Text>
          </View>
          <View style={styles.emojiRow}>
            <Text style={styles.emoji}>😡</Text>
            <Text style={styles.emojiPercentage}>30%</Text>
          </View>
          <View style={styles.emojiRow}>
            <Text style={styles.emoji}>😔</Text>
            <Text style={styles.emojiPercentage}>50%</Text>
          </View>
          <View style={styles.emojiRow}>
            <Text style={styles.emoji}>😠</Text>
            <Text style={styles.emojiPercentage}>20%</Text>
          </View>
          <View style={styles.emojiRow}>
            <Text style={styles.emoji}>😢</Text>
            <Text style={styles.emojiPercentage}>40%</Text>
          </View>
        </View>
      </View>

      {/* Graphique linéaire de l'humeur sur la semaine */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Humeur en %</Text>
        <LineChart
          data={data}
          width={screenWidth * 0.9}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#3C1D6F',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  moodContainer: {
    alignItems: 'center',
  },
  moodText: {
    fontSize: 28,
    color: 'white',
    position: 'absolute',
    top: 55,
    fontWeight: 'bold',
  },
  moodLabel: {
    color: 'white',
    marginTop: 10,
  },
  emojisContainer: {
    justifyContent: 'space-around',
  },
  emojiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  emoji: {
    fontSize: 24,
    marginRight: 10,
  },
  emojiPercentage: {
    fontSize: 18,
    color: 'white',
  },
  chartContainer: {
    alignItems: 'center',
  },
  chartTitle: {
    color: 'white',
    marginBottom: 10,
  },
});

