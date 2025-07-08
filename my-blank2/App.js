import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SectionList,
  ActivityIndicator,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const CATEGORIES = ['Ficción', 'Historia', 'Tecnología'];


const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks('Fiction'); // Por defecto
  }, []);

const fetchBooks = async (category) => {
  setLoading(true);
  setError(null);
  setSelectedBook(null);

  try {
    const allItems = [];

    // Obtener hasta 12 páginas (máx 480 libros, Google limita maxResults=40)
    for (let i = 0; i < 12; i++) {
      const startIndex = i * 40;
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&startIndex=${startIndex}&maxResults=40`
        // Quitamos langRestrict para que busque en todos los idiomas
      );
      const data = await response.json();
      if (data.items) {
        allItems.push(...data.items);
      }
    }

    if (allItems.length === 0) {
      setBooks([]);
      setError('No se encontraron libros.');
      setLoading(false);
      return;
    }

    // Filtrar libros que tengan descripción y editorial (no filtramos autores aquí)
    const filteredItems = allItems.filter((item) => {
      const info = item.volumeInfo;
      return info.description && info.publisher && info.authors && info.authors.length >= 1;
    });

    // Contar libros por autor
    const authorBookCount = {};

    filteredItems.forEach((item) => {
      item.volumeInfo.authors.forEach((author) => {
        authorBookCount[author] = (authorBookCount[author] || 0) + 1;
      });
    });

    // Filtrar autores con 2 o más libros
    const authorsWithTwoOrMoreBooks = Object.keys(authorBookCount).filter(
      (author) => authorBookCount[author] >= 2
    );

    // Agrupar libros solo de autores con 2+ libros
    const grouped = {};

    filteredItems.forEach((item) => {
      item.volumeInfo.authors.forEach((author) => {
        if (authorsWithTwoOrMoreBooks.includes(author)) {
          if (!grouped[author]) grouped[author] = [];
          grouped[author].push(item);
        }
      });
    });

    // Crear las secciones
    const sections = Object.keys(grouped).map((author) => ({
      title: author,
      data: grouped[author],
    }));

    if (sections.length === 0) {
      setError('No se encontraron autores con 2 o más libros que cumplan los criterios.');
      setBooks([]);
    } else {
      setBooks(sections);
    }
  } catch (err) {
    setError('Hubo un error al cargar los libros.');
  } finally {
    setLoading(false);
  }
};



  const renderItem = ({ item }) => {
    const { title, imageLinks } = item.volumeInfo;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => setSelectedBook(item)}
      >
        <Image
          source={{
            uri: imageLinks?.thumbnail || 'https://via.placeholder.com/100',
          }}
          style={styles.thumbnail}
        />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.author}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={styles.categoryButton}
            onPress={() => fetchBooks(cat)}
          >
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : selectedBook ? (
        <ScrollView style={styles.detail}   contentContainerStyle={{ paddingBottom: 60 }}>
          <Image
            source={{
              uri:
                selectedBook.volumeInfo.imageLinks?.thumbnail ||
                'https://via.placeholder.com/150',
            }}
            style={styles.cover}
          />
          <Text style={styles.detailTitle}>{selectedBook.volumeInfo.title}</Text>
          <Text style={styles.detailText}>
            {selectedBook.volumeInfo.description || 'Sin descripción'}
          </Text>
          <Text style={styles.detailText}>
            Editorial: {selectedBook.volumeInfo.publisher || 'Desconocida'}
          </Text>
          <TouchableOpacity onPress={() => setSelectedBook(null)}>
            <Text style={styles.back}>← Volver</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <SectionList
          sections={books}
          keyExtractor={(item, index) => item.id + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: '#f2f2f2',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#3D5AFE',
    borderRadius: 25,
    elevation: 3,
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginVertical: 6,
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    marginLeft: 15,
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
  },
  thumbnail: {
    width: 60,
    height: 90,
    borderRadius: 6,
  },
  author: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#2c3e50',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 4,
  },
  error: {
    color: '#D32F2F',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: '600',
    fontSize: 16,
  },
  detail: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  cover: {
    width: 200,
    height: 290,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e272e',
    marginBottom: 15,
  },
  detailText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
    marginBottom: 15,
  },
  back: {
    color: '#3D5AFE',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 18,
  },
});


export default App;
