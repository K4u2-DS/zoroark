import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: '#181818',
    paddingHorizontal: 30,
    paddingTop: 24,
    paddingBottom: 24,
  },
  scroll: {
    
    backgroundColor: '#181818',
  },
  titulo: {
    color: '#21a020',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  descricao: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 22,
  },
  boxJogo: {
    marginBottom: 32,
  },
  card: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  cardTitulo: {
    backgroundColor: 'rgba(40,40,40,0.7)',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  paragrafo: {
    color: '#eee',
    fontSize: 15,
    marginTop: 10,
    lineHeight: 22,
    marginBottom: 10,
  },
});

export default estilos;